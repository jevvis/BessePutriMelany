'use client'

const techPalette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-sky-700', 'bg-violet-600', 'bg-orange-600', 'bg-green-700']

// warna lencana dipilih konsisten dari teksnya, jadi tag baru otomatis mendapat warna tanpa perlu didaftarkan
const techColor = (tech: string) => techPalette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % techPalette.length]

// rincian dari butir-butir pengalaman di CV (magang & pengalaman akademik)
const projects = [
  {
    number: '01',
    title: "Studi Kelayakan & Manajemen Operasional Apotek",
    description: "Mempelajari studi kelayakan, manajemen operasional, permodalan, analisis keuangan, strategi promosi dan penjualan, serta prosedur pendirian apotek.",
    framework: "FARMASI KOMUNITAS — APOTEK WAHDAH ABDESIR",
    techStack: ["Studi Kelayakan", "Manajemen Apotek", "Analisis Keuangan"],
    link: '#',
  },
  {
    number: '02',
    title: "Pengelolaan Sediaan Farmasi, Alat Kesehatan & BMHP",
    description: "Melakukan pengelolaan sediaan farmasi, alat kesehatan, dan bahan medis habis pakai (BMHP).",
    framework: "FARMASI KOMUNITAS — APOTEK WAHDAH ABDESIR",
    techStack: ["Sediaan Farmasi", "Alat Kesehatan", "BMHP"],
    link: '#',
  },
  {
    number: '03',
    title: "Pengkajian & Pelayanan Resep Racikan dan Nonracikan",
    description: "Melakukan pengkajian dan pelayanan resep racikan maupun nonracikan serta mempelajari proses penyiapan dan penyerahan obat.",
    framework: "FARMASI KOMUNITAS — APOTEK WAHDAH ABDESIR",
    techStack: ["Resep Racikan", "Resep Nonracikan", "Penyerahan Obat"],
    link: '#',
  },
  {
    number: '04',
    title: "PIO & Konseling Penggunaan Obat",
    description: "Memberikan Pelayanan Informasi Obat (PIO) dan konseling terkait penggunaan obat, termasuk kepada pasien dengan kondisi khusus.",
    framework: "FARMASI KOMUNITAS — APOTEK WAHDAH ABDESIR",
    techStack: ["PIO", "Konseling", "Pasien Kondisi Khusus"],
    link: '#',
  },
  {
    number: '05',
    title: "Home Pharmacy Care, PTO & MESO",
    description: "Mempelajari dan melakukan pelayanan Home Pharmacy Care, Pemantauan Terapi Obat, serta Monitoring Efek Samping Obat.",
    framework: "FARMASI KOMUNITAS — APOTEK WAHDAH ABDESIR",
    techStack: ["Home Pharmacy Care", "PTO", "MESO"],
    link: '#',
  },
  {
    number: '06',
    title: "Alur Produksi Obat, Pengadaan & Pengendalian Persediaan",
    description: "Mengamati alur produksi obat serta mempelajari proses pengadaan dan pengendalian persediaan bahan dan produk farmasi.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI PUSAT KESEHATAN ANGKATAN DARAT",
    techStack: ["Alur Produksi", "Pengadaan", "Pengendalian Persediaan"],
    link: '#',
  },
  {
    number: '07',
    title: "Penerapan CPOB, Peralatan Produksi & Pemeliharaan Fasilitas",
    description: "Mempelajari penerapan Cara Pembuatan Obat yang Baik (CPOB) dalam kegiatan produksi, mengenali peralatan produksi obat, serta mempelajari proses pemeliharaan fasilitas dan sistem penunjang.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI PUSAT KESEHATAN ANGKATAN DARAT",
    techStack: ["CPOB", "Peralatan Produksi", "Pemeliharaan Fasilitas"],
    link: '#',
  },
  {
    number: '08',
    title: "Fungsi PPIC, Procurement, R&D, QC & QA",
    description: "Mempelajari fungsi Production Planning and Inventory Control (PPIC), Procurement, Research and Development (R&D), Pengawasan Mutu (Quality Control/QC), dan Pemastian Mutu (Quality Assurance/QA).",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI PUSAT KESEHATAN ANGKATAN DARAT",
    techStack: ["PPIC", "Procurement", "QC", "QA"],
    link: '#',
  },
  {
    number: '09',
    title: "Produksi Tablet Parasetamol dengan Granulasi Basah",
    description: "Mengikuti proses produksi tablet parasetamol menggunakan metode granulasi basah.",
    framework: "INDUSTRI FARMASI — LEMBAGA FARMASI PUSAT KESEHATAN ANGKATAN DARAT",
    techStack: ["Tablet Parasetamol", "Granulasi Basah", "Produksi"],
    link: '#',
  },
  {
    number: '10',
    title: "Penerapan CDOB: Sistem Mutu, Perizinan & Kualifikasi Ruangan",
    description: "Mempelajari penerapan Cara Distribusi Obat yang Baik (CDOB), termasuk sistem manajemen mutu, struktur organisasi, perizinan, sertifikasi, bangunan, dan kualifikasi ruangan.",
    framework: "DISTRIBUSI OBAT — PT MITRA BERKAH FARMASI (MBF)",
    techStack: ["CDOB", "Sistem Manajemen Mutu", "Kualifikasi Ruangan"],
    link: '#',
  },
  {
    number: '11',
    title: "Perencanaan, Pengadaan & Kualifikasi Pemasok dan Pelanggan",
    description: "Mempelajari proses perencanaan dan pengadaan, kualifikasi pemasok dan pelanggan, serta ketentuan distribusi obat, termasuk produk rantai dingin, prekursor, dan Obat-Obat Tertentu (OOT).",
    framework: "DISTRIBUSI OBAT — PT MITRA BERKAH FARMASI (MBF)",
    techStack: ["Pengadaan", "Rantai Dingin", "Prekursor & OOT"],
    link: '#',
  },
  {
    number: '12',
    title: "Penyimpanan FIFO/FEFO, Pemetaan Suhu & Produk Kedaluwarsa",
    description: "Mengamati penyimpanan obat dan alat kesehatan berdasarkan prinsip FIFO (First In, First Out), FEFO (First Expired, First Out), bentuk sediaan, serta persyaratan suhu penyimpanan, dan mempelajari pemetaan suhu, pemantauan suhu dan kelembapan, serta penanganan produk rusak atau kedaluwarsa.",
    framework: "DISTRIBUSI OBAT — PT MITRA BERKAH FARMASI (MBF)",
    techStack: ["FIFO / FEFO", "Pemetaan Suhu", "Produk Kedaluwarsa"],
    link: '#',
  },
  {
    number: '13',
    title: "Studi Kasus Pelayanan Distribusi & CAPA",
    description: "Menganalisis studi kasus pelayanan distribusi dan menyusun Corrective and Preventive Action/CAPA.",
    framework: "DISTRIBUSI OBAT — PT MITRA BERKAH FARMASI (MBF)",
    techStack: ["Studi Kasus", "CAPA", "CDOB"],
    link: '#',
  },
  {
    number: '14',
    title: "Pengelolaan Sediaan Farmasi, Alat Kesehatan & BMHP",
    description: "Mempelajari pengelolaan sediaan farmasi, alat kesehatan, dan BMHP, meliputi perencanaan kebutuhan, permintaan, penerimaan, penyimpanan, pendistribusian, pengendalian, pemusnahan, pencatatan, pelaporan, dan pengarsipan.",
    framework: "PELAYANAN PRIMER — PUSKESMAS TAMALATE",
    techStack: ["Puskesmas", "Pengelolaan Sediaan", "Pelaporan"],
    link: '#',
  },
  {
    number: '15',
    title: "Pengkajian Resep, Penyerahan Obat & PIO",
    description: "Melakukan pengkajian resep, penyiapan dan penyerahan obat, serta memberikan Pelayanan Informasi Obat (PIO) pasien.",
    framework: "PELAYANAN PRIMER — PUSKESMAS TAMALATE",
    techStack: ["Pengkajian Resep", "Penyerahan Obat", "PIO"],
    link: '#',
  },
  {
    number: '16',
    title: "PTO, EPO & Pemantauan Efek Samping",
    description: "Mempelajari Pemantauan Terapi Obat (PTO), evaluasi penggunaan obat (EPO), serta pemantauan dan pelaporan efek samping.",
    framework: "PELAYANAN PRIMER — PUSKESMAS TAMALATE",
    techStack: ["PTO", "EPO", "Efek Samping Obat"],
    link: '#',
  },
  {
    number: '17',
    title: "Edukasi Obat Cacing, Vitamin Anak & Resistensi Antibiotik Lansia",
    description: "Memberikan edukasi kesehatan mengenai pemberian obat cacing dan vitamin kepada anak-anak serta edukasi kepada lansia mengenai resistensi antibiotik.",
    framework: "PELAYANAN PRIMER — PUSKESMAS TAMALATE",
    techStack: ["Edukasi Kesehatan", "Obat Cacing", "Resistensi Antibiotik"],
    link: '#',
  },
  {
    number: '18',
    title: "Pengelolaan Sediaan Farmasi, Alat Kesehatan & BMHP",
    description: "Mempelajari pengelolaan sediaan farmasi, alat kesehatan, dan BMHP, meliputi pemilihan, perencanaan kebutuhan, pengadaan, penerimaan, penyimpanan, pendistribusian, pemusnahan, penarikan, pengendalian, dan administrasi.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Pengelolaan Sediaan", "Penarikan & Pemusnahan", "Administrasi"],
    link: '#',
  },
  {
    number: '19',
    title: "Pelayanan Farmasi Klinis: Rekonsiliasi, Visite, PTO & EPO",
    description: "Mempelajari pelayanan farmasi klinis, meliputi pengkajian resep, penelusuran riwayat penggunaan obat, rekonsiliasi obat, Pelayanan Informasi Obat (PIO), konseling, visite, Pemantauan Terapi Obat (PTO), dan Evaluasi Penggunaan Obat (EPO).",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Farmasi Klinis", "Rekonsiliasi Obat", "Visite"],
    link: '#',
  },
  {
    number: '20',
    title: "Dispensing Sediaan Steril & PKOD",
    description: "Mempelajari pelayanan dispensing sediaan steril dan Pemantauan Kadar Obat dalam Darah (PKOD).",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Sediaan Steril", "Dispensing", "PKOD"],
    link: '#',
  },
  {
    number: '21',
    title: "Evaluasi Terapi & Presentasi Kasus Disartria",
    description: "Mengikuti evaluasi terapi pasien dan mempresentasikan kasus dengan diagnosis disartria yang diduga berkaitan dengan penyakit serebrovaskular nonhemoragik (CVDNH), penyakit jantung koroner (PJK), hipertensi (HT), dan hemiparesis sinistra.",
    framework: "FARMASI KLINIS — RUMAH SAKIT SILOAM MAKASSAR",
    techStack: ["Evaluasi Terapi", "Presentasi Kasus", "Disartria"],
    link: '#',
  },
  {
    number: '22',
    title: "Penyiapan Obat, Racikan Puyer & Alat Kesehatan",
    description: "Menyiapkan obat, sediaan racikan puyer dan nonracikan, serta alat kesehatan untuk pelayanan rawat inap dan rawat jalan.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUD DAYA MAKASSAR",
    techStack: ["KKN", "Racikan Puyer", "Rawat Inap & Rawat Jalan"],
    link: '#',
  },
  {
    number: '23',
    title: "Penyerahan Obat, PIO & Distribusi ke Nurse Station",
    description: "Menyerahkan obat dan alat kesehatan kepada pasien serta memberikan Pelayanan Informasi Obat (PIO), dan mendistribusikan obat dan alat kesehatan ke nurse station sesuai kebutuhan pelayanan.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUD DAYA MAKASSAR",
    techStack: ["PIO", "Nurse Station", "Distribusi Obat"],
    link: '#',
  },
  {
    number: '24',
    title: "Kartu Stok, Administrasi Gudang & Pembekalan Materi",
    description: "Melakukan pencatatan kartu stok obat dan alat kesehatan serta administrasi penerimaan dan pengeluaran barang gudang, dan mengikuti pembekalan materi kefarmasian yang disampaikan oleh Kepala Instalasi RSUD Daya Makassar.",
    framework: "KULIAH KERJA NYATA (KKN) — RSUD DAYA MAKASSAR",
    techStack: ["Kartu Stok", "Administrasi Gudang", "Pembekalan"],
    link: '#',
  },
  {
    number: '25',
    title: "Skrining Resep & Penyiapan Obat",
    description: "Melakukan skrining resep pasien umum dan membantu menyiapkan obat sesuai resep.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["Skrining Resep", "Penyiapan Obat", "Pasien Umum"],
    link: '#',
  },
  {
    number: '26',
    title: "Penerimaan Sediaan, Penyimpanan FEFO & PIO",
    description: "Membantu penerimaan serta pemeriksaan sediaan farmasi dari distributor, menata dan menyimpan obat berdasarkan prinsip FEFO (First Expired, First Out), serta memberikan PIO kepada pasien.",
    framework: "PELAYANAN RUMAH SAKIT — RS PRIMA HUSADA SENGKANG, KABUPATEN WAJO",
    techStack: ["Penerimaan Sediaan", "FEFO", "PIO"],
    link: '#',
  },
  {
    number: '27',
    title: "Pendampingan Praktikum Teknologi Sediaan Semisolida, Padat & Steril",
    description: "Mendampingi mahasiswa dalam pelaksanaan praktikum Teknologi Sediaan Semisolida, Padat, dan Steril sesuai materi serta prosedur yang ditetapkan, serta menjelaskan prosedur kerja praktikum, penggunaan bahan, dan pengoperasian peralatan laboratorium.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIK, UNIVERSITAS MUSLIM INDONESIA",
    techStack: ["Asisten Laboratorium", "Sediaan Semisolida", "Sediaan Padat", "Sediaan Steril"],
    link: '#',
  },
  {
    number: '28',
    title: "Pembimbingan Pengamatan, Laporan Praktikum & Keselamatan Laboratorium",
    description: "Membimbing mahasiswa dalam melakukan pengamatan serta menyusun laporan praktikum, dan mendukung penerapan prosedur keselamatan dan ketertiban selama kegiatan laboratorium.",
    framework: "PENGALAMAN AKADEMIK — ASISTEN LABORATORIUM FARMASEUTIK, UNIVERSITAS MUSLIM INDONESIA",
    techStack: ["Laporan Praktikum", "Keselamatan Lab", "Pembimbingan"],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">PENGALAMAN MAGANG & AKADEMIK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman Praktik & Akademik</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rincian kegiatan magang di apotek, industri farmasi, distribusi obat, puskesmas, dan rumah sakit, serta pengalaman akademik sebagai asisten laboratorium.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
