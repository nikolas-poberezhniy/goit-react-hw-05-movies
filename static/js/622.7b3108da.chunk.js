"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[622,256],{507:function(e,t,s){s.d(t,{i:function(){return d}});var r=s(982),a=s(861),n=s(885),c=s(757),i=s.n(c),o=s(791),u=s(44).ZP.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"46e4b076bb2368b618b662908195e79d"}}),d=function(e,t){var s=(0,o.useState)("idle"),c=(0,n.Z)(s,2),d=c[0],l=c[1],h=(0,o.useState)([]),f=(0,n.Z)(h,2),v=f[0],m=f[1];return(0,o.useEffect)((function(){var s;switch(e){case"trending":s=["".concat(e,"/movie/week")];break;case"movie":s=["/movie/".concat(t)];break;case"credits":case"reviews":s=["/movie/".concat(t,"/").concat(e)];break;case"search":s=t?["/".concat(e,"/movie"),{params:{query:t}}]:null}(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l("fetching"),e.t0=m,e.t1=s,!e.t1){e.next=7;break}return e.next=6,u.get.apply(u,(0,r.Z)(s));case 6:e.t1=e.sent;case 7:e.t2=e.t1,(0,e.t0)(e.t2),l("fetched");case 10:case"end":return e.stop()}}),e)})))()}),[e,t]),v?[v,d]:[[],d]}},622:function(e,t,s){s.r(t);var r=s(885),a=s(791),n=s(689),c=s(598),i=s(507),o=s(256),u=s(184);t.default=function(){var e=(0,n.UO)().id,t=(0,a.useState)({}),s=(0,r.Z)(t,2),d=s[0],l=d.poster_path,h=d.genres,f=d.release_date,v=d.overview,m=d.title,x=d.vote_average,p=s[1],j=(0,i.i)("movie",e),b=(0,r.Z)(j,1)[0].data,g=(0,n.TH)();return(0,a.useEffect)((function(){b&&p(b)}),[b]),m?(0,u.jsxs)(u.Fragment,{children:[console.log(g.state),(0,u.jsx)(c.rU,{to:g.state?g.state.from:"/",children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"}),(0,u.jsx)("br",{}),(0,u.jsxs)("div",{style:{display:"flex"},children:[(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(l),alt:""}),(0,u.jsxs)("div",{style:{margin:"25px"},children:[(0,u.jsx)("h2",{children:"".concat(m," (").concat(f.substring(0,4),")")}),(0,u.jsxs)("p",{children:["User Score: ",10*Number(x),"%"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:v}),(0,u.jsx)("h3",{children:"Genres"}),h.map((function(e){return(0,u.jsxs)("span",{style:{marginBottom:"5px"},children:[e.name," "]},e.name)}))]})]}),(0,u.jsx)("br",{}),(0,u.jsx)(c.rU,{to:"cast",state:g.state,children:"Cast"}),(0,u.jsx)(c.rU,{to:"reviews",state:g.state,children:"Reviews"}),(0,u.jsx)(n.j3,{})]}):(0,u.jsx)(o.default,{})}},256:function(e,t,s){s.r(t);var r=s(689),a=s(598),n=s(184);t.default=function(){var e=(0,r.TH)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.rU,{to:e.state?e.state.from:"/",children:"\u041e\u0431\u0440\u0430\u0442\u043d\u043e"}),(0,n.jsx)("h1",{children:"Not Found"})]})}}}]);
//# sourceMappingURL=622.7b3108da.chunk.js.map