(this["webpackJsonpreact-skeleton"]=this["webpackJsonpreact-skeleton"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),r=n.n(s),j=n(7),i=n.n(j),a=(n(13),n(14),n(2)),o=n.n(a),l=n(3),u=n(4),x=(n(6),function(e){var t=e.type,n="skeleton ".concat(t);return Object(c.jsx)("div",{className:n})}),d=function(){return Object(c.jsxs)("div",{className:"skeleton-wrapper",children:[Object(c.jsx)(x,{type:"title"}),Object(c.jsx)(x,{type:"text"}),Object(c.jsx)(x,{type:"text"}),Object(c.jsx)(x,{type:"text"})]})},b=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){setTimeout(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/posts");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),3e3)}),[]),Object(c.jsxs)("div",{style:{flexGrow:5,maxWidth:500},children:[Object(c.jsx)("h2",{children:"Articles"}),n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:e.title}),Object(c.jsx)("hr",{})]},e.id)})),!n&&[1,2,3,4,5].map((function(e){return Object(c.jsx)(d,{},e)}))]})},p=function(e){var t=e.theme,n=void 0===t?"light":t;return Object(c.jsx)("div",{className:"skeleton-wrapper ".concat(n),children:Object(c.jsxs)("div",{className:"skeleton-profile",children:[Object(c.jsx)("div",{children:Object(c.jsx)(x,{type:"avatar"})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(x,{type:"title"}),Object(c.jsx)(x,{type:"text"}),Object(c.jsx)(x,{type:"text"})]})]})})},h=function(){var e=Object(s.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(s.useEffect)((function(){setTimeout(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,r(n);case 7:case"end":return e.stop()}}),e)}))),3e3)}),[]),Object(c.jsxs)("div",{style:{flexGrow:5,maxWidth:300},children:[Object(c.jsx)("h2",{children:"User Info"}),n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:e.name}),Object(c.jsx)("p",{children:e.email}),Object(c.jsx)("p",{children:e.phone}),Object(c.jsx)("hr",{})]},e.id)})),!n&&[1,2,3].map((function(e){return Object(c.jsx)(p,{},e)}))]})};var O=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",children:"Sekeleton Demo"}),Object(c.jsxs)("div",{className:"app-container",children:[Object(c.jsx)(h,{}),Object(c.jsx)(b,{})]})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;n(e),c(e),s(e),r(e),j(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.e9007bd9.chunk.js.map