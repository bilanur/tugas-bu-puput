// no1 menengah
// let x = Number(prompt("Masukkan nilai x: "))
// let y = Number(prompt("Masukkan nilai y: "))

// if (x > y) {
//     alert(`Bilangan terbesar adalah ${x}`)
// } else if (y > x) {
//     alert(`Bilangan terbesar adalah ${y}`)
// } else {
//     alert(`Kedua bilangan sama besar`)
// }



// no2
// let a = Number(prompt("Masukkan nilai a: "))
// let b = Number(prompt("Masukkan nilai b: "))
// let c = Number(prompt("Masukkan nilai c: "))

// D = b**2 - 4*a*c

// if (D > 0) {
//     alert(`Persamaan memiliki dua akar real yang berbeda.`)
// } else if (D == 0) {
//     alert(`Persamaan memiliki dua akar real yang sama (kembar).`)
// } else {
//     alert(`Persamaan memiliki dua akar imajiner.`)
// }



// no3
// let UTS = Number(prompt("Masukkan nilai UTS: "));
// let UAS = Number(prompt("Masukkan nilai UAS: "));
// let Tugas = Number(prompt("Masukkan nilai Tugas: "));

// let NA = (UTS * 0.35) + (UAS * 0.45) + (Tugas * 0.20); // Pastikan NA dideklarasikan

// let grade;
// if (NA >= 80 && NA <= 100) { 
//     grade = 'A';
// } else if (NA >= 70 && NA < 80) {
//     grade = 'B';
// } else if (NA >= 50 && NA < 70) {
//     grade = 'C';
// } else if (NA >= 40 && NA < 50) {
//     grade = 'D';
// } else {
//     grade = 'E';
// }

// alert(`Nilai Akhir: ${NA}, Indeks Nilai: ${grade}`);



// no4
// let x = Number(prompt("Masukkan nilai x"));
// let y = Number(prompt("Masukkan nilai y"));
// let z = Number(prompt("Masukkan nilai z"));

// let terbesar; 

// if (x > y && x > z) {
//     terbesar = x;
// } else if (y > x && y > z) {
//     terbesar = y;
// } else {
//     terbesar = z;
// }

// alert(`Bilangan terbesar adalah ${terbesar}`);



// no5
// let x = Number(prompt("Masukkan koordinat x"));
// let y = Number(prompt("Masukkan koordinat y"));

// if (x > 0 && y > 0) {
//     alert(`Titik berada di Kuadran I`);
// } else if (x < 0 && y > 0) {
//     alert(`Titik berada di Kuadran II`);
// } else if (x < 0 && y < 0) {
//     alert(`Titik berada di Kuadran III`);
// } else if (x > 0 && y < 0) {
//     alert(`Titik berada di Kuadran IV`);
// } else {
//     alert(`Titik berada di sumbu x atau sumbu y`);
// }



// no6
const jumlahHariPerBulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const tanggal = parseInt(prompt("Masukkan tanggal (1-31):"));
const bulan = parseInt(prompt("Masukkan bulan (1-12):"));

if (bulan >= 1 && bulan <= 12 && tanggal >= 1 && tanggal <= jumlahHariPerBulan[bulan - 1]) {
    const totalHariSebelum = jumlahHariPerBulan.slice(0, bulan - 1).reduce((acc, hari) => acc + hari, 0);
    const hariKe = totalHariSebelum + tanggal;
    alert(`Hari ke-${hariKe} dari tahun tersebut.`);
} else {
    alert("Input tanggal atau bulan tidak valid.");
}

