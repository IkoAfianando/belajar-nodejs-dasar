const buffer = Buffer.from("Iko Afianando");
console.info(buffer);

// untuk mengkonversi dari buffer menjadi String kembali
console.info(buffer.toString());

// buffer menjadi urutan terbalik
buffer.reverse();
console.info(buffer);