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
  