"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[911],{911:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,i,o,c,s,u,p,d=t(861),l=t(885),f=t(687),x=t.n(f),h=t(168),g=t(934),b=g.Z.form(r||(r=(0,h.Z)(["\n  width: 290px;\n  height: 30px;\n  margin: 15px auto;\n  display: flex;\n"]))),m=g.Z.input(a||(a=(0,h.Z)(["\n  padding-left: 10px;\n  height: inherit;\n  width: 100%;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n  box-shadow: inset 0px 0px 4px black;\n  margin-right: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 600;\n  background-color: grey;\n  transition: 250ms;\n  color: #f6f6f6;\n\n  &:hover,\n  &:focus {\n    box-shadow: inset 0px 0px 8px black;\n  }\n"]))),v=g.Z.button(i||(i=(0,h.Z)(["\n  width: 30px;\n  box-shadow: inset 0px 0px 4px;\n  border: none;\n  background-color: white;\n  border-radius: 4px;\n  cursor: pointer;\n  background-color: grey;\n  transition: 250ms;\n  &:hover,\n  &:focus {\n    box-shadow: inset 0px 0px 8px;\n  }\n"]))),w=t(184),k=function(n){var e=n.heandleSearch,t=n.name,r=n.onInputChange;return(0,w.jsxs)(b,{onSubmit:e,children:[(0,w.jsx)(m,{value:t,onChange:r,placeholder:""}),(0,w.jsx)(v,{type:"submit",children:(0,w.jsx)("img",{style:{height:"18px"},alt:"icon",src:"https://www.svgrepo.com/show/120806/cinema-clapper.svg"})})]})},Z=t(731),y=g.Z.ul(o||(o=(0,h.Z)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(5, 1fr);\n    width: 768px;\n  }\n  @media screen and (min-width: 1200px) {\n    grid-template-columns: repeat(8, 1fr);\n    width: 1200px;\n  }\n  padding: 15px;\n  margin: 15px;\n  gap: 15px;\n  list-style: none;\n  margin: 15px auto;\n"]))),j=g.Z.li(c||(c=(0,h.Z)(["\n  box-shadow: 0px 0px 4px black;\n  text-align: center;\n  border-radius: 4px;\n  -webkit-transition: 250ms;\n  transition: 250ms;\n  &:hover,\n  &:focus {\n    scale: 1.01;\n    box-shadow: 0px 0px 8px black;\n  }\n"]))),_=(0,g.Z)(Z.rU)(s||(s=(0,h.Z)(["\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-direction: column-reverse;\n    -ms-flex-direction: column-reverse;\n    flex-direction: column-reverse;\n    -webkit-text-decoration: none;\n    text-decoration: none;\n    font-weight: 700;\n    text-transform: uppercase;\n    background-color: black;\n    color: white;\n    border-radius: 4px;\n    height: 100%;\n}"]))),S=g.Z.span(u||(u=(0,h.Z)(["\n  padding: 10px;\n"]))),C=g.Z.img(p||(p=(0,h.Z)(["\n  width: calc(100%);\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  height: 100%;\n  object-fit: cover;\n"]))),P=function(n){var e=n.moviesArr,t=n.location;return(0,w.jsx)("section",{children:(0,w.jsx)(y,{children:e.map((function(n){return(0,w.jsx)(j,{children:(0,w.jsxs)(_,{to:"".concat(n.id),state:{from:t},children:[(0,w.jsxs)(S,{children:[" ",n.original_title]}),(0,w.jsx)(C,{alt:n.title,src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path)})]})},n.id)}))})})},U=t(791),q=t(689),z=t(877),A=function(){var n=(0,q.TH)(),e=(0,Z.lr)(),t=(0,l.Z)(e,2),r=t[0],a=t[1],i=r.get("query"),o=(0,U.useState)(null!==i&&void 0!==i?i:""),c=(0,l.Z)(o,2),s=c[0],u=c[1],p=(0,U.useState)([]),f=(0,l.Z)(p,2),h=f[0],g=f[1];(0,U.useEffect)((function(){""!==s&&b()}),[]);var b=function(){var n=(0,d.Z)(x().mark((function n(){var e;return x().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,z.Nz)(s);case 2:e=n.sent,g(e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,w.jsxs)("div",{children:[(0,w.jsx)(k,{heandleSearch:function(n){n.preventDefault(),""!==s&&(b(),a({query:s})),u("")},name:s,onInputChange:function(n){u(n.currentTarget.value)}}),(0,w.jsx)(P,{moviesArr:h,location:n}),(0,w.jsx)(q.j3,{})]})}},877:function(n,e,t){t.d(e,{$G:function(){return c},AM:function(){return d},FJ:function(){return u},Nz:function(){return s},wg:function(){return p}});var r=t(861),a=t(687),i=t.n(a),o=t(44),c=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/trending/movie/week?api_key=6f552eb6929f0128999ddb3bd491ac60");case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/search/movie?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&query=".concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=6f552eb6929f0128999ddb3bd491ac60&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=911.b86e1472.chunk.js.map