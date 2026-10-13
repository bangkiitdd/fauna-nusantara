// BAGIAN UMUM: mode gelap (dipakai semua halaman)
const tombolTema = document.getElementById("tombol-tema");
if (tombolTema) {
  tombolTema.addEventListener("click", function () {
    document.body.classList.toggle("gelap");
    if (document.body.classList.contains("gelap")) {
      tombolTema.textContent = "Mode Terang";
    } else {
      tombolTema.textContent = "Mode Gelap";
    }
  });
}

// ===== BAGIAN MAHASISWA 2 (Beranda) =====

// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) =====

// ===== BAGIAN MAHASISWA 4 (Kontak) =====
const tombolKirim = document.getElementById("tombol-kirim");
if (tombolKirim) {
  tombolKirim.addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const kategori = document.getElementById("kategori").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const status = document.getElementById("status-form");
    if (nama === "" || email === "" || pesan === "") {
      status.textContent = "Semua kolom wajib diisi.";
    } else if (kategori.length < 10) {
      status.textContent = "Kategori minimal 10 karakter.";
    } else if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Format email belum benar. Contoh: nama@contoh.com";
    } else if (pesan.length < 10) {
      status.textContent = "Pesan minimal 10 karakter.";
    } else {
      status.textContent = "Terima kasih, " + nama + ". Pesan Anda diterima.";
    }
  });
}