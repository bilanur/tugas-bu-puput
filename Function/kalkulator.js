let hasil;
const angka1 = Number(prompt("Masukkan angka pertama: "));
const operasi = prompt("Masukkan operasi yang ingin dilakukan (+, -, *, /): ");
const angka2 = Number(prompt("Masukkan angka kedua: "));

function tambah (angka1,angka2) {
    hasil = angka1 + angka2;
    alert(`${angka1} + ${angka2} = ${hasil}`)
}
function kurang (angka1,angka2) {
    hasil = angka1 - angka2;
    alert(`${angka1} - ${angka2} = ${hasil}`)
}
function kali (angka1,angka2) {
    hasil = angka1 * angka2;
    alert(`${angka1} x ${angka2} = ${hasil}`)
}
function bagi (angka1,angka2) {
    hasil = angka1 / angka2;
    alert(`${angka1} : ${angka2} = ${hasil}`)
}

if (operasi == "+") {
    tambah(angka1,angka2);
} else if (operasi == "-") {
    kurang(angka1,angka2);
} else if (operasi == "*") {
    kali(angka1,angka2);
} else if (operasi == "/") {
    if (angka2 !== 0) {
        bagi(angka1,angka2);
    } else {
        alert("Tidak dapat membagi dengan nol!");
        hasil = null;
    }
} else {
    alert("Operasi tidak valid! Gunakan +, -, *, atau /.");
    hasil = null;
}
