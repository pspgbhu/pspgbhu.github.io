webpackJsonp([2,0],{0:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=i(33),a=n(s),r=i(27),l=n(r);window.vm=new a.default({el:"#app",template:"<App/>",render:function(e){return e(l.default)}})},24:function(e,t){},25:function(e,t){},26:function(e,t){},27:function(e,t,i){var n,s;i(24),n=i(63);var a=i(30);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=n},28:function(e,t,i){var n,s;i(25),n=i(64);var a=i(31);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=n},29:function(e,t,i){var n,s;i(26),n=i(65);var a=i(32);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,e.exports=n},30:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[e._m(0),e._v(" "),i("div",{staticClass:"main"},[i("el-content",{ref:"cont",staticClass:"main-content",attrs:{files:e.files,pixel:e.pixel,line_num:e.line_num,single_row:e.single_row}}),e._v(" "),i("el-sidebar",{ref:"bar",staticClass:"main-sidebar"})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header"},[i("div",{staticClass:"header-left"},[i("h1",[e._v("逐帧动画雪碧图生成器")])]),e._v(" "),i("div",{staticClass:"header-right"},[i("a",{attrs:{href:"https://github.com/pspgbhu/FSM-FrameSpriteMaker-Vue2.1"}},[e._v("GitHub")])])])}]}},31:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),e._v(" "),i("div",{staticClass:"canvas-container"},[i("canvas",{staticClass:"canvas shadow",attrs:{id:"canvas",width:e.pixel_width,height:e.pixel_height}}),e._v(" "),e._m(1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"artical"},[i("h3",[e._v("工具介绍：")]),e._v(" "),i("p",[e._v("本工具可以将宽高像素相同的逐帧图一键生成为连续帧的雪碧图（如果宽高不相同，将会以第一张图的宽高像素作为基准）")]),e._v(" "),i("h3",[e._v("使用说明：")]),e._v(" "),i("p",[e._v("在输入框中分别输入单张图片的宽高像素，将已经命名规范的逐帧图一次全部上传（再次上传会覆盖之前上传的内容）。点击生成图片，右键保存图片即可！")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p")])}]}},32:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"sidebar shadow"},[i("div",[i("label",{staticClass:"sidebar-btn",attrs:{for:"upImg"}},[e._v("\n        上传图片\n        "),i("input",{attrs:{id:"upImg",type:"file",multiple:""},on:{change:e._uploadImg}})])]),e._v(" "),e.informations.length>0?i("div",{staticClass:"sidebar-infor"},e._l(e.informations,function(t){return i("div",[e._v("\n        "+e._s(t)+"\n      ")])})):e._e(),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.settings_show,expression:"settings_show"}],staticClass:"settings"},[i("div",{staticClass:"settings-item"},[i("label",[e._v("宽度：")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],attrs:{min:"0",type:"number",placeholder:"不填写则取默认值"},domProps:{value:e._s(e.width)},on:{input:function(t){t.target.composing||(e.width=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" px\n      ")]),e._v(" "),i("div",{staticClass:"settings-item"},[i("label",[e._v("高度：")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.height,expression:"height"}],attrs:{min:"0",type:"number",placeholder:"不填写则取默认值"},domProps:{value:e._s(e.height)},on:{input:function(t){t.target.composing||(e.height=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" px\n      ")]),e._v(" "),i("p",{staticClass:"tip"},[e._v("注：此为单张图片的宽高")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.settings_show,expression:"settings_show"}],staticClass:"settings"},[i("div",{staticClass:"settings-item"},[i("label",[e._v("每行最大图片个数：")]),e._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:e.line_num,expression:"line_num"}],staticClass:"settings-line",attrs:{type:"number",placeholder:"不填写则取默认值",disabled:e.checked},domProps:{value:e._s(e.line_num)},on:{input:function(t){t.target.composing||(e.line_num=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),e._v(" 个\n      ")]),e._v(" "),i("div",{staticClass:"settings-item checkbox"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],attrs:{id:"singlerow",type:"checkbox"},domProps:{checked:Array.isArray(e.checked)?e._i(e.checked,null)>-1:e.checked},on:{change:function(t){var i=e.checked,n=t.target,s=!!n.checked;if(Array.isArray(i)){var a=null,r=e._i(i,a);s?r<0&&(e.checked=i.concat(a)):r>-1&&(e.checked=i.slice(0,r).concat(i.slice(r+1)))}else e.checked=s}}}),e._v(" "),i("label",[e._v("单行模式")])]),e._v(" "),i("p",{staticClass:"tip"},[e._v("注：图片个数超过该数量时，多出的图片将会折至第二行。开启单行模式时，会忽略每行最大图片数，将所有图片都生成在一行上")])]),e._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:e.settings_show,expression:"settings_show"}]},[i("div",{staticClass:"sidebar-btn",on:{click:e._emitChange}},[e._v("\n        生成图片\n      ")])])])])},staticRenderFns:[]}},63:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(28),a=n(s),r=i(29),l=n(r);t.default={name:"app",components:{elContent:a.default,elSidebar:l.default},data:function(){return{files:[],pixel:{width:0,height:0},line_num:10,single_row:!1}},mounted:function(){var e=this;this.$refs.bar.$on("change",function(t){e.files=t.files,e.pixel=t.pixel,e.line_num=t.line,e.single_row=t.checked})}}},64:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Content",data:function(){return{lineNum:10}},computed:{pixel_width:function(){var e=this.files.length>this.lineNum?this.pixel.width*this.lineNum:this.pixel.width*this.files.length;return e},pixel_height:function(){var e=this.pixel.height*Math.ceil(this.files.length/this.lineNum);return e},single_width:function(){return this.pixel.width},single_height:function(){return this.pixel.height}},props:{files:{type:Array,required:!1,default:function(){return[]}},pixel:{type:Object,required:!1,default:function(){return{}}},line_num:{type:Number,required:!1,default:10},single_row:{type:Boolean,required:!1,default:!1}},watch:{files:function(){var e=this;this.$nextTick(function(){e.draw()})},pixel:function(){var e=this;this.$nextTick(function(){e.draw()})},line_num:function(e){var t=this;this.lineNum=e,this.$nextTick(function(){t.draw()})},single_row:function(e){var t=this;e&&(this.lineNum=9999),this.$nextTick(function(){t.draw()})}},methods:{draw:function(){var e=this,t=document.getElementById("canvas"),i=t.getContext("2d");this.files.length<this.lineNum?this.files.length:this.lineNum,Math.ceil(this.files.length/this.lineNum);this.files.forEach(function(t,n){var s=n%e.lineNum,a=Math.floor(n/e.lineNum);i.drawImage(t,e.single_width*s,e.single_height*a,e.single_width,e.single_height)})}}}},65:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(66),a=n(s);t.default={name:"Sidebar",data:function(){return{informations:[],files:[],urls:[],settings_show:!1,value:"",width:0,height:0,line_num:10,checked:!1}},watch:{urls:function(e){var t=this;this.settings_show=!0,this.files=this._creatImageDom(e),this.informations=this._checkInfors(this.files),this.files[0].onload=function(){var e=t._getPixel(t.files[0]);t.width=e.width,t.height=e.height}}},methods:{_uploadImg:function(e){var t=e.target.files,i=[];if(0!==t.length){var n=!0,s=!1,r=void 0;try{for(var l,c=(0,a.default)(t);!(n=(l=c.next()).done);n=!0){var o=l.value,u=window.URL.createObjectURL(o);i.push(u)}}catch(e){s=!0,r=e}finally{try{!n&&c.return&&c.return()}finally{if(s)throw r}}this.urls=i}},_creatImageDom:function(e){var t=[];return e.forEach(function(e,i){t[i]=new Image,t[i].src=e}),t},_checkInfors:function(e){var t=[];return e.forEach(function(i,n){var s=i;s.onload=function(){i.naturalWidth===e[0].naturalWidth&&i.naturalHeight===e[0].naturalHeight||t.push("请检查第"+(n+1)+"张图片像素是否一致！")}}),t},_getPixel:function(e){var t={width:e.naturalWidth,height:e.naturalHeight};return t},_emitChange:function(){var e={pixel:{width:this.width,height:this.height},files:this.files,line:this.line_num,checked:this.checked};this.$emit("change",e)}}}}});
//# sourceMappingURL=app.698306bb475514a6f2f1.js.map