/*!
 *  build: vue-admin-beautiful 
 *  vue-admin-beautiful author: chuzhixin 1204505056@qq.com 
 *  vue-admin-beautiful QQ Group(QQ群): 972435319、1139183756 
 *  time: 2021-3-24 00:23:36
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-31e5ee52"],{3915:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{attrs:{title:t.title,visible:t.dialogFormVisible,width:"500px"},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.close}},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"标题",prop:"title"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title","string"===typeof e?e.trim():e)},expression:"form.title"}})],1),r("el-form-item",{attrs:{label:"作者",prop:"author"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.author,callback:function(e){t.$set(t.form,"author","string"===typeof e?e.trim():e)},expression:"form.author"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.close}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:t.save}},[t._v("确 定")])],1)],1)},a=[],n=r("b097"),i=(r("6a61"),r("ad8f")),s={name:"TableEdit",data:function(){return{form:{title:"",author:""},rules:{title:[{required:!0,trigger:"blur",message:"请输入标题"}],author:[{required:!0,trigger:"blur",message:"请输入作者"}]},title:"",dialogFormVisible:!1}},created:function(){},methods:{showEdit:function(t){t?(this.title="编辑",this.form=Object.assign({},t)):this.title="添加",this.dialogFormVisible=!0},close:function(){this.$refs["form"].resetFields(),this.form=this.$options.data().form,this.dialogFormVisible=!1,this.$emit("fetch-data")},save:function(){var t=this;this.$refs["form"].validate(function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(r){var o,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=12;break}return e.next=3,Object(i["doEdit"])(t.form);case 3:o=e.sent,a=o.msg,t.$baseMessage(a,"success"),t.$refs["form"].resetFields(),t.dialogFormVisible=!1,t.$emit("fetch-data"),t.form=t.$options.data().form,e.next=13;break;case 12:return e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},l=s,u=r("5d22"),c=Object(u["a"])(l,o,a,!1,null,null,null);e["default"]=c.exports},ad8f:function(t,e,r){"use strict";r.r(e),r.d(e,"getList",(function(){return a})),r.d(e,"doEdit",(function(){return n})),r.d(e,"doDelete",(function(){return i}));var o=r("b775");function a(t){return Object(o["default"])({url:"/table/getList",method:"post",data:t})}function n(t){return Object(o["default"])({url:"/table/doEdit",method:"post",data:t})}function i(t){return Object(o["default"])({url:"/table/doDelete",method:"post",data:t})}},d0b0:function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-container"},[r("vab-query-form",[r("vab-query-form-left-panel",[r("el-button",{attrs:{icon:"el-icon-plus",type:"primary"},on:{click:t.handleAdd}},[t._v(" 添加 ")]),r("el-button",{attrs:{icon:"el-icon-delete",type:"danger"},on:{click:t.handleDelete}},[t._v(" 删除 ")]),r("el-button",{attrs:{type:"primary"},on:{click:t.testMessage}},[t._v("baseMessage")]),r("el-button",{attrs:{type:"primary"},on:{click:t.testALert}},[t._v("baseAlert")]),r("el-button",{attrs:{type:"primary"},on:{click:t.testConfirm}},[t._v("baseConfirm")]),r("el-button",{attrs:{type:"primary"},on:{click:t.testNotify}},[t._v("baseNotify")])],1),r("vab-query-form-right-panel",[r("el-form",{ref:"form",attrs:{model:t.queryForm,inline:!0},nativeOn:{submit:function(t){t.preventDefault()}}},[r("el-form-item",[r("el-input",{attrs:{placeholder:"标题"},model:{value:t.queryForm.title,callback:function(e){t.$set(t.queryForm,"title",e)},expression:"queryForm.title"}})],1),r("el-form-item",[r("el-button",{attrs:{icon:"el-icon-search",type:"primary","native-type":"submit"},on:{click:t.handleQuery}},[t._v(" 查询 ")])],1)],1)],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"tableSort",attrs:{data:t.list,"element-loading-text":t.elementLoadingText,height:t.height},on:{"selection-change":t.setSelectRows,"sort-change":t.tableSortChange}},[r("el-table-column",{attrs:{"show-overflow-tooltip":"",type:"selection",width:"55"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"序号",width:"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.$index+1)+" ")]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"title",label:"标题"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"作者",prop:"author"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"头像"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[t.imgShow?r("el-image",{attrs:{"preview-src-list":t.imageList,src:o.img}}):t._e()]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"点击量",prop:"pageViews",sortable:""}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[r("el-tooltip",{staticClass:"item",attrs:{content:o.status,effect:"dark",placement:"top-start"}},[r("el-tag",{attrs:{type:t._f("statusFilter")(o.status)}},[t._v(" "+t._s(o.status)+" ")])],1)]}}])}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"时间",prop:"datetime",width:"200"}}),r("el-table-column",{attrs:{"show-overflow-tooltip":"",label:"操作",width:"180px"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.row;return[r("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleEdit(o)}}},[t._v("编辑")]),r("el-button",{attrs:{type:"text"},on:{click:function(e){return t.handleDelete(o)}}},[t._v("删除")])]}}])})],1),r("el-pagination",{attrs:{background:t.background,"current-page":t.queryForm.pageNo,layout:t.layout,"page-size":t.queryForm.pageSize,total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}}),r("table-edit",{ref:"edit"})],1)},a=[],n=r("b097"),i=(r("6a61"),r("3bae"),r("4200"),r("3337"),r("ad8f")),s=r("3915"),l={name:"ComprehensiveTable",components:{TableEdit:s["default"]},filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{imgShow:!0,list:[],imageList:[],listLoading:!0,layout:"total, sizes, prev, pager, next, jumper",total:0,background:!0,selectRows:"",elementLoadingText:"正在加载...",queryForm:{pageNo:1,pageSize:20,title:""}}},computed:{height:function(){return this.$baseTableHeight()}},created:function(){this.fetchData()},beforeDestroy:function(){},mounted:function(){},methods:{tableSortChange:function(){var t=[];this.$refs.tableSort.tableData.forEach((function(e,r){t.push(e.img)})),this.imageList=t},setSelectRows:function(t){this.selectRows=t},handleAdd:function(){this.$refs["edit"].showEdit()},handleEdit:function(t){this.$refs["edit"].showEdit(t)},handleDelete:function(t){var e=this;if(t.id)this.$baseConfirm("你确定要删除当前项吗",null,Object(n["a"])(regeneratorRuntime.mark((function r(){var o,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["doDelete"])({ids:t.id});case 2:o=r.sent,a=o.msg,e.$baseMessage(a,"success"),e.fetchData();case 6:case"end":return r.stop()}}),r)}))));else{if(!(this.selectRows.length>0))return this.$baseMessage("未选中任何行","error"),!1;var r=this.selectRows.map((function(t){return t.id})).join();this.$baseConfirm("你确定要删除选中项吗",null,Object(n["a"])(regeneratorRuntime.mark((function t(){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(i["doDelete"])({ids:r});case 2:o=t.sent,a=o.msg,e.$baseMessage(a,"success"),e.fetchData();case 6:case"end":return t.stop()}}),t)}))))}},handleSizeChange:function(t){this.queryForm.pageSize=t,this.fetchData()},handleCurrentChange:function(t){this.queryForm.pageNo=t,this.fetchData()},handleQuery:function(){this.queryForm.pageNo=1,this.fetchData()},fetchData:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var r,o,a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.listLoading=!0,e.next=3,Object(i["getList"])(t.queryForm);case 3:r=e.sent,o=r.data,a=r.totalCount,t.list=o,n=[],o.forEach((function(t,e){n.push(t.img)})),t.imageList=n,t.total=a,setTimeout((function(){t.listLoading=!1}),500);case 12:case"end":return e.stop()}}),e)})))()},testMessage:function(){this.$baseMessage("test1","success")},testALert:function(){this.$baseAlert("11"),this.$baseAlert("11","自定义标题",(function(){})),this.$baseAlert("11",null,(function(){}))},testConfirm:function(){this.$baseConfirm("你确定要执行该操作?",null,(function(){}),(function(){}))},testNotify:function(){this.$baseNotify("测试消息提示","test","success","bottom-right")}}},u=l,c=r("5d22"),f=Object(c["a"])(u,o,a,!1,null,null,null);e["default"]=f.exports}}]);