(function(){"use strict";var e={147:function(e,a,l){var u=l(9242),t=l(3396);function n(e,a,l,u,n,v){const i=(0,t.up)("menus"),o=(0,t.up)("t1"),r=(0,t.up)("description");return(0,t.wg)(),(0,t.iD)(t.HY,null,[0==u.now?((0,t.wg)(),(0,t.j4)(i,{key:0,loggedin:u.islogged,onStartgame:u.game_load},null,8,["loggedin","onStartgame"])):(0,t.kq)("",!0),1==u.now?((0,t.wg)(),(0,t.j4)(o,{key:1,cwidth:"900",cheight:"900",gametype:u.gametype},null,8,["gametype"])):(0,t.kq)("",!0),2==u.now?((0,t.wg)(),(0,t.j4)(r,{key:2})):(0,t.kq)("",!0)],64)}var v=l(4870),i=l(7139),o=l.p+"img/table.7072a9f2.jpg",r=l.p+"img/bat.4c0ea949.png",s=l.p+"img/pingpong.61828f74.png";const c={class:"audio",controls:"",ref:"s_bat",hidden:"true"},p={class:"audio",controls:"",ref:"bounce",hidden:"true"},m={class:"audio",controls:"",ref:"cheer",hidden:"true"},d={class:"audio",controls:"",ref:"down",hidden:"true"},g=(0,t._)("img",{src:o,style:{width:"80vw",height:"100vh",position:"absolute",left:"10%","z-index":"0"}},null,-1),h={key:0,id:"scoresboard"},f={key:1,id:"pointscore"},y=(0,t._)("img",{src:r,style:{width:"100%",height:"100%"}},null,-1),b=[y],_=(0,t._)("img",{src:s,style:{width:"100%",height:"100%"}},null,-1),w=[_],x=(0,t._)("img",{src:r,style:{width:"100%",height:"100%"}},null,-1),k=[x],H={key:1,id:"scoreboard"},M=(0,t._)("h3",null,"游戏高分榜",-1),j=(0,t._)("textarea",{id:"highscore",readonly:""},null,-1),z=(0,t._)("input",{type:"text",id:"scorename",placeholder:"nameless"},null,-1);function T(e,a,l,n,v,o){return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("audio",c,null,512),(0,t._)("audio",p,null,512),(0,t._)("audio",m,null,512),(0,t._)("audio",d,null,512),n.showhs?(0,t.kq)("",!0):((0,t.wg)(),(0,t.iD)("div",{key:0,id:"gameconsole",onMousemove:a[1]||(a[1]=(...e)=>n.moves&&n.moves(...e)),onClick:a[2]||(a[2]=(...e)=>n.fires&&n.fires(...e)),onKeydown:a[3]||(a[3]=(...e)=>n.fires&&n.fires(...e))},[g,0==l.gametype?((0,t.wg)(),(0,t.iD)("div",h,[(0,t._)("p",null,"游戏分数："+(0,i.zw)(n.scores),1),(0,t._)("p",null,[(0,t.Uk)("连击次数*"),(0,t._)("b",null,(0,i.zw)(n.keep),1)]),(0,t._)("button",{onClick:a[0]||(a[0]=(...e)=>n.subitscore&&n.subitscore(...e))},"提交分数")])):(0,t.kq)("",!0),1==l.gametype?((0,t.wg)(),(0,t.iD)("div",f,(0,i.zw)(n.me_score)+" VS "+(0,i.zw)(n.ai_score),1)):(0,t.kq)("",!0),(0,t._)("div",{id:"mybat",style:(0,i.j5)({left:n.pointx+"px",top:n.pointy+"px",transform:"rotate("+n.rotatesz+"deg)rotateX("+n.rotatesx+"deg)"})},b,4),(0,t.wy)((0,t._)("div",{id:"pingpong",style:(0,i.j5)({left:n.ballx+"px",top:n.ball_vy+"px"})},w,4),[[u.F8,n.showpingpong]]),(0,t._)("div",{id:"enemybat",style:(0,i.j5)({left:n.ai_x+"px",top:n.ai_y+"px",transform:"rotate("+n.rotatesz_ai+"deg)rotateX("+n.rotatesx_ai+"deg)"})},k,4)],32)),n.showhs?((0,t.wg)(),(0,t.iD)("div",H,[M,j,(0,t._)("p",null,"提交你的成绩: 当前成绩:"+(0,i.zw)(n.scores),1),z,(0,t._)("button",{onClick:a[4]||(a[4]=(...e)=>n.truesubmit&&n.truesubmit(...e))},"立即提交")])):(0,t.kq)("",!0)],64)}var q=l(4161),D={name:"t1",props:{cwidth:String,cheight:String,gametype:Number},setup(e,a){let u=0,n=0,i=(0,v.iH)(0),o=(0,v.iH)(0),r=e.gametype,s=(0,v.iH)(0),c=(0,v.iH)(0),p=0,m=0,d=0,g=(0,v.iH)(0),h=(0,v.iH)(0),f=(0,v.iH)(0),y=(0,v.iH)(0),b=(0,v.iH)(!0),_=0,w=0,x=0,k=0,H=5,M=(0,v.iH)(0),j=(0,v.iH)(0),z=(0,v.iH)(0),T=(0,v.iH)(0),D=(0,v.iH)(600),O=(0,v.iH)(600),C=(0,v.iH)(600),U=(0,v.iH)(0),I=(0,v.iH)(0),Y=0,S=0,Z=0,A=0,X=(0,t.Fl)((()=>O.value/1.414+C.value/1.414)),B=0,E=0,F=0,P=!1,W=!1,K=(0,v.iH)(null),L=(0,v.iH)(null),N=(0,v.iH)(null),R=(0,v.iH)(null);function V(e){Y=e.clientX,S=e.clientY,M.value=e.clientX-75,e.clientY-75>=B/3?j.value=e.clientY-75:j.value=B/3+75,z.value=120*(e.clientX-75)/E-60,T.value=(e.clientY-B/2)/B*90-30}function G(){0==_&&(_=2,k=-80),6==_&&M.value>D.value-150&&M.value<D.value+20&&j.value<X.value+25&&j.value>X.value-130&&(k=-80,x=30*u-30*n,u=0,n=0,0==r&&(c.value+=s.value,s.value++),_=2)}(0,t.bv)((()=>{K.value.src=l(7889),L.value.src=l(173),R.value.src=l(4821),N.value.src=l(6545),K.value.pause(),L.value.pause(),R.value.pause(),N.value.pause(),E=window.innerWidth,B=window.innerHeight})),(0,t.bv)((()=>{setInterval((()=>{U.value=9*(Y-Z),I.value=9*(S-A),Z=Y,A=S}),9)})),(0,t.bv)((()=>{setInterval((()=>{0==_&&(D.value=M.value+20,O.value=1.414*j.value,C.value=0,I.value<-60&&(_=1),x=0,k=0,F=B),1==_&&(K.value.play(),x=U.value,k=Math.max(-200,Math.min(-90,I.value)),_=2,W=!1),2==_&&((X.value>1.3*B||X.value<-B/3)&&(_=7),D.value+=x/42,O.value+=k/28,D.value>(685-X.value)/1.7&&D.value<(X.value+1400)/1.32?(H>0&&(C.value+=H/5,H-=1,0==H&&(H=-35,L.value.play())),H<0&&(C.value+=H/5,H+=1,0==H&&(H=35))):(F=X.value,_=3,w=0)),3==_&&(D.value+=x/50,H>0&&(C.value+=H/5,H+=1),H<=0&&(C.value+=H/5,H+=7),w++,(w>=45||H>40)&&(_=4)),4==_&&(1==b.value&&(0==r&&(X.value>B/3?(R.value.play(),c.value=Math.max(0,c.value-15),s.value=0):(N.value.play(),c.value=Math.max(0,c.value+15),s.value=0)),1==r&&(X.value>B/3?(R.value.play(),o.value++):(N.value.play(),i.value++))),b.value=!1,setTimeout((()=>{_=0,b.value=!0}),800)),5==_&&(K.value.play(),k>-150?(k=-k+30*Math.random()+30,x=.3*x+.6*(g.value-.5*E-150)+10*(Math.random()-.5)):(x=x>100?Math.min(200,x)+50*(Math.random()-.5):x<-100?Math.max(-200,x)+50*(Math.random()-.5):x-.2*(g.value-.5*E-50)+10*(Math.random()-.5),k=Math.max(150,-k)*(.7+Math.max(0,Math.random()-.7))+10+50*Math.random()),_=6),6==_&&((X.value>1.2*B||X.value<-B/3)&&(_=7),D.value+=x/42,O.value+=k/28,D.value>(685-X.value)/1.7&&D.value<(X.value+1400)/1.32?(H>0&&(C.value+=H/5,H-=1,0==H&&(H=-35,L.value.play())),H<0&&(C.value+=H/5,H+=1,0==H&&(H=35))):(F=X.value,_=3,w=0),M.value>D.value-150&&M.value<D.value+20&&j.value<X.value+65&&j.value>X.value-130&&(I.value<-20||U.value<-35||U.value>35)&&!P&&(K.value.play(),x=-x/3+1.6*U.value,k=I.value-k/2.5,_=2,0==r&&(c.value+=s.value,s.value++))),7==_&&(_=0,x=0,k=0,0==r&&(X.value>B?(R.value.play(),c.value=Math.max(0,c.value-15),s.value=0):(N.value.play(),c.value=Math.max(0,c.value+15),s.value=0)),1==r&&(X.value>B?(R.value.play(),o.value++):(N.value.play(),i.value++)))}),10)})),document.onkeydown=function(e){setTimeout((()=>{"ArrowLeft"==e.code&&(n=0,M.value>0&&(M.value-=20+3*u),Y=M,S=j,z.value=120*(M.value-75)/E-60,P=!0,u+=1,setTimeout((()=>{}),300),setTimeout((()=>{P=!1}),2e3)),"ArrowRight"==e.code&&(u=0,M.value<E&&(M.value+=20+3*n),Y=M,S=j,z.value=120*(M.value-75)/E-60,P=!0,n+=1,setTimeout((()=>{}),300),setTimeout((()=>{P=!1}),2e3)),"ArrowDown"==e.code?(j.value<B&&(j.value+=20),Y=M,S=j,T.value=(j.value-B/2)/B*90-30,P=!0,setTimeout((()=>{P=!1}),2e3)):"ArrowUp"==e.code?(j.value>0&&(j.value-=20),Y=M,S=j,T.value=(j.value-B/2)/B*90-30,P=!0,setTimeout((()=>{P=!1}),2e3)):"Space"==e.code&&G()}),1)},(0,t.bv)((()=>{setInterval((()=>{f.value=120*(g.value-75)/E-60,y.value=-20}),20)})),(0,t.bv)((()=>{setInterval((()=>{if(0==_?0==m?(g.value=E/2-150,h.value=-25,m=1):(M.value<E/5&&g.value<E-M.value-400?g.value+=3:M.value<1*E/2&&g.value<E-M.value-400&&(g.value+=1),M.value>3*E/5&&g.value>E-M.value?g.value-=3:M.value>E/2&&g.value>E-M.value&&(g.value-=1)):m=0,2==_)if(X.value>B/3){let e=D.value+(O.value-h.value)*x/-k;g.value<e+E/7&&g.value>e-E/7||(Math.abs(e-D.value)>.5*E?(g.value<D.value-200?g.value+=4:g.value<D.value&&(g.value+=2.5),g.value>D.value+200?g.value-=4:g.value>D.value&&(g.value-=2.5),W=!1):(W||(-g.value+e>.16*E?g.value+=6:-g.value+e>.1*E?g.value+=4:-g.value+e>0&&(g.value+=3),g.value-e>.16*E?g.value-=6:g.value-e>.1*E?g.value-=4:g.value-e>0&&(g.value-=3),g.value<e+30&&g.value>e-30&&(W=!0)),W&&(g.value<D.value?g.value+=(D.value-g.value)/30+1:g.value-=(-D.value+g.value)/30+1)))}else{let e=D.value+(O.value-h.value)*x/-k;g.value>D.value&&g.value<e?g.value-=1.5:g.value>D.value&&(g.value-=(g.value-D.value)/8+2),g.value<D.value&&g.value>e?g.value+=1.5:g.value<D.value&&(g.value+=(-g.value+D.value)/8+2),h.value<X.value&&h.value+200>X.value&&h.value<B/9-20&&X.value>B/7&&(h.value+=2),g.value>D.value-45&&g.value<D.value+45&&h.value>O.value-80&&h.value<O.value+80&&(p=1),p&&(g.value=D.value-60,O.value<B/4+50&&h.value<O.value+90&&X.value-h.value<100&&(p=1,0==d&&(d=1,setTimeout((()=>{d=0,h.value=-25,_=5,p=0}),50))))}3==_&&F<B/2&&(h.value<O.value&&(g.value<D.value-10?g.value:g.value>D.value+10&&(g.value-=13)),g.value<D.value+20&&g.value>D.value-20&&h.value<O.value&&X.value-h.value<80&&(p=1,0==d&&(d=1,setTimeout((()=>{d=0,h.value=-25,_=5}),50))))}),10)}));let J=(0,v.iH)(!1);function Q(){J.value=!0,q.Z.get("http://8.130.81.131:8000/tennisq").then((e=>{let a=document.getElementById("highscore"),l=e.data,u=0;for(const t of l)u++,a.value+="第"+u+"名：用户名"+t.name+" 成绩："+t.score+"\n"}))}function $(){let e="nameless",a=document.getElementById("scorename").value;a.length>0&&(e=a),q.Z.get("http://8.130.81.131:8000/tennisi",{params:{psw:"wcr",name:e,score:c.value}}).then((e=>{console.log(e)})),J.value=!1,_=0}return{pointx:M,pointy:j,moves:V,clienth:B,clientw:E,rotatesz:z,rotatesx:T,ballx:D,bally:O,ballz:C,ball_vy:X,vx:U,vy:I,pingpongstate:_,fires:G,showpingpong:b,ai_x:g,ai_y:h,rotatesx_ai:y,rotatesz_ai:f,scores:c,keep:s,me_score:i,ai_score:o,s_bat:K,bounce:L,cheer:N,down:R,subitscore:Q,showhs:J,truesubmit:$}}},O=l(89);const C=(0,O.Z)(D,[["render",T]]);var U=C,I=l.p+"img/pexels-josh-sorenson-976873.e0f2d4b1.jpg",Y=l.p+"img/two_pingpong.d0c05070.png",S=l.p+"img/bat2.ae928f63.png",Z=l.p+"img/burn.9b73b815.jpg";const A=e=>((0,t.dD)("data-v-7a4dd99b"),e=e(),(0,t.Cn)(),e),X={id:"main"},B=A((()=>(0,t._)("img",{src:I,id:"bc1"},null,-1))),E={style:{"margin-top":"150px","z-index":"10"}},F=A((()=>(0,t._)("span",null,"游戏介绍",-1))),P=A((()=>(0,t._)("img",{src:Y},null,-1))),W=A((()=>(0,t._)("span",null,"积分模式",-1))),K=A((()=>(0,t._)("img",{src:r},null,-1))),L=A((()=>(0,t._)("span",null,"对抗模式",-1))),N=A((()=>(0,t._)("img",{src:S},null,-1))),R=A((()=>(0,t._)("span",null,"自由模式",-1))),V=A((()=>(0,t._)("img",{src:Y},null,-1))),G={id:"poster"},J=A((()=>(0,t._)("div",{id:"title",style:{position:"relative","z-index":"10"}},[(0,t._)("h1",null,[(0,t.Uk)("乒乓高手"),(0,t._)("img",{src:Z,style:{width:"100px",height:"100px",display:"inline-block"}})])],-1))),Q={id:"carousel"},$=A((()=>(0,t._)("p",{style:{"border-radius":"2px"}},"激情比赛",-1))),ee=["src"];function ae(e,a,l,u,n,v){return(0,t.wg)(),(0,t.iD)("div",X,[B,(0,t._)("ul",E,[(0,t._)("li",{style:{"border-color":"paleturquoise"},onClick:a[0]||(a[0]=(...e)=>u.togame&&u.togame(...e))},[F,(0,t.Uk)(),P]),(0,t._)("li",{style:{"border-color":"aqua"},onClick:a[1]||(a[1]=(...e)=>u.togame1&&u.togame1(...e))},[W,(0,t.Uk)(),K]),(0,t._)("li",{style:{"border-color":"plum"},onClick:a[2]||(a[2]=(...e)=>u.togame2&&u.togame2(...e))},[L,(0,t.Uk)(),N]),(0,t._)("li",{style:{"border-color":"purple"},onClick:a[3]||(a[3]=(...e)=>u.togame3&&u.togame3(...e))},[R,(0,t.Uk)(),V])]),(0,t._)("div",G,[J,(0,t._)("div",Q,[$,(0,t._)("img",{src:u.matchs[u.nowdisplay],style:{"border-radius":"5px"}},null,8,ee)])])])}var le={name:"menus",emits:["startgame"],props:{loggedin:Boolean},setup(e,a){(0,t.bv)((()=>{setInterval((()=>{u.value=(u.value+1)%3}),2500)}));let u=(0,v.iH)(0),n=(0,v.qj)([l(6213),l(6198),l(2820)]);function i(e){a.emit("startgame",0)}function o(e){a.emit("startgame",1)}function r(e){a.emit("startgame",2)}function s(e){a.emit("startgame",3)}return{matchs:n,nowdisplay:u,togame:i,togame1:o,togame2:r,togame3:s}}};const ue=(0,O.Z)(le,[["render",ae],["__scopeId","data-v-7a4dd99b"]]);var te=ue;const ne=(0,t._)("p",null," 游戏有三种不同模式，主要区别在计分上",-1),ve=(0,t._)("p",null," 控制拍子可以使用鼠标或者键盘，推荐鼠标，键盘控制起来反应铁定不够快，而且体验很差 ",-1),ie=(0,t._)("p",null,"使用鼠标挥扫模拟球拍运行，击球和发球时需要一定的速度（发球也可直接按鼠标左键，怕你力度掌握不好），本游戏中有简单的物理判定，所以角度和力度需要掌握好 需要注意的时，因为键盘模式下操作较难：操作上下左右箭头即可移动，按空格发球或接球。同时按左右箭头能给予其一定的速度",-1);function oe(e,a,l,u,n,v){const i=(0,t.up)("P");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Uk)(" 这里是一个关于本游戏的介绍: "),ne,ve,ie,(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Uk)("游戏作者王辰睿，来自电子科技大学，这是我的综设项目作业，我打算在学期结束把它发布到网上供大家游玩，若在那之前看到，请不要传播和分享 这对我这门课的成绩很重要，我不希望在课程结束前此项目被传播和使用 ")])),_:1})],64)}var re={name:"description",setup(){}};const se=(0,O.Z)(re,[["render",oe]]);var ce=se,pe={name:"App",components:{t1:U,menus:te,Description:ce},setup(){let e=(0,v.iH)(!1),a=(0,v.iH)(0),l=(0,v.iH)(0),u=(0,v.iH)(!1);function t(e){0==e?l.value=2:(l.value=1,a.value=e-1)}return{isgaming:e,gametype:a,now:l,islogged:u,game_load:t}}};const me=(0,O.Z)(pe,[["render",n]]);var de=me;(0,u.ri)(de).mount("#app")},6213:function(e,a,l){e.exports=l.p+"img/match1.049b0608.jpg"},6198:function(e,a,l){e.exports=l.p+"img/match2.835cf402.webp"},2820:function(e,a,l){e.exports=l.p+"img/match3.37aabe88.jpg"},7889:function(e,a,l){e.exports=l.p+"media/bat.b0daf94e.mp3"},173:function(e,a,l){e.exports=l.p+"media/bounce.920a002c.mp3"},6545:function(e,a,l){e.exports=l.p+"media/cheer.79426606.mp3"},4821:function(e,a,l){e.exports=l.p+"media/down.beddfe98.mp3"}},a={};function l(u){var t=a[u];if(void 0!==t)return t.exports;var n=a[u]={exports:{}};return e[u](n,n.exports,l),n.exports}l.m=e,function(){var e=[];l.O=function(a,u,t,n){if(!u){var v=1/0;for(s=0;s<e.length;s++){u=e[s][0],t=e[s][1],n=e[s][2];for(var i=!0,o=0;o<u.length;o++)(!1&n||v>=n)&&Object.keys(l.O).every((function(e){return l.O[e](u[o])}))?u.splice(o--,1):(i=!1,n<v&&(v=n));if(i){e.splice(s--,1);var r=t();void 0!==r&&(a=r)}}return a}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[u,t,n]}}(),function(){l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,{a:a}),a}}(),function(){l.d=function(e,a){for(var u in a)l.o(a,u)&&!l.o(e,u)&&Object.defineProperty(e,u,{enumerable:!0,get:a[u]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){l.p=""}(),function(){var e={143:0};l.O.j=function(a){return 0===e[a]};var a=function(a,u){var t,n,v=u[0],i=u[1],o=u[2],r=0;if(v.some((function(a){return 0!==e[a]}))){for(t in i)l.o(i,t)&&(l.m[t]=i[t]);if(o)var s=o(l)}for(a&&a(u);r<v.length;r++)n=v[r],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(s)},u=self["webpackChunkgame"]=self["webpackChunkgame"]||[];u.forEach(a.bind(null,0)),u.push=a.bind(null,u.push.bind(u))}();var u=l.O(void 0,[998],(function(){return l(147)}));u=l.O(u)})();
//# sourceMappingURL=app.0776a791.js.map