(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),u=(a(9),a(1)),o=(a(10),{crudadmin:"crudadmin",readonlyadmin:"readonlyadmin"});var i=function(e){var t=e.defaultCountry,a=e.disabled,c=Object(n.useState)(""),r=Object(u.a)(c,2),o=r[0],i=r[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],b=m[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),h=f[0],v=f[1];return l.a.createElement("div",null,l.a.createElement("b",null,"Country:")," ",h?o:t," "," ",d&&l.a.createElement("select",{onChange:function(e){e.target.value&&i(e.target.value)}},l.a.createElement("option",{value:""},"Select..."),l.a.createElement("option",{value:"Germany"},"Germany"),l.a.createElement("option",{value:"Russia"},"Russia")),!d&&l.a.createElement("button",{disabled:a,onClick:function(){b(!d)}},"Edit"),d&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){b(!1),v(!0)}},"Save"),l.a.createElement("button",{onClick:function(){b(!1),v(!0),i(t)}},"Cancel")))};var s=function(e){var t=e.admin,a=Object(n.useState)(""),c=Object(u.a)(a,2),r=c[0],s=c[1],m=Object(n.useState)([]),d=Object(u.a)(m,2),b=d[0],E=d[1],f=Object(n.useState)([]),h=Object(u.a)(f,2),v=h[0],p=h[1],j=Object(n.useState)(localStorage.getItem("sort")),O=Object(u.a)(j,2),g=O[0],S=O[1];function w(e,t){return e.sort((function(e,a){return"asc"===t?e.lastname.localeCompare(a.lastname):a.lastname.localeCompare(e.lastname)}))}return Object(n.useEffect)((function(){fetch("http://www.mocky.io/v2/5d7f3d17330000204ef0b027?mocky-delay=500ms").then((function(e){return e.json()})).then((function(e){p(e.users),E(g?w(e.users,g):e.users)}))}),[]),l.a.createElement("div",null,l.a.createElement("p",null,l.a.createElement("label",{htmlFor:"user-search"},"User search"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",onChange:function(e){s(e.target.value),e.target.value.length>2?E(b.filter((function(t){return t.lastname.toLowerCase().includes(e.target.value)}))):E(v)},value:r})),b.length>0&&l.a.createElement("p",null,l.a.createElement("button",{onClick:function(){var e="asc"===g?"desk":"asc";localStorage.setItem("sort",e),S(e),E(w(b,e))}},"Sort by lastname")),l.a.createElement("hr",null),b.map((function(e,a){return l.a.createElement("div",{key:a},l.a.createElement("div",null,l.a.createElement("b",null,"Surname:")," ",e.lastname),l.a.createElement("div",null,l.a.createElement(i,{defaultCountry:e.country,disabled:t===o.readonlyadmin})),l.a.createElement("hr",null))})),b&&r.length>2&&0===b.length&&l.a.createElement("div",null,"No results match criteria!"))},m="#usersearch-page";var d=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(u.a)(r,2),d=i[0],b=i[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),h=f[0],v=f[1],p=Object(n.useState)(!1),j=Object(u.a)(p,2),O=j[0],g=j[1];return Object(n.useEffect)((function(){c(window.location.hash===m),g(window.location.hash===m),b(window.location.hash===m?o.crudadmin:"")}),[]),l.a.createElement("div",{className:"App"},window.location.hash!==m&&l.a.createElement("form",{onSubmit:function(e){var t=o[d];e.preventDefault(),v(!t),g(t),t&&setTimeout((function(){window.location.hash=m,c(!0)}),1e3)},className:"form"},l.a.createElement("section",null,l.a.createElement("label",{htmlFor:"\u201cadmin-id"},"admin-id"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",id:"admin-id",name:"admin-id",onChange:function(e){v(!1),g(!1),b(e.target.value)},value:d,required:!0}),l.a.createElement("button",{type:"submit"},"login"),h&&l.a.createElement("div",{className:"error"},"This admin does not exist"),O&&l.a.createElement("div",{className:"success"},"Success! Redirecting..."))),window.location.hash===m&&a&&O&&l.a.createElement(s,{admin:d}))};r.a.render(l.a.createElement(d,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.0f5ced8a.chunk.js.map