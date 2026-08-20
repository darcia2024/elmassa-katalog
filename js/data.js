/**
 * Database Galeri Paket El Massa Tour & Travel
 * Katalog Resmi Paket Umroh Musim 2026 / 2027
 * Keberangkatan: Start Jakarta (CGK) & Start Pangkal Pinang (PGK)
 * Format Judul: Title Case (Ramping, Estetik, Regular)
 */

const DEFAULT_ELMASSA_DATA = {
  settings: {
    WEBSITE_NAME: 'EL MASSA',
    WEBSITE_TAGLINE: 'Tour & Travel • Sahabat Ibadah Anda',
    WEBSITE_LOGO_URL: 'images/logo.png',
    COMPANY_NAME: 'PT. El Massa Berkah Wisata',
    SK_UMROH: 'No. 12042023901230001 (Kemenag RI)',
    SK_HAJI: 'No. 12042023901230002 (PIHK Resmi)',
    OFFICE_ADDRESS: 'Menara El Massa, Jl. TB Simatupang Kav. 88, Cilandak, Jakarta Selatan 12430',
    WHATSAPP_NUMBER: '6281249476778',
    WHATSAPP_CHANNEL: 'https://whatsapp.com/channel/0029VbElMassaOfficial',
    INSTAGRAM_URL: 'https://instagram.com/elmassatour',
    LAST_SEAT_UPDATE: new Date().toISOString()
  },

  categories: [
    'Semua',
    'Umroh Direct Flight',
    'Umroh Spesial Ustadz',
    'Umroh Akhir Tahun',
    'Umroh Sya\'ban',
    'Umroh Awal Ramadhan',
    'Umroh Syawal',
    'Umroh Awal Musim',
    'Umroh Liburan Sekolah'
  ],

  cities: [
    'Jakarta',
    'Pangkal Pinang',
    'Surabaya',
    'Solo',
    'Medan',
    'Makassar',
    'Bandung'
  ],

  airlines: [
    'Saudia Airlines',
    'Garuda Indonesia',
    'Qatar Airways',
    'Etihad Airways',
    'Oman Air'
  ],

  defaultInclude: [
    'Tiket PP (Start Pangkal Pinang / Jakarta sesuai program)',
    'Visa Umrah',
    'Hotel Mekkah dan Madinah',
    'Makan sehari 3 kali sesuai program',
    'City Tour Thaif',
    'Transportasi sesuai program',
    'Tour Leader',
    'Muthawwif (Pembimbing Ibadah)',
    'Bimbingan Manasik',
    'Bimbingan Kesehatan',
    'Sistem Pendampingan Jamaah Umrahme',
    'Perlengkapan Lengkap',
    'Air Zamzam 5 Ltr',
    'Bagasi 1x23 kg',
    'Dokumentasi Group'
  ],

  defaultExclude: [
    'Upgrade Kamar Triple: 3 Jt',
    'Upgrade Kamar Double: 5 Jt',
    'Biaya Pembuatan Paspor: 650 Rb',
    'Vaksin Meningitis dan Polio: 550 Rb',
    'Dokumentasi Pribadi',
    'Bagasi Tambahan',
    'Pengeluaran Pribadi'
  ],

  packages: [
    // -------------------------------------------------------------------------
    // 1. Umrah Special November 2026
    // -------------------------------------------------------------------------
    {
      id: 'pkg-01',
      title: 'Umrah Special November 2026 (10 Hari)',
      category: 'Umroh Direct Flight',
      tags: ['Free Thaif', 'Direct Saudia', 'Start Pangkal Pinang', '10 Hari', 'Quad Room'],
      programSummary: 'Program Umrah 10 Hari Spesial November 2026 keberangkatan khusus Start Pangkal Pinang bersama Saudia Airlines direct. Free City Tour Thaif. Menginap di Grand Almassa Makkah & Daar El Naeem Madinah.',
      flyerUrl: 'images/poster-november-reguler.png',
      thumbnailUrl: 'images/poster-november-reguler.png',
      activeStatus: 'Aktif',
      createdAt: '2026-08-01T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour & Kuliner Thaif',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan Start Pangkal Pinang – Madinah Direct', route: 'Pangkal Pinang ➔ Jakarta ➔ Madinah (Saudia)', activities: ['Jamaah berkumpul di Bandara Depati Amir Pangkal Pinang persiapan take-off menuju Bandara Soekarno-Hatta (handling tim El Massa).', 'Berkumpul di Lounge Bandara Soekarno-Hatta Terminal 3 bersama tour leader.', 'Briefing, doa safar, dan pembagian boarding pass.', 'Penerbangan direct Saudia Airlines menuju Bandara Prince Mohammad bin Abdulaziz Madinah.', 'Tiba di Madinah, proses imigrasi, check-in Hotel Daar El Naeem dan istirahat.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Masjid Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat fardhu berjamaah di Masjid Nabawi.', 'Ziarah Makam Rasulullah ﷺ, Abu Bakar Ash-Shiddiq, dan Umar bin Khattab.', 'Ziarah Raudhah Syarifah (Taman Surga) dengan tasreh resmi.', 'Tausiyah dan pemantapan rukun umroh di hotel.'] },
        { day: 3, title: 'Hari 3: Ziarah Kota Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba (sholat sunnah bernilai pahala umroh).', 'Ziarah Jabal Uhud dan Makam Syuhada Uhud.', 'Mengunjungi Perkebunan & Pasar Kurma Madinah.', 'Ziarah Masjid Qiblatain & Masjid Khandaq.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Pelaksanaan Ibadah Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Persiapan ihram, mandi sunnah ihram di hotel Madinah.', 'Menuju Masjid Bir Ali untuk mengambil Miqat dan berniat Umroh.', 'Perjalanan menuju Makkah Al-Mukarramah dengan bus AC eksekutif.', 'Check-in Hotel Grand Almassa Makkah.', 'Melaksanakan Ibadah Umroh Pertama (Thawaf, Sa\'i, dan Tahallul) bersama Muthawwif.'] },
        { day: 5, title: 'Hari 5: Memperbanyak Ibadah di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Memperbanyak thawaf sunnah, tilawah Al-Qur\'an, dan sholat berjamaah di depan Ka\'bah.', 'Kajian rohani dan evaluasi pelaksanaan ibadah.'] },
        { day: 6, title: 'Hari 6: Ziarah Kota Makkah & Miqat Umrah 2 (Ji\'ranah)', route: 'Ziarah Makkah', activities: ['Ziarah napak tilas Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, dan Mina.', 'Mengambil Miqat di Masjid Ji\'ranah bagi jamaah yang ingin Umrah Kedua.', 'Kembali ke Masjidil Haram untuk pelaksanaan Thawaf, Sa\'i, dan Tahallul ke-2.'] },
        { day: 7, title: 'Hari 7: Free City Tour Kota Bersejarah Thaif', route: 'Makkah ➔ Thaif ➔ Makkah', activities: ['Perjalanan wisata alam dan sejarah ke Kota Sejuk Thaif.', 'Menikmati pemandangan pegunungan dan naik Teleferik / Cable Car.', 'Ziarah Masjid Abdullah bin Abbas dan Masjid Kuk.', 'Mengunjungi Pabrik Penyulingan Minyak Wangi Bunga Mawar Thaif.', 'Menikmati makan siang khas Nasi Mandhi Thaif.', 'Mengambil Miqat di Qarnul Manazil (As-Sail Al-Kabir) bagi yang berniat Umrah ke-3.'] },
        { day: 8, title: 'Hari 8: Ibadah Mandiri di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Qiyamul lail dan sholat Subuh di Masjidil Haram.', 'Hari bebas untuk memperbanyak doa di Multazam, Hijir Ismail, dan berbelanja oleh-oleh di sekitar hotel.'] },
        { day: 9, title: 'Hari 9: Thawaf Wada\' & Menuju Bandara Jeddah', route: 'Makkah ➔ Bandara Jeddah', activities: ['Pelaksanaan Thawaf Wada\' (Thawaf Perpisahan) di Masjidil Haram.', 'Check-out hotel Grand Almassa Makkah.', 'Perjalanan menuju Bandara Internasional King Abdulaziz Jeddah.', 'Proses check-in tiket dan bagasi Saudia Airlines, penerbangan menuju Jakarta.'] },
        { day: 10, title: 'Hari 10: Tiba di Jakarta & Lanjut ke Pangkal Pinang', route: 'Jeddah ➔ Jakarta ➔ Pangkal Pinang', activities: ['Insya Allah tiba dengan selamat di Bandara Soekarno-Hatta Jakarta.', 'Pengambilan air zamzam 5 liter dan bagasi koper.', 'Melanjutkan penerbangan domestik ke Bandara Depati Amir Pangkal Pinang.', 'Semoga meraih predikat Umroh yang Maqbul dan Mabrur.'] }
      ],
      schedules: [
        {
          id: 'sch-01',
          startCity: 'Pangkal Pinang',
          airline: 'Saudia Airlines',
          departureDate: '2026-11-03',
          returnDate: '2026-11-13',
          duration: 10,
          price: 34700000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room',
          flightType: 'Connecting PGK ➔ Saudia Direct Landing Madinah'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 2. Umrah Special Bersama Ustadz Hanan Attaki
    // -------------------------------------------------------------------------
    {
      id: 'pkg-02',
      title: 'Umrah Special Bersama Ustadz Hanan Attaki (10 Hari)',
      category: 'Umroh Spesial Ustadz',
      tags: ['Bersama Ust. Hanan Attaki', 'Free Thaif', 'Landing Madinah', 'Start JKT & PGK', 'Bisa Upgrade ★5'],
      programSummary: 'Program Umrah 10 Hari dibimbing langsung oleh Ustadz Hanan Attaki. Penerbangan Saudia Airlines landing Madinah (SV821). Tersedia keberangkatan Start Jakarta & Start Pangkal Pinang (transit Dprima Hotel Jakarta). Free City Tour Thaif. Pilihan upgrade Hotel Sofwah / Zamzam Tower ★5.',
      flyerUrl: 'images/poster-november-hanan-attaki.png',
      thumbnailUrl: 'images/poster-november-hanan-attaki.png',
      flyerUrlJakarta: 'images/poster-november-hanan-attaki-jakarta.png',
      flyerUrlPangkalPinang: 'images/poster-november-hanan-attaki.png',
      activeStatus: 'Aktif',
      createdAt: '2026-08-02T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa (Opsi Upgrade: Sofwah / Zamzam Tower ★5)',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Kajian Eksklusif Ust. Hanan Attaki',
      itinerary: [
        {
          day: 1,
          title: 'Hari 1 (16 Nov 2026): Pangkal Pinang ➔ Jakarta & Transit Dprima Hotel',
          route: 'Pangkal Pinang ➔ Jakarta',
          activities: [
            'Pukul 09.00 WIB: Jamaah asal Pangkal Pinang berkumpul di Bandara Internasional Depati Amir Pangkal Pinang untuk persiapan take-off ke Jakarta.',
            'Pukul 12.25 WIB: Take-off dari Pangkal Pinang dan tiba di Bandara Soekarno-Hatta Jakarta pukul 13.54 WIB.',
            'Menuju hotel transit di Jakarta (Dprima Hotel), istirahat dan menginap 1 malam.',
            'Pukul 19.30 WIB – Selesai: Pemantapan manasik umrah di mushalla/meeting room hotel transit bersama tim El Massa.'
          ]
        },
        {
          day: 2,
          title: 'Hari 2 (17 Nov 2026): Jakarta ➔ Madinah Direct (Saudia SV821)',
          route: 'Jakarta ➔ Madinah (Saudia Airlines)',
          activities: [
            'Pukul 05.30 WIB: Sarapan pagi dan berkumpul di lobby hotel untuk persiapan menuju Bandara Soekarno-Hatta Terminal 3 (jamaah asal Jakarta bergabung di bandara).',
            'Pukul 12.00 WIB: Penerbangan direct menuju Madinah menggunakan Saudia Airlines (SV821).',
            'Pukul 18.00 LT: Tiba di Bandara Prince Mohammad bin Abdulaziz Madinah.',
            'Perjalanan menggunakan bus eksekutif menuju Kota Madinah, check-in Hotel Daar El Naeem dan beristirahat.'
          ]
        },
        {
          day: 3,
          title: 'Hari 3 (18 Nov 2026): Ziarah Raudhah Syarifah, Masjid Nabawi & Sholat Jumat',
          route: 'Madinah Al-Munawwarah',
          activities: [
            'Memasuki Raudhah Syarifah (Insya Allah apabila Tasreh keluar sesuai jadwal resmi Nusuk):',
            '• Selesai Sholat Subuh – 11.00 Pagi: Jamaah Perempuan',
            '• 11.00 Pagi – Selesai Sholat Isya: Jamaah Laki-laki',
            '• Selesai Isya – 23.30 Malam: Jamaah Perempuan',
            '• 23.30 Malam – Sholat Subuh: Jamaah Laki-laki',
            'Ziarah dan pengenalan sekitar Masjid Nabawi: Saqifah Bani Sa\'idah (Bani Tsaqifah), Makam Rasulullah ﷺ dan Makam Sahabat (dari sisi luar masjid), Masjid Ali, Masjid Ghamamah, dan Pemakaman Baqi\'.',
            'Bersiap melaksanakan Sholat Jumat berjamaah di Masjid Nabawi. Selesai Sholat Jumat dilanjutkan acara bebas.'
          ]
        },
        {
          day: 4,
          title: 'Hari 4 (19 Nov 2026): Ziarah Jejak Sejarah Islam Kota Madinah',
          route: 'Madinah Al-Munawwarah',
          activities: [
            'Melaksanakan Tour & Ziarah jejak sejarah Islam di sekitar Kota Madinah:',
            '• Masjid Quba (Masjid pertama yang dibangun oleh Rasulullah ﷺ, sholat 2 rakaat bernilai pahala umrah).',
            '• Jabal Uhud & Makam Syuhada Uhud (napak tilas perjuangan para syuhada Perang Uhud).',
            '• Perkebunan & Pasar Kurma Madinah (kondisional).',
            '• Melewati Masjid Qiblatain dan Masjid Khandaq sepanjang rute perjalanan.',
            'Setelahnya acara bebas, jamaah memperbanyak ibadah di Masjid Nabawi (I\'tikaf, Tadarus Al-Qur\'an, Sholat Sunnah).'
          ]
        },
        {
          day: 5,
          title: 'Hari 5 (20 Nov 2026): Kajian Rohani Bersama Ustadz Hanan Attaki & Manasik',
          route: 'Madinah Al-Munawwarah',
          activities: [
            'Memperbanyak amal ibadah dan sholat fardhu berjamaah di Masjid Nabawi.',
            'Kajian eksklusif dan sesi muhasabah bersama Ustadz Hanan Attaki di hotel.',
            'Pemantapan manasik rukun umrah sebelum keberangkatan ke Makkah Al-Mukarramah.'
          ]
        },
        {
          day: 6,
          title: 'Hari 6 (21 Nov 2026): Madinah ➔ Miqat Bir Ali ➔ Makkah & Pelaksanaan Umrah 1',
          route: 'Madinah ➔ Bir Ali ➔ Makkah',
          activities: [
            'Koper diletakkan di depan pintu kamar masing-masing untuk proses check-out dari hotel Madinah dan bersiap menuju Makkah.',
            'Pukul 14.00 LT siang: Bus eksekutif berangkat menuju Masjid Bir Ali (Dzulhulaifah) untuk mengambil Miqat dan melafazkan niat Umrah dibimbing oleh Muthawwif.',
            'Jamaah laki-laki mengenakan pakaian ihram dan mematuhi seluruh larangan ihram.',
            'Selama perjalanan darat ke Kota Makkah, jamaah memperbanyak melantunkan Talbiyah.',
            'Setibanya di Makkah langsung menuju hotel untuk meletakkan barang/koper.',
            'Jika kamar belum ready, jamaah langsung melaksanakan prosesi Ibadah Umrah Pertama (Thawaf, Sa\'i, dan Tahallul) dibimbing oleh Muthawwif & Ustadz Hanan Attaki.'
          ]
        },
        {
          day: 7,
          title: 'Hari 7 (22 Nov 2026): Ibadah Khusyuk & Sholat Jumat di Masjidil Haram',
          route: 'Makkah Al-Mukarramah',
          activities: [
            'Acara bebas untuk memperbanyak ibadah di Masjidil Haram (I\'tikaf, Thawaf Sunnah, tilawah Qur\'an di depan Ka\'bah).',
            'Siang harinya seluruh jamaah melaksanakan ibadah Sholat Jumat berjamaah di Masjidil Haram.'
          ]
        },
        {
          day: 8,
          title: 'Hari 8 (23 Nov 2026): Ziarah Jejak Sejarah Kota Makkah & Miqat Umrah 2 (Ji\'ranah)',
          route: 'Ziarah Makkah ➔ Ji\'ranah',
          activities: [
            'Tour dan Ziarah jejak sejarah Islam di sekitar Kota Makkah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdalifah, Mina, dan melewati Jabal Nur (kondisional).',
            'Singgah di Masjid Ji\'ranah untuk mengambil Miqat bagi jamaah yang ingin melaksanakan Umrah Kedua (opsional / sunnah) dengan mengenakan pakaian ihram.',
            'Kembali ke Masjidil Haram untuk pelaksanaan Thawaf, Sa\'i, dan Tahallul Umrah ke-2.'
          ]
        },
        {
          day: 9,
          title: 'Hari 9 (24 Nov 2026): Free City Tour Kota Bersejarah Thaif',
          route: 'Makkah ➔ Thaif ➔ Makkah',
          activities: [
            'Setelah sarapan, jamaah bersiap menuju Kota Pegunungan Sejuk Thaif untuk menikmati Bonus City Tour Thaif Gratis dari El Massa (wahana berbayar masing-masing).',
            'Mengunjungi Masjid Abdullah bin Abbas, Pabrik Penyulingan Minyak Wangi Mawar Thaif, pemandangan alam Teleferik, dan santap siang khas Nasi Mandhi Thaif.',
            'Perjalanan pulang melewati tempat Miqat Qarnul Manazil bagi jamaah yang ingin mengambil niat Umrah Ketiga.'
          ]
        },
        {
          day: 10,
          title: 'Hari 10 (25-26 Nov 2026): Thawaf Wada\', City Tour Jeddah, Penerbangan Jeddah ➔ Jakarta (SV818)',
          route: 'Makkah ➔ Jeddah ➔ Jakarta (Saudia)',
          activities: [
            'Setelah sarapan: Pelaksanaan Thawaf Wada\' (Thawaf Perpisahan) di Masjidil Haram.',
            'Makan siang dan meletakkan koper di depan kamar masing-masing. Check-out hotel setelah Sholat Ashar.',
            'City tour Kota Jeddah dan santap malam bersama di Corniche Jeddah pukul 22.00 LT.',
            'Menuju Bandara Internasional King Abdulaziz Jeddah.',
            'Pukul 02.20 LT (26 Nov 2026): Pesawat Saudia Airlines (SV818) take-off menuju Jakarta.',
            'Pukul 16.00 WIB (26 Nov 2026): Tiba di Bandara Soekarno-Hatta Jakarta. Check-in dan beristirahat di hotel transit Jakarta (Dprima Hotel).'
          ]
        },
        {
          day: 11,
          title: 'Hari 11 (27 Nov 2026): Penerbangan Jakarta ➔ Pangkal Pinang (Garuda GA136)',
          route: 'Jakarta ➔ Pangkal Pinang (Garuda Indonesia)',
          activities: [
            'Pukul 05.30 WIB: Jamaah berkumpul di lobby hotel transit untuk bersiap menuju bandara.',
            'Pukul 10.20 WIB: Penerbangan menuju Pangkal Pinang menggunakan maskapai Garuda Indonesia (GA136).',
            'Pukul 11.40 WIB: Tiba dengan selamat di Bandar Udara Depati Amir Pangkal Pinang.',
            'Pembagian bagasi, air zamzam 5 liter, dan bingkisan kenang-kenangan eksklusif dari El Massa.',
            'Berakhirlah seluruh rangkaian perjalanan ibadah penuh berkah bersama El Massa Tour & Travel.'
          ]
        }
      ],
      schedules: [
        {
          id: 'sch-02a',
          startCity: 'Jakarta',
          airline: 'Saudia Airlines',
          departureDate: '2026-11-17',
          returnDate: '2026-11-26',
          duration: 10,
          price: 35000000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room (Hotel Grand Almassa)',
          flightType: 'Direct SV821 Landing Madinah'
        },
        {
          id: 'sch-02b',
          startCity: 'Pangkal Pinang',
          airline: 'Saudia Airlines',
          departureDate: '2026-11-16',
          returnDate: '2026-11-27',
          duration: 11,
          price: 37600000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room (Inc. Tiket Domestik GA136 & Hotel Dprima)',
          flightType: 'Connecting PGK ➔ Saudia SV821 Landing Madinah'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 3. Umrah Nyaman Akhir Tahun
    // -------------------------------------------------------------------------
    {
      id: 'pkg-03',
      title: 'Umrah Nyaman Akhir Tahun (9 Hari)',
      category: 'Umroh Akhir Tahun',
      tags: ['Akhir Tahun', 'Start Pangkal Pinang', 'Saudia Airlines', 'Free Thaif', '9 Hari', 'Quad Room'],
      programSummary: 'Menutup tahun 2026 dengan beribadah di Baitullah bersama program Umrah Nyaman Akhir Tahun (14 – 22 Desember 2026). Keberangkatan Start Pangkal Pinang bersama Saudia Airlines direct. Hotel Sawaed Al Khaer Makkah & Daar El Naeem Madinah. Free City Tour Thaif & Pabrik Parfum. Hanya 25 Seat.',
      flyerUrl: 'images/poster-desember-akhir-tahun.jpg',
      thumbnailUrl: 'images/poster-desember-akhir-tahun.jpg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-03T08:00:00.000Z',
      hotelMakkah: 'Sawaed Al Khaer / Setaraf',
      hotelMadinah: 'Daar El Naeem / Setaraf',
      hotelExtra: 'Free City Tour Thaif & Pabrik Parfum Mawar',
      itinerary: [
        { day: 1, title: 'Hari 1 (14 Des 2026): Keberangkatan Start Pangkal Pinang – Madinah', route: 'Pangkal Pinang ➔ Jakarta ➔ Madinah (Saudia)', activities: ['Jamaah berkumpul di Bandara Depati Amir Pangkal Pinang persiapan penerbangan ke Jakarta.', 'Handling tim El Massa di Bandara Soekarno-Hatta Lounge Terminal 3.', 'Penerbangan Saudia Airlines direct menuju Madinah, check-in hotel Daar El Naeem Madinah.'] },
        { day: 2, title: 'Hari 2 (15 Des 2026): Ziarah Raudhah & Masjid Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat fardhu di Masjid Nabawi & Ziarah Raudhah Syarifah dengan tasreh resmi Nusuk.'] },
        { day: 3, title: 'Hari 3 (16 Des 2026): Ziarah Sejarah Kota Madinah', route: 'Madinah Al-Munawwarah', activities: ['Kunjungan ziarah Masjid Quba, Jabal Uhud, dan Perkebunan Kurma.'] },
        { day: 4, title: 'Hari 4 (17 Des 2026): Miqat Bir Ali & Pelaksanaan Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Ambil Miqat di Bir Ali, perjalanan darat ke Makkah Al-Mukarramah, check-in Sawaed Al Khaer, pelaksanaan Ibadah Umrah 1.'] },
        { day: 5, title: 'Hari 5 (18 Des 2026): Ibadah & Sholat Jumat di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Memperbanyak ibadah, thawaf sunnah, dan Sholat Jumat berjamaah di Masjidil Haram.'] },
        { day: 6, title: 'Hari 6 (19 Des 2026): Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, Jabal Rahmah. Miqat di Ji\'ranah untuk Umrah ke-2.'] },
        { day: 7, title: 'Hari 7 (20 Des 2026): Free City Tour Thaif & Pabrik Parfum', route: 'Makkah ➔ Thaif', activities: ['Wisata alam & sejarah ke Kota Sejuk Thaif, kunjungan Pabrik Minyak Wangi Mawar, ziarah Masjid Ibnu Abbas, makan siang Mandhi.'] },
        { day: 8, title: 'Hari 8 (21 Des 2026): Thawaf Wada\' & Menuju Bandara Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' di Masjidil Haram, check-out dan transfer menuju Bandara Internasional Jeddah.'] },
        { day: 9, title: 'Hari 9 (22 Des 2026): Tiba di Jakarta & Lanjut ke Pangkal Pinang', route: 'Jeddah ➔ Jakarta ➔ Pangkal Pinang', activities: ['Tiba di Bandara Soekarno-Hatta Jakarta dan melanjutkan penerbangan ke Pangkal Pinang.'] }
      ],
      schedules: [
        {
          id: 'sch-03',
          startCity: 'Pangkal Pinang',
          airline: 'Saudia Airlines',
          departureDate: '2026-12-14',
          returnDate: '2026-12-22',
          duration: 9,
          price: 31900000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room (Hotel Sawaed Al Khaer)',
          flightType: 'Connecting PGK ➔ Saudia Direct Landing Madinah'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 4. Umrah Nisfu Sya'ban di Mekkah
    // -------------------------------------------------------------------------
    {
      id: 'pkg-04',
      title: 'Umrah Nisfu Sya\'ban di Mekkah (9 Hari)',
      category: 'Umroh Sya\'ban',
      tags: ['Malam Nisfu Sya\'ban', 'Free Thaif', 'Start JKT & PGK', 'Saudia / Garuda', 'Quad Room'],
      programSummary: 'Meraih keutamaan malam Nisfu Sya\'ban langsung di depan Ka\'bah Masjidil Haram. Tersedia Start Jakarta & Pangkal Pinang. Maskapai Saudia / Garuda Indonesia, Free City Tour Thaif. Hotel Grand Almassa & Daar El Naeem.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-04T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Qiyamul Lail Nisfu Sya\'ban',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan menuju Madinah, check-in hotel Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi, ziarah Makam Nabi ﷺ & Raudhah.'] },
        { day: 3, title: 'Hari 3: Ziarah Sejarah Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba, Jabal Uhud, dan Kebun Kurma.'] },
        { day: 4, title: 'Hari 4: Miqat Bir Ali & Umrah Pertama di Makkah', route: 'Madinah ➔ Makkah', activities: ['Ambil Miqat di Bir Ali, perjalanan ke Makkah, pelaksanaan Umrah 1.'] },
        { day: 5, title: 'Hari 5: Ibadah Malam Nisfu Sya\'ban di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Qiyamul lail, zikir, dan doa bersama menyambut Nisfu Sya\'ban di pelataran Ka\'bah.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, dan Miqat di Ji\'ranah.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif', route: 'Makkah ➔ Thaif', activities: ['Wisata pegunungan Thaif, Teleferik, dan makan siang Mandhi.'] },
        { day: 8, title: 'Hari 8: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' dan menuju Bandara Jeddah.'] },
        { day: 9, title: 'Hari 9: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Tanah Air dengan selamat.'] }
      ],
      schedules: [
        {
          id: 'sch-04a',
          startCity: 'Jakarta',
          airline: 'Saudia Airlines',
          departureDate: '2027-01-20',
          returnDate: '2027-01-30',
          duration: 9,
          price: 34700000,
          dp: 5000000,
          availableSeats: 30,
          roomType: 'Quad Room',
          flightType: 'Direct Saudia / Garuda'
        },
        {
          id: 'sch-04b',
          startCity: 'Pangkal Pinang',
          airline: 'Saudia Airlines',
          departureDate: '2027-01-20',
          returnDate: '2027-01-30',
          duration: 9,
          price: 36200000,
          dp: 5000000,
          availableSeats: 30,
          roomType: 'Quad Room (Inc. Tiket Domestik PGK-CGK)',
          flightType: 'Connecting PGK ➔ Saudia Direct'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 5. Umrah Istimewa Awal Ramadan di Mekkah
    // -------------------------------------------------------------------------
    {
      id: 'pkg-05',
      title: 'Umrah Istimewa Awal Ramadan di Mekkah (9 Hari)',
      category: 'Umroh Awal Ramadhan',
      tags: ['Awal Ramadhan', 'Pahala Seperti Haji', 'Free Thaif', 'Start JKT & PGK', 'Transit Singkat'],
      programSummary: 'Merasakan nikmatnya awal Ramadhan, sholat tarawih dan berbuka puasa di Masjidil Haram. Tersedia Start Jakarta & Pangkal Pinang. Maskapai Qatar Airways / Etihad / Oman Air (transit singkat). Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-05T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Buka Puasa Bersama di Haram',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan maskapai bintang 5 menuju Madinah, check-in Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Ibadah Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi & Ziarah Raudhah Syarifah.'] },
        { day: 3, title: 'Hari 3: Ziarah Kota Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba dan Jabal Uhud.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Pelaksanaan Umrah Ramadhan', route: 'Madinah ➔ Makkah', activities: ['Miqat di Bir Ali, menuju Makkah, check-in Grand Almassa, pelaksanaan Umrah Ramadhan.'] },
        { day: 5, title: 'Hari 5: Buka Puasa & Tarawih di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Iftor jam\'i kurma dan air zamzam bersama jutaan jamaah di Masjidil Haram, dilanjutkan sholat Tarawih.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Jabal Rahmah, Mina, dan Miqat di Ji\'ranah.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif', route: 'Makkah ➔ Thaif', activities: ['Wisata Thaif, ziarah Masjid Ibnu Abbas, Teleferik.'] },
        { day: 8, title: 'Hari 8: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' di Masjidil Haram dan transfer ke Bandara.'] },
        { day: 9, title: 'Hari 9: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Indonesia dengan pahala umroh Ramadhan setara haji.'] }
      ],
      schedules: [
        {
          id: 'sch-05a',
          startCity: 'Jakarta',
          airline: 'Qatar Airways',
          departureDate: '2027-02-02',
          returnDate: '2027-02-10',
          duration: 9,
          price: 35700000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room',
          flightType: 'Qatar / Etihad / Oman Air (Transit Singkat)'
        },
        {
          id: 'sch-05b',
          startCity: 'Pangkal Pinang',
          airline: 'Qatar Airways',
          departureDate: '2027-02-02',
          returnDate: '2027-02-10',
          duration: 9,
          price: 37200000,
          dp: 5000000,
          availableSeats: 25,
          roomType: 'Quad Room (Inc. Tiket Domestik PGK-CGK)',
          flightType: 'Connecting PGK ➔ Qatar / Etihad'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 6. Umrah Sayang Orang Tua (Syawal 2027)
    // -------------------------------------------------------------------------
    {
      id: 'pkg-06',
      title: 'Umrah Sayang Orang Tua 10 Hari (Syawal 2027)',
      category: 'Umroh Syawal',
      tags: ['Mekkah 0 KM', 'Sayang Orang Tua', 'Free Thaif', 'Start JKT & PGK', 'Garuda / Saudia'],
      programSummary: 'Paket ramah lansia & keluarga tercinta. Tersedia Start Jakarta & Start Pangkal Pinang. Hotel Makkah Olayan Ajyad (0 km ± 1 menit jalan kaki ke Masjidil Haram). Maskapai Garuda / Saudia, Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-06T08:00:00.000Z',
      hotelMakkah: 'Olayan Ajyad (0 km ± 1 Menit ke Masjidil Haram)',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Pendampingan Ramah Lansia',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan Garuda / Saudia, penjemputan khusus lansia dan check-in Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Masjid Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Raudhah dengan pendampingan bertahap demi kenyamanan orang tua.'] },
        { day: 3, title: 'Hari 3: Ziarah Kota Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah santai Masjid Quba dan Kebun Kurma.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Umrah 1 (Hotel 0 KM)', route: 'Madinah ➔ Makkah', activities: ['Miqat di Bir Ali, check-in Olayan Ajyad (0 KM depan Masjidil Haram), pelaksanaan Umrah 1.'] },
        { day: 5, title: 'Hari 5: Ibadah Mudah & Dekat Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Akses sangat mudah 1 menit ke Masjidil Haram tanpa perlu repot transportasi shuttle.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Ji\'ranah', route: 'Ziarah Makkah', activities: ['Ziarah Padang Arafah, Jabal Rahmah, dan Miqat Ji\'ranah.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif Sejuk', route: 'Makkah ➔ Thaif', activities: ['Wisata udara sejuk Thaif, Teleferik, dan makan siang Mandhi.'] },
        { day: 8, title: 'Hari 8: Ibadah Mandiri & Doa Khusus', route: 'Makkah Al-Mukarramah', activities: ['Memperbanyak thawaf dan doa bersama orang tua tercinta.'] },
        { day: 9, title: 'Hari 9: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' dan transfer ke Bandara Jeddah.'] },
        { day: 10, title: 'Hari 10: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Jakarta / Pangkal Pinang dengan kebahagiaan beribadah bersama orang tua.'] }
      ],
      schedules: [
        {
          id: 'sch-06a',
          startCity: 'Jakarta',
          airline: 'Garuda Indonesia',
          departureDate: '2027-03-10',
          returnDate: '2027-03-19',
          duration: 10,
          price: 35700000,
          dp: 5000000,
          availableSeats: 34,
          roomType: 'Quad Room (Olayan Ajyad 0 KM)',
          flightType: 'Garuda / Saudia Direct'
        },
        {
          id: 'sch-06b',
          startCity: 'Pangkal Pinang',
          airline: 'Garuda Indonesia',
          departureDate: '2027-03-10',
          returnDate: '2027-03-19',
          duration: 10,
          price: 37200000,
          dp: 5000000,
          availableSeats: 34,
          roomType: 'Quad Room (Olayan Ajyad 0 KM + Tiket PGK)',
          flightType: 'Connecting PGK ➔ Garuda Direct'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 7. Umrah Lebih Nyaman Syawal (9 & 12 Hari)
    // -------------------------------------------------------------------------
    {
      id: 'pkg-07',
      title: 'Umrah Lebih Nyaman Syawal (9 & 12 Hari)',
      category: 'Umroh Syawal',
      tags: ['Syawal Nyaman', 'Free Thaif', 'Start JKT & PGK', 'Opsi 9 & 12 Hari', 'Saudia / Garuda'],
      programSummary: 'Merayakan suasana Syawal penuh kemenangan di Tanah Suci. Tersedia Start Jakarta & Start Pangkal Pinang dengan opsi 9 Hari dan 12 Hari. Saudia Airlines / Garuda Indonesia, Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-07T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour & Kuliner Thaif',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan menuju Madinah, check-in hotel Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi & Ziarah Raudhah Syarifah.'] },
        { day: 3, title: 'Hari 3: Ziarah Sejarah Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba, Jabal Uhud, dan Kebun Kurma.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Ambil Miqat di Bir Ali, check-in Grand Almassa, pelaksanaan Umrah 1.'] },
        { day: 5, title: 'Hari 5: Ibadah di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Memperbanyak thawaf sunnah dan ibadah di depan Ka\'bah.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Ji\'ranah', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, dan Miqat Umrah ke-2.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif', route: 'Makkah ➔ Thaif', activities: ['Wisata Thaif, ziarah Masjid Ibnu Abbas, Teleferik.'] },
        { day: 8, title: 'Hari 8: Thawaf Wada\' & Transfer Jeddah (Program 9 Hari)', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' dan transfer ke Bandara Jeddah. (Program 12 Hari: lanjut istirahat & ibadah di Makkah).'] },
        { day: 9, title: 'Hari 9: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Program 9 Hari tiba di tanah air. Program 12 Hari memperbanyak ibadah di Makkah.'] }
      ],
      schedules: [
        {
          id: 'sch-07a',
          startCity: 'Jakarta (9 Hari)',
          airline: 'Saudia Airlines',
          departureDate: '2027-03-20',
          returnDate: '2027-03-28',
          duration: 9,
          price: 31700000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (Program 9 Hari)',
          flightType: 'Saudia / Garuda Direct'
        },
        {
          id: 'sch-07b',
          startCity: 'Pangkal Pinang (9 Hari)',
          airline: 'Saudia Airlines',
          departureDate: '2027-03-20',
          returnDate: '2027-03-28',
          duration: 9,
          price: 33200000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (9 Hari + Tiket PGK)',
          flightType: 'Connecting PGK ➔ Saudia Direct'
        },
        {
          id: 'sch-07c',
          startCity: 'Jakarta (12 Hari)',
          airline: 'Garuda Indonesia',
          departureDate: '2027-03-20',
          returnDate: '2027-03-31',
          duration: 12,
          price: 34700000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (Program 12 Hari)',
          flightType: 'Garuda / Saudia Direct'
        },
        {
          id: 'sch-07d',
          startCity: 'Pangkal Pinang (12 Hari)',
          airline: 'Garuda Indonesia',
          departureDate: '2027-03-20',
          returnDate: '2027-03-31',
          duration: 12,
          price: 36200000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (12 Hari + Tiket PGK)',
          flightType: 'Connecting PGK ➔ Garuda Direct'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 8. Umrah Muharram Awal Musim (9 Hari)
    // -------------------------------------------------------------------------
    {
      id: 'pkg-08',
      title: 'Umrah Muharram Awal Musim (9 Hari)',
      category: 'Umroh Awal Musim',
      tags: ['Tahun Baru Islam', 'Awal Musim', 'Free Thaif', 'Start JKT & PGK', 'Saudia / Garuda'],
      programSummary: 'Membuka tahun baru hijriyah 1449 H dengan ibadah umroh awal musim. Tersedia Start Jakarta & Start Pangkal Pinang. Suasana Tanah Suci sangat nyaman. Saudia / Garuda Indonesia, Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-08T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Cable Car',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan Saudia / Garuda menuju Madinah, check-in hotel Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Masjid Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi & Ziarah Raudhah Syarifah.'] },
        { day: 3, title: 'Hari 3: Ziarah Sejarah Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba, Jabal Uhud, dan Kebun Kurma.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Pelaksanaan Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Miqat di Bir Ali, menuju Makkah, check-in Grand Almassa, pelaksanaan Umrah 1.'] },
        { day: 5, title: 'Hari 5: Ibadah di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Thawaf sunnah dan memperbanyak amal ibadah di Masjidil Haram.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, dan Miqat di Ji\'ranah.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif', route: 'Makkah ➔ Thaif', activities: ['Wisata alam Thaif, Teleferik, ziarah Masjid Ibnu Abbas.'] },
        { day: 8, title: 'Hari 8: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' di Masjidil Haram dan transfer ke Bandara.'] },
        { day: 9, title: 'Hari 9: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Indonesia dengan selamat.'] }
      ],
      schedules: [
        {
          id: 'sch-08a',
          startCity: 'Jakarta',
          airline: 'Saudia Airlines',
          departureDate: '2027-06-05',
          returnDate: '2027-06-13',
          duration: 9,
          price: 31700000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room',
          flightType: 'Saudia / Garuda Direct'
        },
        {
          id: 'sch-08b',
          startCity: 'Pangkal Pinang',
          airline: 'Saudia Airlines',
          departureDate: '2027-06-05',
          returnDate: '2027-06-13',
          duration: 9,
          price: 33200000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (Inc. Tiket Domestik PGK-CGK)',
          flightType: 'Connecting PGK ➔ Saudia Direct'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 9. Umrah Liburan Sekolah 9 Hari
    // -------------------------------------------------------------------------
    {
      id: 'pkg-09',
      title: 'Umrah Liburan Sekolah 9 Hari',
      category: 'Umroh Liburan Sekolah',
      tags: ['Liburan Sekolah', 'Family Umroh', 'Free Thaif', 'Start JKT & PGK', 'Qatar / Etihad'],
      programSummary: 'Mengisi momen liburan sekolah anak & keluarga dengan ibadah berkesan ke Tanah Suci. Tersedia Start Jakarta & Start Pangkal Pinang. Maskapai bintang 5 Qatar Airways / Etihad Airways (transit singkat), Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-09T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Edukasi Sejarah Islam Anak',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan maskapai bintang 5 (transit singkat), tiba di Madinah, check-in Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi, ziarah Makam Nabi ﷺ & Raudhah.'] },
        { day: 3, title: 'Hari 3: Ziarah Sejarah Edukatif Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba, Jabal Uhud, dan Museum Sejarah Madinah.'] },
        { day: 4, title: 'Hari 4: Menuju Makkah & Pelaksanaan Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Miqat di Bir Ali, menuju Makkah, check-in Grand Almassa, pelaksanaan Umrah 1 sekeluarga.'] },
        { day: 5, title: 'Hari 5: Ibadah di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Memperbanyak thawaf dan sholat berjamaah di depan Ka\'bah.'] },
        { day: 6, title: 'Hari 6: Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, dan Miqat di Ji\'ranah.'] },
        { day: 7, title: 'Hari 7: Free City Tour Thaif Menyenangkan', route: 'Makkah ➔ Thaif', activities: ['Wisata alam Thaif, naik Teleferik, ziarah Masjid Ibnu Abbas, makan Mandhi.'] },
        { day: 8, title: 'Hari 8: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' di Masjidil Haram dan transfer ke Bandara.'] },
        { day: 9, title: 'Hari 9: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Indonesia dengan kenangan liburan keluarga penuh berkah.'] }
      ],
      schedules: [
        {
          id: 'sch-09a',
          startCity: 'Jakarta',
          airline: 'Qatar Airways',
          departureDate: '2027-06-20',
          returnDate: '2027-06-28',
          duration: 9,
          price: 30900000,
          dp: 5000000,
          availableSeats: 31,
          roomType: 'Quad Room',
          flightType: 'Qatar / Etihad (Transit Singkat)'
        },
        {
          id: 'sch-09b',
          startCity: 'Pangkal Pinang',
          airline: 'Qatar Airways',
          departureDate: '2027-06-20',
          returnDate: '2027-06-28',
          duration: 9,
          price: 32400000,
          dp: 5000000,
          availableSeats: 31,
          roomType: 'Quad Room (Inc. Tiket Domestik PGK-CGK)',
          flightType: 'Connecting PGK ➔ Qatar Airways'
        }
      ]
    },

    // -------------------------------------------------------------------------
    // 10. Umrah Liburan Sekolah 12 Hari (Long Stay)
    // -------------------------------------------------------------------------
    {
      id: 'pkg-10',
      title: 'Umrah Liburan Sekolah 12 Hari (Long Stay)',
      category: 'Umroh Liburan Sekolah',
      tags: ['Liburan 12 Hari', 'Puas Beribadah', 'Free Thaif', 'Start JKT & PGK', 'Qatar / Etihad'],
      programSummary: 'Durasi lebih panjang 12 hari untuk kepuasan beribadah anak & keluarga di Makkah & Madinah selama liburan sekolah. Tersedia Start Jakarta & Start Pangkal Pinang. Qatar Airways / Etihad Airways (transit singkat), Free City Tour Thaif.',
      flyerUrl: 'images/placeholder-package.svg',
      thumbnailUrl: 'images/placeholder-package.svg',
      activeStatus: 'Aktif',
      createdAt: '2026-08-10T08:00:00.000Z',
      hotelMakkah: 'Grand Almassa Hotel Makkah',
      hotelMadinah: 'Daar El Naeem Hotel Madinah',
      hotelExtra: 'Free City Tour Thaif & Waktu Long Stay Nyaman',
      itinerary: [
        { day: 1, title: 'Hari 1: Keberangkatan (Jakarta / Pangkal Pinang) – Madinah', route: 'Jakarta / Pangkal Pinang ➔ Madinah', activities: ['Penerbangan maskapai bintang 5 menuju Madinah, check-in hotel Daar El Naeem.'] },
        { day: 2, title: 'Hari 2: Ziarah Raudhah & Nabawi', route: 'Madinah Al-Munawwarah', activities: ['Sholat di Masjid Nabawi & Ziarah Raudhah Syarifah.'] },
        { day: 3, title: 'Hari 3: Ziarah Sejarah Madinah', route: 'Madinah Al-Munawwarah', activities: ['Ziarah Masjid Quba, Jabal Uhud, dan Kebun Kurma.'] },
        { day: 4, title: 'Hari 4: Ibadah Tenang di Madinah', route: 'Madinah Al-Munawwarah', activities: ['Memperbanyak shalawat, tadarus Al-Qur\'an, dan sholat di Masjid Nabawi.'] },
        { day: 5, title: 'Hari 5: Menuju Makkah & Pelaksanaan Umrah 1', route: 'Madinah ➔ Makkah', activities: ['Miqat di Bir Ali, perjalanan ke Makkah, check-in Grand Almassa, pelaksanaan Umrah 1.'] },
        { day: 6, title: 'Hari 6: Ibadah di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Thawaf sunnah dan sholat berjamaah di depan Ka\'bah.'] },
        { day: 7, title: 'Hari 7: Ziarah Makkah & Miqat Umrah 2', route: 'Ziarah Makkah', activities: ['Ziarah Arafah, Muzdalifah, Mina, dan Miqat di Ji\'ranah.'] },
        { day: 8, title: 'Hari 8: Free City Tour Thaif', route: 'Makkah ➔ Thaif', activities: ['Wisata alam Thaif, Teleferik, ziarah Masjid Ibnu Abbas, makan Mandhi.'] },
        { day: 9, title: 'Hari 9: Ibadah Mandiri di Masjidil Haram', route: 'Makkah Al-Mukarramah', activities: ['Qiyamul lail dan memperbanyak doa di Multazam & Hijir Ismail.'] },
        { day: 10, title: 'Hari 10: Miqat Hudaibiyah / Umrah 3', route: 'Ziarah Hudaibiyah', activities: ['Mengunjungi Museum Al-Haramain dan Miqat Hudaibiyah.'] },
        { day: 11, title: 'Hari 11: Thawaf Wada\' & Transfer Jeddah', route: 'Makkah ➔ Jeddah', activities: ['Thawaf Wada\' di Masjidil Haram dan transfer ke Bandara.'] },
        { day: 12, title: 'Hari 12: Tiba di Jakarta / Pangkal Pinang', route: 'Jeddah ➔ Jakarta / Pangkal Pinang', activities: ['Tiba di Indonesia dengan predikat umroh mabrur.'] }
      ],
      schedules: [
        {
          id: 'sch-10a',
          startCity: 'Jakarta',
          airline: 'Etihad Airways',
          departureDate: '2027-06-20',
          returnDate: '2027-07-01',
          duration: 12,
          price: 33700000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room',
          flightType: 'Qatar / Etihad (Transit Singkat)'
        },
        {
          id: 'sch-10b',
          startCity: 'Pangkal Pinang',
          airline: 'Etihad Airways',
          departureDate: '2027-06-20',
          returnDate: '2027-07-01',
          duration: 12,
          price: 35200000,
          dp: 5000000,
          availableSeats: 35,
          roomType: 'Quad Room (Inc. Tiket Domestik PGK-CGK)',
          flightType: 'Connecting PGK ➔ Etihad Airways'
        }
      ]
    }
  ]
};
