// 1️⃣ Math.round() ✅
// 2️⃣ Math.ceil() ✅
// 3️⃣ Math.floor() ✅
// 4️⃣ Math.trunc() ✅
// 5️⃣ Math.pow() ✅
// 6️⃣ Math.sqrt() ✅
// 7️⃣ Math.cbrt()
// 8️⃣ Math.abs()
// 9️⃣ Math.max()
// 🔟 Math.min()
// 11 Math.random()
// 12 toFixed()


// Math.round()
// ya khta ha ka agr 2.4 sa nicha number ha to ma 2 print karao ga agr 2.5 sa opar ha to 3 print karao ga

// console.log("2.4 =",Math.round(2.4));
// console.log("2.6 =",Math.round(2.6));

// Math.ceil()
// ya kheta ha ka agr 3.1 bhi value ha to ma 4 print karao ga
// console.log("3.1 =",Math.ceil(3.1));
// console.log("1.2 =",Math.ceil(1.2));
// console.log("2 =",Math.ceil(2));

// Math.floor()
// agr ap 4.5 likh rha ho to ap ka answer 4 hoga

// console.log("4.9 =",Math.floor(4.9));
// console.log("1.5 =",Math.floor(1.5));
// console.log("3.0 =",Math.floor(3.0));

// Math.trunc
// ya na hi number opar la jata na hi nicha ya sirf point hata data hai
// console.log("3.2 =",Math.trunc(3.2));
// console.log("10.1 =",Math.trunc(10.1));

// Math.pow()

// ya hmara cponent ki trah kaam karta hai jaisa 3 ha is ki power kiya hogi 2
// is ma ak example ya hai Math.pow(base, exponent)
// console.log(Math.pow(6 , 2));
// console.log(Math.pow(2,3));

// Math.sqrt()
// ya kisi bhi number ka square root nikal ka data hai
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(64));
// console.log(Math.sqrt(100));


// Math.cbrt()

// ya ksii bhi Number ka Cube Root nikal ka dati hai 
// console.log(Math.cbrt(125));
// console.log(Math.cbrt(60));


// Math.abs()

// ya kisi Bhi Value ko - sa haat kar + kar data hai sirf yahi karta hai ya 

// console.log(Math.abs(-52));
// console.log(Math.abs(-12));
// console.log(Math.abs(-12.13));

// Math.max()

// agr ap ka pass bhut sara number ha to ya is ma sa sab sa bara number ko la kar aya ga
// console.log(Math.max(21 , 31, 64, 87, 54,90));
// console.log(Math.max(21 , 31, -64, 87, 54,-90));

// Math.min()
// ya is ma sa sab sa chota number nikal ka data hai 
// console.log(Math.min(42,53,321,-332));
// console.log(Math.min(312,123,5234,5423,23,112));

// Math.random()

// ya ap ko koi bhi random num dati hai 0 or 1 ka drmiyan ma
// agr ap is ko multiply karta ho to number is sa multiplay ya kuch or jais a- /use karta ho rendom num use hoga or is ka answer a jaya ga
// console.log(Math.random());
// console.log(Math.random() * 8);
// console.log(Math.random() / 10);
// console.log(Math.random() -90);
// console.log(Math.random()+1);

// Create a OTP Code in Math.rendom
console.log(Math.trunc(Math.rendom()* 9000)+1000);

