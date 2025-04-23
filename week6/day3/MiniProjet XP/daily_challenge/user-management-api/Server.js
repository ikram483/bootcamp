const express = require("express")
const bcrypt = require("bcrypt")
const fs = require("fs").promises
const path = require("path")
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())
app.use(express.static("public"))

// File path for users.json
const usersFilePath = path.join(__dirname, "users.json")

// Initialize users.json if it doesn't exist
async function initializeUsersFile() {
  try {
    await fs.access(usersFilePath)
  } catch (error) {
    // File doesn't exist, create it with an empty array
    await fs.writeFile(usersFilePath, JSON.stringify([], null, 2))
    console.log("Created users.json file")
  }
}

// Read users from file
async function readUsers() {
  try {
    const data = await fs.readFile(usersFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Error reading users file:", error)
    return []
  }
}

// Write users to file
async function writeUsers(users) {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2))
  } catch (error) {
    console.error("Error writing to users file:", error)
    throw new Error("Failed to write to users file")
  }
}

// Initialize the app
initializeUsersFile()

// Routes
app.post("/register", async (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body

    // Validate input
    if (!firstName || !lastName || !email || !username || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    // Check if username already exists
    const users = await readUsers()
    if (users.some((user) => user.username === username)) {
      return res.status(400).json({ message: "Username already exists" })
    }

    // Check if email already exists
    if (users.some((user) => user.email === email)) {
      return res.status(400).json({ message: "Email already exists" })
    }

    // Hash password
    const saltRounds = 10
    const hashedPassword = await bcrypt.hash(password, saltRounds)

    // Create new user
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1,
      firstName,
      lastName,
      email,
      username,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    }

    // Add user to array and save to file
    users.push(newUser)
    await writeUsers(users)

    res.status(201).json({ message: "Hello Your account is now created!" })
  } catch (error) {
    console.error("Registration error:", error)
    res.status(500).json({ message: "Server error during registration" })
  }
})

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body

    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" })
    }

    // Find user
    const users = await readUsers()
    const user = users.find((user) => user.username === username)

    if (!user) {
      return res.status(401).json({ message: "Username is not registered" })
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" })
    }

    res.status(200).json({ message: `Hi ${username} welcome back again!` })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ message: "Server error during login" })
  }
})

app.get("/users", async (req, res) => {
  try {
    const users = await readUsers()
    // Remove password from response
    const safeUsers = users.map(({ password, ...user }) => user)
    res.status(200).json(safeUsers)
  } catch (error) {
    console.error("Error fetching users:", error)
    res.status(500).json({ message: "Server error fetching users" })
  }
})

app.get("/users/:id", async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.id)
    const users = await readUsers()
    const user = users.find((user) => user.id === userId)

    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Remove password from response
    const { password, ...safeUser } = user
    res.status(200).json(safeUser)
  } catch (error) {
    console.error("Error fetching user:", error)
    res.status(500).json({ message: "Server error fetching user" })
  }
})

app.put("/users/:id", async (req, res) => {
  try {
    const userId = Number.parseInt(req.params.id)
    const updateData = req.body

    // Don't allow updating the ID
    if (updateData.id) {
      delete updateData.id
    }

    const users = await readUsers()
    const userIndex = users.findIndex((user) => user.id === userId)

    if (userIndex === -1) {
      return res.status(404).json({ message: "User not found" })
    }

    // If updating password, hash it
    if (updateData.password) {
      const saltRounds = 10
      updateData.password = await bcrypt.hash(updateData.password, saltRounds)
    }

    // Update user
    users[userIndex] = { ...users[userIndex], ...updateData }
    await writeUsers(users)

    // Remove password from response
    const { password, ...safeUser } = users[userIndex]
    res.status(200).json(safeUser)
  } catch (error) {
    console.error("Error updating user:", error)
    res.status(500).json({ message: "Server error updating user" })
  }
})

// Serve HTML files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"))
})

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "register.html"))
})

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"))
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
