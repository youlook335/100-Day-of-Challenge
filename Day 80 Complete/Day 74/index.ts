import mongoose from "mongoose";

// ✅ Connect to DB (database name hona chahiye — not collection)
mongoose.connect("mongodb://localhost:27017/Data_")
  .then(() => console.log("✅ Mongo Connected"))
  .catch((err) => console.error("❌ Connection Error", err));

// ✅ Schema with strict: false (to accept all fields from Compass too)
const studn_sch = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  isStudent: Boolean,
  isEnrolled: Boolean,
}, { strict: false });

// ✅ Model — using actual collection name "Data_"
const Student = mongoose.model("Student", studn_sch, "student");

// ✅ New Student Data
const newStudent = new Student({
  name: "Code with",
  age: 16,
  email: "tanveer@example.com",
  isStudent: true,
  isEnrolled: false,
  fatherName: "Mr. Awan",   // ✅ Even extra fields allowed now
  fees: 5000,
  charges: 200
});

// ✅ Save + Show All
newStudent.save()
  .then(() => {
    console.log("✅ New student saved");

    // 🔍 Show all students (including Compass added ones)
    return Student.find();
  })
  .then(allStudents => {
    console.log("📦 All Students from DB:");

    // ✅ Print ALL fields from MongoDB documents
    console.table(allStudents.map(s => s.toObject()));

    return mongoose.disconnect();
  })
  .catch((err) => console.error("❌ Error", err));
