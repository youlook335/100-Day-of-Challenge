// Time Complexity:
// pop(): O(1) — Fastest, last element remove کرنے کے لیے۔

// shift(): O(n) — Start سے element remove کرنے کے لیے باقی elements کو shift کرنا پڑتا ہے۔

// splice(): O(n) — Specific index پر element remove کرنے کے لیے باقی elements کو shift کرنا پڑتا ہے۔

// delete: O(1) — Specific element remove ہوتا ہے لیکن array کی length نہیں بدلتی۔

// del a last elemnt

let del_pop = [210, 31, 21, 432, 4654, 75, 431];

del_pop.pop();

// console.log(del_pop);

// del elemnt in last

let del_shift = [12,135, 353, 64, 342 , 422, 120];

del_shift.shift()

console.log(del_shift);
