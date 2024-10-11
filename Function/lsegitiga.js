function hitungLuasSegitiga() {
let alas = Number(prompt("Masukkan alas segitiga: "));
let tinggi = Number(prompt("Masukkan tinggi segitiga: "));

let luas = 1/2 * alas * tinggi;
    return luas;
  }
  let luasSegitiga = hitungLuasSegitiga();
  alert("Luas segitiga adalah: " + luasSegitiga);

