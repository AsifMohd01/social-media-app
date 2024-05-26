import pro from './assets/pro.jpg'

export const userData = [
  {
    id:1,
    firstName: "Asif",
    lastName: "choudhary",
    location: "Bangalore",
    occupation: "student",
    viewedProfile: 123,
    impressions: 456,
    friends: [
      { id: 1, name: " ahan ch" },
      { id: 2, name: " Akram ch" },
    ],
  },

  {
    id:2,
    firstName: "Adam",
    lastName: "Robinson",
    location: "Mangalore",
    occupation: "teacher",
    viewedProfile: 120,
    impressions: 456,
    friends: [
      { id: 1, name: "Jhon" },
      { id: 2, name: "Batman" },
    ],
  },

  {
    id:3,
    firstName: "Midoriya",
    lastName: "MHA",
    location: "japan",
    occupation: "student",
    viewedProfile: 4,
    impressions: 456,
    friends: [
      { id: 1, name: " ahan ch" },
      { id: 2, name: " Akram ch" },
    ],
  },

  {
    id:4,
    firstName: "Naruto",
    lastName: "Uzumaki",
    location: "Hidden leaf",
    occupation: "Hokage",
    viewedProfile: 126,
    impressions: 345,
    friends: [
      { id: 1, name: "Hinata Hyuga" },
      { id: 2, name: "Sauske Uchiha" },
    ]
  },

  {
    firstName: "Light",
    lastName: "Yagami",
    location: "Bangalore",
    occupation: "student",
    viewedProfile: 123,
    impressions: 456,
    friends: [
      { id: 1, name: " ahan ch" },
      { id: 2, name: " Akram ch" },
    ]
  },
 
];

export const getPosts = [
    {
        userId:1,
        firstName: "Asif",
        lastName: "choudhary",
        location: "Bangalore",
        occupation: "student",
      description: "This is a description for post 1",
      picturePath: pro,
      userPicturePath: { pro },
      likes: 10,
      comments: ["Great post!", "Awesome!"],
    },
    {
        userId:2,
        firstName: "Adam",
        lastName: "Robinson",
        location: "Mangalore",
        occupation: "teacher",
      description: "This is a description for post 1",
      picturePath: pro,
      userPicturePath: pro,
      likes: 11,
      comments: ["Great post!", "Awesome!"],
    },
    {
        userId:3,
    firstName: "Midoriya",
    lastName: "MHA",
    location: "japan",
    occupation: "student",
      description: "This is a description for post 1",
      picturePath: pro,
      userPicturePath: pro,
      likes: 11,
      comments: ["Great post!", "Awesome!"],
    },
  ];
