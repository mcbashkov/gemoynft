import React from "react";
import SingleFaq from "./single-faq";

// faq items
const faq_items = [
  {
    id: "One",
    title: "Bagaimana mengetahui informasi terupdate tentang proyek NFT GEMOY? ",
    show: true,
    desc: "Setiap rilisan dan perkembangan proyek akan dikomunikasikan melalui kanal media sosial dan komunitas yang dikelola tim GEMOY. Pastikan mengikuti perkembangannya.",
  },
  {
    id: "Two",
    title: "Bagaimana Cara Memiliki Produk NFT GEMOY?",
    desc: "Produk NFT GEMOY bisa dibeli oleh publik melalui transaksi di marketplace NFT sesuai dengan koleksinya. Untuk fase pertama kami hanya menjual di Open Sea untuk memudahkan. Pada fase berikutnya, setiap NFT bisa langsung dicetak di website resmi kami di nftgemoy.com.",
    parent: "accordionFaq",
  },
  {
    id: "Three",
    title: "Apa yang Akan Saya Dapatkan dengan Memiliki Produk NFT GEMOY?",
    desc: "Selain NFT yang terdaftar dalam jaringan blockchain, pemilik NFT GEMOY juga akan mendapatkan berbagai fungsi guna (utilities) yang bisa dikonversi ke berbagai produk. Pemilik NFT juga mendapatkan role khusus dalam kanal komunitas Gemoy yang sewaktu-waktu mendapatkan akses eksklusif ke berbagai event.",
    parent: "accordionFaq",
  },
  {
    id: "Four",
    title: "Apakah NFT yang saya miliki bisa berpindah kepemilikannya?",
    desc: "Ya, Anda bisa memindahkan kepemilikan melalui proses transaksi via fitur yang disediakan marketplace Open Sea dan marketplace kami yang kini sedang dalam tahap pengembangan. Setiap transaksi akan ada royalty yang diberikan kepada kreator (NFT GEMOY).",
    parent: "accordionFaq",
  },
  {
    id: "Five",
    title: "Benefit apa yang didapatkan?",
    desc: "Anda bisa memantau benefit lainnya di kanal-kanal komunitas kami yang ada di Telegram, Twitter, Instagram, Facebook, dan Discord.",
    parent: "accordionFaq",
  },
  // {
  //   id: "Six",
  //   title: "What is your contract address?",
  //   desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.",
  //   parent: "accordionFaq",
  // },
]

const FaqArea = ({spacing,style_2=false}) => {
  return (
    <section className={`faq-area ${style_2?"faq-style-two":""} ${spacing?spacing:"section-py-80"}`}>
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">Pertanyaan Umum</h2>
              <p className="desc">
              Informasi seputar proyek NFT GEMOY dalam bentuk FAQ atau pertanyaan yang sering sekali ditanyakan.
                </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xxl-7 col-xl-9 col-lg-10">
            <div
              className="faq__wrapper"
              data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
            >
              <div className="accordion" id="accordionFaq">
                {faq_items.map((item) => (
                  <SingleFaq key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqArea
