(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9396,1911,1149,6688,4433],{2572:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var n=s(67294),l=s(62051),i=s(51801),a=s(41664),r=(s(52535),s(25675)),c=s(85893);function o(){var e=(0,n.useState)([]),t=e[0],s=e[1],l=n.useRef(null),o=n.useRef(null);return(0,n.useEffect)((function(){fetch("https://wp.royalcoster.com/wp-json/wp/v2/pages/225800",{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=[];$.each(e.acf.collection_slider,(function(){console.log(this);var e=this;fetch("https://royalcoster.com:81/royalcoster/images/getImage.php?src="+e.collection_item_img.url,{mathod:"get"}).then((function(e){return e.json()})).then((function(s){e.collectionImage=s.image,t.push(e)}))}));var n=setInterval((function(){t.length==e.acf.collection_slider.length&&(clearInterval(n),s(t))}),100)}))}),[]),(0,c.jsx)("div",{className:"collections",children:t.length>0&&(0,c.jsxs)("div",{className:"r-container",children:[(0,c.jsx)("div",{className:"row m-0 p-0 top-panel align-items-center",children:(0,c.jsx)("h2",{className:"col-12 text-center text-lg-start p-0 pb-5 mt-5",children:"Our Collections"})}),(0,c.jsx)(i.t,{navigation:{prevEl:l.current,nextEl:o.current},slidesPerView:4,spaceBetween:30,loop:!0,className:"mySwiper text-center",breakpoints:{1204:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:2},480:{slidesPerView:1},1:{slidesPerView:1}},autoplay:{delay:2500,disableOnInteraction:!1,pauseOnMouseEnter:!0},onSwiper:function(e){setTimeout((function(){e.params.navigation.prevEl=l.current,e.params.navigation.nextEl=o.current,e.navigation.destroy(),e.navigation.init(),e.navigation.update()}))},children:t.map((function(e,t){if(""!=e.collection_item_img_title)return(0,c.jsx)(i.o,{children:(0,c.jsx)(a.default,{passHref:!0,href:e.collection_item_url,children:(0,c.jsx)("a",{children:(0,c.jsxs)("div",{style:{width:300,height:300,maxWidth:300,maxHeight:300},children:[(0,c.jsx)(r.default,{alt:"Category",src:e.collectionImage,layout:"fill",objectFit:"cover",quality:100}),(0,c.jsx)("p",{style:{bottom:5,left:10,zIndex:1,position:"absolute",color:"white"},className:"mt-3",children:e.collection_item_img_title})]})})})},t)}))}),(0,c.jsxs)("div",{className:"btn-bottom-panel mt-5 text-center text-md-start",children:[(0,c.jsx)("button",{ref:l,className:"btn px-0 me-5",children:(0,c.jsx)("img",{loading:"lazy",src:"/img/common/leftArrow_black.png",alt:"rightArrow"})}),(0,c.jsx)("button",{ref:o,className:"btn px-0",children:(0,c.jsx)("img",{loading:"lazy",src:"/img/common/rightArrow_black.png",alt:"rightArrow"})})]})]})})}l.ZP.use([l.pt,l.W_])},11911:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var n=s(67294),l=s(41664),i=s(85893);function a(){var e=[{img:"Frame.png",url:"#"},{img:"Frame-1.png",url:"#"},{img:"Frame-2.png",url:"#"},{img:"Frame-3.png",url:"#"},{img:"Frame-4.png",url:"#"},{img:"Frame-5.png",url:"#"},{img:"Frame-6.png",url:"#"},{img:"Frame-7.png",url:"#"},{img:"Frame-8.png",url:"#"},{img:"Frame-9.png",url:"#"},{img:"Frame-11.png",url:"#"},{img:"Frame-12.png",url:"#"}];var t=(0,n.useState)(!1),s=t[0],a=t[1],r=(0,n.useState)(!1),c=(r[0],r[1]),o=(0,n.useState)(),d=o[0],m=o[1];return(0,n.useEffect)((function(){s||(fetch("https://wp.royalcoster.com/wp-json/wp/v2/page_templates?slug=footer"+(localStorage.language,""),{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=[];console.log(e),$.each(e[0].acf.submenu,(function(){var e={};e.title=this.title;var s=[];$.each(this.menus,(function(){var e={};e.link=this.text,e.url=this.url,s.push(e)})),e.url=s,t.push(e)})),m(t),c(!0)})),a(!0))})),(0,i.jsxs)("div",{className:"footer pt-5",id:"footer",children:[(0,i.jsx)("div",{className:"main-footer r-container d-md-block d-none",children:d&&(0,i.jsx)("div",{className:"footer-middle row p-0 m-0 pt-5",children:d.map((function(e,t){return(0,i.jsxs)("div",{className:"col-lg-3 col-md-6 col-12 text-md-start text-center m-0 mb-5",children:[(0,i.jsx)("h3",{className:"mb-5",children:e.title}),e.url.map((function(e,t){return(0,i.jsx)(l.default,{passHref:!0,href:e.tags?{pathname:e.url,query:{tags:e.tags,productType:e.product_type}}:e.url,children:(0,i.jsx)("a",{className:"row m-0 mb-3 text-uppercase",children:e.link})},t)}))]},t)}))})}),(0,i.jsxs)("div",{className:"mobile-footer r-container d-md-none d-block",children:[(0,i.jsxs)("div",{className:"mobile-footer-logo text-center",children:[(0,i.jsx)("img",{src:"/img/common/logo_black.png",alt:"footer-logo"}),(0,i.jsx)("p",{className:"mobile-footer__title my-5",children:"The oldest diamond polishing factory in the world. Home of the Royal 201."})]}),(0,i.jsxs)("div",{className:"accordion",id:"links-panel",children:[d&&d.map((function(e,t){return(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",children:(0,i.jsx)("button",{className:"accordion-button collapsed py-5 ps-0","data-bs-toggle":"collapse","data-bs-target":"#footerIndex"+t,children:e.title})}),(0,i.jsx)("div",{className:"accordion-collapse collapse",id:"footerIndex"+t,children:(0,i.jsx)("div",{className:"accordion-body",children:e.url.map((function(e,t){return(0,i.jsx)(l.default,{passHref:!0,href:e.url,children:(0,i.jsx)("a",{children:(0,i.jsx)("div",{className:"link-item mb-5 text-uppercase",children:e.link})})},t)}))})})]},t)})),(0,i.jsxs)("div",{className:"accordion-item",children:[(0,i.jsx)("h2",{className:"accordion-header",children:(0,i.jsx)("button",{className:"accordion-button collapsed py-5 ps-0","data-bs-toggle":"collapse","data-bs-target":"#footerPrivacy",children:"Privacy"})}),(0,i.jsx)("div",{className:"accordion-collapse collapse",id:"footerPrivacy",children:(0,i.jsxs)("div",{className:"accordion-body",children:[(0,i.jsx)(l.default,{passHref:!0,href:"/privacy-policy",children:(0,i.jsx)("a",{children:(0,i.jsx)("div",{className:"link-item mb-5 text-uppercase",children:"Privacy Policy"})})}),(0,i.jsx)(l.default,{passHref:!0,href:"#",children:(0,i.jsx)("a",{children:(0,i.jsx)("div",{className:"link-item mb-5 text-uppercase",children:"Terms"})})})]})})]})]}),(0,i.jsx)("div",{className:"col-12 py-4 px-0 text-center",children:e.map((function(e,t){return(0,i.jsx)(l.default,{passHref:!0,href:e.url,children:(0,i.jsx)("a",{className:0==t?"ms-0":"ms-4",children:(0,i.jsx)("img",{src:"/img/common/"+e.img,alt:"payment-getway",width:"38",className:"my-2"})})},t)}))})]}),(0,i.jsx)("div",{className:"footer-bottom r-container py-3",children:(0,i.jsxs)("div",{className:"row m-auto align-items-center p-0",children:[(0,i.jsxs)("div",{className:"col-md-5 text-md-start text-center px-0 text-uppercase",children:[(0,i.jsxs)("div",{className:"mb-3 text-decoration-underline",children:[(0,i.jsx)(l.default,{passHref:!0,href:"/privacy-policy",children:(0,i.jsx)("a",{className:"text-uppercase",children:"Privacy Policy"})}),(0,i.jsx)(l.default,{passHref:!0,href:"#",children:(0,i.jsx)("a",{className:"text-uppercase ms-5",children:"Terms"})})]}),"\xa9 2020 Royal Coster Diamonds - All rights reserved"]}),(0,i.jsx)("div",{className:"col-md-7 d-md-block d-none px-0 mt-md-0 mt-3 text-md-end text-center",children:e.map((function(e,t){return(0,i.jsx)("a",{className:0==t?"ms-0":"ms-4",children:(0,i.jsx)("img",{src:"/img/common/"+e.img,alt:"payment-getway",width:"38",className:"my-4"})},t)}))})]})})]})}},22124:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var n=s(41664),l=s(85893);function i(){return(0,l.jsx)("div",{className:"help",children:(0,l.jsx)("div",{className:"r-container",children:(0,l.jsx)("div",{className:"row mx-0 justify-content-end",children:(0,l.jsxs)("div",{className:"col-lg-6 col-md-8 col-sm-10 col-12 px-0",children:[(0,l.jsxs)("div",{className:"text-panel",children:[(0,l.jsxs)("h2",{className:"title text-capitalize",children:["Let us ",(0,l.jsx)("span",{children:"help you!"})]}),(0,l.jsx)("p",{children:"Help you to get started."})]}),(0,l.jsxs)("div",{className:"service_panel round p-5",children:[(0,l.jsx)("h3",{className:"title mb-4",children:"Ring Recommender"}),(0,l.jsx)("p",{className:"mb-5 pb-4",children:"Tell us your budget and preferences and we\u2019ll find you the right diamond and setting."}),(0,l.jsx)(n.default,{passHref:!0,href:"/custom-jewelry",children:(0,l.jsx)("a",{className:"design-service pink-btn round-form text-uppercase py-4 px-5",children:"Custom Design Services"})})]})]})})})})}},1149:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});s(67294);var n=s(24186),l=s(79352),i=s(41664),a=s(85893);function r(){return(0,a.jsxs)("div",{className:"visit-panel my-5 r-container row round",children:[(0,a.jsx)("div",{className:"col-lg-6 bg-panel order-lg-last"}),(0,a.jsx)("div",{className:"col-lg-6 form-panel d-flex flex-column justify-content-between p-5 pe-lg-0 pe-5",children:(0,a.jsxs)("div",{className:"text-panel text-white p-md-5 pe-lg-0 pe-5 pt-5 p-0 pe-0",children:[(0,a.jsxs)("h3",{className:"title col-sm-9 col-12 mb-4",children:["Visit ",(0,a.jsx)("span",{children:"Royal"})," Coster"]}),(0,a.jsx)("p",{className:"text-capitalize col-sm-9 col-12 mb-0",children:"Book an experience and learn about our heritage or visit us to see more diamonds & jewelry"}),(0,a.jsxs)("div",{className:"btn-panel d-flex justify-content-between flex-wrap mt-3",children:[(0,a.jsx)(i.default,{href:"/tour",children:(0,a.jsxs)("a",{className:"btn book-btn round-form pink-btn d-flex align-items-center justify-content-between px-5 py-3 mt-4 col-sm-9 col-12",children:[(0,a.jsx)("span",{className:"text-uppercase",children:"Book tours & workshops"}),(0,a.jsx)(l.nzV,{})]})}),(0,a.jsxs)("div",{className:"d-flex justify-content-sm-start justify-content-around flex-fill mt-4",children:[(0,a.jsx)(i.default,{href:"tel:+310203055555",children:(0,a.jsx)("a",{className:"contact-btn ms-3 pink-outline-btn btn round-form px-3 py-3",children:(0,a.jsx)(l.XAr,{})})}),(0,a.jsx)(i.default,{href:"/contact#direction",children:(0,a.jsx)("a",{className:"direction-btn ms-3 pink-outline-btn btn round-form px-3 py-3",children:(0,a.jsx)(l.ANQ,{})})})]})]})]})})]})}function c(){return(0,a.jsxs)("div",{className:"schedule ",children:[(0,a.jsx)(r,{}),(0,a.jsx)(n.Z,{})]})}},89725:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSG:function(){return x},default:function(){return f}});var n=s(67294),l=(s(41664),s(9008)),i=s(33274),a=s(11911),r=s(68341),c=s.n(r),o=s(1149),d=s(2572),m=s(22124),u=s(56239),h=s(85893),p="linear-gradient(180deg, #01215c 0%, rgba(1, 33, 92, 0) 50%),",x=!0;function f(e){var t=e.data,s=e.customData,r=(0,n.useState)(),x=(r[0],r[1],(0,n.useState)()),f=x[0],g=x[1],j=t.acf.landing.slider[0],v=(t.acf.product_row,[s[0].content]),N=s[0].title.rendered;return(0,n.useEffect)((function(){g(window.innerWidth<576);var e=setInterval((function(){$("#video").height()>0&&(clearInterval(e),setTimeout((function(){$(window).width()<576&&$("#video").parent().css({height:$("#video").height()}),$("#video").css({visibility:"visible"})}),2e3))}),100)}),[]),(0,h.jsxs)("div",{className:"homepage",children:[(0,h.jsx)(l.default,{children:(0,h.jsx)("title",{children:"Home | Royal Coster"})}),(0,h.jsx)(i.default,{page:"homepage"}),(0,h.jsx)("div",{className:"hero",style:{height:670,backgroundImage:(null!==j&&void 0!==j&&j.mobile.image&&f||j)&&p+"url("+s[0].acf.featured_image.url+")"},children:!f&&s&&(0,h.jsx)("div",{className:"r-container d-none d-sm-flex flex-column",style:{position:"absolute",color:"white",bottom:0,width:"100%",maxWidth:"1280px",margin:"auto",paddingLeft:"12%"},children:(0,h.jsx)("div",{className:"text-panel col-lg-6 col-md-8 col-sm-10 col-12",children:(0,h.jsx)("h1",{className:"text-capitalize text-left",style:{color:"white",marginBottom:50},children:j.title&&c()(N)})})})}),s&&f&&(0,h.jsx)("div",{style:{position:"absolute",bottom:80,width:"100%",paddingLeft:25,paddingRight:25,margin:"auto",color:"white",fontSize:28},children:(0,h.jsx)("div",{className:"text-panel col-lg-6 col-md-8 col-sm-10 col-12",children:(0,h.jsx)("h1",{className:"text-capitalize text-left",style:{fontSize:35},children:j.title&&c()(N)})})}),(0,h.jsx)("div",{className:"category d-md-flex row m-0",children:null===v||void 0===v?void 0:v.map((function(e,t){return(0,h.jsx)("div",{className:"col-lg-12 col-sm-12 col-12 p-0 mb-4",children:(0,h.jsx)("p",{className:"guide-text mb-4",style:{marginTop:20,paddingLeft:"5%",paddingRight:"5%",fontSize:18,lineHeight:"150%",fontWeight:400,color:"rgba(2, 24, 37, 0.8)"},children:c()(e.rendered)})},t)}))}),(0,h.jsx)("div",{className:"collection-section",style:{top:"-85px"},children:(0,h.jsx)(d.default,{})}),(0,h.jsx)(m.Z,{}),(0,h.jsx)(u.default,{}),(0,h.jsx)(o.default,{}),(0,h.jsx)(a.default,{})]})}},67077:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy-policy",function(){return s(89725)}])},45179:function(){},49708:function(e,t,s){"use strict";var n=s(67294);function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var i="_2R-kh",a="_wPDyp",r="_vzTHL",c="_3xnQP",o="_3lhLL";n.Component}},function(e){e.O(0,[3808,6239,9774,2888,179],(function(){return t=67077,e(e.s=t);var t}));var t=e.O();_N_E=t}]);