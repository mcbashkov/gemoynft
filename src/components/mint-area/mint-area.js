import React from "react";
import anime from 'animejs/lib/anime.es.js';

function SingleMintItem({ icon, title, subtitle }) {
  return (
    <div className="col-md-6 col-sm-9">
      <div className="mint__item">
        <div className="mint__icon">
          <img src={`/assets/img/icons/mint-${icon}.png`} alt="icon" />
        </div>
        <div className="mint__content">
          <h3 className="title">{title}</h3>
          <p className="desc">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

const MintArea = () => {
  const animate_3 = React.useRef(null);
  React.useEffect(() => {
    animate_3.current = anime({
      targets: ".el",
      opacity: [0, 1], translateY: [24, 0],
      delay: anime.stagger(100),
      loop: false,
      // direction: "alternate",
      // easing: "easeInOutSine"
    });
  }, []);
  // const animate_1 = useRef(null);
  // const animate_2 = useRef(null);
  // const animate_3 = useRef(null);
  // // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 200,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  //   anime({
  //     targets: animate_2.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_2.current, { opacity: '1' })
  //     },
  //   })
  //   anime({
  //     targets: animate_3.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: anime.stagger(100),
  //     begin: () => {
  //       anime.set(animate_3.current, { opacity: '1' })
  //     },
  //   })
  // }, [])
  return (
    <section id="minting" className="mint-area section-pt-80 section-pb-50">
      <div className="container">
        <div
          className="row justify-content-center"
          // ref={animate_1}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">Cara Beli NFT GEMOY</h2>
              <p className="desc">
              Panduan ringkas mengenai cara pembelian produk NFT GEMOY. Untuk info lebih lanjut, hubungi kami di kontak atau gabunglah di komunitas.
                </p>
            </div>
          </div>
        </div>
        <div
          className="mint__lits-wrapper"
          // ref={animate_2}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
        >
          <img
            className="shape"
            width="16"
            src="/assets/img/objects/circle-01.png"
            alt="shape"
            style={{ top: "-16%", left: "8%" }}
          />

          <img
            className="shape"
            width="24"
            src="/assets/img/objects/circle-02.png"
            alt="shape"
            style={{ bottom: "16%", right: "-8%" }}
          />

          <img
            className="shape"
            width="28"
            src="/assets/img/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />

          <div
            className="row justify-content-center el"
            ref={animate_3}
            // style={{ opacity: "0" }}
            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
          >
            <SingleMintItem
              icon="01"
              title="Siapkan Dompet Kripto"
              subtitle="Gunakan Trust Wallet, Metamask atau dompet kripto non-kustodian lainnya."
            />
            <SingleMintItem
              icon="02"
              title="Top-up Crypto dalam Dompet"
              subtitle="Top up melalui exchanger crypto seperti Binance, Rekeningku, Pintu, dll."
            />
            <SingleMintItem
              icon="03"
              title="Beli di Open Sea Atau Mint di Sini"
              subtitle="Koleksi tersedia di Opensea dan juga dapat membeli langsung di website ini."
            />
            <SingleMintItem
              icon="04"
              title="Cek Apakah Pembelian Berhasil"
              subtitle="Produk NFT GEMOY dapat disimpan di Open Sea dan di wallet anda."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MintArea
