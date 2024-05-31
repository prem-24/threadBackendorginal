
const img = require("./postImgs/img")

const UsersData = [
  {
    content: "Feeling blessed on this beautiful morning!",
    icon: "blessed.png",
    authorName: "Alice Johnson",
    imageUrl: img.pic1,
    author: "60ac802a96126a1f442e3d2b", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Cooked my favorite recipe today!",
    icon: "chef.png",
    imageUrl: img.pic2,
    authorName: "Michael Anderson",
    author: "60ac802a96126a1f442e3d2c", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Enjoying the sunset at the beach!",
    icon: "sunset.png",
    imageUrl: img.pic3,
    authorName: "Sophia Lee",
    author: "60ac802a96126a1f442e3d2d", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Just finished reading an amazing book!",
    icon: "book.png",
    imageUrl: img.pic1,
    authorName: "David Clark",
    author: "60ac802a96126a1f442e3d2e", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Exploring new hiking trails!",
    icon: "hiking.png",
    imageUrl: img.pic1,
    authorName: "Emily Roberts",
    author: "60ac802a96126a1f442e3d2f", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Just adopted a new pet!",
    icon: "pet.png",
    imageUrl: img.pic1,
    authorName: "William Taylor",
    author: "60ac802a96126a1f442e3d30", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Attended an inspiring workshop!",
    icon: "workshop.png",
    imageUrl: img.pic1,
    authorName: "Olivia Martinez",
    author: "60ac802a96126a1f442e3d31", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Had a great workout session!",
    icon: "workout.png",
    imageUrl: img.pic1,
    authorName: "Daniel Brown",
    author: "60ac802a96126a1f442e3d32", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Celebrating my birthday with friends!",
    icon: "birthday.png",
    imageUrl: img.pic1,
    imageUrl: "birthday_celebration.jpg",
    authorName: "Emma Wilson",
    author: "60ac802a96126a1f442e3d33", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
  {
    content: "Learning a new language!",
    icon: "language.png",
    imageUrl: img.pic1,
    authorName: "James White",
    author: "60ac802a96126a1f442e3d34", // Valid ObjectId reference to a user
    createdAt: new Date(),
    updatedAt: new Date(),
    likes: [],
    comments: [],
  },
];

module.exports = UsersData;
