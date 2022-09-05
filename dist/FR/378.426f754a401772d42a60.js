"use strict";(self.webpackChunkwebpack_boilerplate=self.webpackChunkwebpack_boilerplate||[]).push([[378],{378:(t,e,n)=>{n.r(e),n.d(e,{ip_tab_panel:()=>a});var i=n(484);const a=class{constructor(t){(0,i.r)(this,t),this.currentTab="tab-content-1",this.isSlotPresent=!1}componentWillLoad(){let t=this.currentTab.substring(this.currentTab.length-1);this.currentTabIndex=parseInt(t)}connectedCallback(){this.isSlotPresent=!!this.el.querySelector("[slot]")}onSelectTab(t){let e=t.substring(t.length-1);this.currentTabIndex=parseInt(e),this.currentTab=t,this.el.shadowRoot.querySelector("#tab-list-content").querySelector("slot").name=t}onKeyboard(t){const e=this.el.shadowRoot.querySelectorAll("#tab-buttons button"),n="tab-content-"+e.length;switch(t.key){case"ArrowLeft":1===this.currentTabIndex?this.currentTabIndex=e.length:this.currentTabIndex--,this.setSelectedPanel(this.currentTabIndex,t);break;case"ArrowRight":this.currentTabIndex===e.length?this.currentTabIndex=1:this.currentTabIndex++,this.setSelectedPanel(this.currentTabIndex,t);break;case"Home":e[0].focus(),this.currentTab="tab-content-1",this.onSelectTab(this.currentTab),t.preventDefault();break;case"End":e[e.length-1].focus(),this.currentTab=n,this.onSelectTab(this.currentTab),t.preventDefault()}}setSelectedPanel(t,e){this.el.shadowRoot.querySelectorAll("#tab-buttons button")[t-1].focus(),this.currentTab=`tab-content-${t}`,this.onSelectTab(this.currentTab),e.preventDefault()}render(){var t;let e;return e=this.isSlotPresent?(0,i.h)("slot",{name:this.currentTab}):(0,i.h)("div",{class:"ip-content"},(0,i.h)("img",{src:(0,i.g)("./assets/tab-img-1.png"),alt:""}),(0,i.h)("div",{class:"ip-content-desc"},(0,i.h)("h2",{class:"ip-content-title"},"Accessibilité"),(0,i.h)("h3",{class:"ip-content-subtitle"},"6 Bonnes Pratiques pour être en Conformité"),(0,i.h)("p",{class:"ip-content-text"},"Aujourd’hui, encore beaucoup de sites Web et d’applications mobiles sont conçus sans penser à la navigation des personnes en situation de handicap. Pourtant, pour ces personnes, l’outil digital représente un véritable levier d’intégration, et leur apporte bien souvent un surcroît d’indépendance.Selon les différents types de handicaps, les manquements les plus couramment relevés sur le Web ne sont pas les mêmes."),(0,i.h)("button",{class:"ip-content-btn"},"En savoir plus",(0,i.h)("img",{src:(0,i.g)("./assets/arrow-right.svg"),alt:""})))),[(0,i.h)("div",{class:"ip-tab"},(0,i.h)("div",{role:"tablist","aria-labelledby":"tablist-1",class:"ip-tab-buttons",id:"tab-buttons"},null===(t=this.tabHeaders)||void 0===t?void 0:t.map(((t,e)=>(0,i.h)("button",{class:this.currentTab==="tab-content-"+(e+1)?"tab-content-active":"",onClick:this.onSelectTab.bind(this,"tab-content-"+(e+1)),onKeyDown:this.onKeyboard.bind(this),id:"tab-"+(e+1),type:"button",role:"tab","aria-selected":this.currentTab==="tab-content-"+(e+1),"aria-controls":"tab-content-"+(e+1),tabindex:this.currentTab==="tab-content-"+(e+1)?0:-1},(0,i.h)("img",{class:"tab-panel-icon",src:this.currentTab==="tab-content-"+(e+1)?t.imgPathActive:t.imgPath,alt:""}),(0,i.h)("span",{class:"tab-panel-text"},t.title))))),(0,i.h)("div",{id:"tab-list-content"},(0,i.h)("div",{id:"tab-content-"+this.currentTabIndex,role:"tabpanel",tabindex:"0","aria-labelledby":"tab-"+this.currentTabIndex},e)))]}static get assetsDirs(){return["assets"]}get el(){return(0,i.a)(this)}};a.style="*{box-sizing:border-box}html,body,div,span,h1,h2,h3,h4,h5,h6,p,a,ol,ul,li,article,footer,header,menu,nav,section,summary,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;vertical-align:baseline;box-sizing:border-box}ol,ul{list-style:none}blockquote,q{quotes:none}button{background:none;border:none;cursor:pointer}.ip-tab{max-width:1080px;margin:100px auto}.ip-tab .ip-tab-buttons{display:flex;justify-content:center;border-bottom:1px solid #B00057}.ip-tab .ip-tab-buttons button{display:flex;flex-direction:column;align-items:center;color:#2E3243;padding:20px;border-radius:10px 10px 0 0;margin:0 12px 0 12px}.ip-tab .ip-tab-buttons .tab-content-active{background-color:#B00057;color:#ffffff;border-radius:10px 10px 0 0}.ip-tab .ip-tab-buttons .tab-panel-text{font-size:16px}.ip-tab .ip-tab-buttons button .tab-panel-icon{width:32px;height:32px;display:block;margin-bottom:10px}.ip-content{margin:50px 0;display:flex}.ip-content img{border-radius:10px}.ip-content .ip-content-desc{margin-left:50px;margin-right:25px}.ip-content .ip-content-title{margin-top:35px;font-family:Avenir-Heavy;font-size:18px;color:#B00057;text-transform:uppercase}.ip-content .ip-content-subtitle{margin-top:15px;font-family:Avenir-Heavy;font-size:42px;color:#B00057}.ip-content .ip-content-text{margin-top:20px;font-family:Avenir-Book;font-size:18px;color:#2E3243}.ip-content .ip-content-btn{margin-top:20px;font-family:Avenir-Heavy;font-size:16px;display:flex;justify-content:center;align-items:center;padding:10px 16px;border:none;border-radius:4px;background-color:#B00057;color:#ffffff}.ip-content .ip-content-btn img{margin-left:15px;width:14px;height:15px}"}}]);