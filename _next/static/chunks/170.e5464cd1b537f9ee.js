(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[170],{170:function(r,t,e){"use strict";e.r(t),e.d(t,{default:function(){return N}});var i=e(8564),s=e(2267),n=e(5766),c=e(8007),o=e(3304),a=e(5893),l=e(7294),p=e(1163),u=e(1664),d=e.n(u),h=e(626),_=e.n(h),f=function(r){(0,c._)(TOC,r);var t=(0,o._)(TOC);function TOC(r){return(0,i._)(this,TOC),t.call(this,r)}return(0,s._)(TOC,[{key:"render",value:function(){var r=this,t=(0,a.jsx)("ul",{children:this.props.structure.categories.map(function(t){return(0,a.jsxs)("li",{children:[(0,a.jsx)("span",{className:_().category,children:t.title}),(0,a.jsx)("ul",{children:t.articles.map(function(e){return(0,a.jsx)("li",{children:(0,a.jsx)(d(),{className:_().article,href:"".concat(r.props.baseUrl,"/").concat(t.id,"/").concat(e.id),children:e.title})},e.id)})})]},t.id)})});return(0,a.jsx)("div",{className:_().toc,children:t})}}]),TOC}(l.Component);(0,n._)(f,"propTypes",void 0),f.propTypes={};var v=e(8405),x=e(7889),j=e.n(x),y=function(r){(0,c._)(Article,r);var t=(0,o._)(Article);function Article(r){return(0,i._)(this,Article),t.call(this,r)}return(0,s._)(Article,[{key:"render",value:function(){var r=this,t="";return t=void 0===this.props.category||void 0===this.props.article?this.props.structure.rootContent:this.props.structure.categories.find(function(t){return t.id===r.props.category}).articles.find(function(t){return t.id===r.props.article}).content,(0,a.jsx)("div",{className:j().article,children:(0,a.jsx)(v.U,{children:t})})}}]),Article}(l.Component);(0,n._)(y,"propTypes",void 0),y.propTypes={};var C=e(1276),T=e.n(C),m=function(r){(0,c._)(Learn,r);var t=(0,o._)(Learn);function Learn(r){return(0,i._)(this,Learn),t.call(this,r)}return(0,s._)(Learn,[{key:"render",value:function(){if(void 0!==this.props.category&&void 0===this.props.article){this.props.router.push(this.props.baseUrl);return}return(0,a.jsx)("div",{className:[T().section,"top-section"].join(" "),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-3",children:(0,a.jsx)(f,{baseUrl:this.props.baseUrl,structure:this.props.structure})}),(0,a.jsx)("div",{className:"col",children:(0,a.jsx)(y,{structure:this.props.structure,category:this.props.category,article:this.props.article})})]})})})}}]),Learn}(l.Component);(0,n._)(m,"propTypes",void 0),m.propTypes={};var N=(0,p.withRouter)(m)},7889:function(r){r.exports={article:"Article_article__dbtrU"}},1276:function(r){r.exports={section:"Learn_section__xj1fT"}},626:function(r){r.exports={toc:"TOC_toc__A_GC_",category:"TOC_category__2mipy",article:"TOC_article__oJSzr"}}}]);