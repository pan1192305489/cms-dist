import{y as f,A as h}from"./element-plus.8f542e47.js";import{C as F}from"./CardBox.a5efca74.js";import{_ as m,g as y,a as A,b,c as v}from"./dashboard.435a3fec.js";import{d as D,t as c,o as p,c as d,e as o,u as t,R as n,ab as g,ac as B}from"./@vue.60f1aaec.js";import{d as x}from"./pinia.b7f25bf1.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import"./@vueuse.e3ce8cae.js";import"./dayjs.7f6a9561.js";import"./axios.765908e4.js";import"./lodash-es.b0ae9094.js";import"./@element-plus.35a825cf.js";import"./@ctrl.2e36ce53.js";import"./async-validator.5d25c98b.js";import"./escape-html.e5dfadb9.js";import"./@popperjs.da6c49cb.js";import"./normalize-wheel-es.9a219a59.js";import"./echarts.c5dcb28c.js";import"./zrender.6c310bf7.js";import"./index.9eccfdba.js";/* empty css                      */import"./vue-router.98095b2a.js";const G={class:"pieEcharts"},w=D({props:{pieData:null},setup(a){const u=a,e=c(()=>({tooltip:{trigger:"item"},legend:{orient:"horizontal",left:"left"},series:[{name:"\u5206\u7C7B\u6570\u636E",type:"pie",radius:"50%",data:u.pieData,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}));return(s,C)=>(p(),d("div",G,[o(m,{options:t(e)},null,8,["options"])]))}}),$={class:"roseEchart"},R=D({props:{roseData:null},setup(a){const u=a,e=c(()=>({legend:{top:"bottom"},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"Nightingale Chart",type:"pie",radius:[50,150],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:u.roseData}]}));return(s,C)=>(p(),d("div",$,[o(m,{options:t(e)},null,8,["options"])]))}}),L={class:"lineEchart"},k=D({props:{title:{default:""},xLabels:null,values:null},setup(a){const u=a,e=c(()=>({title:{text:u.title},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:u.xLabels}],yAxis:[{type:"value"}],series:[{name:"\u5206\u7C7B\u9500\u91CF",type:"line",stack:"\u603B\u91CF",label:{show:!0,position:"top"},areaStyle:{},emphasis:{focus:"series"},data:u.values}]}));return(s,C)=>(p(),d("div",L,[o(t(m),{options:t(e)},null,8,["options"])]))}}),P={class:"BarEchart"},z=D({props:{title:null,xLabels:null,values:null},setup(a){const u=a,e=c(()=>({tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:u.xLabels,axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Direct",type:"bar",barWidth:"60%",data:u.values}]}));return(s,C)=>(p(),d("div",P,[o(t(m),{options:t(e)},null,8,["options"])]))}}),I={\u6D77\u95E8:[121.15,31.89],\u9102\u5C14\u591A\u65AF:[109.781327,39.608266],\u62DB\u8FDC:[120.38,37.35],\u821F\u5C71:[122.207216,29.985295],\u9F50\u9F50\u54C8\u5C14:[123.97,47.33],\u76D0\u57CE:[120.13,33.38],\u8D64\u5CF0:[118.87,42.28],\u9752\u5C9B:[120.33,36.07],\u4E73\u5C71:[121.52,36.89],\u91D1\u660C:[102.188043,38.520089],\u6CC9\u5DDE:[118.58,24.93],\u83B1\u897F:[120.53,36.86],\u65E5\u7167:[119.46,35.42],\u80F6\u5357:[119.97,35.88],\u5357\u901A:[121.05,32.08],\u62C9\u8428:[91.11,29.97],\u4E91\u6D6E:[112.02,22.93],\u6885\u5DDE:[116.1,24.55],\u6587\u767B:[122.05,37.2],\u4E0A\u6D77:[121.48,31.22],\u6500\u679D\u82B1:[101.718637,26.582347],\u5A01\u6D77:[122.1,37.5],\u627F\u5FB7:[117.93,40.97],\u53A6\u95E8:[118.1,24.46],\u6C55\u5C3E:[115.375279,22.786211],\u6F6E\u5DDE:[116.63,23.68],\u4E39\u4E1C:[124.37,40.13],\u592A\u4ED3:[121.1,31.45],\u66F2\u9756:[103.79,25.51],\u70DF\u53F0:[121.39,37.52],\u798F\u5DDE:[119.3,26.08],\u74E6\u623F\u5E97:[121.979603,39.627114],\u5373\u58A8:[120.45,36.38],\u629A\u987A:[123.97,41.97],\u7389\u6EAA:[102.52,24.35],\u5F20\u5BB6\u53E3:[114.87,40.82],\u9633\u6CC9:[113.57,37.85],\u83B1\u5DDE:[119.942327,37.177017],\u6E56\u5DDE:[120.1,30.86],\u6C55\u5934:[116.69,23.39],\u6606\u5C71:[120.95,31.39],\u5B81\u6CE2:[121.56,29.86],\u6E5B\u6C5F:[110.359377,21.270708],\u63ED\u9633:[116.35,23.55],\u8363\u6210:[122.41,37.16],\u8FDE\u4E91\u6E2F:[119.16,34.59],\u846B\u82A6\u5C9B:[120.836932,40.711052],\u5E38\u719F:[120.74,31.64],\u4E1C\u839E:[113.75,23.04],\u6CB3\u6E90:[114.68,23.73],\u6DEE\u5B89:[119.15,33.5],\u6CF0\u5DDE:[119.9,32.49],\u5357\u5B81:[108.33,22.84],\u8425\u53E3:[122.18,40.65],\u60E0\u5DDE:[114.4,23.09],\u6C5F\u9634:[120.26,31.91],\u84EC\u83B1:[120.75,37.8],\u97F6\u5173:[113.62,24.84],\u5609\u5CEA\u5173:[98.289152,39.77313],\u5E7F\u5DDE:[113.23,23.16],\u5EF6\u5B89:[109.47,36.6],\u592A\u539F:[112.53,37.87],\u6E05\u8FDC:[113.01,23.7],\u4E2D\u5C71:[113.38,22.52],\u6606\u660E:[102.73,25.04],\u5BFF\u5149:[118.73,36.86],\u76D8\u9526:[122.070714,41.119997],\u957F\u6CBB:[113.08,36.18],\u6DF1\u5733:[114.07,22.62],\u73E0\u6D77:[113.52,22.3],\u5BBF\u8FC1:[118.3,33.96],\u54B8\u9633:[108.72,34.36],\u94DC\u5DDD:[109.11,35.09],\u5E73\u5EA6:[119.97,36.77],\u4F5B\u5C71:[113.11,23.05],\u6D77\u53E3:[110.35,20.02],\u6C5F\u95E8:[113.06,22.61],\u7AE0\u4E18:[117.53,36.72],\u8087\u5E86:[112.44,23.05],\u5927\u8FDE:[121.62,38.92],\u4E34\u6C7E:[111.5,36.08],\u5434\u6C5F:[120.63,31.16],\u77F3\u5634\u5C71:[106.39,39.04],\u6C88\u9633:[123.38,41.8],\u82CF\u5DDE:[120.62,31.32],\u8302\u540D:[110.88,21.68],\u5609\u5174:[120.76,30.77],\u957F\u6625:[125.35,43.88],\u80F6\u5DDE:[120.03336,36.264622],\u94F6\u5DDD:[106.27,38.47],\u5F20\u5BB6\u6E2F:[120.555821,31.875428],\u4E09\u95E8\u5CE1:[111.19,34.76],\u9526\u5DDE:[121.15,41.13],\u5357\u660C:[115.89,28.68],\u67F3\u5DDE:[109.4,24.33],\u4E09\u4E9A:[109.511909,18.252847],\u81EA\u8D21:[104.778442,29.33903],\u5409\u6797:[126.57,43.87],\u9633\u6C5F:[111.95,21.85],\u6CF8\u5DDE:[105.39,28.91],\u897F\u5B81:[101.74,36.56],\u5B9C\u5BBE:[104.56,29.77],\u547C\u548C\u6D69\u7279:[111.65,40.82],\u6210\u90FD:[104.06,30.67],\u5927\u540C:[113.3,40.12],\u9547\u6C5F:[119.44,32.2],\u6842\u6797:[110.28,25.29],\u5F20\u5BB6\u754C:[110.479191,29.117096],\u5B9C\u5174:[119.82,31.36],\u5317\u6D77:[109.12,21.49],\u897F\u5B89:[108.95,34.27],\u91D1\u575B:[119.56,31.74],\u4E1C\u8425:[118.49,37.46],\u7261\u4E39\u6C5F:[129.58,44.6],\u9075\u4E49:[106.9,27.7],\u7ECD\u5174:[120.58,30.01],\u626C\u5DDE:[119.42,32.39],\u5E38\u5DDE:[119.95,31.79],\u6F4D\u574A:[119.1,36.62],\u91CD\u5E86:[106.54,29.59],\u53F0\u5DDE:[121.420757,28.656386],\u5357\u4EAC:[118.78,32.04],\u6EE8\u5DDE:[118.03,37.36],\u8D35\u9633:[106.71,26.57],\u65E0\u9521:[120.29,31.59],\u672C\u6EAA:[123.73,41.3],\u514B\u62C9\u739B\u4F9D:[84.77,45.59],\u6E2D\u5357:[109.5,34.52],\u9A6C\u978D\u5C71:[118.48,31.56],\u5B9D\u9E21:[107.15,34.38],\u7126\u4F5C:[113.21,35.24],\u53E5\u5BB9:[119.16,31.95],\u5317\u4EAC:[116.46,39.92],\u5F90\u5DDE:[117.2,34.26],\u8861\u6C34:[115.72,37.72],\u5305\u5934:[110,40.58],\u7EF5\u9633:[104.73,31.48],\u4E4C\u9C81\u6728\u9F50:[87.68,43.77],\u67A3\u5E84:[117.57,34.86],\u676D\u5DDE:[120.19,30.26],\u6DC4\u535A:[118.05,36.78],\u978D\u5C71:[122.85,41.12],\u6EA7\u9633:[119.48,31.43],\u5E93\u5C14\u52D2:[86.06,41.68],\u5B89\u9633:[114.35,36.1],\u5F00\u5C01:[114.35,34.79],\u6D4E\u5357:[117,36.65],\u5FB7\u9633:[104.37,31.13],\u6E29\u5DDE:[120.65,28.01],\u4E5D\u6C5F:[115.97,29.71],\u90AF\u90F8:[114.47,36.6],\u4E34\u5B89:[119.72,30.23],\u5170\u5DDE:[103.73,36.03],\u6CA7\u5DDE:[116.83,38.33],\u4E34\u6C82:[118.35,35.05],\u5357\u5145:[106.110698,30.837793],\u5929\u6D25:[117.2,39.13],\u5BCC\u9633:[119.95,30.07],\u6CF0\u5B89:[117.13,36.18],\u8BF8\u66A8:[120.23,29.71],\u90D1\u5DDE:[113.65,34.76],\u54C8\u5C14\u6EE8:[126.63,45.75],\u804A\u57CE:[115.97,36.45],\u829C\u6E56:[118.38,31.33],\u5510\u5C71:[118.02,39.63],\u5E73\u9876\u5C71:[113.29,33.75],\u90A2\u53F0:[114.48,37.05],\u5FB7\u5DDE:[116.29,37.45],\u6D4E\u5B81:[116.59,35.38],\u8346\u5DDE:[112.239741,30.335165],\u5B9C\u660C:[111.3,30.7],\u4E49\u4E4C:[120.06,29.32],\u4E3D\u6C34:[119.92,28.45],\u6D1B\u9633:[112.44,34.7],\u79E6\u7687\u5C9B:[119.57,39.95],\u682A\u6D32:[113.16,27.83],\u77F3\u5BB6\u5E84:[114.48,38.03],\u83B1\u829C:[117.67,36.19],\u5E38\u5FB7:[111.69,29.05],\u4FDD\u5B9A:[115.48,38.85],\u6E58\u6F6D:[112.91,27.87],\u91D1\u534E:[119.64,29.12],\u5CB3\u9633:[113.09,29.37],\u957F\u6C99:[113,28.21],\u8862\u5DDE:[118.88,28.97],\u5ECA\u574A:[116.7,39.53],\u83CF\u6CFD:[115.480656,35.23375],\u5408\u80A5:[117.27,31.86],\u6B66\u6C49:[114.31,30.52],\u5927\u5E86:[125.03,46.58]},W=function(a){const u=[];for(let e=0;e<a.length;e++){const s=I[a[e].name];s&&u.push({name:a[e].name,value:s.concat(a[e].value)})}return u},N={class:"BarEchart"},O=D({props:{title:null,mapData:null},setup(a){const u=a,e=c(()=>({backgroundColor:"#fff",title:{text:"\u5168\u56FD\u9500\u91CF\u7EDF\u8BA1",left:"center",textStyle:{color:"#fff"}},tooltip:{trigger:"item",formatter:function(s){return s.name+" : "+s.value[2]}},visualMap:{min:0,max:6e4,left:20,bottom:20,calculable:!0,text:["\u9AD8","\u4F4E"],inRange:{color:["rgb(70, 240, 252)","rgb(250, 220, 46)","rgb(245, 38, 186)"]},textStyle:{color:"#fff"}},geo:{map:"china",roam:"scale",emphasis:{areaColor:"#f4cccc",borderColor:"rgb(9, 54, 95)",itemStyle:{areaColor:"#f4cccc"}}},series:[{name:"\u9500\u91CF",type:"scatter",coordinateSystem:"geo",data:W(u.mapData),symbolSize:12,emphasis:{itemStyle:{borderColor:"#fff",borderWidth:1}}},{type:"map",map:"china",geoIndex:0,aspectScale:.75,tooltip:{show:!1}}]}));return(s,C)=>(p(),d("div",N,[o(t(m),{options:t(e)},null,8,["options"])]))}}),T=x("dashboard",{state:()=>({categoryGoodsCount:[],categoryGoodsFavor:[],categoryGoodsSale:[],addressGoodsSale:[]}),actions:{async getDashboardDataAction(){const a=await y();this.categoryGoodsCount=a.data;const u=await A();this.categoryGoodsSale=u.data;const e=await b();this.categoryGoodsFavor=e.data;const s=await v();this.addressGoodsSale=s.data}}});const V={class:"dashboardpage"},M=D({setup(a){const u=T();u.getDashboardDataAction();const e=c(()=>u.categoryGoodsCount.map(r=>{if(r.goodsCount)return{name:r.name,value:r.goodsCount}})),s=c(()=>{const r=[],E=[],i=u.categoryGoodsSale;for(const l of i)l.goodsCount&&(r.push(l.name),E.push(l.goodsCount));return{xLabels:r,values:E}}),C=c(()=>{const r=[],E=[],i=u.categoryGoodsFavor;for(const l of i)l.goodsFavor&&(r.push(l.name),E.push(l.goodsFavor));return{xLabels:r,values:E}}),_=c(()=>u.addressGoodsSale.map(r=>({name:r.address,value:r.count})));return(r,E)=>{const i=f,l=h;return p(),d("div",V,[o(l,{gutter:20},{default:n(()=>[o(i,{span:7},{default:n(()=>[o(t(F),{title:"\u5206\u7C7B\u5546\u54C1\u6570\u91CF(\u997C\u56FE)"},{default:n(()=>[o(t(w),{pieData:t(e)},null,8,["pieData"])]),_:1})]),_:1}),o(i,{span:10},{default:n(()=>[o(t(F),{title:"\u4E0D\u540C\u57CE\u5E02\u5546\u54C1\u9500\u91CF"},{default:n(()=>[o(t(O),{mapData:t(_)},null,8,["mapData"])]),_:1})]),_:1}),o(i,{span:7},{default:n(()=>[o(t(F),{title:"\u5206\u7C7B\u5546\u54C1\u6570\u91CF(\u73AB\u7470\u56FE)"},{default:n(()=>[o(t(R),{roseData:t(e)},null,8,["roseData"])]),_:1})]),_:1})]),_:1}),o(l,{gutter:20,class:"contentRow"},{default:n(()=>[o(i,{span:12},{default:n(()=>[o(t(F),{title:"\u5206\u7C7B\u5546\u54C1\u7684\u9500\u91CF"},{default:n(()=>[o(t(k),g(B(t(s))),null,16)]),_:1})]),_:1}),o(i,{span:12},{default:n(()=>[o(t(F),{title:"\u5206\u7C7B\u5546\u54C1\u7684\u6536\u85CF"},{default:n(()=>[o(t(z),g(B(t(C))),null,16)]),_:1})]),_:1})]),_:1})])}}});var Cu=S(M,[["__scopeId","data-v-4546fd50"]]);export{Cu as default};