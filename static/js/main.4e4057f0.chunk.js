(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(32)},23:function(e,t,n){},29:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),i=n(4),r=n.n(i),s=(n(23),n(6)),c=n(7),l=n(10),m=n(8),u=n(11),g=n(9),h=n(5),d=n(3),p=[{src:"images/pohja.png"}],f={toptext:"",fontsize:120,fontsize2:50,bottomtext:"",isTopDragging:!1,isBottomDragging:!1,topY:"40%",topX:"50%",bottomX:"50%",bottomY:"85%",ovhY:"95%",ovhX:"50%"},b=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(m.a)(t).call(this))).openImage=function(t){var n=p[t],a=new Image;a.src=n.src;var o=e.getBase64Image(a);e.setState(function(e){return Object(h.a)({currentImage:t,modalIsOpen:!e.modalIsOpen,currentImagebase64:o},f)})},e.toggle=function(){e.setState(function(e){return{modalIsOpen:!e.modalIsOpen}})},e.changeText=function(t){e.setState(Object(g.a)({},t.currentTarget.name,t.currentTarget.value))},e.getStateObj=function(t,n){var a=e.imageRef.getBoundingClientRect(),o=t.clientX-a.left,i=t.clientY-a.top,r={};return"bottom"===n?r={isBottomDragging:!0,isTopDragging:!1,bottomX:"".concat(o,"px"),bottomY:"".concat(i,"px")}:"top"===n&&(r={isTopDragging:!0,isBottomDragging:!1,topX:"".concat(o,"px"),topY:"".concat(i,"px")}),r},e.handleMouseDown=function(t,n){var a=e.getStateObj(t,n);document.addEventListener("mousemove",function(t){return e.handleMouseMove(t,n)}),e.setState(Object(h.a)({},a))},e.handleMouseMove=function(t,n){if(e.state.isTopDragging||e.state.isBottomDragging){var a={};"bottom"===n&&e.state.isBottomDragging?a=e.getStateObj(t,n):"top"===n&&e.state.isTopDragging&&(a=e.getStateObj(t,n)),e.setState(Object(h.a)({},a))}},e.handleMouseUp=function(t){document.removeEventListener("mousemove",e.handleMouseMove),e.setState({isTopDragging:!1,isBottomDragging:!1})},e.convertSvgToImage=function(){var t=e.svgRef,n=(new XMLSerializer).serializeToString(t),a=document.createElement("canvas");a.setAttribute("id","canvas");var o=t.getBoundingClientRect();a.width=o.width,a.height=o.height;var i=document.createElement("img");i.setAttribute("src","data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(n)))),i.onload=function(){a.getContext("2d").drawImage(i,0,0);var e=a.toDataURL("image/png"),t=document.createElement("a");t.download="mainos.png",t.href=e,document.body.appendChild(t),t.click()}},e.state=Object(h.a)({currentImage:0,modalIsOpen:!1,currentImagebase64:null},f),e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"getBase64Image",value:function(e){var t=document.createElement("canvas");return t.width=e.width,t.height=e.height,t.getContext("2d").drawImage(e,0,0),t.toDataURL("image/png")}},{key:"render",value:function(){var e=this,t=this.state.fontsize,n=this.state.fontsize2,a=p[this.state.currentImage],i=new Image;i.src=a.src;var r=600/(i.width/i.height),s={fontFamily:"Luckiest Guy",fontSize:"".concat(t,"px"),textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"},c={fontFamily:"Luckiest Guy",fontSize:"".concat(n,"px"),textTransform:"uppercase",fill:"#FFF",stroke:"#000",userSelect:"none"};return o.a.createElement("div",null,o.a.createElement("div",{className:"main-content"},o.a.createElement("div",{className:"sidebar"},o.a.createElement(d.f,{href:"/"},"Salpakirja"),o.a.createElement("p",null,"Valitse haluamasi mainospohja oikealta")),o.a.createElement("div",{className:"content"},p.map(function(t,n){return o.a.createElement("div",{className:"image-holder",key:t.src},o.a.createElement("span",{className:"caption"},"Salpakirja"),o.a.createElement("img",{style:{width:"100%",cursor:"pointer",height:"100%"},alt:n,src:t.src,onClick:function(){return e.openImage(n)},role:"presentation"}))}))),o.a.createElement(d.c,{className:"meme-gen-modal",isOpen:this.state.modalIsOpen},o.a.createElement(d.e,{toggle:this.toggle},"Make"),o.a.createElement(d.d,null,o.a.createElement("svg",{width:600,id:"svg_ref",height:r,ref:function(t){e.svgRef=t},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},o.a.createElement("image",{ref:function(t){e.imageRef=t},xlinkHref:this.state.currentImagebase64,height:r,width:600}),o.a.createElement("text",{style:Object(h.a)({},c,{zIndex:this.state.isTopDragging?4:1}),x:this.state.topX,y:this.state.topY,dominantBaseline:"middle",textAnchor:"middle",onMouseDown:function(t){return e.handleMouseDown(t,"top")},onMouseUp:function(t){return e.handleMouseUp(t,"top")}},this.state.toptext),o.a.createElement("text",{style:s,dominantBaseline:"middle",textAnchor:"middle",x:this.state.bottomX,y:this.state.bottomY,onMouseDown:function(t){return e.handleMouseDown(t,"bottom")},onMouseUp:function(t){return e.handleMouseUp(t,"bottom")}},this.state.bottomtext),o.a.createElement("text",{style:{fontFamily:"Luckiest Guy",fontSize:"50px",fill:"#FFF",stroke:"#000",userSelect:"none"},dominantBaseline:"middle",textAnchor:"middle",x:this.state.ovhX,y:this.state.ovhY,onMouseDown:function(t){return e.handleMouseDown(t,"bottom")},onMouseUp:function(t){return e.handleMouseUp(t,"bottom")}},this.state.ovh)),o.a.createElement("div",{className:"meme-form"},o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"toptext"},"Kirjan nimi"),o.a.createElement("input",{className:"form-control",type:"text",name:"toptext",id:"toptext",placeholder:"Mets\xe4st\xe4 kuuluu hekotusta",onChange:this.changeText})),o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"bottomtext"},"Alennettu Hinta"),o.a.createElement("input",{className:"form-control",type:"text",name:"bottomtext",id:"bottomtext",placeholder:"20\u20ac",onChange:this.changeText})),o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"ovh"},"OVH. hinta"),o.a.createElement("input",{className:"form-control",type:"text",name:"ovh",id:"ovh",defaultValue:"ovh.",placeholder:"29,90\u20ac",onChange:this.changeText})),o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"fontsize"},"Fontin koko / nimi"),o.a.createElement("input",{className:"form-control",type:"number",defaultValue:"50",name:"fontsize2",id:"fontsize2",placeholder:"50",onChange:this.changeText})),o.a.createElement(d.a,null,o.a.createElement(d.b,{for:"fontsize2"},"Fontin koko / hinta"),o.a.createElement("input",{className:"form-control",type:"number",name:"fontsize",id:"fontsize",defaultValue:"120",placeholder:"50",onChange:this.changeText})),o.a.createElement("button",{onClick:function(){return e.convertSvgToImage()},className:"btn btn-primary"},"Lataa mainos")))))}}]),t}(o.a.Component),v=(n(27),n(29),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(b,null)}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.4e4057f0.chunk.js.map