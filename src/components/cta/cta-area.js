import React from "react"

const CtaArea = () => {
  return (
    <section className="cta-area">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url(/assets/img/bg/collection_cta.png)" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content text-center">
              <img
                src="assets/img/objects/circle-01.png"
                width="24"
                alt="Object"
                style={{top:'0%',left:'-16%'}}
              />
              <img
                src="assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{bottom:'16%',right:'-8%'}}
              />
              <img
                src="assets/img/objects/ethereum-02.png"
                width="40"
                alt="Object"
                style={{top:'0%',right:'-16%'}}
              />
              <img
                src="assets/img/objects/bitcoin-01.png"
                width="48"
                alt="Object"
                style={{bottom:'16%',left:'-8%'}}
              />
              <h2 className="title">Miliki NFT GEMOY</h2>
              <a href="https://t.me/nftpresidengemoy" target="_blank" className="btn gradient-btn">
                Gabung Komunitas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaArea
