// const nama = 'Maulana'
// const cetakNama = (nama) => `Hai nama saya, ${nama}`
// console.log(cetakNama(nama));
// console.log(window);

//const fs = require("fs"); //core module
//const cetakNama = require("./coba"); //local module
//const moment = require("moment"); //third party module / npm module / node_modules
// console.log(`Halo Dunia!`);

const coba = require("./coba");

console.log(
  coba.cetakNama("Ahmad Maulana"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);