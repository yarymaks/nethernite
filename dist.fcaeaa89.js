parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./..\\fonts\\LeksaSansPro.eot":[["LeksaSansPro.95404d1d.eot","I66q"],"I66q"],"./..\\fonts\\LeksaSansPro.woff2":[["LeksaSansPro.6205224e.woff2","wW8S"],"wW8S"],"./..\\fonts\\LeksaSansPro.woff":[["LeksaSansPro.6f701ea6.woff","VdRs"],"VdRs"],"./..\\fonts\\LeksaSansPro.ttf":[["LeksaSansPro.1900e5c0.ttf","mdzm"],"mdzm"],"./..\\fonts\\LeksaSansPro-Bold.eot":[["LeksaSansPro-Bold.636c769d.eot","NwXC"],"NwXC"],"./..\\fonts\\LeksaSansPro-Bold.woff2":[["LeksaSansPro-Bold.17619e69.woff2","kGjI"],"kGjI"],"./..\\fonts\\LeksaSansPro-Bold.woff":[["LeksaSansPro-Bold.468e9573.woff","FQP9"],"FQP9"],"./..\\fonts\\LeksaSansPro-Bold.ttf":[["LeksaSansPro-Bold.ccff7481.ttf","tTla"],"tTla"],"./..\\fonts\\Roboto-Medium.ttf":[["Roboto-Medium.f1c32734.ttf","qops"],"qops"],"./..\\fonts\\Roboto-Bold.ttf":[["Roboto-Bold.0d9c72e4.ttf","EFZN"],"EFZN"],"./..\\fonts\\Roboto-Regular.ttf":[["Roboto-Regular.5c3119f7.ttf","E3dE"],"E3dE"],"./..\\images\\icons\\crystals.svg":[["crystals.b794f8be.svg","mwVE"],"mwVE"],"./..\\images\\desktop\\crystals.svg":[["crystals.ae31bb6f.svg","ni45"],"ni45"],"./..\\images\\icons\\coins.svg":[["coins.a409dd39.svg","Zrm9"],"Zrm9"],"./..\\images\\desktop\\coins.svg":[["coins.e506fd95.svg","BZH3"],"BZH3"],"./..\\images\\mobile\\background.jpg":[["background.fe7560af.jpg","g1ei"],"g1ei"],"./..\\images\\mobile\\background@x2.jpg":[["background@x2.07ed7975.jpg","N4vp"],"N4vp"],"./..\\images\\desktop\\background.jpg":[["background.2e5482ea.jpg","KvI3"],"KvI3"],"./..\\images\\desktop\\background@x2.jpg":[["background@x2.ab97f052.jpg","Z1X3"],"Z1X3"],"./..\\images\\mobile\\frame.png":[["frame.c487c66d.png","w3ht"],"w3ht"],"./..\\images\\mobile\\mask.png":[["mask.61b1d94d.png","Xhuw"],"Xhuw"],"./..\\images\\icons\\crystals_btn.svg":[["crystals_btn.6df5c79e.svg","Ax83"],"Ax83"],"./..\\images\\desktop\\dollar.svg":[["dollar.9b81413f.svg","DK6U"],"DK6U"]}],"FRrR":[function(require,module,exports) {
var e={mainTab:document.getElementById("defaultOpen"),pages:document.querySelector(".pages__container"),btns:document.querySelectorAll(".pages__button"),boxes:document.querySelectorAll(".boxes")},t=function(){window.addEventListener("load",function(){document.getElementById("monst").style.display="block",e.mainTab.className+=" active"})},n=function(t){for(i=0;i<e.boxes.length;i++)e.boxes[i].style.display="none";document.getElementById(t).style.display="block"},s=function(){for(var t=0;t<e.btns.length;t++)e.btns[t].addEventListener("click",function(){var e=document.getElementsByClassName("active");e[0].className=e[0].className.replace(" active",""),this.className+=" active",n(this.className.split(" ")[1]),this.blur()})};t(),s();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/openTab");
},{"./sass/main.scss":"clu1","./js/openTab":"FRrR"}]},{},["Focm"], null)
//# sourceMappingURL=/nethernite/dist.fcaeaa89.js.map