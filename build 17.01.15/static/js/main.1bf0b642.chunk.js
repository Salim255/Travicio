(this.webpackJsonptravisio=this.webpackJsonptravisio||[]).push([[0],{24:function(e,s,c){},25:function(e,s,c){},45:function(e,s,c){"use strict";c.r(s);var a=c(2),t=c.n(a),i=c(17),r=c.n(i),l=(c(24),c(25),c(18)),n=c(1),j=function(){return Object(n.jsx)("div",{className:"home",children:Object(n.jsxs)("div",{className:"search-section",children:[Object(n.jsx)("h2",{className:"search-section__travico",children:"Travicio"}),Object(n.jsxs)("div",{className:"search-section__searchBox",children:[Object(n.jsx)(l.a,{className:"search-section__icon"}),Object(n.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"Your City",className:"search-section__input"}),Object(n.jsx)("input",{type:"text",name:"search",id:"search",placeholder:"The work type",className:"search-section__input"})]}),Object(n.jsx)("button",{type:"submit",className:"search-section__btn",children:"search"})]})})},h=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsxs)("ul",{className:"header__list",children:[Object(n.jsx)("li",{className:"header__item",children:Object(n.jsx)("a",{href:"#",className:"header__link",children:"travicio"})}),Object(n.jsx)("li",{className:"header__item",children:Object(n.jsx)("a",{href:"#",className:"header__link",children:"workers"})}),Object(n.jsx)("li",{className:"header__item",children:Object(n.jsx)("a",{href:"#",className:"header__link",children:"about us"})}),Object(n.jsx)("li",{className:"header__item",children:Object(n.jsx)("a",{href:"#",className:"header__link",children:"contact"})})]}),Object(n.jsxs)("div",{className:"header__auth",children:[Object(n.jsx)("div",{className:"header__auth-signup",children:Object(n.jsx)("a",{href:"#",className:"header__auth-link",children:"sign-up"})}),Object(n.jsx)("div",{className:"header__auth-login",children:Object(n.jsx)("a",{href:"#",className:"header__auth-link",children:"log-in"})})]})]})})},d=function(){return Object(n.jsx)("div",{className:"shape"})},o=function(){return Object(n.jsxs)("div",{className:"footer",children:[Object(n.jsxs)("ul",{className:"footer__list",children:[Object(n.jsx)("li",{className:"footer__item",children:Object(n.jsx)("a",{href:"#",className:"footer__link",children:"home"})}),Object(n.jsx)("li",{className:"footer__item",children:Object(n.jsx)("a",{href:"#",className:"footer__link",children:"workers"})}),Object(n.jsx)("li",{className:"footer__item",children:Object(n.jsx)("a",{href:"#",className:"footer__link",children:"about us"})}),Object(n.jsx)("li",{className:"footer__item",children:Object(n.jsx)("a",{href:"#",className:"footer__link",children:"contact us"})})]}),Object(n.jsxs)("div",{className:"footer__mid",children:[Object(n.jsx)("div",{className:"footer__logo",children:Object(n.jsx)("h2",{children:"travicio"})}),Object(n.jsx)("div",{className:"footer__copyright",children:Object(n.jsx)("h1",{children:"Travicio \xa92021"})})]}),Object(n.jsx)("div",{className:"footer__social",children:Object(n.jsxs)("ul",{className:"footer__social-list",children:[Object(n.jsx)("li",{className:"footer__social-item",children:Object(n.jsx)("a",{className:"footer__social-link",href:"#",children:"facbebook"})}),Object(n.jsx)("li",{className:"footer__social-item",children:Object(n.jsx)("a",{className:"footer__social-link",href:"#",children:"instagram"})}),Object(n.jsx)("li",{className:"footer__social-item",children:Object(n.jsx)("a",{className:"footer__social-link",href:"#",children:"twitter"})})]})})]})},b=c(7),_=c(6),m=function(){var e=Object(a.useState)(!1),s=Object(b.a)(e,2),c=s[0],t=s[1],i=function(){t(!c),console.log(c)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("section",{className:"section-sideBar-header",children:Object(n.jsxs)("div",{className:"sidebar-header",children:[Object(n.jsx)("h2",{className:"sidebar-header__logo",children:Object(n.jsx)(_.a,{onClick:i})}),Object(n.jsxs)("div",{className:"sidebar-header__auth",children:[Object(n.jsx)("div",{className:"sidebar-header__auth-signup",children:Object(n.jsx)("a",{href:"#",className:"sidebar-header__auth-link",children:"sign-up"})}),Object(n.jsx)("div",{className:"sidebar-header__auth-login",children:Object(n.jsx)("a",{href:"#",className:"sidebar-header__auth-link",children:"log-in"})})]})]})}),Object(n.jsx)("section",{className:"".concat(c?"section-sideBar-nav showSidebar":"section-sideBar-nav"),children:Object(n.jsxs)("nav",{className:"".concat(c?"sidebar-nav showNavbar":"sidebar-nav"),onClick:i,children:[Object(n.jsx)("div",{className:"sidebar-nav__close",children:Object(n.jsx)(_.b,{})}),Object(n.jsxs)("ul",{className:"sidebar-nav__list",children:[Object(n.jsx)("li",{className:"sidebar-nav__item",children:Object(n.jsx)("a",{className:"sidebar-nav__link",href:"#",children:"home"})}),Object(n.jsx)("li",{className:"sidebar-nav__item",children:Object(n.jsx)("a",{className:"sidebar-nav__link",href:"#",children:"workers"})}),Object(n.jsx)("li",{className:"sidebar-nav__item",children:Object(n.jsx)("a",{className:"sidebar-nav__link",href:"#",children:"about"})}),Object(n.jsx)("li",{className:"sidebar-nav__item",children:Object(n.jsx)("a",{className:"sidebar-nav__link",href:"#",children:"contact"})})]})]})})]})},O=c(19),x=c.n(O);var N=function(){var e=Object(a.useState)([]),s=Object(b.a)(e,2),c=s[0],t=s[1];return Object(a.useEffect)((function(){x.a.get("http://localhost:8000/api/v1/tours/").then((function(e){console.log(e.data),t(e.data.data),console.log(c)})).catch((function(e){console.log(e)}))}),[]),Object(n.jsx)("div",{children:Object(n.jsx)("ul",{})})};var u=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(h,{}),Object(n.jsx)(m,{}),Object(n.jsx)(d,{}),Object(n.jsx)(j,{}),Object(n.jsx)(N,{}),Object(n.jsx)(o,{})]})},f=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,46)).then((function(s){var c=s.getCLS,a=s.getFID,t=s.getFCP,i=s.getLCP,r=s.getTTFB;c(e),a(e),t(e),i(e),r(e)}))};r.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),f()}},[[45,1,2]]]);
//# sourceMappingURL=main.1bf0b642.chunk.js.map