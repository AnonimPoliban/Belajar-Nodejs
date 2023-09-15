// Core System
// File System
const fs = require("node:fs");

// Menuliskan string ke file (synchronous)
// try {
//   fs.writeFileSync("data/test.txt", "Hello World! synchronous");
// } catch (e) {
//   console.log(e);
// }

// Menuliskan string ke file (asynchronous)
// fs.writeFile("data/test.txt", "Hello World! Asynchronous", (err) =>
//   console.log(err)
// );

// Membaca isi file synchronous
// const data = fs.readFileSync("data/test.txt", 'utf-8');
// console.log(data);

// Membaca isi file Asynchronous
// fs.readFile("data/test.txt", 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Readline
const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukana nama kamu!!\n", (nama) => {
  rl.question("Masukan umur kamu!!\n", (umur) => {
    console.log(`Terimakasih ${nama}, Umur kamu adalah ${umur} tahun.`);
    try {
      const fileName = "data/contacts.json";
      const data = {
        nama: nama,
        umur: umur,
      };
      const file = fs.readFileSync("data/contacts.json", "utf8");
      const jsonData = JSON.parse(file);

      jsonData.push(data);

      fs.writeFileSync(fileName, JSON.stringify(jsonData));
      console.log("Terimakasih sudah memasukan data kamu :)");
    } catch (err) {
      console.log(err);
    }
    rl.close();
  });
});
