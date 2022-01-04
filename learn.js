// membuat variabel
let myNumber = 16;
let myString = "Hello"
let myBoolean = true
const phi = 3.14
// menampilkan informasi ke console
console.log(myNumber)
console.log(myString)
console.log(myBoolean)
console.log(phi)
// menampilkan informasi dalam bentuk alert pada window
window.alert("Angka favorit saya adalah : " + myNumber)
window.alert('Angka favorit saya adalah : ' + myNumber)
window.alert(`Angka favorit saya adalah : ${myNumber}`)

let x = 8;
let y = 4;
console.log(x, y); // menampilkan 8, 4
console.log('x + y =', x + y); // menampilkan 12
console.log('x - y =', x - y); // menampilkan 4
console.log('x * y =', x * y); // menampilkan 32
console.log('x / y =', x / y); // menampilkan 2
console.log('x % y =', x % y); // menampilkan 0
console.log('x++ =', x++); // menampilkan 8
console.log('++x =', ++x); // menampilkan 10
console.log('x-- =', x--); // menampilkan 10
console.log('--x =', --x); // menampilkan 8

let a = 8;
let b = 4;
console.log(a, b); // menampilkan 8, 4
console.log('a > b =', a > b); // menampilkan true
console.log('a < b =', a < b); // menampilkan false
console.log('a >= b =', a >= b); // menampilkan true
console.log('a <= b =', a <= b); // menampilkan false
console.log('a == b =', a == b); // menampilkan false
console.log('a != b =', a != b); // menampilkan true
console.log('a === b =', a === b); // menampilkan false
console.log('a !== b =', a !== b); // menampilkan false

console.log('true && true =', true && true); // menampilkan true
console.log('true && false =', true && false); // menampilkan false
console.log('false && true =', false && true); // menampilkan false
console.log('false && false =', false && false); // menampilkan false
console.log('true || true =', true || true); // menampilkan true
console.log('true || false =', true || false); // menampilkan true 
console.log('false || true =', false || true); // menampilkan true 
console.log('false || false =', false || false); // menampilkan false
console.log('!true =', !true); // menampilkan false
console.log('!false =', !false); // menampilkan true

function luasPersegi(sisi){
    let luasPersegi = sisi * sisi;
    return luasPersegi;
}
console.log('Luas Persegi = ', luasPersegi(8)); // Luas Persegi = 64

function luasSegitiga(alas,tinggi){
    let luasSegitiga = 0.5 * alas * tinggi;
    return luasSegitiga;
}
console.log('Luas Segitiga = ', luasSegitiga(6,8)); // Luas Segitiga = 24

function volumeBalok(panjang,lebar,t){
    let volumeBalok = panjang * lebar * t;
    return volumeBalok;
}
console.log('Volume Balok = ', volumeBalok(5,7,9)); // Volume Balok = 315

var buah = ["durian", "jambu", "alpukat", "manggis"];
console.log(buah[0]); // menampilkan durian
console.log(buah[1]); // menampilkan jambu
console.log(buah[2]); // menampilkan alpukat
console.log(buah[3]); // menampilkan manggis
buah[1] = "anggur"; // mengganti Jambu menjadi Anggur
console.log(buah); // mengecek perubahan
buah.push("mangga"); // menambah mangga di akhir Array
console.log(buah); // mengecek perubahan
buah.pop("mangga"); // melihat dan menghapus item dari Array
console.log(buah); // mengecek perubahan
console.log('Panjang Array = ', buah.length); // menghitung panjang Array
buah.unshift("naga"); // menambah naga di awal Array
console.log(buah); // mengecek perubahan
buah.shift(); // menampilkan dan menghapus item awal dari array
console.log(buah); // mengecek perubahan
console.log(buah.sort()); // mengurutkan Array
console.log(buah.reverse()); // membalikkan urutan Array

let profile = {
    namaDepan : "Hilmy",
    namaBelakang : "Wirawan",
    alamat : "Rengat",
    Nohp : "081379019074",
    status : "Mahasiswa",
    namaLengkap : function(){
        return this.namaDepan + " " + this.namaBelakang;
    }
}

console.log(profile.namaDepan); // menampilkan nama depan
console.log(profile.namaBelakang); // menampilkan nama belakang
console.log(profile.alamat); // menampilkan alamat
console.log(profile.Nohp); // menampilkan no hp
console.log(profile.status); // menampilkan status 
console.log(profile.namaLengkap()); // menampilkan nama lengkap

console.log(profile["namaDepan"]); // menampilkan nama depan
console.log(profile["namaBelakang"]); // menampilkan nama belakang
console.log(profile["alamat"]); // menampilkan alamat
console.log(profile["Nohp"]); // menampilkan no hp
console.log(profile["status"]); // menampilkan status
console.log(profile["namaLengkap"]()); // menampilkan nama lengkap
