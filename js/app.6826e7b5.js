(function(e){function t(t){for(var a,o,r=t[0],l=t[1],d=t[2],c=0,h=[];c<r.length;c++)o=r[c],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&h.push(s[o][0]),s[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);m&&m(t);while(h.length)h.shift()();return n.push.apply(n,d||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},s={app:0},n=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var m=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"56d7":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Home")],1)},s=[],n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home-main"},[t("div",{staticClass:"top-main"},[e._e(),t("div",{staticClass:"box-title"},[e._v(e._s(e.leading+e.suffixName))]),e._m(0),t("div",{staticClass:"flex-box-table"},[t("div",{staticClass:"fix-block box1"}),t("div",{staticClass:"fix-block box2"}),t("div",{staticClass:"fix-block box3"}),t("el-table",{attrs:{data:e.listData,size:"small",border:"","span-method":e.objectSpanMethod,"row-class-name":e.tableRowClassName}},[t("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit1?t("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(t){return e.editHandler(1,!1)}},model:{value:e.detailForm.headName1,callback:function(t){e.$set(e.detailForm,"headName1",t)},expression:"detailForm.headName1"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName1))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(1)}}})]]}},{key:"default",fn:function(i){return[t("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(t){return e.changeName(i.row)}},model:{value:i.row.name,callback:function(t){e.$set(i.row,"name",t)},expression:"scope.row.name"}})]}}])}),t("el-table-column",{attrs:{width:"110px"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit2?t("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(t){return e.editHandler(2,!1)}},model:{value:e.detailForm.headName2,callback:function(t){e.$set(e.detailForm,"headName2",t)},expression:"detailForm.headName2"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName2))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(2)}}})]]}},{key:"default",fn:function(i){return[t("el-input-number",{attrs:{size:"mini",controls:!1,min:0},on:{blur:function(t){return e.changeName2(i.row)}},model:{value:i.row.mark,callback:function(t){e.$set(i.row,"mark",t)},expression:"scope.row.mark"}})]}}])}),t("el-table-column",{attrs:{width:"140px"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit3?t("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(t){return e.editHandler(3,!1)}},model:{value:e.detailForm.headName3,callback:function(t){e.$set(e.detailForm,"headName3",t)},expression:"detailForm.headName3"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName3))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(3)}}})]]}},{key:"default",fn:function(i){return[t("el-input-number",{attrs:{size:"mini",controls:!1,min:0},model:{value:i.row.finsh,callback:function(t){e.$set(i.row,"finsh",t)},expression:"scope.row.finsh"}})]}}])}),t("el-table-column",{attrs:{width:"120px"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit4?t("el-input",{attrs:{size:"mini",placeholder:""},on:{blur:function(t){return e.editHandler(4,!1)}},model:{value:e.detailForm.headName4,callback:function(t){e.$set(e.detailForm,"headName4",t)},expression:"detailForm.headName4"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName4))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(4)}}})]]}},{key:"default",fn:function(i){return[t("el-input-number",{attrs:{size:"mini",controls:!1,min:0},model:{value:i.row.score,callback:function(t){e.$set(i.row,"score",t)},expression:"scope.row.score"}})]}}])})],1),t("div",{staticClass:"table-btns"},[t("el-button",{attrs:{size:"mini"},on:{click:e.cancel}},[e._v("取消")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.submitForm}},[e._v("确定")]),t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.downExcel}},[e._v("导出Excel")])],1)],1),e._e()],1),t("el-dialog",{staticClass:"table-dialog-box",attrs:{width:"1100px",title:e.dialogTitle,"before-close":e.cancel,visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-table",{attrs:{data:e.listData,border:"","span-method":e.objectSpanMethod,"row-class-name":e.tableRowClassName}},[t("el-table-column",{attrs:{width:"250"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit1?t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.editHandler(1,!1)}},model:{value:e.detailForm.headName1,callback:function(t){e.$set(e.detailForm,"headName1",t)},expression:"detailForm.headName1"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName1))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(1)}}})]]}},{key:"default",fn:function(i){return[t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.changeName(i.row)}},model:{value:i.row.name,callback:function(t){e.$set(i.row,"name",t)},expression:"scope.row.name"}})]}}])}),t("el-table-column",{attrs:{width:"111"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit2?t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.editHandler(2,!1)}},model:{value:e.detailForm.headName2,callback:function(t){e.$set(e.detailForm,"headName2",t)},expression:"detailForm.headName2"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName2))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(2)}}})]]}},{key:"default",fn:function(i){return[t("el-input-number",{attrs:{controls:!1,min:0},on:{blur:function(t){return e.changeName2(i.row)}},model:{value:i.row.mark,callback:function(t){e.$set(i.row,"mark",t)},expression:"scope.row.mark"}})]}}])}),t("el-table-column",{attrs:{width:"111",align:"center"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit3?t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.editHandler(3,!1)}},model:{value:e.detailForm.headName3,callback:function(t){e.$set(e.detailForm,"headName3",t)},expression:"detailForm.headName3"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName3))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(3)}}})]]}},{key:"default",fn:function(t){return[e._v(" "+e._s(e.getFinshNum(t.row.id))+" ")]}}])}),t("el-table-column",{attrs:{width:"111"},scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit4?t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.editHandler(4,!1)}},model:{value:e.detailForm.headName4,callback:function(t){e.$set(e.detailForm,"headName4",t)},expression:"detailForm.headName4"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName4))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(4)}}})]]}},{key:"default",fn:function(i){return[t("el-input-number",{attrs:{controls:!1,min:0},model:{value:i.row.score,callback:function(t){e.$set(i.row,"score",t)},expression:"scope.row.score"}})]}}])}),t("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(i){return[e.detailForm.isEdit5?t("el-input",{attrs:{placeholder:""},on:{blur:function(t){return e.editHandler(5,!1)}},model:{value:e.detailForm.headName5,callback:function(t){e.$set(e.detailForm,"headName5",t)},expression:"detailForm.headName5"}}):[t("div",{staticClass:"head-name"},[e._v(e._s(e.detailForm.headName5))]),t("i",{staticClass:"el-icon-edit",on:{click:function(t){return e.editHandler(5)}}})]]}},{key:"default",fn:function(i){return[t("div",{staticClass:"cell-behavior"},[t("el-input",{attrs:{type:"textarea",autosize:{minRows:1,maxRows:3},placeholder:""},model:{value:i.row.behavior,callback:function(t){e.$set(i.row,"behavior",t)},expression:"scope.row.behavior"}}),e.shoIcon(i.row.id)?t("i",{staticClass:"el-icon-close",on:{click:function(t){return e.delRow(i.$index)}}}):e._e()],1)]}}])}),t("el-table-column",{attrs:{label:"操作",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(i){return[t("span",{staticClass:"new-beha",on:{click:function(t){return e.newRow(i.row,i.$index)}}},[e._v("新增")])]}}])})],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{size:"medium"},on:{click:e.cancel}},[e._v("取消")]),t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.submitForm}},[e._v("确定")]),t("el-button",{attrs:{size:"medium",type:"primary"},on:{click:e.downExcel}},[e._v("导出Excel")])],1)],1)],1)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"flex-box"},[t("div",{attrs:{id:"main"}})])}];i("b7ef"),i("907a"),i("986a"),i("1d02"),i("3c5d"),i("13d5");function r(e){return 1===e.length?e[0]:e.reduce((e,t)=>{let i=Math.max(e,t),a=i;while(a%e!==0||a%t!==0)a+=i;return a})}var l={data(){return{fileTemp:null,isMobile:!1,isImport:!1,suffixName:"进度图",minComg:1,maxComg:1,myChart:null,dialogVisible:!1,markName:"目标",finshName:"已完成",scoreName:"本期完成",behaviorName:"行为",leading:"领先指标",dialogTitle:"明细列表",borderColor:["green","blue","red"],barColor:["#91cc75","#5470c6","#ee6666"],form:{name1:"当月已完成目标",name2:"提供统计数据、分析统计分析",name3:"见面客户及其信任方",orientation1:1,orientation2:1,statistics1:1,statistics2:1,customer1:1,customer2:1},listData:[],detailForm:{isEdit1:!1,headName1:"",isEdit2:!1,headName2:"",isEdit3:!1,headName3:"",isEdit4:!1,headName4:"",isEdit5:!1,headName5:""}}},computed:{objectSpanMethod(){return({row:e,column:t,rowIndex:i,columnIndex:a})=>{if([0,1,2,5].includes(a)){if(1===e.id){const e=this.listData.filter(e=>1===e.id).length;return 0===i?{rowspan:e,colspan:1}:{rowspan:0,colspan:0}}if(2===e.id){let e=this.listData.map(e=>e.id).indexOf(2);const t=this.listData.filter(e=>2===e.id).length;return i===e?{rowspan:t,colspan:1}:{rowspan:0,colspan:0}}{let e=this.listData.map(e=>e.id).indexOf(3);const t=this.listData.filter(e=>3===e.id).length;return i===e?{rowspan:t,colspan:1}:{rowspan:0,colspan:0}}}}},shoIcon(){return e=>{const t=this.listData.filter(t=>t.id===e).length;return t>1}}},created(){this.initPage()},mounted(){document.addEventListener("DOMContentLoaded",()=>{const e=document.body.clientWidth,t=document.querySelector("#main");if(e<900)this.isMobile=!0,t.style.width=e-30+"px";else{const e=document.body.clientWidth,i=document.body.clientHeight;let a=Math.min(e,i)-123;a>900&&(a=900),t.style.width=a+"px"}this.$nextTick(()=>{this.init()})},!1)},methods:{initPage(){const e=JSON.parse(localStorage.getItem("listJson"))||[],t=JSON.parse(localStorage.getItem("infoJson"))||{};if(this.detailForm.headName1=this.leading,this.detailForm.headName2=this.markName,this.detailForm.headName3=this.finshName,this.detailForm.headName4=this.scoreName,this.detailForm.headName5=this.behaviorName,e.length>=3){this.listData=e,this.detailForm={...this.detailForm,...t},this.leading=t.headName1,this.markName=t.headName2,this.finshName=t.headName3,this.scoreName=t.headName4,this.behaviorName=t.headName5;const i=this.listData.filter(e=>1===e.id),a=this.listData.filter(e=>2===e.id),s=this.listData.filter(e=>3===e.id);this.form.name1=i[0].name,this.form.name2=a[0].name,this.form.name3=s[0].name,this.form.orientation1=i[0].mark,this.form.orientation2=i[0].finsh,this.form.statistics1=a[0].mark,this.form.statistics2=a[0].finsh,this.form.customer1=s[0].mark,this.form.customer2=s[0].finsh}else this.listData=[{id:1,name:this.form.name1,mark:1,finsh:1,score:1,behavior:""},{id:2,name:this.form.name2,mark:1,finsh:1,score:1,behavior:""},{id:3,name:this.form.name3,mark:1,finsh:1,score:1,behavior:""}];this.setDocummentTitle()},setDocummentTitle(){document.title=this.leading+this.suffixName},editHandler(e,t=!0){this.$set(this.detailForm,"isEdit"+e,t)},delRow(e){this.listData.splice(e,1)},newRow(e,t){const i=this.listData.filter(t=>t.id===e.id).length;this.listData.splice(i+t,0,{id:e.id,name:e.name,mark:e.mark,finsh:e.finsh,score:0,behavior:""})},tableRowClassName({row:e,rowIndex:t}){return 0==t?"warning-row":1==t?"warning-row2":2==t?"warning-row3":""},downExcel(){const e=[this.detailForm.headName1||this.leading,this.detailForm.headName2||this.markName,this.detailForm.headName3||this.finshName,this.detailForm.headName4||this.scoreName,this.detailForm.headName5||this.behaviorName];this.downXLSX2(this.listData,this.leading+this.suffixName,e)},setWidth(e){switch(e){case"name":return 250;case"mark":return 111;case"finsh":return 111;case"score":return 111;case"behavior":return 500}},downXLSX2(e,t,i){let a="<tr>";i.forEach(e=>{a+=`<td>${e}</td>`}),a+="</tr>",e.forEach((e,t)=>{a+="<tr>";for(let i in e)if("id"!==i)if(["name","mark","finsh"].includes(i))if(1===e.id){if(0===t){const t=this.listData.filter(e=>1===e.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${t}>${e[i]+"\t"}</td>`}}else if(2===e.id){let s=this.listData.map(e=>e.id).indexOf(2);if(t===s){const t=this.listData.filter(e=>2===e.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${t}>${e[i]+"\t"}</td>`}}else{let s=this.listData.map(e=>e.id).indexOf(3);if(t===s){const t=this.listData.filter(e=>3===e.id).length;a+=`<td width=${this.setWidth(i)}  height="66" rowspan=${t}>${e[i]+"\t"}</td>`}}else a+=`<td width=${this.setWidth(i)} height="66">${e[i]+"\t"}</td>`;a+="</tr>"});let s="Sheet1",n="data:application/vnd.ms-excel;base64,",o=`\n        <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">\n          <head>\n            \x3c!--[if gte mso 9]>\n            <xml>\n              <x:ExcelWorkbook>\n                <x:ExcelWorksheets>\n                  <x:ExcelWorksheet>\n                    <x:Name>${s}</x:Name>\n                    <x:WorksheetOptions>\n                      <x:DisplayGridlines/>\n                    </x:WorksheetOptions>\n                  </x:ExcelWorksheet>\n                </x:ExcelWorksheets>\n              </x:ExcelWorkbook>\n            </xml>\n            <![endif]--\x3e\n          </head>\n          <body>\n            <table>${a}</table>\n          </body>\n        </html>`;const r=document.createElement("a");r.setAttribute("href",n+this.utf8ToBase64(o)),r.setAttribute("download",t),r.click()},utf8ToBase64(e){return window.btoa(unescape(encodeURIComponent(e)))},downImage(){const e=this.myChart.getDataURL({backgroundColor:"#fff"}),t=document.createElement("a");t.style.display="none",t.download=this.leading+this.suffixName+".png",t.href=e,document.body.appendChild(t),t.click(),document.body.removeChild(t)},changeName(e){this.listData.forEach(t=>{t.id===e.id&&(t.name=e.name)})},changeName2(e){this.listData.forEach(t=>{t.id===e.id&&(t.mark=e.mark)})},changeName3(e){this.listData.forEach(t=>{t.id===e.id&&(t.finsh=e.finsh)})},checkDetail(){this.dialogVisible=!0,this.listData.forEach(e=>{1===e.id?(e.name=this.form.name1,e.mark=this.form.orientation1):2===e.id?(e.name=this.form.name2,e.mark=this.form.statistics1):(e.name=this.form.name3,e.mark=this.form.customer1)}),this.detailForm.headName1=this.leading,this.detailForm.headName2=this.markName,this.detailForm.headName3=this.finshName,this.detailForm.headName4=this.scoreName,this.detailForm.headName5=this.behaviorName},submitForm(){this.listData.forEach(e=>{1===e.id?(this.form.name1=e.name,this.form.orientation1=e.mark,this.form.orientation2=e.finsh,e.finsh=e.finsh):2===e.id?(this.form.name2=e.name,this.form.statistics1=e.mark,this.form.statistics2=e.finsh,e.finsh=e.finsh):(this.form.name3=e.name,this.form.customer1=e.mark,this.form.customer2=e.finsh,e.finsh=e.finsh)}),this.dialogVisible=!1,this.isImport=!1,this.detailForm.isEdit1=!1,this.detailForm.isEdit2=!1,this.detailForm.isEdit3=!1,this.detailForm.isEdit4=!1,this.detailForm.isEdit5=!1,this.leading=this.detailForm.headName1,this.markName=this.detailForm.headName2,this.finshName=this.detailForm.headName3,this.scoreName=this.detailForm.headName4,this.behaviorName=this.detailForm.headName5,localStorage.setItem("listJson",JSON.stringify(this.listData)),localStorage.setItem("infoJson",JSON.stringify(this.detailForm)),this.setDocummentTitle(),this.$nextTick(()=>{this.init()})},cancel(){this.isImport&&this.initPage(),this.dialogVisible=!1,this.isImport=!1},init(){this.minComg=r([this.form.orientation1,this.form.customer1,this.form.statistics1]);const e=[{name:this.form.name1,total:this.minComg,total2:this.form.orientation1,value:this.tranformLCM(this.form.orientation1,this.form.orientation2),value2:this.form.orientation2},{name:this.form.name2,total:this.minComg,total2:this.form.statistics1,value:this.tranformLCM(this.form.statistics1,this.form.statistics2),value2:this.form.statistics2},{name:this.form.name3,total:this.minComg,total2:this.form.customer1,value:this.tranformLCM(this.form.customer1,this.form.customer2),value2:this.form.customer2}];this.initChart(e)},initChart(e=[]){const t=e[0].total;this.myChart=echarts.init(document.getElementById("main"));const i=e.map((e,t)=>({type:"bar",name:e.name,data:[e],barWidth:"28%",roundCap:!0,showBackground:!0,coordinateSystem:"polar",backgroundStyle:{color:"rgba(89, 113, 126, 0.2)"},itemStyle:{borderColor:this.borderColor[t],opacity:.9,borderWidth:2,color:e=>this.setColor(e)}})),a={color:this.barColor,angleAxis:{max:t,axisLine:{show:!1},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},radiusAxis:{type:"category",z:10,axisLine:{show:!0,lineStyle:{color:"#000",width:3}},axisTick:{show:!1},axisLabel:{show:!1},splitLine:{show:!1}},polar:{center:["50%","56%"],radius:["76%","8%"]},tooltip:{show:!0,formatter:e=>`${e.name}<br/>${this.markName}：${e.data.total2}<br/>${this.finshName}：${e.data.value2}<br/>`},series:i};this.myChart.setOption(a)},setColor(e){return e.value>e.data.total?0===e.seriesIndex?new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(145,204,117,0.3)"},{offset:1,color:"#91cc75"}]):1===e.seriesIndex?new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(84,112,198,0.5)"},{offset:1,color:"#5470c6"}]):new echarts.graphic.LinearGradient(1,0,0,0,[{offset:0,color:"rgba(238,102,102,0.3)"},{offset:1,color:"#ee6666"}]):this.barColor[e.seriesIndex]},tranformLCM(e,t){return this.maxComg=this.minComg/e,t*this.maxComg},formatType(e){return!!["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"].includes(e)||(this.$message.error("只能上传 xlsx、xls 文件格式，请重新上传！"),!1)},handleChange(e,t){this.formatType(e.raw.type)&&(this.fileTemp=e.raw,this.parseTable(this.fileTemp))},handleRemove(e,t){this.fileTemp=null},handleExceed(e,t){this.formatType(e[0].type)&&(this.fileTemp=e[0],this.parseTable(this.fileTemp))},parseTable(e){let t=new FileReader,i="";t.onload=e=>{const a=new Uint8Array(t.result),s=a.byteLength;for(let t=0;t<s;t++)i+=String.fromCharCode(a[t]);const n=XLSX.read(i,{type:"binary"}),o=n.Sheets[n.SheetNames];this.setTable(this.transformData(o))},t.readAsArrayBuffer(e)},getColInx(e){const t=e.split(":"),i=t.map(e=>e.slice(0,1));return i[1].charCodeAt()-i[0].charCodeAt()+1},getRowInx(e){const t=e.split(":"),i=t.map(e=>e.slice(1,2));return i[1]-i[0]+1},transformData(e){const t=[],i={},a=this.getRowInx(e["!ref"]),s=this.getColInx(e["!ref"]);for(let o=1;o<=s;o++){const s=String.fromCharCode(64+o);for(let n=1;n<=a;n++){const a=s+n,r=n-2;if(r>=0&&(t[r]||(t[r]={})),e[a])if(1===n){const t="headName"+o,s="isEdit"+o;i[s]=!1,i[t]=e[a].v||i[dd]}else switch(s){case"A":t[r].name=e[a].v;break;case"B":t[r].mark=e[a].v;break;case"C":t[r].finsh=e[a].v;break;case"D":t[r].score=e[a].v;break;case"E":t[r].behavior=e[a].v;break}}}let n=0;return t.forEach((e,i)=>{e.name?n++:(e.name=t[i-1].name,e.mark=t[i-1].mark,e.finsh=t[i-1].finsh),e.id=n}),{list:t,deObj:i}},setTable({list:e,deObj:t}){for(let i=0;i<e.length;i++){const t=e[i],a=Object.keys(t).length;if(![3,6].includes(a)){this.$message.error(`第${i+1}行数据格式不对，重编辑后重新导入`);break}}this.initData(e,t)},initData(e,t){this.detailForm=t,this.listData=e,this.isImport=!0}}},d=l,m=(i("6f17"),i("2877")),c=Object(m["a"])(d,n,o,!1,null,null,null),h=c.exports,u={name:"App",components:{Home:h}},f=u,p=Object(m["a"])(f,a,s,!1,null,null,null),b=p.exports;Vue.config.productionTip=!1,new Vue({render:e=>e(b)}).$mount("#app")},"6f17":function(e,t,i){"use strict";i("b0c0")},b0c0:function(e,t,i){}});