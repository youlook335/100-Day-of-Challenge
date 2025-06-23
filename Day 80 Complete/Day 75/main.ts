import { connectDB } from "./db"
import { User } from "./models/user.model";

const start = async () => {
    await connectDB();

    // Create Data
    await User.insertMany([
        {
            name: "Ali",
            age: 20, email: "ali@example.com",
            isStudent: true
        },
        {
            name: "Sara",
            age: 22,
            email: "sara@example.com",
            isStudent: true
        },
        {
            name: "John",
            age: 25,
            email: "john@example.com",
            isStudent: false
        },
    ]);


    // await User.save();
    // console.log("User Created");

    // Read Data
    const users = await User.find();
    console.log("Data Read");

    // Update Data

    await User.updateMany(
        { name : "Ali" },
        {
            $set: {
                age: 121
            }
        }
    )

    // Delete Data
    await User.deleteOne({ name: "John" });
    console.log("❌ User Deleted");

    // Read Data
    const updatedUsers = await User.find();
    console.log("Data Update in One");

    // Show Data

    console.table(updatedUsers.map(u => ({
        Name: u.name,
        Age: u.age,
        Email: u.email,
        Student: u.isStudent,
    })));

    process.exit();
};

start();
