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
const tombolFilter = document.querySelectorAll(".filter-btn");
const semuaCard = document.querySelectorAll(".card[data-status]");
tombolFilter.forEach(function (tombol) {
  tombol.addEventListener("click", function () {
    const status = tombol.dataset.filter;
    tombolFilter.forEach(function (t) {
      t.classList.remove("aktif");
    });
    tombol.classList.add("aktif");
    semuaCard.forEach(function (card) {
      if (status === "semua" || card.dataset.status === status) {
        card.classList.remove("sembunyi");
      } else {
        card.classList.add("sembunyi");
      }
    });
  });
});
// Modal detail hewan
const modal = document.getElementById("modal");
const tombolDetail = document.querySelectorAll(".tombol-detail");
if (modal) {
  tombolDetail.forEach(function (tombol) {
    tombol.addEventListener("click", function () {
      const card = tombol.closest(".card");
      document.getElementById("modal-judul").textContent = card.dataset.nama;
      document.getElementById("modal-latin").textContent = card.dataset.latin;
      document.getElementById("modal-status").textContent = "Status: " + card.dataset.badge;
      document.getElementById("modal-habitat").textContent = "Habitat: " + card.dataset.habitat;
      document.getElementById("modal-ancaman").textContent = "Ancaman: " + card.dataset.ancaman;
      modal.classList.remove("sembunyi");
    });
  });
  document.getElementById("tutup-modal").addEventListener("click", function () {
    modal.classList.add("sembunyi");
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.classList.add("sembunyi");
    }
  });
}


// ===== BAGIAN MAHASISWA 4 (Kontak) =====
const tombolKirim = document.getElementById("tombol-kirim");
if (tombolKirim) {
  tombolKirim.addEventListener("click", function () {
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pesan = document.getElementById("pesan").value.trim();
    const status = document.getElementById("status-form");
    if (nama === "" || email === "" || pesan === "") {
      status.textContent = "Semua kolom wajib diisi.";
    } else if (!email.includes("@") || !email.includes(".")) {
      status.textContent = "Format email belum benar. Contoh: nama@contoh.com";
    } else if (pesan.length < 10) {
      status.textContent = "Pesan minimal 10 karakter.";
    } else {
      status.textContent = "Terima kasih, " + nama + ". Pesan Anda diterima.";
    }
  });
}