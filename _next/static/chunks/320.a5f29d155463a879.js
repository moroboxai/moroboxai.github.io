"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[320],{3320:function(e,t,n){n.r(t),n.d(t,{EAction:function(){return o}});var a,o,l=n(2678),i=n(8564),u=n(2267),d=n(5766),s=n(8007),r=n(3304),m=n(5893),c=n(7294),h=n(6396);(a=o||(o={})).LOAD_AGENT="LOAD_AGENT",a.UNLOAD_AGENT="UNLOAD_AGENT";var v=function(e){(0,s._)(EmbedPlayer,e);var t=(0,r._)(EmbedPlayer);function EmbedPlayer(e){var n;return(0,i._)(this,EmbedPlayer),(n=t.call(this,e)).state={},n.handleMessage=n.handleMessage.bind((0,l._)(n)),n.handleMount=n.handleMount.bind((0,l._)(n)),n.handleUnmount=n.handleUnmount.bind((0,l._)(n)),n}return(0,u._)(EmbedPlayer,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleMessage),document.getElementsByTagName("html")[0].setAttribute("data-theme","embed")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleMessage)}},{key:"handleMessage",value:function(e){var t,n;if(void 0!==e.data.action&&void 0!==this.state.player)switch(e.data.action){case"LOAD_AGENT":void 0!==e.data.script&&(null===(t=this.state.player)||void 0===t||t.loadAgent(0,{language:e.data.language,script:e.data.script}));break;case"UNLOAD_AGENT":null===(n=this.state.player)||void 0===n||n.unloadAgent(0)}}},{key:"handleMount",value:function(e){this.setState({player:e})}},{key:"handleUnmount",value:function(){this.setState({player:void 0})}},{key:"render",value:function(){var e,t,n=window.frameElement,a=(null!==(e=null==n?void 0:n.getAttribute("allow"))&&void 0!==e?e:"").split(";").map(function(e){return e.trim()}),o=null==n?void 0:n.getAttribute("data-game-id"),l=void 0!==o?"".concat("https://raw.githubusercontent.com/moroboxai/moroboxai-games/master","/").concat(o):null!==(t=null==n?void 0:n.getAttribute("data-game-url"))&&void 0!==t?t:"";return(0,m.jsx)(h.ZP,{url:l,autoPlay:a.includes("autoplay"),onMount:this.handleMount,onUnmount:this.handleUnmount})}}]),EmbedPlayer}(c.Component);(0,d._)(v,"propTypes",void 0),v.propTypes={},t.default=v}}]);