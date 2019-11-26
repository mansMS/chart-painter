(this["webpackJsonpchart-painter"]=this["webpackJsonpchart-painter"]||[]).push([[0],{162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},166:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(23),c=a.n(o),l=a(26),u=a(6),i=a(8),s=a(10),d=a(9),h=a(11),p=n.a.createContext(),f=p.Provider,b=p.Consumer,y=function(){return function(e){return function(t){return n.a.createElement(b,null,(function(a){return n.a.createElement(e,Object.assign({},t,{chartService:a}))}))}}},m=a(57),v=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).labelClickHandler=function(e){a.props.labelClickHandler(e,a.refs)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.chartProps;return n.a.createElement("div",null,n.a.createElement(m.a,{ref:"chart",data:e,options:{onClick:this.labelClickHandler}}))}}]),t}(r.Component),E=function(e){var t=e.escapeClickHandler,a=e.disabled;return n.a.createElement("button",{className:"EscapeButton",disabled:a,onClick:t},"\u041d\u0430\u0437\u0430\u0434")},g=a(25),O=(a(162),Object(g.cn)("Spinner")),C=function(){return n.a.createElement("div",{className:O()},n.a.createElement("div",{className:O("Icon")},n.a.createElement("div",{className:O("Helper")})))},j=function(){return n.a.createElement("div",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445!")},D=function(e){return{type:"FETCH_CHART_DATA_FAILURE",payload:e}},x={datasets:[{fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10}]},_=function(e,t){var a,r=e.offsetX,n=e.offsetY,o=t.chart.chartInstance.scales["x-axis-0"],c=t.chart.chartInstance.getElementAtEvent(e);if(c.length)return a=c[0]._index;var l=Math.round(o._labelSizes.highest.height),u=o._labelItems.map((function(e){var t=e.x,a=e.y;return{x:Math.round(t),y:Math.round(a)}})),i=u.map((function(e,t){var a=e.x,r=e.y;return{x1:a-6.7*o._labelItems[t].label.length/2,y1:r,x2:a+6.7*o._labelItems[t].label.length/2,y2:r+l}}));if(o._labelItems[0].rotation){var s=n-o._labelItems[0].y,d=s/Math.tan(-o._labelItems[0].rotation),h=Math.sqrt(Math.pow(s,2)+Math.pow(d,2)),p=r+d;u.forEach((function(e,t){var r=e.x;s>=0&&r-.8*l<=p&&p<=r+.8*l&&h<=i[t].x2-i[t].x1&&(a=t)}))}else i.forEach((function(e,t){e.x1<=r&&r<=e.x2&&e.y1<=n&&n<=e.y2&&(a=t)}));return a},A=(a(163),function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).labelClickHandler=function(e,t){var r=a.props,n=r.chartService,o=r.goToLabelDetails,c=r.month,l=r.year,u=r.yearIndex,i=_(e,t);Number.isInteger(i)&&!c&&(l?c||n.getDataByDates(u,i,l).then((function(e){return o(e)})).catch((function(e){return D(e)})):n.getDataByMonth(i).then((function(e){return o(e)})).catch((function(e){return D(e)})))},a.escapeClickHandler=function(){var e=a.props,t=e.chartService,r=e.goToLabelDetails,n=e.month,o=e.year,c=e.yearIndex;n?t.getDataByMonth(c).then((function(e){return r(e)})).catch((function(e){return D(e)})):o&&t.getDataByYears().then((function(e){return r(e)})).catch((function(e){return D(e)}))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.chartService,a=e.chartDataLoaded,r=e.chartDataRequested,n=e.chartDataError;r(),t.getDataByYears().then((function(e){return a(e)})).catch((function(e){return n(e)}))}},{key:"render",value:function(){var e=this.props,t=e.error,a=e.loading,r=e.labels,o=e.label,c=e.data,l=e.month,u=e.year;if(a)return n.a.createElement(C,null);if(t)return n.a.createElement(j,null);var i=x;i.labels=r,l&&(i.labels=i.labels.map((function(e){return e+1+""}))),i.datasets[0].label=l?"".concat(o," ").concat(l," ").concat(u):u?"".concat(o," ").concat(u):o,i.datasets[0].data=c;var s=!u;return n.a.createElement("div",{className:"ChartContainer"},n.a.createElement(E,{escapeClickHandler:this.escapeClickHandler,disabled:s}),n.a.createElement(v,{chartProps:i,labelClickHandler:this.labelClickHandler}))}}]),t}(r.Component)),k={chartDataLoaded:function(e){return{type:"FETCH_CHART_DATA_SUCCESS",payload:e}},chartDataRequested:function(){return{type:"FETCH_CHART_DATA_REQUEST"}},chartDataError:D,goToLabelDetails:function(e){return{type:"GO_TO_LABEL_DETAIL",payload:e}}},H=y()(Object(l.b)((function(e){return{error:e.error,loading:e.loading,labels:e.labels,label:e.label,data:e.data,month:e.month,year:e.year,yearIndex:e.yearIndex}}),k)(A)),T=(a(164),Object(g.cn)("App")),w=function(){return n.a.createElement("div",{className:T()},n.a.createElement("h1",null,"Chart-Painter-App"),n.a.createElement(H,null))},I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={hasError:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement(j,null):this.props.children}}]),t}(r.Component),R=a(5),S=a.n(R),B=a(16),L=a(24),P=a(59);function M(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function U(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?M(a,!0).forEach((function(t){Object(P.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):M(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F={error:null,loading:!0,yearIndex:null,year:null,month:null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_CHART_DATA_REQUEST":return U({},e,{loading:!0,error:null});case"FETCH_CHART_DATA_SUCCESS":return U({},e,{loading:!1,label:t.payload.label,data:t.payload.data,labels:t.payload.labels,error:null});case"FETCH_CHART_DATA_FAILURE":return U({},e,{loading:!1,error:t.payload});case"GO_TO_LABEL_DETAIL":return U({},e,{loading:!1,data:t.payload.data,labels:t.payload.labels,year:t.payload.year,month:t.payload.month,yearIndex:t.payload.yearIndex,error:null});default:return e}},Y=Object(L.b)(N),q=new function e(){var t=this;Object(u.a)(this,e),this.sourceUrl="./chartData.json",this.getResource=function(){var e=Object(B.a)(S.a.mark((function e(t){var a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getDataByYears=Object(B.a)(S.a.mark((function e(){var a,r,n,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.sourceUrl);case 2:return a=e.sent,r=a.label,n=a.data.map((function(e){return e.year})),o=a.data.map((function(e){return e.amount})),e.abrupt("return",{label:r,labels:n,data:o});case 7:case"end":return e.stop()}}),e)}))),this.getDataByMonth=function(){var e=Object(B.a)(S.a.mark((function e(a){var r,n,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.sourceUrl);case 2:return r=e.sent,n=r.data[a].months.map((function(e){return e.month})),o=r.data[a].months.map((function(e){return e.amount})),e.abrupt("return",{labels:n,data:o,yearIndex:a,year:r.data[a].year});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getDataByDates=function(){var e=Object(B.a)(S.a.mark((function e(a,r,n){var o,c,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource(t.sourceUrl);case 2:return o=e.sent,c=o.data[a].months[r].days.map((function(e,t){return t})),l=o.data[a].months[r].days.map((function(e){return e})),e.abrupt("return",{labels:c,data:l,year:n,yearIndex:a,month:o.data[a].months[r].month});case 6:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}()};c.a.render(n.a.createElement(l.a,{store:Y},n.a.createElement(I,null,n.a.createElement(f,{value:q},n.a.createElement(w,null)))),document.getElementById("root"))},60:function(e,t,a){e.exports=a(166)}},[[60,1,2]]]);
//# sourceMappingURL=main.bcb55828.chunk.js.map