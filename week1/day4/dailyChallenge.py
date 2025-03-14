class Pagination:
    def __init__(self, items=None, pageSize=10):
        """Initialize pagination with items and page size."""
        self.items = items if items is not None else []
        self.pageSize = int(pageSize)  # Convert to int in case of float
        self.totalPages = max(1, (len(self.items) + self.pageSize - 1) // self.pageSize)
        self.currentPage = 1  # Pages start at 1

    def getVisibleItems(self):
        """Return the list of items visible on the current page."""
        start_index = (self.currentPage - 1) * self.pageSize
        end_index = start_index + self.pageSize
        return self.items[start_index:end_index]

    def nextPage(self):
        """Move to the next page if possible."""
        if self.currentPage < self.totalPages:
            self.currentPage += 1
        return self  # Allows chaining

    def prevPage(self):
        """Move to the previous page if possible."""
        if self.currentPage > 1:
            self.currentPage -= 1
        return self  # Allows chaining

    def firstPage(self):
        """Move to the first page."""
        self.currentPage = 1
        return self  # Allows chaining

    def lastPage(self):
        """Move to the last page."""
        self.currentPage = self.totalPages
        return self  # Allows chaining

    def goToPage(self, pageNum):
        """Go to a specific page with validation."""
        pageNum = int(pageNum)  # Convert to int in case of float
        if pageNum < 1:
            self.currentPage = 1
        elif pageNum > self.totalPages:
            self.currentPage = self.totalPages
        else:
            self.currentPage = pageNum
        return self  # Allows chaining

# 📝 Example Usage
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 4)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]

p.goToPage(2)
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.goToPage(10)  # Exceeds total pages → Should go to last page
print(p.getVisibleItems())  # ["y", "z"]

p.goToPage(0)  # Invalid → Should go to first page
print(p.getVisibleItems())  # ["a", "b", "c", "d"]
