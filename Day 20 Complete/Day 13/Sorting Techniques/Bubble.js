// Buuble Sort asa ha ka hmara pass ak array hai is ma bhut sara number hai ya kasia pta chla ga ka kon sa array bara ha ya shota is liya buble sort lgya ga is sa jo number hmari sahi position pa ata jaya ga wo print hota jaya ga sahi sahi
// یہ ascending order میں ہے (چھوٹے سے بڑے کی طرف) ✅
// اور duplicate 0 بھی شامل ہے
console.log("This is a Buuble Sorting Algoritham");

let bu_arra = [12, 10, 45, 2, 7, 9, 14, 174, 560, 780, 85, 150, 20, 0, 4, 0, 11,];
let n = bu_arra.length;
for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
        if (bu_arra[j] > bu_arra[j + 1]) {
            let temp = bu_arra[j];
            bu_arra[j] = bu_arra[j + 1];
            bu_arra[j + 1] = temp
        }
    }
}
// console.log(bu_arra);





let new_arr = [20, 45, 10, 1, 2, 23, 4, 5, 9, 11, 19, 22];
let ln = new_arr.length;

for (let i = 0; i < ln - 1; i++) {
    for (let j = 0; j < ln - 1; j++) {
        if (new_arr[j] > new_arr[j + 1]) {
            let tem = new_arr[j];
            new_arr[j] = new_arr[j + 1];
            new_arr[j + 1] = tem
        }
    }

}
// console.log(new_arr);

// https://chatgpt.com/c/682c3755-8a88-8011-9da8-075b201760f6

// ya buuble sort hai is ma kuch asa ha ka jo bari value ha phela ois sa start hoga or chotti par ruk h=jaya ga
let arr = [12, 121, 1, 2, 3, 4, 5, 6, 0, 0, 1332, 7, 8, 9, 99];
let len = arr.length;
for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1; j++) {
        if (arr[j] < arr[j + 1]) {
            let te = arr[j];
            arr[j] = arr[j + 1]
            arr[j + 1] = te
        }
    }
}
console.log(arr);
