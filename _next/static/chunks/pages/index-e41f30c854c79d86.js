(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,i,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(85)}])},85:function(e,i,n){"use strict";n.r(i);var _=n(5893),o=n(7294),d=n(2729),c=n.n(d);let t=()=>{let[e,i]=(0,o.useState)([[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,3,0,0,0,0],[0,0,3,1,2,0,0,0],[0,0,0,2,1,3,0,0],[0,0,0,0,3,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]]),[n,d]=(0,o.useState)(2),t=[[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1]],a=JSON.parse(JSON.stringify(e)),r=()=>{a.map((e,i)=>e.map((e,n)=>{a[i][n]=e%3}))},s=()=>{a.map((e,i)=>e.map((e,_)=>{if(e===3-n)for(let e of t)for(let o=1;o<=7&&void 0!==a[i+e[0]*o];o++){if(0===a[i+e[0]*o][_+e[1]*o]){o>=2&&(a[i+e[0]*o][_+e[1]*o]=3);break}if(a[i+e[0]*o][_+e[1]*o]===3-n)break;if(a[i+e[0]*o][_+e[1]*o]===n)continue;else break}}))},f=(_,o)=>{if(console.log(_,o),3===a[o][_]){for(let i of t)if(void 0!==e[o+i[0]]&&e[o+i[0]][_+i[1]]===3-n)for(let e=1;e<=7&&void 0!==a[o+i[0]*e]&&0!==a[o+i[0]*e][_+i[1]*e];e++){if(a[o+i[0]*e][_+i[1]*e]!==3-n){if(a[o+i[0]*e][_+i[1]*e]===n&&e>=2)for(let d=e;d>=0;d-=1)a[o+i[0]*d][_+i[1]*d]=n}}r(),s(),d(3-n),i(a)}};return(0,_.jsxs)("div",{className:c().container,children:[(0,_.jsx)("div",{className:c().board,children:e.map((e,i)=>e.map((e,n)=>(0,_.jsx)("div",{className:c().cell,onClick:()=>f(n,i),children:0!==e&&(0,_.jsx)("div",{className:c().disc,style:{background:2===e?"#000":1===e?"#fff":"#ff9d00"}})},"".concat(n,"-").concat(i))))}),(0,_.jsx)("div",{children:"".concat(2===n?"黒の番です":"白の番です")})]})};i.default=t},2729:function(e){e.exports={container:"index_container__gnN1f",disc:"index_disc__JTT4d",cell:"index_cell__3W8ZQ",board:"index_board__2d6xe",main:"index_main__kAcUb",footer:"index_footer__qq_p6",title:"index_title__gEapU",description:"index_description__087sm",code:"index_code__VeCgy",grid:"index_grid__FmmIe",card:"index_card__kAxi6",logo:"index_logo__FcDOZ"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);