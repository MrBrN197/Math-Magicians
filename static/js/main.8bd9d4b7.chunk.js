(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{12:function(t,e,n){t.exports={quoteBox:"Quote_quoteBox__2dfUb",quote:"Quote_quote__3pwum",author:"Quote_author__1yho0"}},19:function(t,e,n){t.exports={header:"Header_header__8r_hx"}},22:function(t,e,n){t.exports={home:"Home_home__2u9Os"}},28:function(t,e,n){},29:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(1),i=n.n(o),a=n(18),c=n.n(a),r=(n(28),n(8)),u=n(2),s=n(11),l=(n(29),n(4)),b=n(15),j=n.n(b),m=function(t,e,n){var o=j()(t),i=j()(e);if("+"===n)return o.plus(i).toString();if("\u2212"===n)return o.minus(i).toString();if("\xd7"===n)return o.times(i).toString();if("\xf7"===n)try{return o.div(i).toString()}catch(a){return"Can't divide by 0."}if("%"===n)return o.mod(i).toString();throw Error("Unknown operation '".concat(n,"'"))},d=n(0),p=function(){var t=Object(o.useState)({total:null,next:null,operation:null}),e=Object(s.a)(t,2),n=e[0],i=e[1],a=function(t){var e,o,a=(e=n,"AC"===(o=t.target.textContent)?{total:null,next:null,operation:null}:o.match(/[0-9]+/)?"0"===o&&"0"===e.next?{}:e.operation?e.next?Object(l.a)(Object(l.a)({},e),{},{next:e.next+o}):Object(l.a)(Object(l.a)({},e),{},{next:o}):e.next?{next:e.next+o,total:null}:{next:o,total:null}:"."===o?e.next?e.next.includes(".")?Object(l.a)({},e):Object(l.a)(Object(l.a)({},e),{},{next:"".concat(e.next,".")}):e.operation?{next:"0."}:e.total?e.total.includes(".")?{}:{total:"".concat(e.total,".")}:{total:"0."}:"="===o?e.next&&e.operation?{total:m(e.total,e.next,e.operation),next:null,operation:null}:{}:"+/-"===o?e.next?Object(l.a)(Object(l.a)({},e),{},{next:(-1*parseFloat(e.next)).toString()}):e.total?Object(l.a)(Object(l.a)({},e),{},{total:(-1*parseFloat(e.total)).toString()}):{}:e.next||!e.total||e.operation?e.operation?e.total&&!e.next?Object(l.a)(Object(l.a)({},e),{},{operation:o}):{total:m(e.total,e.next,e.operation),next:null,operation:o}:e.next?{total:e.next,next:null,operation:o}:{operation:o}:Object(l.a)(Object(l.a)({},e),{},{operation:o}));i(a)},c=n.next,r=n.operation,u=n.total,b="%"===r?"mod":r,j="";return u?j="".concat(u," ").concat(b||""," ").concat(c||""):c&&(j="".concat(c," ").concat(b||"")),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"screen",children:j||0}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{onClick:a,type:"button",children:"AC"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"+/-"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"%"}),Object(d.jsx)("button",{onClick:a,className:"orange",type:"button",children:"\xf7"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"7"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"8"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"9"}),Object(d.jsx)("button",{onClick:a,className:"orange",type:"button",children:"\xd7"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"4"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"5"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"6"}),Object(d.jsx)("button",{onClick:a,className:"orange",type:"button",children:"\u2212"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"1"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"2"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"3"}),Object(d.jsx)("button",{onClick:a,className:"orange",type:"button",children:"+"}),Object(d.jsx)("button",{onClick:a,className:"double",type:"button",children:"0"}),Object(d.jsx)("button",{onClick:a,type:"button",children:"."}),Object(d.jsx)("button",{onClick:a,className:"orange",type:"button",children:"="})]})]})},x={display:"flex",justifyContent:"space-around",marginTop:"5rem",alignItems:"flex-start",flexWrap:"wrap"},h=function(){return Object(d.jsxs)("div",{style:x,children:[Object(d.jsx)("h2",{children:"Lets's Do some math!"}),Object(d.jsx)(p,{})]})},O=n(19),q=n.n(O),f=function(){return Object(d.jsxs)("header",{className:q.a.header,children:[Object(d.jsx)("h1",{children:"Math Magicians"}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"}),Object(d.jsx)(r.b,{to:"/calculator",children:"Calculator"}),Object(d.jsx)(r.b,{to:"/quote",children:"Quote"})]})})]})},g=n(22),v=n.n(g),C=function(){return Object(d.jsxs)("div",{className:v.a.home,children:[Object(d.jsx)("h2",{children:"Welcome to our page"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem sit quisquam commodi accusantium itaque quam praesentium quas, libero cumque quasi inventore molestias tenetur laboriosam possimus blanditiis amet corporis eveniet odit? Vitae veniam reiciendis consectetur ipsa error perferendis fugit, quas numquam corrupti ipsum dolorem consequatur saepe debitis voluptates sed ratione iure magni cum harum. Asperiores, voluptatibus excepturi impedit sint pariatur tenetur, repellendus eligendi quas ullam ducimus libero totam mollitia? In illo fuga laboriosam asperiores temporibus consequatur, sit velit voluptatem. Consectetur maiores, non neque qui sequi autem quibusdam quo tenetur! Quos blanditiis aut explicabo harum minima deleniti nam quod totam corrupti!"}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde rem sit quisquam commodi accusantium itaque quam praesentium quas, libero cumque quasi inventore molestias tenetur laboriosam possimus blanditiis amet corporis eveniet odit? Vitae veniam reiciendis consectetur ipsa error perferendis fugit, quas numquam corrupti ipsum dolorem consequatur saepe debitis voluptates sed ratione iure magni cum harum. Asperiores, voluptatibus excepturi impedit sint pariatur tenetur, repellendus eligendi quas ullam ducimus libero totam mollitia? In illo fuga laboriosam asperiores temporibus consequatur, sit velit voluptatem. Consectetur maiores, non neque qui sequi autem quibusdam quo tenetur! Quos blanditiis aut explicabo harum minima deleniti nam quod totam corrupti!"})]})},y=n(17),k=n.n(y),_=n(23),N=n(12),S=n.n(N),w=function(){var t=Object(o.useState)(null),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(o.useEffect)((function(){var t=function(){var t=Object(_.a)(k.a.mark((function t(){var e,n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://random-math-quote-api.herokuapp.com/");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,i(n);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t();var e=setInterval(t,8e3);return function(){clearInterval(e)}}),[]),Object(d.jsx)("div",{className:S.a.quoteBox,children:n?Object(d.jsxs)("div",{children:[Object(d.jsxs)("p",{className:S.a.quote,children:['"',n.quote,'"']}),Object(d.jsxs)("p",{className:S.a.author,children:["- ",n.author]})]}):Object(d.jsx)("p",{children:"Loading"})})},F=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{}),Object(d.jsxs)(u.c,{children:[Object(d.jsx)(u.a,{path:"/",exact:!0,children:Object(d.jsx)(C,{})}),Object(d.jsx)(u.a,{path:"/calculator",children:Object(d.jsx)(h,{})}),Object(d.jsx)(u.a,{path:"/quote",children:Object(d.jsx)(w,{})})]})]})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,c=e.getTTFB;n(t),o(t),i(t),a(t),c(t)}))};c.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(r.a,{basename:"/Math-Magicians",children:Object(d.jsx)(F,{})})}),document.getElementById("root")),I()}},[[40,1,2]]]);
//# sourceMappingURL=main.8bd9d4b7.chunk.js.map