import React, { useState, useEffect } from "react";
import { Code2, Database, Zap, ArrowUp } from "lucide-react";
import Navbar from "../layouts/Navbar";
import Hero from "../layouts/Hero";
import Footer from "../layouts/Footer";
import ProjectCard from "../layouts/ProjectCard";
import SkillCard from "../layouts/SkillCard";
import ContactForm from "../layouts/ContactForm";
import CertificateCard from "../layouts/CertificateCard";
import Badge from "../ui/Badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Portfolio: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const aboutTitle = useScrollReveal();
  const aboutImage = useScrollReveal();
  const aboutText = useScrollReveal();
  const projectsTitle = useScrollReveal();
  const certificatesTitle = useScrollReveal();
  const skillsTitle = useScrollReveal();
  const contactTitle = useScrollReveal();
  const contactForm = useScrollReveal();
  const footerReveal = useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setShowScrollTop(window.scrollY > heroHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const projects = [
    {
      title: "SvaraNusa",
      description:
        "Desain antarmuka aplikasi untuk mendengarkan lagu daerah Nusantara.",
      image: "/img/project/SvaraNusa/SvaraNusa.png",
      tags: ["Figma"],
      figma: "#",
      type: "design" as const,
      fullDescription: `
          UI SvaraNusa adalah sebuah aplikasi antarmuka pengguna (User Interface/UI) yang dirancang untuk memberikan pengalaman mendengarkan lagu-lagu daerah dari seluruh nusantara. 
          Aplikasi ini bertujuan untuk melestarikan budaya musik tradisional Indonesia dengan menghadirkan platform digital yang mudah diakses dan menarik secara visual. 
          Melalui UI SvaraNusa, pengguna dapat menjelajahi dan memutar berbagai lagu daerah berdasarkan provinsi, bahasa, atau tema budaya tertentu. 
          Setiap lagu disertai informasi pendukung seperti asal daerah, arti lirik, dan latar belakang budaya. Aplikasi ini juga menyediakan fitur pencarian, playlist, dan favorit, agar pengguna dapat menyimpan dan menikmati lagu-lagu favorit mereka dengan mudah. 
          Desain UI SvaraNusa difokuskan pada antarmuka yang interaktif, estetik, dan mudah digunakan. Warna, ikon, dan elemen visual dalam aplikasi mengusung nuansa etnik dan modern secara seimbang untuk menarik minat generasi muda sekaligus menghormati nilai-nilai budaya lokal. 
          Proyek ini merupakan bagian dari upaya digitalisasi dan pelestarian budaya Indonesia melalui teknologi, khususnya dalam bidang musik tradisional daerah.
        `,
      features: [
        "Pencarian lagu berdasarkan provinsi, bahasa, atau tema budaya tertentu.",
        "Playlist yang menyimpan lagu favorit pengguna.",
        "Favorit yang menyimpan lagu favorit pengguna.",
      ],
    },
    {
      title: "GreenGarden",
      description:
        "Website rekomendasi jenis tanaman yang cocok ditanam berdasarkan suhu di lokasi yang ditentukan pengguna.",
      image: "/img/project/GreenGarden/GreenGarden_1.png",
      images: [
        "/img/project/GreenGarden/GreenGarden_1.png",
        "/img/project/GreenGarden/GreenGarden_2.png",
        "/img/project/GreenGarden/GreenGarden_3.png",
        "/img/project/GreenGarden/GreenGarden_4.png",
        "/img/project/GreenGarden/GreenGarden_5.png",
        "/img/project/GreenGarden/GreenGarden_6.png",
        "/img/project/GreenGarden/GreenGarden_7.png",
        "/img/project/GreenGarden/GreenGarden_8.png",
      ],
      tags: ["Laravel", "Tailwind", "MySQL"],
      github: "#",
      type: "development" as const,
      fullDescription: `
          GreenGarden merupakan aplikasi berbasis web yang dirancang untuk memberikan rekomendasi jenis tanaman yang cocok ditanam berdasarkan suhu di lokasi tertentu yang ditentukan oleh pengguna. Proyek ini bertujuan untuk membantu masyarakat, khususnya petani, penghobi tanaman, atau pemilik lahan, dalam menentukan tanaman yang sesuai dengan kondisi lingkungan mereka secara praktis dan berbasis data.
          Dibangun menggunakan teknologi web modern, aplikasi ini mengintegrasikan API cuaca guna memperoleh informasi suhu terkini dari lokasi pengguna. Proses analisis dilakukan dengan membandingkan data suhu aktual dengan kebutuhan suhu ideal dari berbagai jenis tanaman yang telah diklasifikasikan sebelumnya dalam basis data sistem. Dengan pendekatan ini, pengguna dapat menerima rekomendasi tanaman yang tepat dan relevan untuk ditanam di wilayah mereka, baik itu untuk skala rumahan maupun komersial.
          Selain fitur rekomendasi berbasis suhu, aplikasi ini dirancang dengan antarmuka yang sederhana, ringan, dan responsif, sehingga dapat diakses dengan nyaman melalui berbagai perangkat, termasuk smartphone. Penggunaan API juga memastikan bahwa data yang digunakan bersifat real-time dan akurat, sehingga keputusan yang diambil oleh pengguna lebih dapat diandalkan.
          Secara keseluruhan, aplikasi ini tidak hanya menunjukkan kemampuan teknis dalam mengintegrasikan API pihak ketiga ke dalam sistem, tetapi juga mencerminkan penerapan logika bisnis yang berbasis lingkungan. Proyek ini menjadi contoh nyata bagaimana teknologi web dapat dimanfaatkan untuk mendukung pertanian cerdas dan berkelanjutan di era digital.
        `,
      features: [
        "Pencarian tanaman berdasarkan suhu di lokasi tertentu.",
        "Rekomendasi tanaman yang sesuai dengan suhu di lokasi tertentu.",
        "API cuaca untuk mendapatkan informasi suhu aktual.",
        "Pengolahan data suhu aktual dan kebutuhan suhu ideal.",
        "Antarmuka yang sederhana dan responsif.",
      ],
    },
    {
      title: "EasyKost",
      description:
        "Desain antarmuka aplikasi pencarian tempat kos di wilayah Singaraja.",
      image: "/img/project/EasyKost/EasyKost.png",
      tags: ["React", "Weather API", "Mapbox", "PWA"],
      figma: "#",
      type: "design" as const,
      fullDescription: `
        UI Easy Kost adalah sebuah aplikasi antarmuka pengguna (User Interface/UI) yang dirancang untuk memudahkan pencarian tempat kos di wilayah Singaraja, Bali. Aplikasi ini bertujuan untuk membantu mahasiswa, pekerja, atau pendatang yang sedang mencari tempat tinggal sementara dengan cepat dan efisien, tanpa harus datang langsung ke lokasi satu per satu.
        Melalui UI Easy Kost, pengguna dapat melihat daftar kos yang tersedia lengkap dengan informasi penting seperti harga, fasilitas, lokasi, foto, dan kontak pemilik. Aplikasi ini juga dilengkapi dengan fitur pencarian dan filter berdasarkan kategori seperti harga, jenis kos (putra/putri/campur), jarak dari kampus atau tempat kerja, dan fasilitas yang disediakan.
        Proyek ini difokuskan pada perancangan tampilan antarmuka yang user-friendly, intuitif, dan responsif agar dapat digunakan dengan mudah oleh berbagai kalangan, baik di perangkat desktop maupun mobile. UI Easy Kost dibangun sebagai solusi digital yang mendukung kebutuhan pencarian kos secara modern di kota Singaraja.
        `,
      features: [
        "Pencarian tempat kos berdasarkan kategori.",
        "Filter berdasarkan harga, jenis kos, jarak dari kampus atau tempat kerja, dan fasilitas.",
        "Informasi lengkap tentang kos, termasuk harga, fasilitas, lokasi, foto, dan kontak pemilik.",
        "Pengguna dapat melihat daftar kos yang tersedia.",
        "Antarmuka yang responsif dan user-friendly.",
      ],
    },
    {
      title: "StudeeApp",
      description:
        "Desain antarmuka aplikasi kelas online untuk belajar desain.",
      image: "/img/project/StudeeApp/StudeeApp.png",
      tags: ["Figma", "UI/UX", "Prototyping"],
      figma: "#",
      type: "design" as const,
      fullDescription: `
        UI StudeeApp adalah sebuah aplikasi antarmuka pengguna (User Interface/UI) yang dirancang sebagai platform pembelajaran desain grafis secara digital. Aplikasi ini ditujukan bagi pemula maupun pelajar yang ingin mempelajari dasar-dasar desain dengan cara yang praktis, interaktif, dan menyenangkan.
        Melalui UI StudeeApp, pengguna dapat mengakses berbagai materi belajar seperti teori desain, prinsip warna, tipografi, layout, serta tutorial penggunaan software desain populer seperti Adobe Photoshop, Illustrator, atau Figma. Aplikasi ini juga menyediakan fitur latihan, kuis, proyek mini, dan sistem penilaian untuk mendukung proses belajar yang aktif dan terstruktur.
        Desain antarmuka StudeeApp mengedepankan prinsip clean, minimalis, dan user-friendly, agar pengguna tidak merasa kewalahan dan dapat fokus pada materi belajar. Warna-warna netral dan elemen visual yang modern dipilih untuk menciptakan suasana belajar yang nyaman dan profesional.
        Proyek ini bertujuan untuk menghadirkan solusi edukasi digital di bidang desain visual, serta mendorong lebih banyak orang untuk mengembangkan kreativitas mereka melalui teknologi.
        `,
      features: [
        "Materi belajar yang lengkap",
        "Latihan, kuis, dan proyek mini",
        "Sistem penilaian untuk mendukung proses belajar",
        "Prinsip clean, minimalis, dan user-friendly",
        "Penggunaan software desain populer seperti Adobe Photoshop, Illustrator, atau Figma",
      ],
    },
    {
      title: "GymApp",
      description:
        "Website manajemen gym yang dibangun dengan Laravel dan Tailwind CSS.",
      image:
        "/img/project/GymApp/GymApp_1.png",
      images: [
        "/img/project/GymApp/GymApp_1.png",
        "/img/project/GymApp/GymApp_2.png",
        "/img/project/GymApp/GymApp_3.png",
      ],
      tags: ["React Native", "Firebase", "Redux", "Figma"],
      github: "#",
      type: "development" as const,
      fullDescription: `
        GymApp adalah sebuah platform manajemen gym berbasis web yang dirancang untuk mempermudah pengelolaan operasional pusat kebugaran. Aplikasi ini dibangun menggunakan framework Laravel untuk sisi backend dan Tailwind CSS untuk frontend-nya, menghadirkan kombinasi antara performa tinggi dan antarmuka pengguna yang responsif serta modern. GymApp dikembangkan dengan pendekatan modular dan skalabel, memungkinkan penambahan fitur-fitur baru secara fleksibel sesuai kebutuhan bisnis gym.
        Fitur utama dari GymApp meliputi pengelolaan data member, di mana admin dapat dengan mudah menambahkan, mengedit, atau menghapus data anggota gym. Selain itu, terdapat modul manajemen trainer yang memungkinkan pengaturan informasi pelatih, termasuk spesialisasi, jadwal pelatihan, serta afiliasi mereka dengan kelas tertentu. Fitur ini sangat membantu dalam menjaga transparansi dan keteraturan dalam pembagian tugas pelatih di lapangan.
        GymApp juga dilengkapi dengan pengelolaan jadwal kelas, yang memungkinkan pembuatan jadwal harian atau mingguan untuk berbagai jenis kelas kebugaran seperti yoga, HIIT, dan spinning. Jadwal ini dapat diakses oleh member maupun trainer, sehingga seluruh pihak dapat mengatur waktu dengan lebih efisien. Untuk sisi finansial, aplikasi menyediakan sistem manajemen transaksi pembayaran yang mencakup pencatatan pembayaran member, pengingat jatuh tempo, serta histori transaksi yang tersimpan secara aman.
        Tidak kalah penting, GymApp memiliki fitur untuk pengelolaan fasilitas gym seperti ruang latihan, alat-alat olahraga, dan inventaris lainnya. Setiap fasilitas dapat didata dan dipantau ketersediaannya, sehingga penggunaan fasilitas dapat lebih optimal dan terjadwal. Dengan pendekatan sistematis dan antarmuka yang intuitif, GymApp menjadi solusi all-in-one yang membantu pengelola gym dalam menjalankan bisnis secara lebih efisien, profesional, dan terorganisir.
        `,
      features: [
        "Pengelolaan data member",
        "Manajemen trainer",
        "Pengelolaan jadwal kelas",
        "Pengelolaan transaksi pembayaran",
        "Pengelolaan fasilitas gym",
      ]
    },
  ];

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

  const certificates = [
    {
      title: "Introduction to Python Certificate",
      issuer: "Sololearn",
      date: "22 March 2024",
      description:
        "Menyelesaikan kursus pengantar Python yang mencakup dasar-dasar pemrograman seperti variabel, tipe data, struktur kontrol, fungsi, dan pemrosesan data sederhana. Kursus ini memberikan pemahaman awal yang kuat untuk mengembangkan program Python dasar.",
      image: "/img/sertifikat/sertifikat sololearn Phyton.jpg",
      credentialUrl: "#",
      skills: ["Python"],
    },
    {
      title: "Introduction to HTML",
      issuer: "Sololearn",
      date: "31 August 2023",
      description:
        "Menyelesaikan kursus dasar HTML yang mencakup elemen-elemen penting seperti struktur halaman, heading, paragraf, tautan, gambar, daftar, dan form. Kursus ini memberikan pemahaman awal dalam membangun kerangka dasar sebuah halaman web.",
      image: "/img/sertifikat/Sertifikat Sololearn HTML.jpg",
      credentialUrl: "#",
      skills: ["HTML"],
    },
    {
      title: "Introduction to CSS Certificate",
      issuer: "Sololearn",
      date: "3 September 2023",
      description:
        "Menyelesaikan kursus pengantar CSS yang membahas dasar-dasar styling seperti selektor, properti warna, font, margin, padding, border, layout, dan responsive design. Kursus ini memberikan pemahaman awal dalam mempercantik tampilan halaman web.",
      image: "/img/sertifikat/Sertifikat Sololearn CSS.jpg",
      credentialUrl: "#",
      skills: ["CSS"],
    },
    {
      title: "Introduction to C++ Certificate",
      issuer: "Sololearn",
      date: "30 April 2023",
      description:
        "Menyelesaikan kursus pengantar C++ yang mencakup konsep dasar pemrograman seperti variabel, tipe data, operator, kontrol alur, fungsi, array, dan dasar pemrograman berorientasi objek (OOP). Kursus ini memberikan fondasi kuat dalam pemrograman menggunakan C++.",
      image: "/img/sertifikat/Sertifikat Sololearn C++.jpg",
      credentialUrl: "#",
      skills: ["C++"],
    },
    {
      title: "UI Design Introduction",
      issuer: "MySkill",
      date: "13 May 2023",
      description:
        "Menyelesaikan pelatihan pengantar UI Design yang membahas prinsip dasar desain antarmuka, seperti hirarki visual, konsistensi, wireframing, dan user flow. Kursus ini memberikan pemahaman awal dalam menciptakan tampilan aplikasi yang intuitif dan menarik.",
      image:
        "/img/sertifikat/Sertifikat UI Design Introduction.jpg",
      credentialUrl: "#",
      skills: ["UI Design"],
    },
    {
      title: "Design Elements Certificate",
      issuer: "MySkill",
      date: "13 May 2023",
      description:
        "Mempelajari elemen-elemen penting dalam desain seperti warna, tipografi, bentuk, ruang, dan kontras. Kursus ini memperkuat kemampuan dalam memilih dan menggabungkan elemen desain untuk menciptakan komposisi yang efektif dan harmonis.",
      image:
        "/img/sertifikat/Sertifikat UI Design Introduction.jpg",
      credentialUrl: "#",
      skills: ["UI Design"],
    },
  ];

  const displayedCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 6);

  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Development",
      skills: [
        { name: "Laravel", level: 85 },
        { name: "PHP", level: 80 },
        { name: "MySQL", level: 80 },
      ],
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Figma", level: 85 },
      ],
    },
  ];

  const otherTechnologies = [
    "GraphQL",
    "Redux",
    "Jest",
    "Webpack",
    "Sass",
    "Material-UI",
    "Firebase",
    "Vercel",
    "Nginx",
    "Linux",
  ];

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div
              ref={aboutTitle.ref}
              className={`scroll-reveal ${
                aboutTitle.isVisible ? "animate-fade-in-down" : ""
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                About Me
              </h2>
              <p className="text-gray-400 text-center mb-16 text-lg">
                Get to know me better
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div
                ref={aboutImage.ref}
                className={`scroll-reveal ${
                  aboutImage.isVisible ? "animate-fade-in-left" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-xl"></div>
                  <img
                    src="/img/myself/santai.jpg"
                    alt="Profile"
                    className="relative rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
              <div
                ref={aboutText.ref}
                className={`space-y-6 scroll-reveal ${
                  aboutText.isVisible ? "animate-fade-in-right" : ""
                }`}
              >
                <p className="text-gray-300 leading-relaxed text-lg">
                  Hi! I'm a passionate student in the field of technology with a
                  strong interest in web development, UI/UX design, and machine
                  learning.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I love creating digital solutions that are not only visually
                  appealing but also functional and impactful. I believe
                  technology should make life easier, and I'm continuously
                  learning to build projects that combine design, data, and
                  innovation.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Currently, I'm focused on honing my skills in web development
                  and UI/UX design, and I hope to make a positive impact in the
                  world through my work.
                </p>

                <div className="flex gap-4 pt-4">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                  >
                    Let's Talk
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "5+", label: "Projects Completed" },
                { number: "6+", label: "Certificates Earned" },
                { number: "1+", label: "Years Experience" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => {
                const statReveal = useScrollReveal();
                return (
                  <div
                    key={index}
                    ref={statReveal.ref}
                    className={`text-center p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 scroll-reveal ${
                      statReveal.isVisible ? "animate-zoom-in" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Journey Timeline */}
            {/* <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                My Journey
              </h3>
              <div className="space-y-6">
                {[
                  {
                    year: "2025 - Present",
                    title: "Frond-End Developer",
                    description:
                      "Building modern web applications with React, Node.js, and exploring cloud technologies.",
                  },
                ].map((item, index) => {
                  const timelineReveal = useScrollReveal();
                  return (
                    <div
                      key={index}
                      ref={timelineReveal.ref}
                      className={`flex gap-6 scroll-reveal ${
                        timelineReveal.isVisible ? "animate-fade-in-left" : ""
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                        {index < 2 && (
                          <div className="w-0.5 h-full bg-gradient-to-b from-purple-500 to-blue-500 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                          <span className="text-purple-400 text-sm font-semibold">
                            {item.year}
                          </span>
                          <h4 className="text-xl font-bold text-white mt-2 mb-3">
                            {item.title}
                          </h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white"
      >
        <div className="container mx-auto px-6">
          <div
            ref={projectsTitle.ref}
            className={`text-center mb-16 scroll-reveal ${
              projectsTitle.isVisible ? "animate-fade-in-down" : ""
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my recent work and personal projects that showcase
              my skills and passion for development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project, index) => {
              const projectReveal = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={projectReveal.ref}
                  className={`scroll-reveal ${
                    projectReveal.isVisible ? "animate-zoom-in" : ""
                  }`}
                  style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                >
                  <ProjectCard
                    {...project}
                    className="bg-slate-900 border border-slate-700 hover:border-purple-500/50"
                  />
                </div>
              );
            })}
          </div>

          {projects.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {showAllProjects
                  ? "Show Less"
                  : `Show All Projects (${projects.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Certificates Section */}
      <section
        id="certificates"
        className="py-20 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 text-white"
      >
        <div className="container mx-auto px-6">
          <div
            ref={certificatesTitle.ref}
            className={`text-center mb-16 scroll-reveal ${
              certificatesTitle.isVisible ? "animate-fade-in-down" : ""
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Certificates & Achievements
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Professional certifications and courses I've completed to enhance
              my skills and stay updated with industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCertificates.map((certificate, index) => {
              const certReveal = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={certReveal.ref}
                  className={`scroll-reveal ${
                    certReveal.isVisible ? "animate-zoom-in" : ""
                  }`}
                  style={{ animationDelay: `${(index % 3) * 0.1}s` }}
                >
                  <CertificateCard {...certificate} />
                </div>
              );
            })}
          </div>

          {certificates.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllCertificates(!showAllCertificates)}
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                {showAllCertificates
                  ? "Show Less"
                  : `Show All Certificates (${certificates.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white"
      >
        <div className="container mx-auto px-6">
          <div
            ref={skillsTitle.ref}
            className={`text-center mb-16 scroll-reveal ${
              skillsTitle.isVisible ? "animate-fade-in-down" : ""
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency
              levels across various domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const skillReveal = useScrollReveal();
              return (
                <div
                  key={index}
                  ref={skillReveal.ref}
                  className={`scroll-reveal ${
                    skillReveal.isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <SkillCard {...category} />
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-300">
              Other Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherTechnologies.map((tech, index) => (
                <Badge key={index} variant="info">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div
            ref={contactTitle.ref}
            className={`text-center mb-16 scroll-reveal ${
              contactTitle.isVisible ? "animate-fade-in-down" : ""
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach
              out. I'd love to hear from you!
            </p>
          </div>

          <div
            ref={contactForm.ref}
            className={`max-w-2xl mx-auto scroll-reveal ${
              contactForm.isVisible ? "animate-zoom-in" : ""
            }`}
          >
            <ContactForm />
          </div>
        </div>
      </section>

      <div
        ref={footerReveal.ref}
        className={`scroll-reveal ${
          footerReveal.isVisible ? "animate-fade-in-up" : ""
        }`}
      >
        <Footer />
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 animate-bounce hover:animate-none group"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Portfolio;
