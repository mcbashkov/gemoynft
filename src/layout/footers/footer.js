import { Link } from "gatsby";
import React from "react";
import { animateScroll as scroll } from 'react-scroll';

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop();
}

const Footer = () => {
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <img
            src="/assets/img/objects/ethereum-01.png"
            width="32"
            alt="object"
            style={{ top: '32%', left: '16%' }}
          />
          <img
            src="/assets/img/objects/x.png"
            width="16"
            alt="object"
            style={{ top: '8%', right: '16%' }}
          />
          <img
            src="/assets/img/objects/circle-01.png"
            width="16"
            alt="object"
            style={{ bottom: '24%', right: '40%' }}
          />
          <img
            src="/assets/img/objects/circle-03.png"
            width="24"
            alt="object"
            style={{ bottom: '-8%', left: '30%' }}
          />
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/nerko.svg"
                      width="200"
                      alt="NFT GEMOY"
                    />
                  </Link>
                </div>
                <p>
                  Bersama Ekonomi Digital Indonesia Maju.
                </p>
                <ul className="list-wrap footer__social">
                  <li>
                    <a href="https://t.me/nftpresidengemoy" target="_blank">
                    <i className="fab fa-telegram-plane"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/Vu3cuMZp" target="_blank">
                      <i className="fab fa-discord"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/nftgemoy/" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/nftgemoy" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright__wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright__text">
                  <p>&copy; {new Date().getFullYear()} NFT-GEMOY. All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="copyright__menu">
                  <ul className="list-wrap">
                    <li>
                      <a href="#">Kebijakan Privasi</a>
                    </li>
                    <li>
                      <a href="#">Syarat dan Ketentuan</a>
                    </li>
                    <li className="backTop">
                      <button
                        onClick={handleScrollToTop}
                        style={{ background: "transparent", border: "none" }}
                        className="scroll-to-target"
                        data-target="html"
                      >
                        <i className="flaticon-arrowhead-up"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
