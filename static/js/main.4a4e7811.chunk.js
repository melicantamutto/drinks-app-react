(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),s=n.n(a),i=(n(64),n(2)),o=function(){return Object(i.jsxs)("header",{className:"bg-alert",children:[" ",Object(i.jsx)("h1",{children:"Busca recetas de bebidas"})," "]})},l=n(11),u=n(34),d=n(6),j=n(9),b=n.n(j),p=n(16),h=n(17),f=n.n(h),O=Object(c.createContext)(),m=function(e){var t=Object(c.useState)([]),n=Object(d.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,console.log(t.data.drinks),a(t.data.drinks);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(i.jsx)(O.Provider,{value:{categories:r},children:e.children})},v=Object(c.createContext)(),x=function(e){var t=Object(c.useState)({nameRecipe:"",category:""}),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)([]),o=Object(d.a)(s,2),l=o[0],u=o[1],j=Object(c.useState)(!1),h=Object(d.a)(j,2),O=h[0],m=h[1],x=r.nameRecipe,g=r.category;return Object(c.useEffect)((function(){O&&function(){var e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(x,"&c=").concat(g),e.next=3,f.a.get(t);case 3:n=e.sent,console.log(n.data.drinks),u(n.data.drinks);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[O]),Object(i.jsx)(v.Provider,{value:{setSearchRecipes:a,recipes:l,setConsult:m},children:e.children})},g=function(){var e=Object(c.useContext)(O).categories,t=Object(c.useContext)(v),n=t.setSearchRecipes,r=t.setConsult,a=Object(c.useState)({nameRecipe:"",category:""}),s=Object(d.a)(a,2),o=s[0],j=s[1],b=function(e){j(Object(u.a)(Object(u.a)({},o),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(i.jsxs)("form",{className:"col-12",onSubmit:function(e){return function(e){e.preventDefault(),n(o),r(!0)}(e)},children:[Object(i.jsx)("fieldset",{className:"text-center",children:Object(i.jsx)("legend",{children:"Busca bebidas por categor\xeda o ingrediente"})}),Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)("input",{type:"text",name:"nameRecipe",className:"form-control",placeholder:"Buscar por ingrediente",onChange:b})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsxs)("select",{name:"category",className:"form-control",onChange:b,children:[Object(i.jsx)("option",{value:"null",children:"Selecciona Categor\xeda"}),e.map((function(e){return Object(i.jsx)("option",{value:e.strCategory,children:e.strCategory},e.strCategory)}))]})}),Object(i.jsx)("div",{className:"col-md-4",children:Object(i.jsx)("input",{type:"submit",className:"btn btn-block btn-primary",value:"Buscar Recetas"})})]})]})},w=Object(c.createContext)(),k=function(e){var t=Object(c.useState)(null),n=Object(d.a)(t,2),r=n[0],a=n[1],s=Object(c.useState)({}),o=Object(d.a)(s,2),l=o[0],u=o[1];return Object(c.useEffect)((function(){(function(){var e=Object(p.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r),e.next=5,f.a.get(t);case 5:n=e.sent,console.log(n.data.drinks[0]),u(n.data.drinks[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(i.jsx)(w.Provider,{value:{setIdRecipe:a,getRecipe:l,setGetRecipe:u},children:e.children})},y=n(58),N=n.n(y),S=n(57);var C=Object(S.makeStyles)((function(e){return{paper:{position:"absolute",width:600,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),R=function(e){var t=e.recipe,n=t.strDrink,r=t.strDrinkThumb,a=t.idDrink,s=C(),o=Object(c.useState)(!1),l=Object(d.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)({top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}),p=Object(d.a)(b,2),h=p[0],f=(p[1],Object(c.useContext)(w)),O=f.setIdRecipe,m=f.setGetRecipe,v=f.getRecipe,x=function(){return j(!u)};return Object(i.jsx)("div",{className:"col-md-4 mb-3",children:Object(i.jsxs)("div",{className:"card",children:[Object(i.jsx)("h2",{className:"card-header",children:n}),Object(i.jsx)("img",{src:r,alt:n,className:"card-img-top"}),Object(i.jsxs)("div",{className:"card-body",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-block btn-danger",onClick:function(){O(a),x()},children:"Ver receta"}),Object(i.jsx)(N.a,{open:u,onClose:function(){O(null),m({}),x()},children:Object(i.jsxs)("div",{style:h,className:s.paper,children:[Object(i.jsx)("h2",{children:v.strDrink}),Object(i.jsx)("h3",{className:"mt-4",children:"Instrucciones"}),Object(i.jsx)("p",{children:v.strInstructions}),Object(i.jsx)("img",{src:v.strDrinkThumb,alt:"Imagen de: ".concat(v.strDrink),className:"img-fluid my-4"}),Object(i.jsx)("h3",{children:"Ingredientes y cantidades"}),Object(i.jsx)("ul",{children:function(e){for(var t=[],n=1;n<16;n++)e["strIngredient".concat(n)]&&t.push(Object(i.jsxs)("li",{children:[e["strIngredient".concat(n)],": ",e["strMeasure".concat(n)]]}))}(v)})]})})]})]})})},I=function(){var e=Object(c.useContext)(v).recipes;return Object(i.jsx)("div",{className:"row mt-5",children:e.map((function(e){return Object(i.jsx)(R,{recipe:e},e.idDrink)}))})},D=function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(o,{}),Object(i.jsxs)("div",{className:"container mt-5",children:[Object(i.jsx)("div",{className:"row",children:Object(i.jsx)(g,{})}),Object(i.jsx)(I,{})]})]})},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(m,{children:Object(i.jsx)(x,{children:Object(i.jsx)(k,{children:Object(i.jsx)(D,{})})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/drinks-app-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/drinks-app-react","/service-worker.js");W?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):B(t,e)}))}}()},64:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.4a4e7811.chunk.js.map