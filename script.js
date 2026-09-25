// DATA MENU WASIBU
const daftarMenu = {
    makanan: [
        {
            nama: "Indomie Goreng",
            harga: 7000,
            gambar: "images/images (8).jpg",
            deskripsi: "Indomie Goreng khas warkop.",
            double: true,
            extraTelur: true
        },
        {
            nama: "Indomie Rebus",
            harga: 7000,
            gambar: "images/images (9).jpg",
            deskripsi: "Indomie Rebus khas warkop.",
            double: true,
            extraTelur: true
        },
        {
            nama: "Nasi Telur",
            harga: 8000,
            gambar: "images/images (10).jpg",
            deskripsi: "Nasi Telur khas warkop."
        },
        {
            nama: "Mix Platter",
            harga: 17000,
            gambar: "images/images (11).jpg",
            deskripsi: "Kentang, Sosis, Nugget"
        },
        {
            nama: "Ayam Bakar",
            harga: 15000,
            gambar: "images/images (12).jpg",
            deskripsi: "Ayam Bakar dengan nasi hangat"
        },
        {
            nama: "Chicken Katsu",
            harga: 15000,
            gambar: "images/images (13).jpg",
            deskripsi: "Ayam dengan Tepung Roti"
        },
        {
            nama: "Ayam Geprek",
            harga: 15000,
            gambar: "images/images (14).jpg",
            deskripsi: "Ayam dengan sambal pedas"
        },
        {
            nama: "Nasi Goreng",
            harga: 15000,
            gambar: "images/images (15).jpg",
            deskripsi: "Nasi Goreng dengan Telur"
        }
    ],

    minuman: [
        {
            nama: "Teh",
            harga: 5000,
            gambar: "images/images (1).jpg",
            deskripsi: "Teh khas warkop.",
            teh: true,
            suhu: true
        },
        {
            nama: "Kopi Hitam",
            harga: 5000,
            gambar: "images/images (5).jpg",
            deskripsi: "Kopi hitam khas warkop.",
        },
        {
            nama: "Milo",
            harga: 7000,
            gambar: "images/images (2).jpg",
            deskripsi: "Milo segar.",
            suhu: true
        },
        {
            nama: "Drink Beng Beng",
            harga: 7000,
            gambar: "images/images (3).jpg",
            deskripsi: "Minuman cokelat Beng Beng.",
            suhu: true
        },
        {
            nama: "Air Mineral",
            harga: 4000,
            gambar: "images/images (4).jpg",
            deskripsi: "Air mineral dingin."
        },
        {
            nama: "Nutrisari",
            harga: 6000,
            gambar: "images/images (7).jpg",
            deskripsi: "Nutrisari segar.",
            suhu: true
        },
        {
            nama: "Good Day",
            harga: 7000,
            gambar: "images/images (6).jpg",
            deskripsi: "Good Day segar.",
            suhu: true
        }
    ]
};

let keranjang = [];
const DISKON = 10;
const HARGA_EXTRA_TELUR = 3000;


// ===============================
// TAMPILKAN MENU
// ===============================

function tampilkanMenu() {

    let makanan =
        document.getElementById("menuMakanan");

    let minuman =
        document.getElementById("menuMinuman");

    makanan.innerHTML = "";
    minuman.innerHTML = "";


    daftarMenu.makanan.forEach(function(item) {

        makanan.innerHTML += `
            <div class="card">

                <img
                    src="${item.gambar}"
                    alt="${item.nama}"
                >

                <h3>
                    ${item.nama}
                </h3>

                <p>
                    ${item.deskripsi}
                </p>

                <p class="harga">
                    Rp${item.harga.toLocaleString("id-ID")}
                </p>

                <button
                    type="button"
                    onclick="tambahKeKeranjang(
                        '${item.nama}',
                        ${item.harga},
                        false,
                        ${item.double ? "true" : "false"},
                        false,
                        false,
                        ${item.extraTelur ? "true" : "false"}
                    )"
                >
                    Tambah
                </button>

            </div>
        `;
    });


    daftarMenu.minuman.forEach(function(item) {

        minuman.innerHTML += `
            <div class="card">

                <img
                    src="${item.gambar}"
                    alt="${item.nama}"
                >

                <h3>
                    ${item.nama}
                </h3>

                <p>
                    ${item.deskripsi}
                </p>

                <p class="harga">
                    Rp${item.harga.toLocaleString("id-ID")}
                </p>

                <button
                    type="button"
                    onclick="tambahKeKeranjang(
                        '${item.nama}',
                        ${item.harga},
                        true,
                        false,
                        ${item.teh ? "true" : "false"},
                        ${item.suhu ? "true" : "false"},
                        false
                    )"
                >
                    Tambah
                </button>

            </div>
        `;
    });
}


// ===============================
// TAMPILKAN KATEGORI
// ===============================

function tampilkanKategori(kategori) {

    let makanan =
        document.getElementById("menuMakanan");

    let minuman =
        document.getElementById("menuMinuman");


    if (kategori === "makanan") {

        makanan.style.display = "flex";
        minuman.style.display = "none";

    }


    if (kategori === "minuman") {

        makanan.style.display = "none";
        minuman.style.display = "flex";

    }
}


// ===============================
// TAMBAH KE KERANJANG
// ===============================

function tambahKeKeranjang(
    nama,
    harga,
    adalahMinuman,
    bisaDouble,
    adalahTeh,
    punyaSuhu,
    bisaExtraTelur
) {

    let item = keranjang.find(function(produk) {

        return produk.nama === nama;

    });


    if (item) {

        item.jumlah++;

    } else {

        keranjang.push({

            nama: nama,

            harga: harga,

            jumlah: 1,

            minuman: adalahMinuman,

            bisaDouble: bisaDouble,

            porsi: 1,

            teh: adalahTeh,

            rasaTeh:
                adalahTeh
                    ? "Manis"
                    : "",

            punyaSuhu: punyaSuhu,

            suhu:
                punyaSuhu
                    ? "Dingin"
                    : "",

            bisaExtraTelur:
                bisaExtraTelur,

            extraTelur: false,

            // NOTE / CATATAN PESANAN
            catatan: ""

        });

    }


    tampilkanKeranjang();
}


// ===============================
// TAMPILKAN KERANJANG
// ===============================

function tampilkanKeranjang() {

    let daftar =
        document.getElementById("daftarKeranjang");

    let subtotalElement =
        document.getElementById("subtotal");

    let diskonElement =
        document.getElementById("diskon");

    let totalElement =
        document.getElementById("total");


    daftar.innerHTML = "";

    let subtotal = 0;


    keranjang.forEach(function(item, index) {

        let hargaDasar =
            item.harga *
            item.jumlah *
            item.porsi;


        let hargaTelur = 0;


        if (
            item.bisaExtraTelur &&
            item.extraTelur
        ) {

            hargaTelur =
                HARGA_EXTRA_TELUR *
                item.jumlah;

        }


        let hargaItem =
            hargaDasar +
            hargaTelur;


        subtotal += hargaItem;


        let itemHTML =
            document.createElement("div");


        itemHTML.className =
            "item-keranjang";


        let pilihanSuhu = "";
        let pilihanTeh = "";
        let pilihanPorsi = "";
        let pilihanTelur = "";


        // ===============================
        // PILIHAN SUHU
        // ===============================

        if (item.punyaSuhu) {

            pilihanSuhu = `
                <div class="pilihan-suhu">

                    Suhu:

                    <select
                        onchange="ubahSuhu(
                            ${index},
                            this.value
                        )"
                    >

                        <option
                            value="Dingin"
                            ${item.suhu === "Dingin"
                                ? "selected"
                                : ""}
                        >
                            🧊 Dingin
                        </option>

                        <option
                            value="Panas"
                            ${item.suhu === "Panas"
                                ? "selected"
                                : ""}
                        >
                            ☕ Panas
                        </option>

                    </select>

                </div>
            `;
        }


        // ===============================
        // PILIHAN RASA TEH
        // ===============================

        if (item.teh) {

            pilihanTeh = `
                <div class="pilihan-suhu">

                    Rasa:

                    <select
                        onchange="ubahRasaTeh(
                            ${index},
                            this.value
                        )"
                    >

                        <option
                            value="Manis"
                            ${item.rasaTeh === "Manis"
                                ? "selected"
                                : ""}
                        >
                            🍬 Manis
                        </option>

                        <option
                            value="Tawar"
                            ${item.rasaTeh === "Tawar"
                                ? "selected"
                                : ""}
                        >
                            Tawar
                        </option>

                    </select>

                </div>
            `;
        }


        // ===============================
        // PILIHAN PORSI INDOMIE
        // ===============================

        if (item.bisaDouble) {

            pilihanPorsi = `
                <div class="pilihan-suhu">

                    Porsi:

                    <select
                        onchange="ubahPorsi(
                            ${index},
                            this.value
                        )"
                    >

                        <option
                            value="1"
                            ${item.porsi === 1
                                ? "selected"
                                : ""}
                        >
                            Normal
                        </option>

                        <option
                            value="2"
                            ${item.porsi === 2
                                ? "selected"
                                : ""}
                        >
                            Double
                        </option>

                    </select>

                </div>
            `;
        }


        // ===============================
        // EXTRA TELUR INDOMIE
        // ===============================

        if (item.bisaExtraTelur) {

            pilihanTelur = `
                <div class="pilihan-suhu">

                    Extra Telur:

                    <select
                        onchange="ubahExtraTelur(
                            ${index},
                            this.value
                        )"
                    >

                        <option
                            value="tidak"
                            ${!item.extraTelur
                                ? "selected"
                                : ""}
                        >
                            Tidak
                        </option>

                        <option
                            value="ya"
                            ${item.extraTelur
                                ? "selected"
                                : ""}
                        >
                            Ya (+Rp3.000)
                        </option>

                    </select>

                </div>
            `;
        }


        // ===============================
        // CATATAN / NOTES PESANAN
        // ===============================

        let catatanHTML = `
            <div class="pilihan-catatan">

                <label>
                    Catatan:
                </label>

                <input
                    type="text"
                    class="input-catatan"
                    placeholder="Contoh: es batu dikit/pedas/"
                    value="${item.catatan.replace(/"/g, "&quot;")}"
                    onchange="ubahCatatan(
                        ${index},
                        this.value
                    )"
                >

            </div>
        `;


        // ===============================
        // HTML ITEM KERANJANG
        // ===============================

        itemHTML.innerHTML = `

            <div>

                <strong>
                    ${item.nama}
                </strong>

                <br>

                x${item.jumlah}

                ${pilihanPorsi}

                ${pilihanTelur}

                ${pilihanSuhu}

                ${pilihanTeh}

                ${catatanHTML}

            </div>


            <div>

                Rp${hargaItem.toLocaleString("id-ID")}

                <button
                    onclick="hapusItem(${index})"
                >
                    Hapus
                </button>

            </div>

        `;


        daftar.appendChild(itemHTML);

    });


    if (keranjang.length === 0) {

        daftar.innerHTML =
            "<p>Belum ada pesanan.</p>";

    }


    // ===============================
    // DISKON 10%
    // ===============================

    let jumlahDiskon =
        subtotal *
        DISKON /
        100;


    let totalBayar =
        subtotal -
        jumlahDiskon;


    subtotalElement.innerText =
        "Rp" +
        subtotal.toLocaleString("id-ID");


    diskonElement.innerText =
        "-Rp" +
        jumlahDiskon.toLocaleString("id-ID");


    totalElement.innerText =
        "Rp" +
        totalBayar.toLocaleString("id-ID");
}


// ===============================
// UBAH SUHU
// ===============================

function ubahSuhu(index, suhu) {

    keranjang[index].suhu =
        suhu;

    tampilkanKeranjang();
}


// ===============================
// UBAH RASA TEH
// ===============================

function ubahRasaTeh(index, rasa) {

    keranjang[index].rasaTeh =
        rasa;

    tampilkanKeranjang();
}


// ===============================
// UBAH PORSI
// ===============================

function ubahPorsi(index, porsi) {

    keranjang[index].porsi =
        Number(porsi);

    tampilkanKeranjang();
}


// ===============================
// UBAH EXTRA TELUR
// ===============================

function ubahExtraTelur(index, pilihan) {

    keranjang[index].extraTelur =
        pilihan === "ya";

    tampilkanKeranjang();
}


// ===============================
// UBAH CATATAN / NOTES
// ===============================

function ubahCatatan(index, catatan) {

    keranjang[index].catatan =
        catatan;

    // Tidak perlu render ulang seluruh keranjang
    // supaya fokus input tidak hilang saat mengetik.
}


// ===============================
// HAPUS ITEM
// ===============================

function hapusItem(index) {

    if (keranjang[index].jumlah > 1) {

        keranjang[index].jumlah--;

    } else {

        keranjang.splice(index, 1);

    }


    tampilkanKeranjang();
}


// ===============================
// PEMBAYARAN
// ===============================

function bayar() {

    if (keranjang.length === 0) {

        alert("Keranjang masih kosong!");

        return;
    }


    let popup =
        document.getElementById(
            "popupPembayaran"
        );


    let pilihan =
        document.getElementById(
            "pilihanPembayaran"
        );


    let proses =
        document.getElementById(
            "prosesPembayaran"
        );


    let berhasil =
        document.getElementById(
            "pembayaranBerhasil"
        );


    popup.style.display =
        "flex";


    pilihan.style.display =
        "block";


    proses.style.display =
        "none";


    berhasil.style.display =
        "none";
}


// ===============================
// PILIH METODE PEMBAYARAN
// ===============================

function pilihPembayaran(metode) {

    let pilihan =
        document.getElementById(
            "pilihanPembayaran"
        );


    let proses =
        document.getElementById(
            "prosesPembayaran"
        );


    let berhasil =
        document.getElementById(
            "pembayaranBerhasil"
        );


    let teks =
        document.getElementById(
            "teksProsesPembayaran"
        );


    // Sembunyikan pilihan metode

    pilihan.style.display =
        "none";


    // Tampilkan proses

    proses.style.display =
        "block";


    berhasil.style.display =
        "none";


    // Teks sesuai metode

    teks.innerText =
        "Silakan ke kasir untuk melakukan pembayaran " +
        metode +
        ".";


    // Tunggu 2 detik

    setTimeout(function() {

        proses.style.display =
            "none";


        berhasil.style.display =
            "block";


        // Putar audio sukses

        let audio =
            document.getElementById(
                "audioSukses"
            );


        audio.currentTime =
            0;


        audio.play().catch(function(error) {

            console.log(
                "Audio tidak dapat diputar:",
                error
            );

        });

    }, 2000);
}

function tutupPilihanPembayaran() {
    let popup =
        document.getElementById("popupPembayaran");

    popup.style.display = "none";
}

// ===============================
// TUTUP PEMBAYARAN
// ===============================

function tutupPembayaran() {

    let popup =
        document.getElementById(
            "popupPembayaran"
        );


    popup.style.display =
        "none";


    keranjang = [];


    tampilkanKeranjang();
}


// ===============================
// TUTUP PROMO
// ===============================

function tutupPromo() {

    let popup =
        document.getElementById(
            "popupPromo"
        );


    let video =
        document.getElementById(
            "videoPromo"
        );


    popup.style.display =
        "none";


    video.pause();

    video.currentTime =
        0;
}


// ===============================
// JALANKAN AWAL
// ===============================

tampilkanMenu();

tampilkanKeranjang();