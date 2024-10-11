let angka1 = Number(prompt("Masukkan angka pertama: "));
let operasi = prompt("Masukkan operasi yang ingin dilakukan (+, -, *, /): ");
let angka2 = Number(prompt("Masukkan angka kedua: "));

let hasil;

if (operasi == "+") {
    hasil = angka1 + angka2;
    alert(`${angka1} + ${angka2} = ${hasil}`);
} else if (operasi == "-") {
    hasil = angka1 - angka2;
    alert(`${angka1} - ${angka2} = ${hasil}`);
} else if (operasi == "*") {
    hasil = angka1 * angka2;
    alert(`${angka1} x ${angka2} = ${hasil}`);
} else if (operasi == "/") {
    if (angka2 !== 0) {
        hasil = angka1 / angka2;
        alert(`${angka1} : ${angka2} = ${hasil}`);
    } else {
        alert("Tidak dapat membagi dengan nol!");
        hasil = null;
    }
} else {
    alert("Operasi tidak valid! Gunakan +, -, *, atau /.");
    hasil = null;
}
