import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

// sliderSetting
const sliderSetting = {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    1500: {
      slidesPerView: 1,
    },
    1200: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".tg-swiper-scrollbar",
    type: "progressbar",
  },
  // Navigation arrows
  navigation: {
    nextEl: ".tg-swiper-next",
    prevEl: ".tg-swiper-prev",
  },
}
// slider_data
const slider_data = [
  {
    id: 1,
    percent: "0",
    title: "Perencanaan",
    desc: " Target kami tinggi dalam proyek ini. Tidak hanya sebatas membuat NFT lalu menjualnya, melainkan membuat marketplace NFT sendiri dan membuat proyek metaverse yang kami namakan IKNverse. Untuk itu perencanaan matang menjadi prioritas.",
    lists: ["Rilis website dan logo", "Membangun komunitas", "Riset dan Pengembangan"],
  },
  {
    id: 2,
    percent: "25",
    title: "Rilis NFT Gemoy",
    desc: "Merilis NFT karakter Gemoy Prabowo-Gibran. Produk dirilis dalam jaringan Polygon Matic yang bisa didapatkan publik melalui marketplace NFT, disertai dengan fungsi kegunaan yang bisa ditukar dengan berbagai produk merchandise GEMOY.",
    lists: ["Launch NFT GEMOY", "Pembelian di Opensea", "Penyesuaian mint di website"],
  },
  {
    id: 3,
    percent: "50",
    title: "NFT Komunitas",
    desc: "Merilis koleksi pilihan kami dari komunitas dan publik berupa foto karya fotografi, lukisan, generating AI, dan abstrak. Koleksi ini adalah bentuk dan komitmen kami dalam membuka peluang untuk para pelaku industri kreatif.",
    lists: ["Launch NFT Komunitas", "Deklarasi dukungan", "Rilis mint di website"],
  },
  {
    id: 4,
    percent: "75",
    title: "Marketplace",
    desc: "Dalam fase ini kami akan merilis platform Gemoy NFT. Platform web3 yang dikhususkan untuk tempat jual beli NFT dari semua jaringan Blockchain. Gemoy NFT diharapkan menjadi aplikasi web3 dari Indonesia yang dapat bersaing di pasar Global.",
    lists: ["Rilis GEMOY-NFT App", "Riset dan Pengembangan", "Persiapan pembuatan Token"],
  },
  {
    id: 5,
    percent: "95",
    title: "Foundation",
    desc: "Proyek yang bagus adalah yang berjalan secara berkelanjutan dan memiliki dampak yang signifikan pada komunitas atau lingkungan. Untuk itu di fase ini kami mendirikan NFT-Gemoy Foundation yang fokus pada community development.",
    lists: ["NFT-Gemoy Foundation", "NFT Agregator", "Kelas gratis"],
  },
  {
    id: 6,
    percent: "100",
    title: "IKNverse",
    desc: "Milestone kami adalah peluncuran IKNverse, sebuah metaverse yang menyatukan semua elemen dari proyek kami. Ini akan menjadi platform immersive di mana pengguna dapat berinteraksi dengan NFT. Penamaan IKNverse sesuai kota baru IKN.",
    lists: ["Luncurkan IKNverse", "Integrasi dengan NFT Gemoy", "Kolaborasi komunitas"],
  },
]

const RoadMapArea = () => {
  return (
    <section id="roadmap" className="roadmap-area section-pt-60 section-pb-60">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Roadmap</h2>
            </div>
          </div>
        </div>
        <div
          className="roadmap__wrapper"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div >
            <Swiper
              {...sliderSetting}
              modules={[Pagination, Navigation]}
              className="roadmap__active"
              data-anime="targets: > * > *; opacity:[0, 1]; scale:[0.5, 1]; onview: -400; delay: anime.stagger(200);"
            >
              {slider_data.map(item => {
                return (
                  <SwiperSlide key={item.id}>
                  <div className="roadmap__card">
                    <div className="roadmap__percent">
                      <span>{item.percent}</span>%
                    </div>
                    <div className="roadmap__step">
                      <span className="tg-text-gradient d-inline-flex">
                        Phase 0{item.id}
                      </span>
                    </div>
                    <h3 className="roadmap__heading">{item.title}</h3>
                    <p>
                      {item.desc}
                    </p>
                    <ul className="roadmap__lists list-wrap">
                      {item.lists.map((l,i) => (
                      <li key={i}>
                        <i className="unicon-checkmark-outline tg-text-gradient d-inline-flex"></i>
                        {l}
                      </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
                )
              })}
            </Swiper>
          </div>

          <div className="tg-swiper-scrollbar"></div>

          {/* <!-- Navigation --> */}
          <a aria-label="Prev" href="#prev" className="tg-swiper-prev">
            <i className="fas fa-chevron-left"></i>
          </a>
          <a aria-label="Next" href="#next" className="tg-swiper-next">
            <i className="fas fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default RoadMapArea
