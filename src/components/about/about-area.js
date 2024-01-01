import React from "react";

const AboutArea = () => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">Tentang NFT GEMOY</h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src="/assets/img/others/features-03.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    Mendukung dan Investasi
                  </span>
                  <h2 className="title">
                    INVESTASIKAN  <br /> DUKUNGANMU
                  </h2>
                </div>
                <p>
                NFT Gemoy bukan sekadar koleksi digital; melainkan sebuah cara memberikan dukungan Anda yang berharga dan kontribusi aktif dalam perjalanan pemenangan Calon Presiden dan Calon Wakil Presiden Gemoy yaitu Prabowo-Gibran. Setiap NFT yang Anda beli menjadi perwujudan dari dukungan Anda dan juga berpotensi menjadi investasi jangka panjang dalam dunia NFT.
                </p>
                <div className="about__facts-list">
                  <div className="about__fact-item">
                    <h3 className="count">15.000++</h3>
                    <p>
                      Member tergabung <br /> sebelum launching.
                    </p>
                  </div>
                  <div className="about__fact-item">
                    <h3 className="count">2.5x ++</h3>
                    <p>Diferensiasi antara Harga Floor & Taksiran</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <img src="/assets/img/others/features-02.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 400;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    In Prabowo-Gibran We Trust
                  </span>
                  <h2 className="title">Dalam Memajukan Ekonomi Digital & Blockhain</h2>
                </div>
                <p>
                Proyek NFT ini terilhami oleh Gibran Rakabuming Raka yang menjadi satu-satunya Calon Wakil Presiden yang dengan tegas menyatakan pentingnya kemajuan teknologi blockchain untuk Indonesia dalam debat Cawapres pertama. Hasil dari penjualan NFT Proyek ini ditujukan untuk membentuk Komunitas Penggiat Blockchain dan Ekonomi Digital Indonesia. Komunitas ini akan berfokus pada mendukung dan memenangkan Prabowo-Gibran, serta mengawal Prabowo-Gibran dalam menjalankan kerja-kerjanya memajukan ekonomi digital Indonesia.
                </p>
                <div className="about__facts-list">
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-02"></i>
                    </div>
                    <p>Inovasi adalah prioritas kami</p>
                  </div>
                  <div className="about__icon-box">
                    <div className="icon">
                      <i className="unicon-select-window"></i>
                    </div>
                    <p>Investasikan dukunganmu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutArea
