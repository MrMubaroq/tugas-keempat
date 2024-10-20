const minuman = {
    1: { name: "Air Mineral", price: 2000 },
    2: { name: "Kopi", price: 5000 },

};

function vendingMachine() {
    let uang = parseInt(prompt("Masukkan jumlah uang Anda:"));

    let pilihan = parseInt(prompt("Pilih produk:\n1. Air Mineral (Rp 2000)\n2. Kopi (Rp 5000)"));

    if (!minuman[pilihan]) {
        alert("Pilihan produk tidak valid!");
        return;
    }

    let minum = minuman[pilihan].name;
    let harga = minuman[pilihan].price;

    if (uang >= harga) {
        alert(`Anda membeli ${minum}. Kembalian Anda: Rp ${uang - harga}`);
    } else {
        alert("Uang Anda tidak cukup!");
    }
}

vendingMachine();