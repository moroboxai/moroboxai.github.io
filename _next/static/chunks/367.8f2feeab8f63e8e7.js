(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{1367:function(e,t,n){"use strict";n.r(t),n.d(t,{EAction:function(){return i}});var o,i,a=n(2678),d=n(8564),u=n(2267),r=n(5766),l=n(8007),s=n(2253),h=n(4932),p=n(3304),c=n(5893),m=n(7294),E=n(4964),v=n(8403),f=n.n(v);(o=i||(i={})).RUN="RUN",o.STOP="STOP";var _=function(e){(0,l._)(EmbedEditor,e);var t=(0,p._)(EmbedEditor);function EmbedEditor(e){var n;return(0,d._)(this,EmbedEditor),(n=t.call(this,e)).state={},n.handleRun=n.handleRun.bind((0,a._)(n)),n.handleStop=n.handleStop.bind((0,a._)(n)),n}return(0,u._)(EmbedEditor,[{key:"componentDidMount",value:function(){document.getElementsByTagName("html")[0].setAttribute("data-theme","embed")}},{key:"handleRun",value:function(e){this.postMessage({action:"RUN",language:e.language,script:e.script})}},{key:"handleStop",value:function(){this.postMessage({action:"STOP"})}},{key:"handleMount",value:function(e){e.resize()}},{key:"postMessage",value:function(e){var t;window.parent.postMessage((0,h._)((0,s._)({},e),{uuid:null===(t=window.frameElement)||void 0===t?void 0:t.getAttribute("data-uuid")}))}},{key:"render",value:function(){var e,t=window.frameElement,n=null!==(e=null==t?void 0:t.getAttribute("data-agent-url"))&&void 0!==e?e:void 0;return(0,c.jsx)(E.ZP,{className:f().editor,url:n,width:"100%",height:"100%",onRun:this.handleRun,onStop:this.handleStop,onMount:this.handleMount})}}]),EmbedEditor}(m.Component);(0,r._)(_,"propTypes",void 0),_.propTypes={},t.default=_},8403:function(e){e.exports={editor:"EmbedEditor_editor__02Q1m"}}}]);