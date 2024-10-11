// function hitungLuasSegitiga() {
// let alas = Number(prompt("Masukkan alas segitiga: "));
// let tinggi = Number(prompt("Masukkan tinggi segitiga: "));

// let luas = 1/2 * alas * tinggi;
//     return luas;
//   }
//   let luasSegitiga = hitungLuasSegitiga();
//   alert("Luas segitiga adalah: " + luasSegitiga);



// function hitungKelilingLingkaran() {
// const jariJari = Number(prompt("Masukkan nilai jari-jari lingkaran:"));
// const keliling = 2 * Math.PI * jariJari;
//      alert("Keliling lingkaran adalah: " + keliling);
// }

// hitungKelilingLingkaran();



function cekBilanganPrima() {
  const bilangan = parseInt(prompt("Masukkan sebuah bilangan bulat:"));

  if (isNaN(bilangan)) {
      alert("Masukkan bilangan bulat yang valid.");
      return;
  }

  if (bilangan <= 1) {
      alert("Bilangan bukan prima.");
      return;
  }

  for (let i = 2; i <= Math.sqrt(bilangan); i++) {
      if (bilangan % i === 0) {
          alert("Bilangan bukan prima.");
          return;
      }
  }

  alert("Bilangan adalah prima.");
}

cekBilanganPrima();
