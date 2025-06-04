console.log("This is a Hashmap Programming");
const users = [
  {
    id: 1,
    name: "Ali Raza",
    password: "ali123",
    email: "ali@example.com",
    age: 22,
    qualification: "BSc",
    address: "Lahore, Pakistan",
    phone: "03001234567"
  },
  {
    id: 2,
    name: "Tanveer Ahmed",
    password: "tanveer456",
    email: "tanveer@example.com",
    age: 20,
    qualification: "ICS",
    address: "Karachi, Pakistan",
    phone: "03111234567"
  },
  {
    id: 3,
    name: "Sara Khan",
    password: "sara789",
    email: "sara@example.com",
    age: 23,
    qualification: "BSCS",
    address: "Islamabad, Pakistan",
    phone: "03211234567"
  },
  {
    id: 4,
    name: "Bilal Hussain",
    password: "bilal000",
    email: "bilal@example.com",
    age: 25,
    qualification: "MSc",
    address: "Multan, Pakistan",
    phone: "03331234567"
  },
  {
    id: 5,
    name: "Ayesha Noor",
    password: "ayesha111",
    email: "ayesha@example.com",
    age: 21,
    qualification: "BBA",
    address: "Faisalabad, Pakistan",
    phone: "03451234567"
  },
  {
    id: 6,
    name: "Usman Tariq",
    password: "usman222",
    email: "usman@example.com",
    age: 24,
    qualification: "MBA",
    address: "Rawalpindi, Pakistan",
    phone: "03011235555"
  },
  {
    id: 7,
    name: "Hina Shah",
    password: "hina333",
    email: "hina@example.com",
    age: 22,
    qualification: "BCom",
    address: "Sialkot, Pakistan",
    phone: "03111235555"
  },
  {
    id: 8,
    name: "Imran Malik",
    password: "imran444",
    email: "imran@example.com",
    age: 26,
    qualification: "BS IT",
    address: "Peshawar, Pakistan",
    phone: "03211235555"
  },
  {
    id: 9,
    name: "Fatima Javed",
    password: "fatima555",
    email: "fatima@example.com",
    age: 20,
    qualification: "ICS",
    address: "Quetta, Pakistan",
    phone: "03311235555"
  },
  {
    id: 10,
    name: "Zain Ali",
    password: "zain666",
    email: "zain@example.com",
    age: 27,
    qualification: "BSSE",
    address: "Bahawalpur, Pakistan",
    phone: "03411235555"
  },
  {
    id: 11,
    name: "Rabia Khan",
    password: "rabia777",
    email: "rabia@example.com",
    age: 21,
    qualification: "BSc",
    address: "Sargodha, Pakistan",
    phone: "03011237777"
  },
  {
    id: 12,
    name: "Fahad Aziz",
    password: "fahad888",
    email: "fahad@example.com",
    age: 23,
    qualification: "MIT",
    address: "Hyderabad, Pakistan",
    phone: "03111237777"
  },
  {
    id: 13,
    name: "Nida Saleem",
    password: "nida999",
    email: "nida@example.com",
    age: 22,
    qualification: "B.Ed",
    address: "Gujranwala, Pakistan",
    phone: "03211237777"
  },
  {
    id: 14,
    name: "Hamza Qureshi",
    password: "hamza000",
    email: "hamza@example.com",
    age: 24,
    qualification: "MSCS",
    address: "Sahiwal, Pakistan",
    phone: "03311237777"
  },
  {
    id: 15,
    name: "Mehwish Iqbal",
    password: "mehwish111",
    email: "mehwish@example.com",
    age: 25,
    qualification: "MA",
    address: "Rahim Yar Khan, Pakistan",
    phone: "03411237777"
  }
];


const userMap = new Map();
users.forEach(user => {
    userMap.set(user.id, user)
});
console.log("Users Data :", userMap.get(12));




// const userMap = new Map();
// users.forEach(user => {
//   userMap.set(user.id, user);
// });

// console.log("User:", userMap.get(1));