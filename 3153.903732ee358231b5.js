"use strict";(self.webpackChunkbusu_city_ui=self.webpackChunkbusu_city_ui||[]).push([[3153],{3153:(x,g,i)=>{i.r(g),i.d(g,{TodayPageModule:()=>_});var u=i(1524),h=i(3699),e=i(3354),p=i(8148),c=i(1002),s=i(529),f=i(6991),m=i(3369);function w(a,n){if(1&a&&e._UZ(0,"img",36),2&a){const t=e.oxw().$implicit;e.Q6J("src","assets/icon/"+t.icon+".svg",e.LSH)}}function y(a,n){if(1&a){const t=e.EpF();e.TgZ(0,"swiper-slide",31),e.NdJ("touchend",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.weatherService.currentHourData=l)}),e.TgZ(1,"div",32),e.NdJ("click",function(){const l=e.CHM(t).$implicit,d=e.oxw();return e.KtG(d.weatherService.currentHourData=l)}),e.TgZ(2,"span",33),e._uU(3),e.qZA(),e.YNc(4,w,1,1,"img",34),e.TgZ(5,"span",35),e._uU(6),e.qZA()()()}if(2&a){const t=n.$implicit,r=e.oxw();e.xp6(3),e.Oqu(r.weatherService.checkHourIsNow(t.datetimeEpoch)),e.xp6(1),e.Q6J("ngIf","assets/icon/"+t.icon+".svg"),e.xp6(2),e.hij(" ",r.weatherService.fahrenheitToCelcius(null==t?null:t.temp),"\xb0 ")}}function v(a,n){1&a&&(e.TgZ(0,"div",37),e._UZ(1,"button",38),e._uU(2," Weather App - v1.0.0 "),e.qZA(),e.TgZ(3,"div",39)(4,"ul")(5,"li"),e._uU(6," Do you detect any bugs or errors? "),e.qZA(),e.TgZ(7,"li"),e._uU(8," Or know how better we can improve this app? "),e.qZA()(),e._UZ(9,"br"),e._uU(10," ...share with the Developer: "),e._UZ(11,"br"),e._uU(12," +234-7036-2000-96. "),e.TgZ(13,"p",40),e._uU(14,"THANK YOU!"),e.qZA()())}const Z=[{path:"",component:(()=>{class a{constructor(t,r){this.weatherService=t,this.cdr=r,this.currentIndex=0,this.displayImg="weather.jpg",this.swiperModules=[h.L$]}ngOnInit(){this.weatherService.newWeatherData.subscribe(t=>{this.chooseBgImg(),this.weatherService.drawMoonPhase(this.weatherService.todayWeatherData?.moonphase,"moon-phase",40)})}ionViewDidEnter(){this.chooseBgImg(),console.log(this.weatherService.todayWeatherData?.moonphase),this.weatherService.drawMoonPhase(this.weatherService.todayWeatherData?.moonphase,"moon-phase",40),this.cdr.detectChanges()}chooseBgImg(){const t=this.weatherService.currentHourData?.conditions?.toLowerCase(),r=(new Date).getHours(),o=r>6&&r<20;this.displayImg=(t?.includes("clear")||t?.includes("sun"))&&o?"clear-day.jpg":t?.includes("clear")&&!o?"clear-night.jpg":t?.includes("rain")&&o?"rainy-day.jpg":t?.includes("rain")&&!o?"rainy-night.jpg":(t?.includes("cloud")||t?.includes("overcast"))&&o?"cloudy-day.jpg":!t?.includes("cloud")&&!t?.includes("overcast")||o?t?.includes("thunder")||t?.includes("storm")?"thunder.jpg":"weather.jpg":"cloudy-night.jpg"}refreshData(t){this.weatherService.getWeatherData(t),setTimeout(()=>{t.target.complete(),this.cdr.detectChanges()},250)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(p.F),e.Y36(e.sBO))},a.\u0275cmp=e.Xpm({type:a,selectors:[["healmah-today"]],decls:64,vars:21,consts:[["slot","fixed","closeDuration","200","pullFactor","0.8","pullMin","60","pullMax","120",3,"ionRefresh"],[1,"w:100%","h:100%","d:flex","flex:column","jc:space-between","gap:10","p:16|16|60|16"],["fallbackImg","",3,"onlyBgImg","src"],[1,"d:flex","jc:space-between"],[1,"rel","d:flex","flex:column","z:10","gap:5","{text-shadow:0|0|1|#1A2833}","{f:beryl-70!}_b"],[1,"f:1.8rem","f:white","f:'Roboto',sans-serif"],[1,"f:1.1rem","f:fade-90"],[1,"f:white","f:4.5rem","f:bold"],[1,"bg:rgb(99,190,168,.8)","f:1rem","w:fit-content","p:5","px:10","r:15","f:white","bb:0|solid|gray-90"],[1,"d:flex","jc:center","gap:.2rem","text-align:right"],[1,"f:#00c387","text-shadow:0|0|1|black"],["id","menu-btn","icon","info-circle",1,"f:gray-86","f:1.5rem"],[1,"f:fade-90","text-shadow:0|0|1|black","f:1.3rem"],[1,"bg:","d:flex","jc:space-evenly","f:1rem","{d:flex;gap:5;bg:#061011;p:5|10;rt:10}_span"],["icon","droplet",1,"f:#63BEA8"],[1,"f:white"],[1,"f:white","bg:linear-gradient(#061011,rgba(74,111,201,.5))"],["icon","solar-panel",1,"f:#63BEA8"],["icon","cloud",1,"f:#63BEA8"],[1,"bg:linear-gradient(120deg,rgba(74,111,201,.5),#061011)","d:flex","jc:space-around","ai:center","rt:5","py:20","rt:10","{d:flex;flex:column;jc:center;ai:center;gap:3px}_ion-label","bt:.2|solid|rgba(255,255,255,.3)"],[1,"f:fade-90","f:1.2em"],[2,"width","20px","height","20px","background-color","#FF8996","border-radius","50%"],[1,"rel"],["id","moon-phase"],[1,"f:white","f:0.8rem","abs","top:50%","translateY(100%)","z:100"],[2,"width","20px","height","20px","background-color","#FFE8B4","border-radius","50%"],[1,"bg:url('assets/img/icon.png')","d:none","h:20","w:20"],[1,"bg:url('assets/img/weather.jpg')","d:none","h:20","w:20"],[1,"bg:linear-gradient(120deg,rgba(74,111,201,.5),#061011)","rb:30",3,"modules","slidesPerView"],[3,"touchend",4,"ngFor","ngForOf"],["trigger","menu-btn","mode","ios","triggerAction","click"],[3,"touchend"],[1,"h:100%","w:100%","d:flex!","flex:column!","ai:center!",3,"click"],[1,"time","bb:0.2|solid|fade-96"],["fallbackImg","",3,"src",4,"ngIf"],[1,"temp"],["fallbackImg","",3,"src"],[1,"d:flex","flex:column","jc:center","ai:center","p:10","f:white"],[1,"b:0.5px|dashed|#00c387","w:80","h:80","bg:url('assets/img/icon.png')","bg:fixed","bg:center","bg:cover","bg:no-repeat"],[1,"p:15","f:white","text-center"],[1,"text-align:center"]],template:function(t,r){1&t&&(e.TgZ(0,"ion-content")(1,"ion-refresher",0),e.NdJ("ionRefresh",function(l){return r.refreshData(l)}),e._UZ(2,"ion-refresher-content"),e.qZA(),e.TgZ(3,"main",1)(4,"header",2)(5,"div",3)(6,"div",4)(7,"ion-label",5)(8,"b"),e._uU(9,"B"),e.qZA(),e._uU(10,"usu"),e.TgZ(11,"b"),e._uU(12,"C"),e.qZA(),e._uU(13,"ity "),e.TgZ(14,"span",6),e._uU(15," - weather"),e.qZA()(),e.TgZ(16,"h2",7),e._uU(17),e.qZA(),e.TgZ(18,"span",8),e._uU(19),e.qZA()(),e.TgZ(20,"div",9)(21,"ion-text",10),e._uU(22),e.ALo(23,"date"),e.qZA(),e._UZ(24,"fa-icon",11),e.qZA()(),e.TgZ(25,"ion-text",12)(26,"q"),e._uU(27),e.qZA()()(),e.TgZ(28,"div")(29,"div",13)(30,"span"),e._UZ(31,"fa-icon",14),e.TgZ(32,"ion-text",15),e._uU(33),e.qZA()(),e.TgZ(34,"span",16),e._UZ(35,"fa-icon",17),e.TgZ(36,"ion-text",15),e._uU(37),e.TgZ(38,"sup"),e._uU(39,"2"),e.qZA()()(),e.TgZ(40,"span"),e._UZ(41,"fa-icon",18),e.TgZ(42,"ion-text",15),e._uU(43),e.qZA()()(),e.TgZ(44,"div",19)(45,"ion-label",20),e._UZ(46,"span",21),e._uU(47),e.qZA(),e.TgZ(48,"ion-label",22),e._UZ(49,"ion-label",23),e.TgZ(50,"ion-text",24),e._uU(51),e.TgZ(52,"sup"),e._uU(53,"th"),e.qZA()()(),e.TgZ(54,"ion-label",20),e._UZ(55,"span",25),e._uU(56),e.qZA()()(),e.TgZ(57,"div"),e._UZ(58,"div",26)(59,"div",27),e.TgZ(60,"swiper-container",28),e.YNc(61,y,7,3,"swiper-slide",29),e.qZA()()(),e.TgZ(62,"ion-popover",30),e.YNc(63,v,15,0,"ng-template"),e.qZA()()),2&t&&(e.xp6(4),e.Gre("h:60% d:flex flex:column jc:space-between r:30 p:15|10|10|15 shadow:0|1|1|gray-18\n    bg:url(","assets/img/"+r.displayImg,") bg:fixed bg:center bg:cover bg:no-repeat bg:#061011"),e.Q6J("onlyBgImg",!0)("src","assets/img/"+r.displayImg),e.xp6(13),e.hij("",r.weatherService.fahrenheitToCelcius((null==r.weatherService.currentHourData?null:r.weatherService.currentHourData.temp)||0),"\xb0"),e.xp6(2),e.hij(" ",(null==r.weatherService.currentHourData?null:r.weatherService.currentHourData.conditions)||""," "),e.xp6(3),e.Oqu(e.xi3(23,18,null==r.weatherService.todayWeatherData?null:r.weatherService.todayWeatherData.datetime,"LLL d, yyyy")),e.xp6(5),e.hij(" ",(null==r.weatherService.todayWeatherData?null:r.weatherService.todayWeatherData.description)||""," "),e.xp6(6),e.hij(" ",(null==r.weatherService.currentHourData?null:r.weatherService.currentHourData.precipprob)||0," % "),e.xp6(4),e.hij(" ",(null==r.weatherService.todayWeatherData?null:r.weatherService.todayWeatherData.solarenergy)||0," MJ/m"),e.xp6(6),e.hij(" ",(null==r.weatherService.currentHourData?null:r.weatherService.currentHourData.cloudcover)||0," % "),e.xp6(4),e.hij(" ",(null==r.weatherService.todayWeatherData?null:r.weatherService.todayWeatherData.sunrise)||""," "),e.xp6(4),e.hij(" ",r.weatherService.moonAge()||"",""),e.xp6(5),e.hij(" ",(null==r.weatherService.todayWeatherData?null:r.weatherService.todayWeatherData.sunset)||""," "),e.xp6(4),e.Q6J("modules",r.swiperModules)("slidesPerView",5),e.xp6(1),e.Q6J("ngForOf",r.weatherService.todayHours))},dependencies:[c.sg,c.O5,s.W2,s.Q$,s.nJ,s.Wo,s.yW,s.d8,f.BN,m.Z,c.uU],styles:["ion-popover{--background: linear-gradient(to bottom,rgba(74,111,201,.8),#061011);--min-width: 300px;--width: 300px}  ion-popover ion-content{--background: transparent !important}ion-content[_ngcontent-%COMP%]{--background: transparent}swiper-container[_ngcontent-%COMP%]{max-width:100%;padding:10px}swiper-slide[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;color:#fff;margin-right:5px}swiper-slide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{font-size:.85rem}swiper-slide[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{font-size:1rem}swiper-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px}"]}),a})()}];let b=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.Bz.forChild(Z),u.Bz]}),a})();var T=i(4446);let _=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[T._o,b]}),a})()}}]);