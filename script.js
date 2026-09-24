let keranjang = [];


/* =========================
   DISKON
========================= */

const DISKON = 10;


/* =========================
   PILIH KATEGORI
========================= */

function tampilkanKategori(kategori) {

    let makanan = document.getElementById("menuMakanan");
    let minuman = document.getElementById("menuMinuman");

    if (kategori === "makanan") {

        makanan.style.display = "block";
        minuman.style.display = "none";

    }

    if (kategori === "minuman") {

        makanan.style.display = "none";
        minuman.style.display = "flex";

    }

}


/* =========================
   TAMBAH KE KERANJANG
========================= */

function tambahKeKeranjang(nama, harga, adalahMinuman) {

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
            suhu: adalahMinuman ? "Dingin" : ""

        });

    }


    tampilkanKeranjang();

}


/* =========================
   TAMPILKAN KERANJANG
========================= */

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

        let hargaItem =
            item.harga * item.jumlah;


        subtotal += hargaItem;


        let itemHTML =
            document.createElement("div");


        itemHTML.className =
            "item-keranjang";


        let pilihanSuhu = "";


        if (item.minuman) {

            pilihanSuhu = `

                <div class="pilihan-suhu">

                    Suhu:

                    <select
                        onchange="ubahSuhu(${index}, this.value)">

                        <option
                            value="Dingin"
                            ${item.suhu === "Dingin" ? "selected" : ""}>

                            🧊 Dingin

                        </option>

                        <option
                            value="Panas"
                            ${item.suhu === "Panas" ? "selected" : ""}>

                            ☕ Panas

                        </option>

                    </select>

                </div>

            `;

        }


        itemHTML.innerHTML = `

            <div>

                <strong>
                    ${item.nama}
                </strong>

                <br>

                x${item.jumlah}

                ${pilihanSuhu}

            </div>


            <div>

                Rp${hargaItem.toLocaleString("id-ID")}

                <button
                    onclick="hapusItem(${index})">

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


    /* =========================
       HITUNG DISKON 10%
    ========================= */

    let jumlahDiskon =
        subtotal * DISKON / 100;


    let totalBayar =
        subtotal - jumlahDiskon;


    /* =========================
       TAMPILKAN HARGA
    ========================= */

    subtotalElement.innerText =
        "Rp" + subtotal.toLocaleString("id-ID");


    diskonElement.innerText =
        "-Rp" + jumlahDiskon.toLocaleString("id-ID");


    totalElement.innerText =
        "Rp" + totalBayar.toLocaleString("id-ID");

}


/* =========================
   UBAH SUHU
========================= */

function ubahSuhu(index, suhu) {

    keranjang[index].suhu = suhu;

    tampilkanKeranjang();

}


/* =========================
   HAPUS ITEM
========================= */

function hapusItem(index) {

    if (keranjang[index].jumlah > 1) {

        keranjang[index].jumlah--;

    } else {

        keranjang.splice(index, 1);

    }


    tampilkanKeranjang();

}


/* =========================
   BAYAR
========================= */

function bayar() {

    if (keranjang.length === 0) {

        alert("Keranjang masih kosong!");

        return;

    }


    let popup =
        document.getElementById("popupPembayaran");

    let loading =
        document.getElementById("loadingPembayaran");

    let berhasil =
        document.getElementById("pembayaranBerhasil");


    popup.style.display = "flex";

    loading.style.display = "block";

    berhasil.style.display = "none";


    setTimeout(function() {

        loading.style.display = "none";

        berhasil.style.display = "block";


        let audio =
            document.getElementById("audioSukses");


        audio.currentTime = 0;


        audio.play().catch(function(error) {

            console.log(
                "Audio tidak dapat diputar:",
                error
            );

        });


    }, 2000);

}


/* =========================
   TUTUP PEMBAYARAN
========================= */

function tutupPembayaran() {

    let popup =
        document.getElementById("popupPembayaran");


    popup.style.display = "none";


    keranjang = [];


    tampilkanKeranjang();

}


/* =========================
   TUTUP VIDEO PROMO
========================= */

function tutupPromo() {

    let popup =
        document.getElementById("popupPromo");

    let video =
        document.getElementById("videoPromo");


    popup.style.display = "none";


    video.pause();

    video.currentTime = 0;

}