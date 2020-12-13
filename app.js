let sayiArray = [5, 34, 56, 45, 33, 2, -49, 90, 29, -1];

let enBuyuk = Math.max.apply(Math, sayiArray);
let enKucuk = Math.min.apply(Math, sayiArray);
console.log("enbüyüksayı :" + enBuyuk);
console.log("enküçüksayı :" + enKucuk);

for (i = 0; i < sayiArray.length; i++) {
  let koku = Math.sqrt(sayiArray[i]);
  console.log([i + 1] + ". sayı kare kökü  " + koku);
}

for (i = 0; i < sayiArray.length; i++) {
  let ussu = Math.pow(sayiArray[i], 2);
  console.log([i + 1] + ". sayı karesi " + ussu);
}

let topla = (a, b) => a + b;
let toplam = sayiArray.reduce(topla);
console.log("toplam :" + toplam);
console.log("ortalama değer : " + toplam / (sayiArray.length ));
