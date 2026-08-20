# 🕋 Galeri Paket Umroh & Haji - El Massa Tour & Travel

Aplikasi web digital showcase & galeri flyer katalog paket Umroh, Haji Khusus, dan Wisata Halal untuk **PT. El Massa Berkah Wisata (El Massa Tour & Travel)**.

Aplikasi ini dirancang dengan standar kemewahan islami (*Royale Emerald & Gold Accent*), mobile-first 2 kolom, dan dilengkapi fitur mendalam: **Itinerary Rinci Hari-ke-Hari** serta **Rincian Fasilitas Include & Exclude** di setiap paketnya.

---

## ✨ Fitur Unggulan

### 1. 📋 Detail Itinerary Interaktif Hari-ke-Hari
- Visualisasi timeline hari-demi-hari (Hari 1 hingga Hari 9/12/16/25).
- Memuat nama rute, kegiatan ziarah, panduan ibadah (Raudhah, Miqat, Thawaf, Sa'i, ziarah Makkah & Madinah).
- Dukungan tombol **Cetak / Simpan Itinerary** langsung ke PDF atau printer.

### 2. ✅ Fasilitas Include & Exclude Transparan
- **Termasuk (Include)**: Tiket Pesawat PP, Visa Resmi, Hotel Bintang 4/5 dekat Haram, Makan 3x Fullboard Nusantara, Bus AC Eksekutif, Muthawwif, Ziarah lengkap, Air Zamzam 5L, Handling Bandara & Lounge, Perlengkapan Koper Eksklusif El Massa.
- **Tidak Termasuk (Exclude)**: Paspor, Vaksin Meningitis, Tiket Domestik, Pengeluaran Pribadi, Kelebihan Bagasi.

### 3. 🖼️ Poster Flyer 4:5 Feed Instagram
- Flyer resolusi tinggi dengan tombol **Zoom Preview** dan **Download Flyer** untuk dibagikan ke media sosial atau calon jamaah.

### 4. 🏷️ Multi-Jadwal & Multi-Kota
- Satu paket dapat memiliki beberapa pilihan tanggal dan kota keberangkatan (Jakarta, Surabaya, Solo, Medan, Makassar, dll.).
- Calon jamaah dapat langsung berpindah jadwal di dalam modal detail dan harga/ketersediaan seat menyesuaikan secara real-time.

### 5. ✈️ Live Update Seat & Status Ketersediaan
- Tab khusus jadwal keberangkatan yang dikelompokkan berdasarkan kategori paket dan kota start.
- Indikator ketersediaan dinamis: *Tersedia*, *Tinggal Sedikit* (≤ 6 seat), *Hampir Habis*, dan *Full*.

### 6. 🧮 Kalkulator Tabungan Umroh
- Calon jamaah dapat memilih paket impian, mengatur jumlah anggota keluarga (pax), dan menentukan durasi target menabung (3, 6, 12, 18, 24 bulan) untuk melihat perkiraan nominal tabungan per bulan.

### 7. 💬 Booking Instan Terformat ke WhatsApp
- Tombol konsultasi/pendaftaran langsung membuka WhatsApp CS/Konsultan El Massa dengan pesan yang terisi otomatis (Nama paket, tanggal berangkat terpilih, kota asal, maskapai, dan nominal harga).

### 8. 🔐 Dashboard Pengelola & Admin CRUD
- Tambah, edit, dan hapus paket dengan visual form builder.
- Editor rincian itinerary per hari & fasilitas include/exclude.
- Fitur **Bulk Seat Manager**: update seluruh jumlah seat sekali klik.
- Kelola master data kota dan maskapai penerbangan.
- **Demo Akun Admin:**
  - **Username:** `admin`
  - **Password:** `elmassa123`

---

## 🚀 Cara Menjalankan Aplikasi

Aplikasi ini berarsitektur standalone modern web app (HTML5 + Tailwind CSS + Alpine.js) yang tidak memerlukan instalasi runtime khusus.

1. Buka file `index.html` langsung di browser favorit Anda (Google Chrome, Safari, Edge, Firefox).
2. Atau jalankan menggunakan Live Server / static server (misalnya VS Code Live Server / `npx serve`).

---

## 🌐 Opsi Deployment

1. **Static Hosting Gratis (Vercel / Netlify / Cloudflare Pages / GitHub Pages)**
   - Upload seluruh folder ini ke repository GitHub atau drag-and-drop ke Netlify/Vercel.
2. **Google Apps Script & Google Sheets (Seperti Musahefiz)**
   - Gunakan skrip yang tersedia di folder `backend/gas-code.gs` untuk menghubungkan langsung dengan Google Sheets jika ingin kolaborasi admin via spreadsheet.
