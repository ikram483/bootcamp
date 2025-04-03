// 1. Define the Video class
class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    // 2. Define the watch method
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }
  
  // 3. Create two instances and call watch()
  const video1 = new Video("Learn JavaScript in 10 minutes", "Ikram", 600);
  video1.watch();
  
  const video2 = new Video("Funny Cat Compilation", "Mina", 300);
  video2.watch();
  
  // 4. Bonus - Store data for 5 videos in an array
  const videoData = [
    { title: "CSS Animations", uploader: "Ali", time: 180 },
    { title: "HTML Basics", uploader: "Sami", time: 240 },
    { title: "React Crash Course", uploader: "Lina", time: 1200 },
    { title: "Python Intro", uploader: "Zara", time: 900 },
    { title: "Vue.js Beginner Guide", uploader: "Nabil", time: 850 }
  ];
  
  // 5. Bonus - Loop through the array and instantiate Video objects
  videoData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    video.watch();
  });
  