(this["webpackJsonpreact-hw-04-hooks-images"]=this["webpackJsonpreact-hw-04-hooks-images"]||[]).push([[0],{10:function(e,t,a){e.exports={ButtonWrapper:"Button_ButtonWrapper__2JMKg",Button:"Button_Button__12m_W"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__Emu2H",Modal:"Modal_Modal__2r6tO"}},12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__2jDL_",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__Duil6"}},13:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2tPbH"}},20:function(e,t,a){},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2Mufp",SearchForm:"Searchbar_SearchForm__nS64x",SearchFormButton:"Searchbar_SearchFormButton__2lLi6",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__28Nrv",SearchFormInput:"Searchbar_SearchFormInput__XSC2l"}},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a(1),n=a.n(c),o=a(7),s=a.n(o),u=(a(20),a(3)),i=a(4),l=a.n(i);function m(e){var t=e.onSubmite,a=Object(c.useState)(""),n=Object(u.a)(a,2),o=n[0],s=n[1],i=function(){s("")};return Object(r.jsx)("header",{className:l.a.Searchbar,children:Object(r.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(o),i()},children:[Object(r.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(r.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(r.jsx)("input",{className:l.a.SearchFormInput,type:"text",name:"searchQuery",value:o,onChange:function(e){var t=e.target,a=t.name,r=t.value;switch(a){case"searchQuery":s(r);break;default:return}},placeholder:"Search images and photos"})]})})}var h=a(6),j=a(13),b=a.n(j),d={fetchImagesWithQuery:function(e,t){var a="https://pixabay.com/api/?key=".concat("18743526-4b128e40a70dee342e39fe313","&q=").concat(e,"&page=").concat(t,"&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},O=a(10),f=a.n(O),g=function(e){var t=e.onClick;return Object(r.jsx)("div",{className:f.a.ButtonWrapper,children:Object(r.jsx)("button",{className:f.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})})},p=a(11),_=a.n(p),S=document.querySelector("#modal-root");function x(e){var t=e.onClose,a=e.children;Object(c.useEffect)((function(){return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));var n=function(e){"Escape"===e.code&&t()};return Object(o.createPortal)(Object(r.jsx)("div",{className:_.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(r.jsx)("div",{className:_.a.Modal,children:a})}),S)}var y=a(12),v=a.n(y);function I(e){var t=e.src,a=e.srcForLarge,n=Object(c.useState)(!1),o=Object(u.a)(n,2),s=o[0],i=o[1],l=function(){i(!s)};return Object(r.jsxs)("div",{children:[Object(r.jsx)("li",{onClick:l,className:v.a.ImageGalleryItem,children:Object(r.jsx)("img",{src:t,alt:"",className:v.a.ImageGalleryItemImage})}),s&&Object(r.jsx)(x,{onClose:l,children:Object(r.jsx)("img",{src:a,alt:"\u0431\u043e\u043b\u044c\u0448\u0430\u044f \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"})})]})}var F=a(14),B=a.n(F),w=(a(42),function(){return Object(r.jsx)(B.a,{style:{textAlign:"center"},type:"Oval",color:"#00BFFF",height:50,width:50,timeout:3e3})});function k(e){var t=e.searchQuery,a=Object(c.useState)([]),n=Object(u.a)(a,2),o=n[0],s=n[1],i=Object(c.useState)(1),l=Object(u.a)(i,2),m=l[0],j=l[1],O=Object(c.useState)(!1),f=Object(u.a)(O,2),p=f[0],_=f[1];Object(c.useEffect)((function(){t&&(_(!0),s([]),d.fetchImagesWithQuery(t,m).then((function(e){s([].concat(Object(h.a)(o),Object(h.a)(e.hits))),j(m+1),_(!1)})))}),[t]),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});return Object(r.jsxs)("div",{children:[Object(r.jsx)("ul",{className:b.a.ImageGallery,children:o.map((function(e){return Object(r.jsx)(I,{srcForLarge:e.largeImageURL,src:e.webformatURL},e.id)}))}),p&&Object(r.jsx)(w,{}),o.length>0&&Object(r.jsx)(g,{onClick:function(){return _(!0),j(m+1),d.fetchImagesWithQuery(t,m).then((function(e){s([].concat(Object(h.a)(o),Object(h.a)(e.hits))),j(m+1),_(!1)}))}})]})}a(43);function N(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),a=t[0],n=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(m,{onSubmite:function(e){n(e)}}),Object(r.jsx)(k,{searchQuery:a})]})}s.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.501dc223.chunk.js.map