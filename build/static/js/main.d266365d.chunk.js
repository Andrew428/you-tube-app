(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports=a(31)},31:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a(3),c=a(5),r=a(4),l=a(6),o=a(10),s=a.n(o),u=a(0),d=a.n(u),m=a(11),v=a.n(m),h=a(12),p=a.n(h),b=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={term:""},a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return d.a.createElement("div",{className:"search-bar"},d.a.createElement("input",{value:this.state.term,onChange:function(t){return e.onInputChange(t.target.value)}}))}},{key:"onInputChange",value:function(e){this.setState({term:e}),this.props.onSearchTermChange(e)}}]),t}(u.Component),E=function(e){var t=e.video,a=e.onVideoSelect,n=t.snippet.thumbnails.default.url;return d.a.createElement("li",{onClick:function(){return a(t)},className:"list-group-item"},d.a.createElement("div",{className:"video-list media"},d.a.createElement("div",{className:"media-left"},d.a.createElement("img",{className:"media-object",src:n,alt:n})),d.a.createElement("div",{className:"media-body"},d.a.createElement("div",{className:"media-heading"},t.snippet.title))))},f=function(e){var t=e.videos.map(function(t){return d.a.createElement(E,{onVideoSelect:e.onVideoSelect,key:t.etag,video:t})});return d.a.createElement("ul",{className:"col-md-4 video-list-ul"},t)},g=function(e){var t=e.video;if(!t)return d.a.createElement("div",null,"Loading...");var a=t.id.videoId,n="https://www.youtube.com/embed/".concat(a);return d.a.createElement("div",{className:"video-detail col-md-8"},d.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 video-main"},d.a.createElement("iframe",{className:"embed-responsive-item",src:n,title:n})),d.a.createElement("div",{className:"details"},d.a.createElement("div",null,t.snippet.title),d.a.createElement("div",null,t.snippet.description)))},S=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={videos:[],selectedVideo:null},a.videoSearch("Glitch Mob - Seeing Without Eyes(Full album)"),a}return Object(l.a)(t,e),Object(i.a)(t,[{key:"videoSearch",value:function(e){var t=this;p()({key:"AIzaSyCGAZXpuBmH12h5HqA96cx-0kui98qjn3s",term:e},function(e){t.setState({videos:e,selectedVideo:e[0]})})}},{key:"render",value:function(){var e=this,t=s.a.debounce(function(t){""===t&&(t="Glitch Mob - Seeing Without Eyes (Full album)"),e.videoSearch(t)},300);return d.a.createElement("div",null,d.a.createElement("img",{src:"../images/you-tube.png",alt:"You Tube"}),d.a.createElement(b,{onSearchTermChange:t}),d.a.createElement(g,{video:this.state.selectedVideo}),d.a.createElement(f,{onVideoSelect:function(t){return e.setState({selectedVideo:t})},videos:this.state.videos}))}}]),t}(u.Component);v.a.render(d.a.createElement(S,null),document.querySelector("#root"))}},[[13,2,1]]]);
//# sourceMappingURL=main.d266365d.chunk.js.map