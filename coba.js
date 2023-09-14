const cetakNama = (nama) => {
  return `Halo, nama saya ${nama}`;
};

const PI = 3.14;

const mahasiswa = {
  nama: "Adit Robot",
  umur: 328942,
  cetakMhs() {
    return `Halo, nama saya ${this.nama} dan saya ${this.umur} tahun.`;
  },
};

class Orang {
  constructor() {
    console.log("Objek orang telah dibuat!!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// ? Cara biasa
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// }

// * Menggunakan ES6
module.exports = { cetakNama, PI, mahasiswa, Orang };
