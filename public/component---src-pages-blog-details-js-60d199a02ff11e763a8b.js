"use strict";(self.webpackChunk_nerko_gatsby=self.webpackChunk_nerko_gatsby||[]).push([[135],{6945:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.AnchorLink=E;var l=c(a(7294)),n=a(1883),r=c(a(5697)),s=a(2284);function c(e){return e&&e.__esModule?e:{default:e}}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function E(e){var t=e.to,a=e.title,r=e.children,c=e.className,m=e.stripHash,o=void 0!==m&&m,E=e.gatsbyLinkProps,u=void 0===E?{}:E,d=e.onAnchorLinkClick,g=o?s.handleStrippedLinkClick:s.handleLinkClick,p=i(i({},u),{},{to:o?(0,s.stripHashedLocation)(t):t,onClick:function(e){return g(t,e,d)}});return a&&(p.title=a),c&&(p.className=c),l.default.createElement(n.Link,p,r||a)}E.propTypes={to:r.default.string.isRequired,title:r.default.string,className:r.default.string,stripHash:r.default.bool,gatsbyLinkProps:r.default.object,onAnchorLinkClick:r.default.func,children:r.default.node}},3089:function(e,t,a){Object.defineProperty(t,"P",{enumerable:!0,get:function(){return l.AnchorLink}});var l=a(6945)},8356:function(e,t,a){var l=a(7294);t.Z=()=>l.createElement("div",{className:"banner__background-wrap z-index-minus"},l.createElement("div",{className:"background",style:{backgroundImage:"url(/assets/img/bg/gradient_bg01.png"}}))},7448:function(e,t,a){var l=a(1883),n=a(7294);t.Z=()=>n.createElement("aside",{className:"blog-sidebar"},n.createElement("div",{className:"widget"},n.createElement("h3",{className:"widget-title"},"Search Here"),n.createElement("div",{className:"sidebar-search-form position-relative"},n.createElement("form",{action:"#"},n.createElement("input",{type:"text",placeholder:"Search"}),n.createElement("button",{type:"submit"},n.createElement("i",{className:"fas fa-search"}))))),n.createElement("div",{className:"widget widget_categories"},n.createElement("h3",{className:"widget-title"},"Categories"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"#"},"Forensic science"),n.createElement("span",{className:"float-right"},"12")),n.createElement("li",null,n.createElement("a",{href:"#"},"Gemological"),n.createElement("span",{className:"float-right"},"16")),n.createElement("li",null,n.createElement("a",{href:"#"},"UI/UX Deisgn"),n.createElement("span",{className:"float-right"},"14")),n.createElement("li",null,n.createElement("a",{href:"#"},"Uncategorized"),n.createElement("span",{className:"float-right"},"29")))),n.createElement("div",{className:"widget"},n.createElement("h3",{className:"widget-title"},"Recent Post"),n.createElement("div",{className:"rc-post-wrap"},n.createElement("div",{className:"rc-post-item"},n.createElement("div",{className:"rc-post-thumb"},n.createElement("a",{href:"#"},n.createElement("img",{src:"/assets/img/blog/blog_post06.jpg",alt:"img"}))),n.createElement("div",{className:"rc-post-content"},n.createElement("span",{className:"date"},n.createElement("i",{className:"far fa-calendar-alt"})," October 27, 2023"),n.createElement("h5",{className:"title"},n.createElement(l.Link,{to:"/blog-details"},"New Trends In UI/UX Design World")))),n.createElement("div",{className:"rc-post-item"},n.createElement("div",{className:"rc-post-thumb"},n.createElement("a",{href:"#"},n.createElement("img",{src:"/assets/img/blog/blog_post05.jpg",alt:"img"}))),n.createElement("div",{className:"rc-post-content"},n.createElement("span",{className:"date"},n.createElement("i",{className:"far fa-calendar-alt"})," October 27, 2023"),n.createElement("h5",{className:"title"},n.createElement(l.Link,{to:"/blog-details"},"That Time We Burned Players")))),n.createElement("div",{className:"rc-post-item"},n.createElement("div",{className:"rc-post-thumb"},n.createElement("a",{href:"#"},n.createElement("img",{src:"/assets/img/blog/blog_post04.jpg",alt:"img"}))),n.createElement("div",{className:"rc-post-content"},n.createElement("span",{className:"date"},n.createElement("i",{className:"far fa-calendar-alt"})," October 27, 2023"),n.createElement("h5",{className:"title"},n.createElement(l.Link,{to:"/blog-details"},"Morning routine boost to your mood")))))),n.createElement("div",{className:"widget widget_categories"},n.createElement("h3",{className:"widget-title"},"Popular Tag"),n.createElement("div",{className:"tagcloud"},n.createElement("a",{href:"#"},"apps"),n.createElement("a",{href:"#"},"NFT"),n.createElement("a",{href:"#"},"Blockchain"),n.createElement("a",{href:"#"},"Digital"),n.createElement("a",{href:"#"},"Art"),n.createElement("a",{href:"#"},"Backend"),n.createElement("a",{href:"#"},"website"))))},3510:function(e,t,a){var l=a(7294);t.Z=e=>{let{title:t}=e;return l.createElement("section",{className:"breadcrumb-area"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"breadcrumb__content"},l.createElement("h2",{className:"title"},t))))))}},3479:function(e,t,a){var l=a(7294);t.Z=()=>l.createElement("div",{className:"connect__modal"},l.createElement("div",{className:"modal fade",id:"connectModal",tabIndex:"-1","aria-hidden":"true"},l.createElement("div",{className:"modal-dialog modal-dialog-centered"},l.createElement("div",{className:"modal-content"},l.createElement("div",{className:"modal__wrapper"},l.createElement("div",{className:"modal__header"},l.createElement("h2",{className:"title"},"Connect Wallet"),l.createElement("button",{"data-bs-dismiss":"modal","aria-label":"Close"},l.createElement("i",{className:"flaticon-close-1"}))),l.createElement("div",{className:"modal__body text-center"},l.createElement("p",null,"Please select a wallet to connect for start Minting your NFTs"),l.createElement("div",{className:"connect__section"},l.createElement("ul",{className:"list-wrap"},l.createElement("li",null,l.createElement("a",{href:"#",className:"connect-meta"},l.createElement("img",{src:"/assets/img/icons/metamask.svg",alt:"Metamask"}),"MetaMask")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("img",{src:"/assets/img/icons/bitgo.svg",alt:"BitGo"}),"BitGo")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("img",{src:"/assets/img/icons/trust.svg",alt:"Trust"}),"Trust Wallet")),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("img",{src:"/assets/img/icons/coinbase.svg",alt:"Coinbase"}),"Coinbase")))),l.createElement("p",{className:"privacy-text"},"By connecting your wallet, you agree to our"," ",l.createElement("a",{href:"#"},"Terms of Service")," and our"," ",l.createElement("a",{href:"#"},"Privacy Policy"),".")))))))},5063:function(e,t,a){a.d(t,{Z:function(){return v}});var l=a(7294),n=a(1883),r=a(6396),s=a(6261),c=a(3089),m=a(7896),i=a(2962),o=a(3479),E=a(4138),u=a(9507);var d=e=>{let{blog_page:t}=e;const{sticky:a}=(0,E.Z)(),{0:d,1:g}=(0,l.useState)(!1);let{pathname:p}=(0,m.useLocation)(),f="";(p.startsWith("/blog")||p.startsWith("/blog-details"))&&(f="active"),(0,l.useEffect)((()=>{d?r.u9.document.body.classList.add("mobile-menu-visible"):r.u9.document.body.classList.remove("mobile-menu-visible")}),[d]);return l.createElement("header",null,l.createElement("div",{id:"sticky-header",className:"tg-header__area transparent-header "+(a?"sticky-menu":"")},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-12"},l.createElement("div",{onClick:()=>{g(!0)},className:"mobile-nav-toggler"},l.createElement("i",{className:"flaticon-menu-1"})),l.createElement("div",{className:"tgmenu__wrap"},l.createElement("nav",{className:"tgmenu__nav"},l.createElement("div",{className:"logo"},l.createElement(n.Link,{to:"/",className:"light-logo"},l.createElement("img",{src:"/assets/img/logo/nerko.svg",alt:"NFT-GEMOY"})),l.createElement(n.Link,{to:"/",className:"dark-logo"},l.createElement("img",{src:"/assets/img/logo/nerko.svg",alt:"NFT-GEMOY"}))),l.createElement("div",{className:"tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex"},l.createElement("ul",{className:"navigation"},u.iN.map(((e,a)=>l.createElement(l.Fragment,{key:a},e.hasDropdown?l.createElement("li",{className:"menu-item-has-children"},"Blog"!==e.title&&l.createElement(s.rU,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-70,duration:500,className:"section-link"},e.title),"Blog"===e.title&&l.createElement(n.Link,{className:""+f,to:e.link},e.title),l.createElement("ul",{className:"sub-menu"},e.submenus.map(((e,t)=>l.createElement("li",{key:t,className:p===""+e.link?"active":""},l.createElement(n.Link,{to:e.link},e.title)))))):t?l.createElement("li",null,l.createElement(c.P,{to:"/#"+e.link,title:e.title})):l.createElement("li",null,l.createElement(s.rU,{activeClass:"active",to:e.link,spy:!0,smooth:!0,offset:-70,duration:500,className:"section-link"},e.title))))))),l.createElement("div",{className:"tgmenu__action"},l.createElement("ul",{className:"list-wrap"},l.createElement("li",{className:"header-social"},l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-instagram"})),l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-telegram"})),l.createElement("a",{href:"#",className:"d-blcok d-xl-none","data-bs-toggle":"modal","data-bs-target":"#connectModal"},l.createElement("i",{className:"fas fa-wallet"}))),l.createElement("li",{className:"header-btn"},l.createElement("button",{className:"btn border-btn","data-bs-toggle":"modal","data-bs-target":"#connectModal"},"Connect wallet")))))),l.createElement(i.Z,{setIsSidebarOpen:g,data_1:!0}))))),l.createElement(o.Z,null))};const g=()=>{s.NY.scrollToTop()};var p=()=>l.createElement("footer",{className:"footer-area section-py-80"},l.createElement("div",{className:"container"},l.createElement("div",{className:"footer__wrapper"},l.createElement("img",{src:"/assets/img/objects/ethereum-01.png",width:"32",alt:"object",style:{top:"32%",left:"16%"}}),l.createElement("img",{src:"/assets/img/objects/x.png",width:"16",alt:"object",style:{top:"8%",right:"16%"}}),l.createElement("img",{src:"/assets/img/objects/circle-01.png",width:"16",alt:"object",style:{bottom:"24%",right:"40%"}}),l.createElement("img",{src:"/assets/img/objects/circle-03.png",width:"24",alt:"object",style:{bottom:"-8%",left:"30%"}}),l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-xl-5 col-lg-7 col-md-9 col-sm-11"},l.createElement("div",{className:"footer__info text-center"},l.createElement("div",{className:"footer-logo"},l.createElement(n.Link,{to:"/"},l.createElement("img",{src:"/assets/img/logo/nerko.svg",width:"200",alt:"NFT GEMOY"}))),l.createElement("p",null,"Bersama Indonesia maju Ekonomi Digital."),l.createElement("ul",{className:"list-wrap footer__social"},l.createElement("li",null,l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-telegram-plane"}))),l.createElement("li",null,l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-discord"}))),l.createElement("li",null,l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-instagram"}))),l.createElement("li",null,l.createElement("a",{href:"https://t.me/nftpresidengemoy",target:"_blank"},l.createElement("i",{className:"fab fa-twitter"}))))))),l.createElement("div",{className:"copyright__wrapper"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"copyright__text"},l.createElement("p",null,"© ",(new Date).getFullYear()," NFT-GEMOY. All rights reserved."))),l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"copyright__menu"},l.createElement("ul",{className:"list-wrap"},l.createElement("li",null,l.createElement("a",{href:"#"},"Kebijakan Privasi")),l.createElement("li",null,l.createElement("a",{href:"#"},"Syarat dan Ketentuan")),l.createElement("li",{className:"backTop"},l.createElement("button",{onClick:g,style:{background:"transparent",border:"none"},className:"scroll-to-target","data-target":"html"},l.createElement("i",{className:"flaticon-arrowhead-up"}))))))))))),f=a(848),b=a(7439),N=a(9242);var v=e=>{let{children:t,blog_page:a=!1}=e;const n=(0,N.Z)();return(0,l.useEffect)((()=>{n||(0,b.X)()}),[n]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement(d,{blog_page:a}),l.createElement("main",{id:a?"":"home",className:"fix"},t),l.createElement(p,null),l.createElement(f.Z,null)))}},1960:function(e,t,a){a.r(t),a.d(t,{Head:function(){return d},default:function(){return u}});var l=a(7294),n=a(1707),r=a(5063),s=a(8356),c=a(9089),m=a(3510),i=a(1883),o=a(7448);var E=()=>l.createElement("section",{className:"blog-area blog-details-area"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-8"},l.createElement("div",{className:"blog-post-item"},l.createElement("div",{className:"blog-post-thumb"},l.createElement("img",{src:"/assets/img/blog/blog_post01.jpg",alt:"img"})),l.createElement("div",{className:"blog-post-content blog-details-content"},l.createElement("div",{className:"blog-post-meta"},l.createElement("ul",{className:"list-wrap"},l.createElement("li",null,l.createElement("i",{className:"far fa-user"}),l.createElement(i.Link,{to:"/blog"},"Artwork")),l.createElement("li",null,l.createElement("i",{className:"far fa-calendar-alt"})," 28 Sept 2023"),l.createElement("li",null,l.createElement("i",{className:"far fa-comments"}),l.createElement("a",{href:"#"},"3 Comments")))),l.createElement("h2",{className:"title"},"Minimal workspace for inspiration"),l.createElement("p",null,"Repellendus quasi sapiente dolorem veniam corporis cumque laboriosam nisi eaque earum, soluta ex nemo rerum velit. consequatur amet aliquam nesciunt nemo, deserunt facilis. Duis aute irure dolor voluptate velit esse cillum dolore fugiat nulla pariatur."),l.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor consequuntur sit amet"),l.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, aperiam ipsquae ab illo inventore veritatis et quasi architecto beatae vitae dicta consequuntur sunt voluptatem voluptas explicabo"),l.createElement("div",{className:"blog-inner-wrapper"},l.createElement("div",{className:"row align-items-center"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"blog-inner-content"},l.createElement("h4",{className:"blog-inner-title"},"Our Approach"),l.createElement("p",null,"Must explain to you how all praising uts pain was born and I will gives you a itself completed account of the system."),l.createElement("ul",{className:"list-wrap"},l.createElement("li",null,l.createElement("i",{className:"fas fa-check"}),"Extramural Funding"),l.createElement("li",null,l.createElement("i",{className:"fas fa-check"}),"Bacteria Markers omnis"),l.createElement("li",null,l.createElement("i",{className:"fas fa-check"}),"Nam nec mi euismod euismod"),l.createElement("li",null,l.createElement("i",{className:"fas fa-check"}),"Sunt voluptatem voluptas")))),l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"blog-inner-images"},l.createElement("img",{src:"/assets/img/blog/blog_post03.jpg",alt:"img"}))))),l.createElement("div",{className:"blog-inner-wrapper"},l.createElement("div",{className:"blog-inner-content"},l.createElement("h4",{className:"blog-inner-title"},"What Is A Business Technology Roadmap?"),l.createElement("p",null,"Unlike detailed blueprints that lay out all tasks, deadlines, bug reports, and more along the way, technology roadmaps are high-level visual summaries highlighting a vision or plans."),l.createElement("p",null,"In an Agile approach, a technology roadmap feeds the sprint and grooming processes, providing insight into how the product will travel from start to finish it makes it easier."))),l.createElement("div",{className:"blog-inner-wrapper"},l.createElement("div",{className:"row gx-4"},l.createElement("div",{className:"col-sm-6"},l.createElement("div",{className:"blog-inner-img"},l.createElement("img",{src:"/assets/img/blog/blog_post05.jpg",alt:""}))),l.createElement("div",{className:"col-sm-6"},l.createElement("div",{className:"blog-inner-img"},l.createElement("img",{src:"/assets/img/blog/blog_post06.jpg",alt:""}))))),l.createElement("div",{className:"blog-details-bottom"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-xl-6 col-md-7"},l.createElement("div",{className:"tg-post-tag"},l.createElement("h5",{className:"tag-title"},"Post Tags :"),l.createElement("ul",{className:"list-wrap mb-0"},l.createElement("li",null,l.createElement("a",{href:"#",rel:"tag"},"Design")),l.createElement("li",null,l.createElement("a",{href:"#",rel:"tag"},"website"))))),l.createElement("div",{className:"col-xl-6 col-md-5"},l.createElement("div",{className:"blog-details-social text-md-end"},l.createElement("h5",{className:"social-title"},"Social Share :"),l.createElement("ul",{className:"list-wrap mb-0"},l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fab fa-facebook-f"}))),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fab fa-twitter"}))),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fab fa-linkedin-in"}))),l.createElement("li",null,l.createElement("a",{href:"#"},l.createElement("i",{className:"fab fa-pinterest-p"}))))))))))),l.createElement("div",{className:"col-lg-4"},l.createElement(o.Z,null)))));var u=()=>l.createElement("div",{className:"single single-post"},l.createElement(r.Z,{blog_page:!0},l.createElement(c.Z,null),l.createElement(s.Z,null),l.createElement(m.Z,{title:"Minimal workspace for inspiration"}),l.createElement(E,null)));const d=()=>l.createElement(n.p,{title:"Blog Details"})}}]);
//# sourceMappingURL=component---src-pages-blog-details-js-60d199a02ff11e763a8b.js.map