const UsersData = [
  {
    content: "Feeling blessed on this beautiful morning!",
    icon: "blessed.png",
    authorName: "Alice Johnson",
    imageUrl: "/uploads/pic1.jpg",
    author: "60ac802a96126a1f442e3d2b", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Cooked my favorite recipe today!",
    icon: "chef.png",
    authorName: "Michael Anderson",
    imageUrl: "/uploads/pic1.jpg",
    author: "60ac802a96126a1f442e3d2c", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Enjoying the sunset at the beach!",
    icon: "sunset.png",
    authorName: "Sophia Lee",
    imageUrl: "/uploads/pic1.jpg",
    author: "60ac802a96126a1f442e3d2d", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  // Add other posts with the same image path
];

module.exports = UsersData;
