# Class definition
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# Creating an object
stairway = Song([
    "There's a lady who's sure",
    "all that glitters is gold",
    "and shes buying a stairway to heaven"
])

# Printing song lyrics
stairway.sing_me_a_song()
