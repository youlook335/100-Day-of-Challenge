1. Ya Method Update krna ka hai ka kon kon sa istamal krna hai

| Method                | Kaam                                    |
| --------------------- | --------------------------------------- |
| `updateOne()`         | Ek record update karta hai              |
| `updateMany()`        | Multiple records update karta hai       |
| `findOneAndUpdate()`  | Dhoondhta bhi hai, update bhi karta hai |
| `findByIdAndUpdate()` | ID se update karta hai                  |

2. Ya Method Create krna ka kis trika sa create krta hai 

| Kaam           | Method                   | Kis ke liye?               |
| -------------- | ------------------------ | -------------------------- |
| Ek data create | `new User({...}).save()` | Sirf **1 user**            |
| Sab create     | `User.insertMany([...])` | Ek sath **multiple users** |


| Method                   | Kaam                                          |
| ------------------------ | --------------------------------------------- |
| `new User({...}).save()` | Ek document create karta hai (instance-based) |
| `User.create({...})`     | Ek ya multiple documents create karta hai     |
| `User.insertMany([...])` | Ek sath multiple documents insert karta hai   |

3. Ya Method Save krna ka hai is  trika sa Save hota hai 

| Method          | Syntax                                       | Kaam                                           |
| --------------- | -------------------------------------------- | ---------------------------------------------- |
| `.save()`       | `const user = new User({...}); user.save();` | Ek user instance banta hai, phir save hota hai |
| `.create()`     | `User.create({...});`                        | Direct ek ya multiple users insert karta hai   |
| `.insertMany()` | `User.insertMany([{...}, {...}]);`           | Ek sath bohot saare records insert karta hai   |


4. Ya Method Read krna ka hai is trika sa Save read or fetch hota hai 

| Method        | Syntax                              | Kaam                              |
| ------------- | ----------------------------------- | --------------------------------- |
| `.find()`     | `User.find()`                       | Sare users fetch karta hai        |
| `.findOne()`  | `User.findOne({ name: "Tanveer" })` | Sirf pehla match laata hai        |
| `.findById()` | `User.findById("64e3...abc")`       | ID ke zariye user fetch karta hai |


4. Ya Method Del krna ka hai is trika sa del hota hai 

| Method                 | Syntax                                 | Kaam                                                      |
| ---------------------- | -------------------------------------- | --------------------------------------------------------- |
| `.deleteOne()`         | `User.deleteOne({ name: "Tanveer" })`  | Pehla match hone wala user delete karega                  |
| `.deleteMany()`        | `User.deleteMany({ isStudent: true })` | Jitne match hon sab delete karega                         |
| `.findByIdAndDelete()` | `User.findByIdAndDelete("64e3...abc")` | ID ke zariye ek user delete karega                        |
| `.findOneAndDelete()`  | `User.findOneAndDelete({ age: 16 })`   | Pehla match hone wala delete karega aur return bhi karega |
