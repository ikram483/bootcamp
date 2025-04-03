const users = { user1: 18273, user2: 92833, user3: 90315 };

const userEntries = Object.entries(users);

console.log(userEntries);

const updatedUsers = userEntries.map(([key, value]) => [key, value * 2]);

console.log(updatedUsers);
