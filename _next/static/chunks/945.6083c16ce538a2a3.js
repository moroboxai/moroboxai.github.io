(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[945],{1367:function(e,t,a){"use strict";a.r(t),a.d(t,{EAction:function(){return i}});var n,i,o=a(2678),r=a(8564),l=a(2267),d=a(5766),s=a(8007),u=a(2253),c=a(4932),h=a(3304),p=a(5893),m=a(5152),v=a.n(m),_=a(7294),y=a(8403),f=a.n(y),g=v()(function(){return a.e(982).then(a.bind(a,4964))},{loadableGenerated:{webpack:function(){return[4964]}},ssr:!1});(n=i||(i={})).RUN="RUN",n.STOP="STOP";var E=function(e){(0,s._)(EmbedEditor,e);var t=(0,h._)(EmbedEditor);function EmbedEditor(e){var a;return(0,r._)(this,EmbedEditor),(a=t.call(this,e)).state={},a.handleRun=a.handleRun.bind((0,o._)(a)),a.handleStop=a.handleStop.bind((0,o._)(a)),a}return(0,l._)(EmbedEditor,[{key:"componentDidMount",value:function(){document.getElementsByTagName("html")[0].setAttribute("data-theme","embed")}},{key:"handleRun",value:function(e){this.postMessage({action:"RUN",language:e.language,script:e.script})}},{key:"handleStop",value:function(){this.postMessage({action:"STOP"})}},{key:"handleMount",value:function(e){e.resize()}},{key:"postMessage",value:function(e){var t;window.parent.postMessage((0,c._)((0,u._)({},e),{uuid:null===(t=window.frameElement)||void 0===t?void 0:t.getAttribute("data-uuid")}))}},{key:"render",value:function(){var e,t=window.frameElement,a=null!==(e=null==t?void 0:t.getAttribute("data-agent-url"))&&void 0!==e?e:void 0;return(0,p.jsx)(g,{className:f().editor,url:a,width:"100%",height:"100%",onRun:this.handleRun,onStop:this.handleStop,onMount:this.handleMount})}}]),EmbedEditor}(_.Component);(0,d._)(E,"propTypes",void 0),E.propTypes={},t.default=E},3320:function(e,t,a){"use strict";a.r(t),a.d(t,{EAction:function(){return i}});var n,i,o=a(2678),r=a(8564),l=a(2267),d=a(5766),s=a(8007),u=a(3304),c=a(5893),h=a(7294),p=a(1308),m=a.n(p),v=(0,h.lazy)(function(){return Promise.all([a.e(890),a.e(642)]).then(a.bind(a,6396))});(n=i||(i={})).LOAD_AGENT="LOAD_AGENT",n.UNLOAD_AGENT="UNLOAD_AGENT";var _=function(e){(0,s._)(EmbedPlayer,e);var t=(0,u._)(EmbedPlayer);function EmbedPlayer(e){var a;return(0,r._)(this,EmbedPlayer),(a=t.call(this,e)).state={},a.handleMessage=a.handleMessage.bind((0,o._)(a)),a.handleMount=a.handleMount.bind((0,o._)(a)),a.handleUnmount=a.handleUnmount.bind((0,o._)(a)),a}return(0,l._)(EmbedPlayer,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleMessage),document.getElementsByTagName("html")[0].setAttribute("data-theme","embed")}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleMessage)}},{key:"handleMessage",value:function(e){var t,a;if(void 0!==e.data.action&&void 0!==this.state.player)switch(e.data.action){case"LOAD_AGENT":void 0!==e.data.script&&(null===(t=this.state.player)||void 0===t||t.loadAgent(0,{language:e.data.language,script:e.data.script}));break;case"UNLOAD_AGENT":null===(a=this.state.player)||void 0===a||a.unloadAgent(0)}}},{key:"handleMount",value:function(e){this.setState({player:e})}},{key:"handleUnmount",value:function(){this.setState({player:void 0})}},{key:"render",value:function(){var e,t,a=window.frameElement,n=(null!==(e=null==a?void 0:a.getAttribute("allow"))&&void 0!==e?e:"").split(";").map(function(e){return e.trim()}),i=null==a?void 0:a.getAttribute("data-game-id"),o=void 0!==i?"".concat("https://raw.githubusercontent.com/moroboxai/moroboxai-games/master","/").concat(i):null!==(t=null==a?void 0:a.getAttribute("data-game-url"))&&void 0!==t?t:"";return(0,c.jsx)(h.Suspense,{fallback:(0,c.jsx)("div",{className:m().placeholder}),children:(0,c.jsx)(v,{url:o,autoPlay:n.includes("autoplay"),onMount:this.handleMount,onUnmount:this.handleUnmount})})}}]),EmbedPlayer}(h.Component);(0,d._)(_,"propTypes",void 0),_.propTypes={},t.default=_},1945:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(2678),i=a(8564),o=a(2267),r=a(5766),l=a(8007),d=a(3304),s=a(5893),u=a(7294),c=a(3320),h=a(7632),p=function(e){(0,l._)(IFramePlayer,e);var t=(0,d._)(IFramePlayer);function IFramePlayer(e){var a;return(0,i._)(this,IFramePlayer),a=t.call(this,e),(0,r._)((0,n._)(a),"_refIFrame",void 0),a.state={uuid:(0,h.Z)()},a._refIFrame=u.createRef(),a}return(0,o._)(IFramePlayer,[{key:"loadAgent",value:function(e){var t,a;null===(a=this._refIFrame.current)||void 0===a||null===(t=a.contentWindow)||void 0===t||t.postMessage({action:c.EAction.LOAD_AGENT,language:e.language,script:e.script})}},{key:"unloadAgent",value:function(){var e,t;null===(t=this._refIFrame.current)||void 0===t||null===(e=t.contentWindow)||void 0===e||e.postMessage({action:c.EAction.UNLOAD_AGENT})}},{key:"render",value:function(){var e;return(0,s.jsx)("iframe",{ref:this._refIFrame,className:this.props.className,src:"/embed/player",title:null!==(e=this.props.title)&&void 0!==e?e:"player","data-game-url":this.props.gameUrl,"data-game-id":this.props.gameId,"data-uuid":this.state.uuid,allow:!0===this.props.autoPlay?"autoplay":"",width:this.props.width,height:this.props.height,style:{aspectRatio:this.props.aspectRatio},loading:"lazy"})}}]),IFramePlayer}(u.Component);(0,r._)(p,"propTypes",void 0),p.propTypes={};var m=a(1367),v=function(e){(0,l._)(IFrameEditor,e);var t=(0,d._)(IFrameEditor);function IFrameEditor(e){var a;return(0,i._)(this,IFrameEditor),a=t.call(this,e),(0,r._)((0,n._)(a),"_refIFrame",void 0),a.state={uuid:(0,h.Z)()},a.handleMessage=a.handleMessage.bind((0,n._)(a)),a._refIFrame=u.createRef(),a}return(0,o._)(IFrameEditor,[{key:"componentDidMount",value:function(){window.addEventListener("message",this.handleMessage)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("message",this.handleMessage)}},{key:"handleMessage",value:function(e){if(void 0!==e.data.action&&e.data.uuid===this.state.uuid)switch(e.data.action){case m.EAction.RUN:void 0!==this.props.onRun&&void 0!==e.data.script&&this.props.onRun({language:e.data.language,script:e.data.script});break;case m.EAction.STOP:void 0!==this.props.onStop&&this.props.onStop()}}},{key:"render",value:function(){var e;return(0,s.jsx)("iframe",{ref:this._refIFrame,src:"/embed/editor",title:null!==(e=this.props.title)&&void 0!==e?e:"editor","data-agent-url":this.props.url,"data-uuid":this.state.uuid,width:this.props.width,height:this.props.height,loading:"lazy"})}}]),IFrameEditor}(u.Component);(0,r._)(v,"propTypes",void 0),v.propTypes={};var _=a(4476),y=a.n(_),f=function(e){(0,l._)(PlayerEditor,e);var t=(0,d._)(PlayerEditor);function PlayerEditor(e){var a;return(0,i._)(this,PlayerEditor),a=t.call(this,e),(0,r._)((0,n._)(a),"_refPlayer",void 0),(0,r._)((0,n._)(a),"_refEditor",void 0),a.state={},a.handleMount=a.handleMount.bind((0,n._)(a)),a.handleUnmount=a.handleUnmount.bind((0,n._)(a)),a.handleRun=a.handleRun.bind((0,n._)(a)),a.handleStop=a.handleStop.bind((0,n._)(a)),a._refPlayer=u.createRef(),a._refEditor=u.createRef(),a}return(0,o._)(PlayerEditor,[{key:"handleMount",value:function(e){console.log("player mounted"),this.setState({player:e})}},{key:"handleUnmount",value:function(e){console.log("player unmounted"),this.setState({player:void 0})}},{key:"handleRun",value:function(e){var t;null===(t=this._refPlayer.current)||void 0===t||t.loadAgent(e)}},{key:"handleStop",value:function(){var e;null===(e=this._refPlayer.current)||void 0===e||e.unloadAgent()}},{key:"render",value:function(){var e,t,a=this.props,n=a.className,i=a.playerOptions,o=a.editorOptions,r=a.homePage;return(0,s.jsx)("div",{className:[n,"container"].join(" "),children:(0,s.jsxs)("div",{className:"row justify-content-center align-items-center gy-4 m-auto",children:[(0,s.jsx)("div",{className:"col-12 col-sm-auto",children:(0,s.jsx)("div",{className:[y().player,i.className].join(" "),children:(0,s.jsx)("div",{children:(0,s.jsx)(p,{ref:this._refPlayer,gameId:i.gameId,autoPlay:!0,width:i.width/(null!==(e=i.scale)&&void 0!==e?e:1),aspectRatio:"".concat(i.width,"/").concat(i.height)})})})}),(0,s.jsx)("div",{className:["col-12",!0===r?"col-xl-7":"col-xl"].join(" "),children:(0,s.jsx)(v,{ref:this._refEditor,className:o.className,url:o.agentUrl,width:"100%",height:null!==(t=o.height)&&void 0!==t?t:"500px",onRun:this.handleRun,onStop:this.handleStop})})]})})}}]),PlayerEditor}(u.Component);(0,r._)(f,"propTypes",void 0),f.propTypes={};var g=f},8403:function(e){e.exports={editor:"EmbedEditor_editor__02Q1m"}},1308:function(e){e.exports={placeholder:"EmbedPlayer_placeholder__4ew44"}},4476:function(e){e.exports={h100:"PlayerEditor_h100__HY_d6",vertical:"PlayerEditor_vertical___5XsH",horizontal:"PlayerEditor_horizontal__cJtmA",player:"PlayerEditor_player__KOK_t"}}}]);