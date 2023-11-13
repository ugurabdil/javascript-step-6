//ASAL SAYI BULMA UYGULAMASI

let sayı = Number(prompt("lütfen bir sayı giriniz"));
let sonuc = true;
for (let i = 2; i <= Math.floor(sayı / 2); i++) {
  if (sayı % i == 0) {
    sonuc = false;
    break;
  }
  } if(sonuc){
    alert(sayı+" sayısı asaldır");
  }else{
    alert(sayı+" sayısı asal değildir.");
  }
