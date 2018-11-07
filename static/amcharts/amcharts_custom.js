/* -- theme_01 --*/
AmCharts.themes.theme_01 = {
	themeName: "theme_01",
	AmChart: {
		color: "#808080", // x,y축 텍스트컬러
	},
	AmCoordinateChart: {
		colors: ["#90d18a", "#8a77c9", "#f17178", "#ffc168", "#66b7e0", "#6c889c", "#9fc66e", "#cc8ebd", "#8297e6", "#adada8"] // graph color
	},
	AmSerialChart: {
		autoMargins:true,
		startDuration: 0, //애니메이션 속도
		startEffect: "elastic", //애니메이션 스타일
		sequencedAnimation: false //애니메이션 없음
	},
	AxisBase: { //x축, y축, grid style
		fontSize: 12,
		axisColor: "#3e3e3e", // x,y축 line color
		axisAlpha: 1,
		gridColor: "#d9d9d9", // line color
		gridAlpha: 1,
		tickLength: 4,// label line 길이
		titleBold: false,
		titleColor: "#808080",
		titleFontSize: 12,
		markPeriodChange: false
	},
	CategoryAxis: { //x축
		autoWrap: true,//텍스트 행처리 auto
		equalSpacing: true, // grid start 지점 지정
		parseDates: true, // x축 date-related에 의한 정의 줄임
		boldPeriodBeginning: false,
		minHorizontalGap: 50, // minimum cell width
		gridAlpha: 0,
		tickPosition: "start" //colum 차트 tick 지정
	},
	ValueAxis: { //y축
		tickLength: 3,
		dashLength: 3 // line dash
	},
	ChartScrollbar: {
		dragIcon: "dragIconRectBig", //드래그 아이콘 모양 변경 "dragIconRoundBig"//드래그 아이콘 모양 변경
		dragIconHeight: 25,
		dragIconWidth: 25,
		scrollbarHeight: 7,
		backgroundColor: "#e1e1e1"
	},
	ChartCursor: {
		cursorColor: "#37344d",//마우스 오버시 세로 라인&selection 컬러
		color: "#FFFFFF",
		cursorAlpha: 0.5, //세로 라인
		selectionAlpha: 0.15
	},
	AmBalloon: {
		color: "#FFFFFF",
		fillAlpha: 1,
		fillColor: "#37344d",
		borderThickness: 2,
		fontSize: 12,
		pointerWidth: 5,
		shadowAlpha: 0,
		horizontalPadding: 6,
		verticalPadding: 4,
		textAlign: "left"
	},
	AmLegend: {
		align: "right",
		autoMargins: false,
		marginTop: -10,
		color: "#999999", //"#808080"
		fontSize: 11,
		markerSize: 10,
		markerType: "circle",
		spacing: 35,
		equalWidths: false,
		valueAlign: "left",
		valueText: ""
	},
	AmGraph: { //"graphs"속성 설정
		lineThickness: 2,  // line graph 두깨
		lineAlpha: 1,  // line graph 투명도
		//columnWidth: 0.5 //%
	},
	AmPieChart: {
		colors: ["#90d18a", "#8a77c9", "#f17178", "#ffc168", "#78a0dd", "#7cd3d9", "#6c889c", "#cc8ebd", "#6b76a7", "#adada8"],
		marginBottom: 0,
		innerRadius: "85%",
		startDuration: 0,
		labelRadius: 12,
		minRadius: 90,
		labelTickColor: "#555555",
		color: "#555555",
		fontSize: 11,
		pullOutOnlyOne: true
	},
	AmAngularGauge: {
		adjustSize: false,
		gaugeY: 150,// 전체 div height사이즈 대비 y 위치 지정
		color: "#808080",
		marginTop: 20 //전체 div에서 gauge 사이즈 줄이기
	},
	GaugeArrow: {
		color: "#2d344c",
		borderAlpha: 0,
		nailRadius: 10,
		radius: "55%", //바늘 길이
		startWidth: 19
	},
	GaugeAxis: {
		axisAlpha: 0,
		endAngle: 90,
		endValue: 112,
		fontSize: 10,
		inside: false, //텍스트 원 밖으로
		labelOffset: 8,
		labelsEnabled: false, //텍스트 숨기기
		minorTickLength: 72, //원두깨
		startAngle: -90,
		startValue: 10, //시작값이 0이 아닐때 값 지정
		tickAlpha: 0,
		tickThickness: 0
	},
	AmRectangularChart : {
		zoomOutButtonColor: "#e5e5e5",
		zoomOutButtonRollOverAlpha: 0.5,
		zoomOutButtonImageSize: 15
	},
	Label:{//기타 텍스트 정보를 삽입
		color: "rgba(0,0,0,0.45)", //텍스트컬러
		size: 1
	}
};
/* -- theme_micro --*/
AmCharts.themes.theme_micro = {
	themeName: "theme_micro",
	AmSerialChart: {
		autoMargins:true,
		autoMarginOffset:0,
		marginTop: 0, //autoMargins:true 일때도 설정 가능
		marginRight: 0 //autoMargins:true 일때도 설정 가능
	},
	AxisBase: { //x축, y축, grid style
		axisThickness: 0,
		gridAlpha: 0,
		tickLength: 0,
		labelsEnabled : false
	},
	ChartScrollbar: {
		enabled: true
	},
	ChartCursor: {
		enabled: true
	},
	AmBalloon: {
		enabled: true
	},
	AmLegend: {
		enabled: true
	},
	AmGraph: { //"graphs"속성 설정
		lineThickness: 1.2,  // line graph 두깨
		lineAlpha: 1,  // line graph 투명도
		columnWidth: 0.4, //%
		showBalloon: false //말풍선 숨기기
	},
	AmPieChart: {
		colors: ["#8a77c9","#90d18a","#ffc168","#adada8","#7cd3d9", "#6c889c", "#cc8ebd", "#6b76a7"],
		balloonText: "",
		innerRadius: "55%",
		labelsEnabled: false,
		startDuration: 0,
		pullOutRadius: "0", //클릭 동작 없음
		marginBottom: 3,
		marginTop: 3
	}
};


/* areachart : Flow information-Mirroring */
AmCharts.makeChart("amchart_area01_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"colors": [
			"#90d18a",
			"#ff6c74",
			"#8a77c9"
		],
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-1",
				"fillAlphas": 0.45,
				"title": "ICMP",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-2",
				"fillAlphas": 0.45,
				"title": "UDP",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-3",
				"fillAlphas": 0.45,
				"title": "TCP",
				"valueField": "column-3"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Flows"
			}
		],
		"legend": {
			"enabled": true,
			"fontSize": 12,
			"reversedOrder": true
		},
		"dataProvider": [
			{
				"column-1": 8,
				"column-2": 5,
				"column-3": 7,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 6,
				"column-2": 7,
				"column-3": 5,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 2,
				"column-2": 3,
				"column-3": 4,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 1,
				"column-2": 3,
				"column-3": 5,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 2,
				"column-2": 1,
				"column-3": 7,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 3,
				"column-2": 2,
				"column-3": 5,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 6,
				"column-2": 8,
				"column-3": 4,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
/* areachart : Flow information-sFlow  */
AmCharts.makeChart("amchart_area02_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"colors": [
			"#90d18a",
			"#ff6c74",
			"#8a77c9"
		],
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-1",
				"fillAlphas": 0.45,
				"title": "ICMP",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-2",
				"fillAlphas": 0.45,
				"title": "UDP",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: [[value]]",
				"id": "AmGraph-3",
				"fillAlphas": 0.45,
				"title": "TCP",
				"valueField": "column-3"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Flows"
			}
		],
		"legend": {
			"enabled": true,
			"fontSize": 12,
			"reversedOrder": true
		},
		"dataProvider": [
			{
				"column-1": 8,
				"column-2": 5,
				"column-3": 7,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 6,
				"column-2": 7,
				"column-3": 5,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 2,
				"column-2": 3,
				"column-3": 4,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 1,
				"column-2": 3,
				"column-3": 5,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 2,
				"column-2": 1,
				"column-3": 7,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 3,
				"column-2": 2,
				"column-3": 5,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 6,
				"column-2": 8,
				"column-3": 4,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);

/* Line chart : Top-N:vl,fr */
AmCharts.makeChart("amchart_line01_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-1",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-2",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-3",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-4",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-5",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-6",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-7",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-8",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-9",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-10",
				"bullet": "round",
				"bulletSize": 6,
				"title": "Title Name",
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Packets"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);

/* Line chart : Connection Analysis */
AmCharts.makeChart("amchart_line02_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset":24,
		"marginTop": 6,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-1",
				"title": "MIN",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-2",
				"title": "MAX",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-3",
				"title": "AVG",
				"valueField": "column-3"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"tickLength": 2
			}
		],
		"dataProvider": [
			{
				"column-1": 1000000,
				"column-2": 3000000,
				"column-3": 5000000,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 2000000,
				"column-2": 1000000,
				"column-3": 7000000,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 3000000,
				"column-2": 2000000,
				"column-3": 5000000,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 6000000,
				"column-2": 8000000,
				"column-3": 4000000,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);

/* (x) Line chart : statistics */
AmCharts.makeChart("amchart_line03_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-1",
				"title": "Title Name",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-2",
				"title": "TitleNameTitleNameTitleNameTitleNameTitleNameTitleName",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-3",
				"title": "Title Name",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-4",
				"title": "Title Name",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-5",
				"title": "Title Name",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-6",
				"title": "Title Name",
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-7",
				"title": "Title Name",
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-8",
				"title": "Title Name",
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-9",
				"title": "Title Name",
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 6,
				"id": "AmGraph-10",
				"title": "Title Name",
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Packets"
			}
		],
		"legend": {
			"enabled": true,
			"horizontalGap": 24,
			"labelWidth": 200,
			"position": "right",
			"verticalGap": 8
		},
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);

/* Line chart : interface status */
var AmChartsLineList = ['amchart_line_list01','amchart_line_list02','amchart_line_list03','amchart_line_list04','amchart_line_list05','amchart_line_list06','amchart_line_list07','amchart_line_list08'];
for(idx =0 ; idx<AmChartsLineList.length ; idx++){
	AmCharts.makeChart(AmChartsLineList[idx],
		{
			"type": "serial",
			"theme":"theme_01",
			"categoryField": "date",
			"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
			"colors": [
				"#ff6c74",
				"#8a77c9"
			],
			"categoryAxis": {
				"minPeriod": "ss",
				"minHorizontalGap": 60
			},
			"chartCursor": {
				"enabled": true,
				"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
			},
			"graphs": [
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"id": "AmGraph-1",
					"bullet": "round",
					"bulletSize": 6,
					"title": "Title Name",
					"valueField": "column-1"
				},
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"id": "AmGraph-2",
					"bullet": "round",
					"bulletSize": 6,
					"title": "Title Name",
					"valueField": "column-2"
				}
			],
			"valueAxes": [
				{
					"id": "ValueAxis-1"
				}
			],
			"dataProvider": [
				{
					"column-1": 80,
					"column-2": 50,
					"column-3": 70,
					"column-4": 60,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:57:57"
				},
				{
					"column-1": 60,
					"column-2": 70,
					"column-3": 50,
					"column-4": 40,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:57:58"
				},
				{
					"column-1": 20,
					"column-2": 30,
					"column-3": 40,
					"column-4": 30,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:57:59"
				},
				{
					"column-1": 10,
					"column-2": 30,
					"column-3": 50,
					"column-4": 60,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:58:00"
				},
				{
					"column-1": 20,
					"column-2": 10,
					"column-3": 70,
					"column-4": 50,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:58:01"
				},
				{
					"column-1": 30,
					"column-2": 20,
					"column-3": 50,
					"column-4": 40,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:58:02"
				},
				{
					"column-1": 60,
					"column-2": 80,
					"column-3": 40,
					"column-4": 30,
					"column-5": 5,
					"column-6": 4,
					"column-7": 3,
					"column-8": 2,
					"column-9": 1,
					"column-10": 3,
					"date": "2016-11-30 07:58:03"
				}
			]
		}
	);
}

/* Dashboard : Port Statistics top 5 */
AmCharts.makeChart("amchart_colum01_div",
	{
		"type": "serial",
		"categoryField": "category",
		"columnSpacing": 2,
		"columnWidth": 0.3,
		"rotate": true,
		"colors": [
			"#8ad08c",
			"#6c889c"
		],
		"marginBottom": 0,
		"marginLeft": 0,
		"marginRight": 28,
		"marginTop": 0,
		"startDuration": 0,
		"categoryAxis": {
			"gridPosition": "start",
			"dashLength": 3,
			"gridAlpha": 1,
			"gridColor": "#e0e0e0",
			"axisColor": "#c2c2c2",
			"tickLength": 0,
			"labelsEnabled": false
		},
		"graphs": [
			{
				"balloonText": "[[category]]:<br><b>[[value]]</b>",
				"fillAlphas": 1,
				"id": "AmGraph-1",
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"color": "#999999",
				"dashLength": 3,
				"gridAlpha": 1,
				"gridColor": "#e0e0e0",
				"minHorizontalGap": 40,
				"tickLength": 0,
				"axisAlpha": 0
			}
		],
		"balloon": {
			"color": "#FFFFFF",
			"fillAlpha": 1,
			"fillColor": "#37344d",
			"borderThickness": 2,
			"fontSize": 12,
			"pointerWidth": 5,
			"shadowAlpha": 0,
			"horizontalPadding": 8,
			"verticalPadding": 3,
			"textAlign": "left"
		},
		"dataProvider": [
			{
				"category": "category 1",
				"column-1": 25
			},
			{
				"category": "category 2",
				"column-1": 27
			},
			{
				"category": "category 3",
				"column-1": 20
			},
			{
				"category": "category 4",
				"column-1": 7
			},
			{
				"category": "category 4",
				"column-1": 1
			}
		]
	}
);

/* Dashboard : flow */
AmCharts.makeChart("amchart_donut01_div",
	{
		"type": "pie",
		"theme":"theme_01",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span><br>([[percents]]%)",
		"labelRadius": 20,
		"labelText": "[[title]]:[[percents]]%",
		"titleField": "category",
		"valueField": "column-1",
		"balloon": {
			"textAlign": "center"
		},
		"dataProvider": [
			{
				"category": "TCP",
				"column-1": 70
			},
			{
				"category": "UDP",
				"column-1": 20
			},
			{
				"category": "ICMP",
				"column-1": 10
			}
		]
	}
);
AmCharts.makeChart("amchart_donut02_div",
	{
		"type": "pie",
		"theme":"theme_01",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span><br>([[percents]]%)",
		"labelText": "[[title]]",
		"titleField": "category",
		"valueField": "column-1",
		"balloon": {
			"textAlign": "center"
		},
		"dataProvider": [
			{
				"category": "192.168.0.000.000",
				"column-1": 500
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 250
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 200
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 150
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 100
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 90
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 70
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 50
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 20
			},
			{
				"category": "192.168.0.000.000",
				"column-1": 5
			}
		]
	}
);

/* Dashboard-TIDC*/
AmCharts.makeChart("amchart_micro_column01_div",
	{
		"type": "serial",
		"theme":"theme_micro",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fixedColumnWidth": 3,
				"fillAlphas": 1,
				"fillColors": "#ffc168",
				"lineColor": "#ffc168",
				"id": "AmGraph-1",
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1",
				"showBalloon": false
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1"
			}
		],
		"dataProvider": [
			{
				"column-1": 100,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 150,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 190,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 160,
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": 130,
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:06"
			}
		]
	}
);
AmCharts.makeChart("amchart_micro_column02_div",
	{
		"type": "serial",
		"theme":"theme_micro",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fixedColumnWidth": 3,
				"fillAlphas": 1,
				"fillColors": "#f17178",
				"lineColor": "#f17178",
				"id": "AmGraph-1",
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1",
				"showBalloon": false
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1"
			}
		],
		"dataProvider": [
			{
				"column-1": 100,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 150,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 190,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 160,
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": 130,
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:06"
			}
		]
	}
);
AmCharts.makeChart("amchart_micro_column03_div",
	{
		"type": "serial",
		"theme":"theme_micro",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fixedColumnWidth": 3,
				"fillAlphas": 1,
				"fillColors": "#8c74e0",
				"lineColor": "#8c74e0",
				"id": "AmGraph-1",
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1",
				"showBalloon": false
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1"
			}
		],
		"dataProvider": [
			{
				"column-1": 100,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 150,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 190,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 160,
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": 130,
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:06"
			}
		]
	}
);
AmCharts.makeChart("amchart_micro_column04_div",
	{
		"type": "serial",
		"theme":"theme_micro",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"graphs": [
			{
				"balloonText": "[[title]] of [[category]]:[[value]]",
				"fixedColumnWidth": 3,
				"fillAlphas": 1,
				"fillColors": "#dedfe3",
				"lineColor": "#dedfe3",
				"id": "AmGraph-1",
				"title": "graph 1",
				"type": "column",
				"valueField": "column-1",
				"showBalloon": false
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1"
			}
		],
		"dataProvider": [
			{
				"column-1": 100,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 150,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 190,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 160,
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": 130,
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": 180,
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": 120,
				"date": "2016-11-30 07:58:06"
			}
		]
	}
);
AmCharts.makeChart("amchart_3d_column01_div",
	{
		"type": "serial",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"angle": 0.1,
		"depth3D": 0,
		"columnWidth": 0.81,
		"startDuration": 0,/*0.4*/
		"startEffect": "easeOutSine",
		"autoMarginOffset": 0,
		"marginRight": 0,
		"marginTop": 0,
		"categoryAxis": {
			"minPeriod": "ss",
			"gridAlpha": 0,
			"axisAlpha": 0,
			"labelsEnabled": false
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonEnabled": false,
			"cursorAlpha": 0.2,
			"cursorColor": "#000000",
			"zoomable": false
		},
		"graphs": [
			{
				"balloonText": "[[title]]<br>[[category]]<br><b>[[value]]</b>",
				"fillAlphas": 0.45,
				"fillColors": "#2700aa",
				"lineAlpha": 0.28,
				"lineColor": "#2700aa",
				"id": "AmGraph-1",
				"title": "Traffic",
				"type": "column",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]<br>[[category]]<br><b>[[value]]</b>",
				"fillAlphas": 1,
				"fillColors": "#dedfe3",
				"lineColor": "#dedfe3",
				"id": "AmGraph-2",
				"title": "Price",
				"type": "column",
				"valueAxis": "ValueAxis-2",
				"valueField": "column-2"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"minimum": 0,
				"maximum": 2000,
				"stackType": "3d",
				"gridAlpha": 0,
				"axisThickness": 0,
				"labelsEnabled": false,
				"tickLength": 0
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"minimum": 0,
				"maximum": 2000,
				"stackType": "3d",
				"gridAlpha": 0,
				"axisThickness": 0,
				"labelsEnabled": false,
				"tickLength": 0
			}
		],
		"balloon": {
			"color": "#FFFFFF",
			"fillAlpha": 1,
			"fillColor": "#37344d",
			"borderThickness": 0,
			"fontSize": 10,
			"horizontalPadding": 6,
			"verticalPadding": 4,
			"shadowAlpha": 0,
			"textAlign": "left"
		},
		"dataProvider": [
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:57:56"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": "1200",
				"column-2": "710",
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": "1056",
				"column-2": "600",
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:06"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:07"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:08"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:09"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:10"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:11"
			},
			{
				"column-2": "1056",
				"column-1": "600",
				"date": "2016-11-30 07:58:12"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:13"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:14"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:15"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:16"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:17"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:18"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:19"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:20"
			},
			{
				"column-1": "850",
				"column-2": "800",
				"date": "2016-11-30 07:58:21"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:22"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:23"
			},
			{
				"column-1": "650",
				"column-2": "700",
				"date": "2016-11-30 07:58:24"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:25"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:26"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:27"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:28"
			},
			{
				"column-1": "650",
				"column-2": "900",
				"date": "2016-11-30 07:58:29"
			},
			{
				"column-1": "650",
				"column-2": "800",
				"date": "2016-11-30 07:58:30"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:31"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:32"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:33"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:34"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:35"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:36"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:37"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:38"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:39"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:40"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:41"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:42"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:43"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:44"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:45"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:46"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:47"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:48"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:49"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:50"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:51"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:52"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:53"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:54"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:55"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:56"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:57"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:58"
			},
			{
				"column-1": "400",
				"column-2": "1356",
				"date": "2016-11-30 07:58:59"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:59:00"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:59:01"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:02"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:03"
			},
			{
				"column-1": "600",
				"column-2": "1190",
				"date": "2016-11-30 07:59:04"
			},
			{
				"column-1": "500",
				"column-2": "1056",
				"date": "2016-11-30 07:59:05"
			},
			{
				"column-1": "600",
				"column-2": "900",
				"date": "2016-11-30 07:59:06"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:07"
			}
		]
	}
);
AmCharts.makeChart("amchart_3d_column02_div",
	{
		"type": "serial",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"angle": 0.1,
		"depth3D": 0,
		"columnWidth": 0.81,
		"startDuration": 0,/*0.4*/
		"startEffect": "easeOutSine",
		"autoMarginOffset": 0,
		"marginRight": 0,
		"marginTop": 0,
		"categoryAxis": {
			"minPeriod": "ss",
			"gridAlpha": 0,
			"axisAlpha": 0,
			"labelsEnabled": false
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonEnabled": false,
			"cursorAlpha": 0.2,
			"cursorColor": "#000000",
			"zoomable": false
		},
		"graphs": [
			{
				"balloonText": "[[title]]<br>[[category]]<br><b>[[value]]</b>",
				"fillAlphas": 0.45,
				"fillColors": "#e60039",
				"lineAlpha": 0.28,
				"lineColor": "#e60039",
				"id": "AmGraph-1",
				"title": "Flow Count",
				"type": "column",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]<br>[[category]]<br><b>[[value]]</b>",
				"fillAlphas": 1,
				"fillColors": "#ffcc73",
				"lineColor": "#ffcc73",
				"id": "AmGraph-2",
				"title": "Average Rate",
				"type": "column",
				"valueAxis": "ValueAxis-2",
				"valueField": "column-2"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"minimum": 0,
				"maximum": 2000,
				"stackType": "3d",
				"gridAlpha": 0,
				"axisThickness": 0,
				"labelsEnabled": false,
				"tickLength": 0
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"minimum": 0,
				"maximum": 2000,
				"stackType": "3d",
				"gridAlpha": 0,
				"axisThickness": 0,
				"labelsEnabled": false,
				"tickLength": 0
			}
		],
		"balloon": {
			"color": "#FFFFFF",
			"fillAlpha": 1,
			"fillColor": "#37344d",
			"borderThickness": 0,
			"fontSize": 10,
			"horizontalPadding": 6,
			"verticalPadding": 4,
			"shadowAlpha": 0,
			"textAlign": "left"
		},
		"dataProvider": [
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:57:56"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": "1200",
				"column-2": "710",
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": "1056",
				"column-2": "600",
				"date": "2016-11-30 07:58:03"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:04"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:05"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:06"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:07"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:08"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:09"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:10"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:11"
			},
			{
				"column-2": "1056",
				"column-1": "600",
				"date": "2016-11-30 07:58:12"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:13"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:14"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:15"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:16"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:17"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:18"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:19"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:20"
			},
			{
				"column-1": "850",
				"column-2": "800",
				"date": "2016-11-30 07:58:21"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:22"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:23"
			},
			{
				"column-1": "650",
				"column-2": "700",
				"date": "2016-11-30 07:58:24"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:25"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:26"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:27"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:28"
			},
			{
				"column-1": "650",
				"column-2": "900",
				"date": "2016-11-30 07:58:29"
			},
			{
				"column-1": "650",
				"column-2": "800",
				"date": "2016-11-30 07:58:30"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:31"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:32"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:33"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:34"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:35"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:36"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:37"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:38"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:39"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:40"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:41"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:42"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:43"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:44"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:45"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:46"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:47"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:48"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:49"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:50"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:51"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:52"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:53"
			},
			{
				"column-1": "650",
				"column-2": "500",
				"date": "2016-11-30 07:58:54"
			},
			{
				"column-1": "600",
				"column-2": "1356",
				"date": "2016-11-30 07:58:55"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:58:56"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:58:57"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:58:58"
			},
			{
				"column-1": "400",
				"column-2": "1356",
				"date": "2016-11-30 07:58:59"
			},
			{
				"column-1": "510",
				"column-2": "1050",
				"date": "2016-11-30 07:59:00"
			},
			{
				"column-1": "710",
				"column-2": "1200",
				"date": "2016-11-30 07:59:01"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:02"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:03"
			},
			{
				"column-1": "600",
				"column-2": "1190",
				"date": "2016-11-30 07:59:04"
			},
			{
				"column-1": "500",
				"column-2": "1056",
				"date": "2016-11-30 07:59:05"
			},
			{
				"column-1": "600",
				"column-2": "900",
				"date": "2016-11-30 07:59:06"
			},
			{
				"column-1": "600",
				"column-2": "1056",
				"date": "2016-11-30 07:59:07"
			}
		]
	}
);
AmCharts.makeChart("amchart_donut04_div",
	{
		"type": "pie",
		"theme":"theme_01",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span><br>([[percents]]%)",
		"innerRadius": "83%",
		"minRadius": 94,
		"labelText": "[[title]]",
		"maxLabelWidth": 80,
		"titleField": "category",
		"valueField": "column-1",
		"balloon": {
			"textAlign": "center"
		},
		"dataProvider": [
			{
				"category": "T view live",
				"column-1": 500
			},
			{
				"category": "PCL",
				"column-1": 350
			},
			{
				"category": "Operation Mgmt",
				"column-1": 250
			},
			{
				"category": "Staging",
				"column-1": 180
			},
			{
				"category": "Development",
				"column-1": 80
			}
		]
	}
);

/* Create chart with class name */
$(function() {
	/*amchart_theme_line01*/
	var $chartType_line01 = $('.amchart_theme_line01');
	var $chartType_line01_array = [];
	for (var i = 0; i < $chartType_line01.length; i++) {
		$id = 'chartTempID_09_' + (i + 1);
		$chartType_line01.eq(i).attr('id', $id);
		$chartType_line01_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line01_array.length; i++) {
		AmCharts.makeChart($chartType_line01_array[i],
			{
				"type": "serial",
				"theme": "patterns",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
				"autoMarginOffset": 0,
				"marginRight": 0,
				"marginTop": 0,
				"sequencedAnimation": false,
				"categoryAxis": {
					"minPeriod": "ss",
					"startOnAxis": true,
					"gridAlpha": 0,
					"axisAlpha": 0,
					"labelsEnabled": false
				},
				"chartCursor": {
					"enabled": true,
					"categoryBalloonEnabled": false,
					"cursorAlpha": 0.2,
					"cursorColor": "#000000",
					"zoomable": false
				},
				"graphs": [
					{
						"balloonText": "[[category]]<br><b>[[value]]</b>",
						"id": "AmGraph-1",
						"lineColor": "#0d0d0d",
						"lineThickness": 1.3,
						"fillAlphas": 0.2,
						"title": "graph 1",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"axisThickness": 0,
						"gridAlpha": 0,
						"labelsEnabled": false,
						"tickLength": 0
					}
				],
				"balloon": {
					"color": "#FFFFFF",
					"fillAlpha": 1,
					"fillColor": "#37344d",
					"borderThickness": 0,
					"fontSize": 10,
					"horizontalPadding": 6,
					"verticalPadding": 4,
					"shadowAlpha": 0
				},
				"dataProvider": [
					{
						"column-1": 180,
						"date": "2016-11-30 07:57:57"
					},
					{
						"column-1": 100,
						"date": "2016-11-30 07:57:58"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:57:59"
					},
					{
						"column-1": 150,
						"date": "2016-11-30 07:58:00"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:01"
					},
					{
						"column-1": 190,
						"date": "2016-11-30 07:58:02"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:03"
					},
					{
						"column-1": 130,
						"date": "2016-11-30 07:58:04"
					},
					{
						"column-1": 180,
						"date": "2016-11-30 07:58:05"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:06"
					},
					{
						"column-1": 200,
						"date": "2016-11-30 07:58:07"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:08"
					},
					{
						"column-1": 192,
						"date": "2016-11-30 07:58:09"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:10"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:11"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:12"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:13"
					},
					{
						"column-1": 130,
						"date": "2016-11-30 07:58:14"
					},
					{
						"column-1": 180,
						"date": "2016-11-30 07:58:15"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:16"
					},
					{
						"column-1": 100,
						"date": "2016-11-30 07:58:17"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:18"
					},
					{
						"column-1": 192,
						"date": "2016-11-30 07:58:19"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:20"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:21"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:22"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:23"
					},
					{
						"column-1": 130,
						"date": "2016-11-30 07:58:24"
					},
					{
						"column-1": 180,
						"date": "2016-11-30 07:58:25"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:26"
					},
					{
						"column-1": 140,
						"date": "2016-11-30 07:58:27"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:28"
					},
					{
						"column-1": 192,
						"date": "2016-11-30 07:58:29"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:30"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:31"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:32"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:33"
					},
					{
						"column-1": 130,
						"date": "2016-11-30 07:58:34"
					},
					{
						"column-1": 180,
						"date": "2016-11-30 07:58:35"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:36"
					},
					{
						"column-1": 140,
						"date": "2016-11-30 07:58:37"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:38"
					},
					{
						"column-1": 192,
						"date": "2016-11-30 07:58:39"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:40"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:41"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:42"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:43"
					},
					{
						"column-1": 130,
						"date": "2016-11-30 07:58:44"
					},
					{
						"column-1": 180,
						"date": "2016-11-30 07:58:45"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:46"
					},
					{
						"column-1": 100,
						"date": "2016-11-30 07:58:47"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:48"
					},
					{
						"column-1": 192,
						"date": "2016-11-30 07:58:49"
					},
					{
						"column-1": 120,
						"date": "2016-11-30 07:58:50"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:51"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:52"
					},
					{
						"column-1": 175,
						"date": "2016-11-30 07:58:53"
					},
					{
						"column-1": 160,
						"date": "2016-11-30 07:58:54"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:55"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:56"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:58:57"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:58:58"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:58:59"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:00"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:01"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:02"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:03"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:04"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:05"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:06"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:07"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:08"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:09"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:10"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:11"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:12"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:13"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:14"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:15"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:16"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:17"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:18"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:19"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:20"
					},
					{
						"column-1": 225,
						"date": "2016-11-30 07:59:21"
					},
					{
						"column-1": 220,
						"date": "2016-11-30 07:59:22"
					}
				]
			}
		);
	}

	/*amchart_theme_pie01*/
	var $chartType_pie01 = $('.amchart_theme_pie01');
	var $chartType_pie01_array = [];
	for (var i = 0; i < $chartType_pie01.length; i++) {
		$id = 'chartTempID_10_' + (i + 1);
		$chartType_pie01.eq(i).attr('id', $id);
		$chartType_pie01_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_pie01_array.length; i++) {
		AmCharts.makeChart($chartType_pie01_array[i],
			{
				"type": "pie",
				"theme":"theme_micro",
				"balloonText": "",
				"titleField": "category",
				"valueField": "column-1",
				"dataProvider": [
					{
						"category": "TCP",
						"column-1": 70
					},
					{
						"category": "UDP",
						"column-1": 40
					},
					{
						"category": "UDP",
						"column-1": 20
					},
					{
						"category": "ICMP",
						"column-1": 10
					}
				]
			}
		);
	}

	String.prototype.cutstring = function(cutoff, prefix){
		var str = this;
		if(prefix)
			return str.length < cutoff ? str : '...' + str.substr(str.length-cutoff);
		else
			return str.length < cutoff ? str : str.substr(0, cutoff-1) + '...';
	};

	/*amchart_theme_pie11 : TiDC상용 Dashboard*/
//	var $chartType_pie11 = $('.amchart_theme_pie11');
//	var $chartType_pie11_array = [];
//	for (var i = 0; i < $chartType_pie11.length; i++) {
//		$id = 'chartTempID_pie11_' + (i + 1);
//		$chartType_pie11.eq(i).attr('id', $id);
//		$chartType_pie11_array[i] = $id;
//	}
//	// run chart
//	for (var i = 0; i < $chartType_pie11_array.length; i++) {
//		AmCharts.makeChart($chartType_pie11_array[i],
//			{
//				"type": "pie",
//				"theme":"theme_01",
////				"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span><br>([[percents]]%)",
//				"balloonFunction": function(data, graph){
//					return data.title + "<br><span style='font-size:14px'><b>" + Utils.formatBytes(data.value) + "</b></span><br>(" + data.percents.toFixed(2) + "%)";
//				},
//				"startAngle": 0,
//				"pullOutRadius": 0,
//				"pieY": "100%",
//				"labelText": "[[title]]",
//				"labelFunction": function(data, graph){
//					return data.title.cutstring(6, true);
//				},
////				"labelRadius": 8,
////				"minRadius": 77,
////				"maxLabelWidth": 80,
//				"titleField": "label",
//				"valueField": "used",
//				"colorField": "color",
//				"balloon": {
//					"textAlign": "center"
//				},
//				"dataProvider": [
//					{
//						"label": "SKT Network Port 1",
//						"used": 5000,
//						"color": "#f07178"
//					},
//					{
//						"label": "SKT Network Port 2",
//						"used": 2500,
//						"color": "#78a0dd"
//					},
//					{
//						"label": "SKT Network Port 3",
//						"used": 2000,
//						"color": "#93d28b"
//					},
//					{
//						"label": "SKT Network Port 4",
//						"used": 1500,
//						"color": "#fec069"
//					},
//					{
//						"label": "SKT Network Port 5",
//						"used": 5000,
//						"color": "#8a76cb"
//					},
//					{
//						"label": "SKT Network Port 6",
//						"used": 900,
//						"color": "#7cd3d9"
//					},
//					{
//						"label": "SKT Network Port 7",
//						"used": 700,
//						"color": "#6c889c"
//					},
//					{
//						"label": "SKT Network Port 8",
//						"used": 50,
//						"color": "#cc8ebd"
//					},
//					{
//						"label": "SKT Network Port 9",
//						"used": 200,
//						"color": "#6b76a7"
//					},
//					{
//						"label": "remain",
//						"used": 50000
//					}
//				]
//			}
//		);
//	}
//
//	var chart = AmCharts.makeChart("usageDetailChart", {
//	    "type": "serial",
//		"theme": "light",
//		"color": "#999999",
//	    "dataProvider": [{
//	        "storage": "storage#1",
//	        "1": 5000,
//	        "2": 2500,
//	        "3": 1500
//	    }, {
//	    	"storage": "storage#2",
//	    	"3": 500,
//	        "4": 1500,
//	        "5": 5000,
//	        "6": 900
//	    }, {
//	    	"storage": "storage#3",
//	        "7": 700,
//	        "8": 400,
//	        "9": 500
//	    }],
//	    "valueAxes": [{
//	        "stackType": "regular",
//	        "axisAlpha": 0.5,
//	        "gridAlpha": 0
//	    }],
//	    "graphs": [{
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data, graph){
//	        	return "32T";
//	        },
//	        "title": "SKT Network Port 1",
//	        "lineAlpha": 0.3,
//	        "type": "column",
//			"lineColor":"#f07178",
//	        "fillColors": "#f07178",
//	        "valueField": "1"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return "10G";
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 2",
//	        "type": "column",
//			"lineColor":"#78a0dd",
//			"fillColors": "#78a0dd",
//	        "valueField": "2"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 3",
//	        "type": "column",
//			"lineColor":"#93d28b",
//			"fillColors": "#93d28b",
//	        "valueField": "3"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 4",
//	        "type": "column",
//			"lineColor":"#fec069",
//			"fillColors": "#fec069",
//	        "valueField": "4"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//	        "labelText": "[[value]]",
//			"color":"#fff",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 5",
//	        "type": "column",
//			"lineColor":"#8a76cb",
//			"fillColors": "#8a76cb",
//	        "valueField": "5"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 6",
//	        "type": "column",
//			"lineColor":"#7cd3d9",
//			"fillColors": "#7cd3d9",
//	        "valueField": "6"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 7",
//	        "type": "column",
//			"lineColor":"#6c889c",
//			"fillColors": "#6c889c",
//	        "valueField": "7"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 8",
//	        "type": "column",
//			"lineColor":"#cc8ebd",
//			"fillColors": "#cc8ebd",
//	        "valueField": "8"
//	    }, {
//	        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'><b>[[value]]</b></span>",
//	        "fillAlphas": 1,
//			"color":"#fff",
//	        "labelText": "[[value]]",
//	        "labelFunction": function(data){
//	        	return data.values.value;
//	        },
//	        "lineAlpha": 1,
//	        "title": "SKT Network Port 9",
//	        "type": "column",
//			"lineColor":"#6b76a7",
//			"fillColors": "#6b76a7",
//	        "valueField": "9"
//	    }],
//	    "rotate": true,
//	    "categoryField": "storage",
//	    "categoryAxis": {
//	        "gridPosition": "start",
//	        "axisAlpha": 0,
//	        "gridAlpha": 0,
//	        "position": "left"
//	    },
//	    "export": {
//	    	"enabled": true
//	     }
//	});
	/*amchart_theme_line11 : TiDC상용 Dashboard - Traffic */
//	var $chartType_line11 = $('.amchart_theme_line11');
//	var $chartType_line11_array = [];
//	for (var i = 0; i < $chartType_line11.length; i++) {
//		$id = 'chartTempID_line11_' + (i + 1);
//		$chartType_line11.eq(i).attr('id', $id);
//		$chartType_line11_array[i] = $id;
//	}
//	// run chart
//	for (var i = 0; i < $chartType_line11_array.length; i++) {
//		AmCharts.makeChart($chartType_line11_array[i],
//			{
//				"type": "serial",
//				"theme":"theme_01",
//				"categoryField": "date",
//				"dataDateFormat": "YYYY-MM-DD HH:NN",
//				"colors": [
//					"#8a77c9",
//					"#ffc168",
//					"#90d18a",
//					"#f17178"
//				],
//				"autoMargins":false,
//				//"autoMarginOffset":30,
//				"marginTop": 15,
//				"marginRight": 30,
//				"marginLeft": 30,
//				"marginBottom": 34,
//				"categoryAxis": {
//					"minPeriod": "mm",
//					//"startOnAxis": true,
//					"fontSize": 11,
//					"axisColor": "#e8e8e8",
//					"tickLength": 0,
//					"minHorizontalGap": 30,
//					//"showFirstLabel": false,
//					//"showLastLabel": false
//				},
//				"chartCursor": {
//					"enabled": true,
//					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
//				},
//				"allLabels": [//기타 정보를 삽입하는데 유용
//					{
//						"id": "Label-x",// x축
//						"text": "bps", // 단위 같은 것을 기입
//						"x": 34,
//						"y": 24
//					},
//					{
//						"id": "Label-y",// y축
//						"align": "right",
//						"text": "Time", // 단위 같은 것을 기입
//						"x": "94%",
//						"y": "280"
//					}
//				],
//				"graphs": [
//					{
//						"balloonText": "[[title]]: <b>[[value]]</b>",
//						"id": "AmGraph-1",
//						"title": "Last In",
//						"valueField": "column-1"
//					},
//					{
//						"balloonText": "[[title]]: <b>[[value]]</b>",
//						"id": "AmGraph-2",
//						"title": "Last Out",
//						"valueField": "column-2"
//					},
//					{
//						"balloonText": "[[title]]: <b>[[value]]</b>",
//						//"dashLength": 3,
//						"lineThickness": 1.5,
//						"hidden": true,
//						"id": "AmGraph-3",
//						"title": "Past In",
//						"valueField": "column-3"
//					},
//					{
//						"balloonText": "[[title]]: <b>[[value]]</b>",
//						//"dashLength": 3,
//						"lineThickness": 1.5,
//						"hidden": true,
//						"id": "AmGraph-4",
//						"title": "Past Out",
//						"valueField": "column-4"
//					}
//				],
//				"guides": [
//					{
//						"above": true,
//						"dashLength": 2,
//						//"lineThickness": 0.5,
//						"id": "Guide-1",
//						"inside": true,
//						"label": "Last Max bps",
//						"labelRotation": 90,
//						"lineAlpha": 0.42,
//						"lineColor": "#ff0000",
//						"color": "rgba(0,0,0,0.5)",
//						"position": "right",
//						"tickLength": 0,
//						"value": 8200
//					},
//					{
//						"above": true,
//						"dashLength": 2,
//						//"lineThickness": 0.5,
//						"id": "Guide-1",
//						"inside": true,
//						"label": "Last Min bps",
//						"labelRotation": 90,
//						"lineAlpha": 0.42,
//						"lineColor": "#006aff",
//						"color": "rgba(0,0,0,0.5)",
//						"position": "right",
//						"tickLength": 0,
//						"value": 900
//					}
//				],
//				"valueAxes": [
//					{
//						"id": "ValueAxis-1",
//						"inside": true,
//						"color": "rgba(0,0,0,0.3)",
//						"fontSize": 11,
//						"gridAlpha": 0.6,
//						"axisAlpha": 0,
//						"tickLength": 0,
//						"showFirstLabel": false
//					}
//				],
//				"legend": {
//					"align": "center",
//					"useGraphSettings": true,
//					"marginTop": -14,
//
//					"marginBottom": 18,
//					"marginRight":3,
//					"spacing": 20,
//					"markerLabelGap": 8
//				},
//				"dataProvider": [
//					{
//						"column-1": 7000,
//						"column-2": 5000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 07:50"
//					},
//					{
//						"column-1": 6000,
//						"column-2": 7000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 07:51"
//					},
//					{
//						"column-1": 2000,
//						"column-2": 3000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 07:52"
//					},
//					{
//						"column-1": 4000,
//						"column-2": 3000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 07:53"
//					},
//					{
//						"column-1": 2000,
//						"column-2": 1000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 07:54"
//					},
//					{
//						"column-1": 3000,
//						"column-2": 4000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 07:55"
//					},
//					{
//						"column-1": 6000,
//						"column-2": 3000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 07:56"
//					},
//					{
//						"column-1": 8200,
//						"column-2": 7000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 07:57"
//					},
//					{
//						"column-1": 6000,
//						"column-2": 3000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 07:58"
//					},
//					{
//						"column-1": 4000,
//						"column-2": 5000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 07:59"
//					},
//					{
//						"column-1": 6000,
//						"column-2": 3000,
//						"column-3": 3500,
//						"column-4": 2500,
//						"date": "2016-11-30 08:00"
//					},
//					{
//						"column-1": 3000,
//						"column-2": 5000,
//						"column-3": 4500,
//						"column-4": 3500,
//						"date": "2016-11-30 08:01"
//					}
//				]
//			}
//		);
//	}

	/*amchart_theme_line12 : TiDC상용 Dashboard - peak(day) */
	var $chartType_line12 = $('.amchart_theme_line12');
	var $chartType_line12_array = [];
	for (var i = 0; i < $chartType_line12.length; i++) {
		$id = 'chartTempID_line12_' + (i + 1);
		$chartType_line12.eq(i).attr('id', $id);
		$chartType_line12_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line12_array.length; i++) {
		AmCharts.makeChart($chartType_line12_array[i],
			{
				"type": "serial",
				"theme": "theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"patterns":[
					{"url":"patterns/gradient2.png", "width":5, "height":270}
				],
				"autoMargins":false,
				//"autoMarginOffset":33,
				"marginTop": 15,
				"marginRight": 30,
				"marginLeft": 30,
				"marginBottom": 44,
				"categoryAxis": {
					"minPeriod": "mm",
					//"startOnAxis": true,
					"fontSize": 11,
					"axisColor": "#e8e8e8",
					"tickLength": 0,
					"minHorizontalGap": 30
				},
				"chartCursor": {
					"enabled": true,
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"graphs": [
					{
						"balloonText": "<b>[[value]]</b>",
						"id": "AmGraph-1",
						"lineColor": "#8297e6",
						"lineThickness": 1.5,
						"fillAlphas": 0.25,
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"inside": true,
						"color": "rgba(0,0,0,0.3)",
						"fontSize": 11,
						"gridAlpha": 0.6,
						"axisAlpha": 0,
						"tickLength": 0,
						"showFirstLabel": false
					}
				],
				"allLabels": [//기타 정보를 삽입하는데 유용
					{
						"id": "Label-x",// x축
						"text": "bps", // 단위 같은 것을 기입
						"x": 34,
						"y": 24
					},
					{
						"id": "Label-y",// y축
						"align": "right",
						"text": "Time", // 단위 같은 것을 기입
						"x": "94%",
						"y": 317
					}
				],
				"dataProvider": [
					{
						"column-1": 8000,
						"date": "2016-11-30 07:50"
					},
					{
						"column-1": 6000,
						"date": "2016-11-30 07:51"
					},
					{
						"column-1": 2000,
						"date": "2016-11-30 07:52"
					},
					{
						"column-1": 4000,
						"date": "2016-11-30 07:53"
					},
					{
						"column-1": 2000,
						"date": "2016-11-30 07:54"
					},
					{
						"column-1": 3000,
						"date": "2016-11-30 07:55"
					},
					{
						"column-1": 6000,
						"date": "2016-11-30 07:56"
					},
					{
						"column-1": 8000,
						"date": "2016-11-30 07:57"
					},
					{
						"column-1": 6000,
						"date": "2016-11-30 07:58"
					},
					{
						"column-1": 4000,
						"date": "2016-11-30 07:59"
					},
					{
						"column-1": 6000,
						"date": "2016-11-30 08:00"
					},
					{
						"column-1": 3000,
						"date": "2016-11-30 08:01"
					}
				]
			}
		);
	}

	/*amchart_theme_colum11 : TiDC상용 Dashboard - peak(month) */
	var $chartType_colum11 = $('.amchart_theme_colum11');
	var $chartType_colum11_array = [];
	for (var i = 0; i < $chartType_colum11.length; i++) {
		$id = 'chartTempID_colum11_' + (i + 1);
		$chartType_colum11.eq(i).attr('id', $id);
		$chartType_colum11_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_colum11_array.length; i++) {
		AmCharts.makeChart($chartType_colum11_array[i],
			{
				"type": "serial",
				"theme": "theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM",
				"columnWidth": 0.3,
				"autoMargins":false,
				//"autoMarginOffset":33,
				"marginTop": 15,
				"marginRight": 30,
				"marginLeft": 30,
				"marginBottom": 44,
				"categoryAxis": {
					"minPeriod": "MM",
					//"startOnAxis": true,
					"fontSize": 11,
					"axisColor": "#e8e8e8",
					"tickLength": 0,
					"minHorizontalGap": 30
				},
				"chartCursor": {
					"enabled": true,
					"categoryBalloonDateFormat": "YYYY-MM"
				},
				"graphs": [
					{
						"balloonText": "<b>[[value]]</b>",
						"fillAlphas": 1,
						"lineThickness": 1.2,
						"id": "AmGraph-1",
						"type": "column",
						"valueField": "column-1"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"inside": true,
						"color": "rgba(0,0,0,0.3)",
						"fontSize": 11,
						"gridAlpha": 0.6,
						"axisAlpha": 0,
						"tickLength": 0,
						"showFirstLabel": false
					}
				],
				"allLabels": [//기타 정보를 삽입하는데 유용
					{
						"id": "Label-x", // x축
						"text": "bps", // 단위 같은 것을 기입
						"x": 34,
						"y": 24
					},
					{
						"id": "Label-y", // y축
						"align": "right",
						"text": "month", // 단위 같은 것을 기입
						"x": "94%",
						"y": 317
					}
				],
				"dataProvider": [
					{
						"column-1": 4000,
						"date": "2016-01"
					},
					{
						"column-1": 6000,
						"date": "2016-02"
					},
					{
						"column-1": 8000,
						"date": "2016-03"
					},
					{
						"column-1": 4000,
						"date": "2016-04"
					},
					{
						"column-1": 2000,
						"date": "2016-05"
					},
					{
						"column-1": 3000,
						"date": "2016-06"
					},
					{
						"column-1": 6000,
						"date": "2016-07"
					},
					{
						"column-1": 8000,
						"date": "2016-08"
					},
					{
						"column-1": 6000,
						"date": "2016-09"
					},
					{
						"column-1": 4000,
						"date": "2016-10"
					},
					{
						"column-1": 6000,
						"date": "2016-11"
					},
					{
						"column-1": 3000,
						"date": "2016-12"
					}
				]
			}
		);
	}

	/*amchart_theme_area11 : TiDC상용 Dashboard - service */
	var $chartType_area11 = $('.amchart_theme_area11');
	var $chartType_area11_array = [];
	for (var i = 0; i < $chartType_area11.length; i++) {
		$id = 'chartTempID_area11_' + (i + 1);
		$chartType_area11.eq(i).attr('id', $id);
		$chartType_area11_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_area11_array.length; i++) {
		AmCharts.makeChart($chartType_area11_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"colors": [
					"#90d18a",
					"#ff6c74",
					"#8a77c9"
				],
				"autoMarginOffset":0,
				"marginTop": 0,
				"marginRight": 0,
				"categoryAxis": {
					"minPeriod": "mm",
					"startOnAxis": true,
					//"equalSpacing": false,
					"inside": true,
					"labelOffset": 6,
					"color": "rgba(0,0,0,0.55)",
					"fontSize": 11,
					"axisAlpha": 0,
					"tickLength": 0,
					"minHorizontalGap": 30,
					"showFirstLabel": false,
					"showLastLabel": false
				},
				"chartCursor": {
					"enabled": true,
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
				"graphs": [
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						"id": "AmGraph-1",
						"lineThickness": 1.1,
						"fillAlphas": 0.45,
						"title": "Total",
						"valueField": "column-1"
					},
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						"id": "AmGraph-2",
						"lineThickness": 1.1,
						"fillAlphas": 0.45,
						"title": "Outgoing",
						"valueField": "column-2"
					},
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						"id": "AmGraph-3",
						"lineThickness": 1.1,
						"fillAlphas": 0.45,
						"title": "Incoming",
						"valueField": "column-3"
					}
				],
				"valueAxes": [
					{
						"id": "ValueAxis-1",
						"inside": true,
						"labelOffset": 15,
						"color": "rgba(0,0,0,0.3)",
						"fontSize": 11,
						"gridAlpha": 0,
						"axisAlpha": 0,
						"tickLength": 0,
						"showFirstLabel": false
					}
				],
				"allLabels": [//기타 정보를 삽입하는데 유용
					{
						"id": "Label-x",// x축
						"text": "bps", // 단위 같은 것을 기입
						"x": 21,
						"y": 12
					},
					{
						"id": "Label-y",// y축
						"align": "right",
						"text": "Time", // 단위 같은 것을 기입
						"x": "97.5%",
						"y": "96.5%"
					}
				],
				"dataProvider": [
					{
						"column-1": 12000,
						"column-2": 5000,
						"column-3": 7000,
						"date": "2016-11-30 07:57"
					},
					{
						"column-1": 13000,
						"column-2": 6000,
						"column-3": 4000,
						"date": "2016-11-30 07:58"
					},
					{
						"column-1": 12000,
						"column-2": 8000,
						"column-3": 4000,
						"date": "2016-11-30 07:59"
					},
					{
						"column-1": 11000,
						"column-2": 6000,
						"column-3": 5000,
						"date": "2016-11-30 08:00"
					},
					{
						"column-1": 14000,
						"column-2": 8000,
						"column-3": 6000,
						"date": "2016-11-30 08:01"
					},
					{
						"column-1": 13000,
						"column-2": 8000,
						"column-3": 5000,
						"date": "2016-11-30 08:02"
					},
					{
						"column-1": 16000,
						"column-2": 9000,
						"column-3": 7000,
						"date": "2016-11-30 08:03"
					},
					{
						"column-1": 12000,
						"column-2": 8000,
						"column-3": 4000,
						"date": "2016-11-30 08:04"
					},
					{
						"column-1": 11000,
						"column-2": 4000,
						"column-3": 7000,
						"date": "2016-11-30 08:05"
					},
					{
						"column-1": 14000,
						"column-2": 8000,
						"column-3": 6000,
						"date": "2016-11-30 08:06"
					},
					{
						"column-1": 13000,
						"column-2": 8000,
						"column-3": 5000,
						"date": "2016-11-30 08:07"
					},
					{
						"column-1": 16000,
						"column-2": 9000,
						"column-3": 7000,
						"date": "2016-11-30 08:08"
					}
				]
			}
		);
	}
});

/* Statistics : price */
AmCharts.makeChart("amchart_donut03_div",
	{
		"type": "pie",
		"theme":"theme_01",
		"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b></span><br>([[percents]]%)",
		"labelText": "[[title]]",
		"titleField": "category",
		"valueField": "column-1",
		"dataProvider": [
			{
				"category": "Service_001",
				"column-1": 500
			},
			{
				"category": "Service_002",
				"column-1": 250
			},
			{
				"category": "Service_003",
				"column-1": 200
			},
			{
				"category": "Service_004",
				"column-1": 150
			},
			{
				"category": "Service_005",
				"column-1": 100
			},
			{
				"category": "Service_006",
				"column-1": 90
			},
			{
				"category": "Service_007",
				"column-1": 70
			},
			{
				"category": "Service_008",
				"column-1": 50
			},
			{
				"category": "Service_009",
				"column-1": 20
			},
			{
				"category": "Service_010",
				"column-1": 5
			}
		]
	}
);
var AmChartStackedLine = ['amchart_stackedline01_div','amchart_stackedline02_div'];
for(idx =0 ; idx<AmChartStackedLine.length ; idx++){
	AmCharts.makeChart(AmChartStackedLine[idx],
		{
			"type": "serial",
			"theme":"theme_01",
			"categoryField": "date",
			"columnWidth": 0.5,
			"dataDateFormat": "YYYY-MM-DD HH:NN",
			//"marginTop": 5, /* Title있을때 추가 */
			"colors": [
				"#90d18a",
				"#8a77c9",
				"#f17178",
				"#66b7e0"
			],
			"categoryAxis": {
				"minPeriod": "mm",
				"tickLength": 0,
				"centerLabels": true,
				"minHorizontalGap": 35
			},
			"chartCursor": {
				"enabled": true,
				"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
			},
			"chartScrollbar": {
				"enabled": true
			},
			"graphs": [
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"fillAlphas": 1,
					"lineThickness": 1,
					"id": "AmGraph-1",
					"title": "Incoming Packets",
					"type": "column",
					"valueAxis": "ValueAxis-1",
					"valueField": "column-1"
				},
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"fillAlphas": 1,
					"lineThickness": 1,
					"id": "AmGraph-2",
					"title": "Outgoing Packets",
					"type": "column",
					"valueAxis": "ValueAxis-1",
					"valueField": "column-2"
				},
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"bullet": "round",
					"bulletSize": 7,
					"lineThickness": 1,
					"id": "AmGraph-3",
					"title": "Incoming Bytes",
					"valueAxis": "ValueAxis-2",
					"valueField": "column-3"
				},
				{
					"balloonText": "[[title]]: <b>[[value]]</b>",
					"bullet": "round",
					"bulletSize": 7,
					"lineThickness": 1,
					"id": "AmGraph-4",
					"title": "Outgoing Bytes",
					"valueAxis": "ValueAxis-2",
					"valueField": "column-4"
				}

			],
			"valueAxes": [
				{
					"id": "ValueAxis-1",
					"stackType": "regular",
					"title": "BPS"
				},
				{
					"id": "ValueAxis-2",
					"position": "right",
					"gridAlpha": 0,
					"labelOffset": 3,
					"title": "Bytes"
				}
			],
			"legend": {
				"enabled": true,
				"equalWidths": true,
				"horizontalGap": 24,
				"labelWidth": 150,
				"marginTop": 0,
				"marginRight": 10,
				"markerLabelGap": 8,
				"markerSize": 12,
				"position": "right",
				"reversedOrder": true,
				"switchable": false,
				"useGraphSettings": true,
				"verticalGap": 8
			},
			/*"titles": [
				{
					"bold": false,
					"color": "#333333",
					"id": "Title-1",
					"size": 15,
					"text": "Chart Title"
				}
			],*/
			"dataProvider": [
				{
					"column-1": 2000,
					"column-2": 4000,
					"column-3": 35000,
					"column-4": 25000,
					"date": "2016-11-30 07:40"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 30000,
					"date": "2016-11-30 07:45"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 10000,
					"date": "2016-11-30 07:50"
				},
				{
					"column-1": 8000,
					"column-2": 5000,
					"column-3": 50000,
					"column-4": 40000,
					"date": "2016-11-30 07:55"
				},
				{
					"column-1": 6000,
					"column-2": 7000,
					"column-3": 70000,
					"column-4": 60000,
					"date": "2016-11-30 08:00"
				},
				{
					"column-1": 2000,
					"column-2": 3000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 08:05"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 35000,
					"date": "2016-11-30 08:10"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 10000,
					"date": "2016-11-30 08:15"
				},
				{
					"column-1": 3000,
					"column-2": 2000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 08:20"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 12000,
					"date": "2016-11-30 08:25"
				},
				{
					"column-1": 6000,
					"column-2": 8000,
					"column-3": 70000,
					"column-4": 60000,
					"date": "2016-11-30 08:30"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 35000,
					"date": "2016-11-30 08:35"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 10000,
					"date": "2016-11-30 08:40"
				},
				{
					"column-1": 3000,
					"column-2": 2000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 08:45"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 500,
					"column-4": 1000,
					"date": "2016-11-30 08:50"
				},
				{
					"column-1": 6000,
					"column-2": 8000,
					"column-3": 70000,
					"date": "2016-11-30 08:55"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 35000,
					"date": "2016-11-30 09:00"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 12000,
					"date": "2016-11-30 09:05"
				},
				{
					"column-1": 3000,
					"column-2": 2000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 09:10"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 10000,
					"date": "2016-11-30 09:15"
				},
				{
					"column-1": 6000,
					"column-2": 8000,
					"column-3": 70000,
					"column-4": 60000,
					"date": "2016-11-30 09:20"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 30000,
					"date": "2016-11-30 09:25"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 12000,
					"date": "2016-11-30 09:30"
				},
				{
					"column-1": 3000,
					"column-2": 2000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 09:35"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 500,
					"column-4": 1000,
					"date": "2016-11-30 09:40"
				},
				{
					"column-1": 6000,
					"column-2": 8000,
					"column-3": 70000,
					"column-4": 60000,
					"date": "2016-11-30 09:45"
				},
				{
					"column-1": 1000,
					"column-2": 3000,
					"column-3": 40000,
					"column-4": 35000,
					"date": "2016-11-30 09:50"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 12000,
					"date": "2016-11-30 09:55"
				},
				{
					"column-1": 3000,
					"column-2": 2000,
					"column-3": 30000,
					"column-4": 25000,
					"date": "2016-11-30 10:00"
				},
				{
					"column-1": 2000,
					"column-2": 1000,
					"column-3": 15000,
					"column-4": 10000,
					"date": "2016-11-30 10:05"
				},
				{
					"column-1": 6000,
					"column-2": 8000,
					"column-3": 70000,
					"column-4": 60000,
					"date": "2016-11-30 10:10"
				},
				{
					"column-1": 5000,
					"column-2": 7000,
					"column-3": 50000,
					"column-4": 45000,
					"date": "2016-11-30 10:15"
				}
			]
		}
	);
}

/* Statistics line - 2value */
AmCharts.makeChart("amchart_line2value_01_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 6,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "Incoming + Outgoing bps",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#8a77c9",
				"lineThickness": 1,
				"title": "Incoming + Outgoing bytes",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "BPS"
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Bytes"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"align": "center",
			"autoMargins": true,
			"equalWidths": true,
			"color": "#888888",
			"fontSize": 12,
			"spacing": 10,
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Bytes"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-6": 2000,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-6": 2400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-6": 3000,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-6": 1000,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-6": 2000,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-6": 4000,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-6": 3700,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line2value_02_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 6,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "PPS",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#f17178",
				"lineThickness": 1,
				"title": "Total Packets",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlxpha": 0.65,
				"title": "PPS"
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Packets"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"align": "center",
			"autoMargins": true,
			"equalWidths": true,
			"spacing": 10,
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Packets"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-6": 2000,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-6": 2400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-6": 3000,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-6": 1000,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-6": 2000,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-6": 4000,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-6": 3700,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line2value_03_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 6,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "H1_BPS_01",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-2",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "H2_BPS_02",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-3",
				"lineColor": "#8297e6",
				"lineThickness": 1,
				"title": "H3_BPS_03",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-4",
				"lineColor": "#cc8ebd",
				"lineThickness": 1,
				"title": "H4_BPS_04",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-5",
				"lineColor": "#adada8",
				"lineThickness": 1,
				"title": "H5_BPS_05",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#8a77c9",
				"lineThickness": 1,
				"title": "H1_Bytes_01",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-7",
				"lineColor": "#f17178",
				"lineThickness": 1,
				"title": "H2_Bytes_02",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-8",
				"lineColor": "#66b7e0",
				"lineThickness": 1,
				"title": "H3_Bytes_03",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-9",
				"lineColor": "#9fc66e",
				"lineThickness": 1,
				"title": "H4_Bytes_04",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-10",
				"lineColor": "#6c889c",
				"lineThickness": 1,
				"title": "H5_Bytes_05",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "BPS",
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Bytes"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"align": "center",
			"autoMargins": true,
			"equalWidths": true,
			"spacing": 10,
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Bytes"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line2value_04_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 6,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "H1_PPS_01",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-2",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "H2_PPS_02",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-3",
				"lineColor": "#8297e6",
				"lineThickness": 1,
				"title": "H3_PPS_03",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-4",
				"lineColor": "#cc8ebd",
				"lineThickness": 1,
				"title": "H4_PPS_04",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-5",
				"lineColor": "#adada8",
				"lineThickness": 1,
				"title": "H5_PPS_05",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#8a77c9",
				"lineThickness": 1,
				"title": "H1_Packets_01",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-7",
				"lineColor": "#f17178",
				"lineThickness": 1,
				"title": "H2_Packets_02",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-8",
				"lineColor": "#66b7e0",
				"lineThickness": 1,
				"title": "H3_Packets_03",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-9",
				"lineColor": "#9fc66e",
				"lineThickness": 1,
				"title": "H4_Packets_04",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-10",
				"lineColor": "#6c889c",
				"lineThickness": 1,
				"title": "H5_Packets_05",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "PPS"
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Packets"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"align": "center",
			"autoMargins": true,
			"equalWidths": true,
			"spacing": 10,
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Packets"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line2value_05_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 8,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "111.111.1.11",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-2",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "222.222.2.22",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-3",
				"lineColor": "#8297e6",
				"lineThickness": 1,
				"title": "333.333.3.33",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-4",
				"lineColor": "#cc8ebd",
				"lineThickness": 1,
				"title": "444.444.4.44",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-5",
				"lineColor": "#adada8",
				"lineThickness": 1,
				"title": "999.999.99.999",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#8a77c9",
				"lineThickness": 1,
				"title": "111.111.1.11",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-7",
				"lineColor": "#f17178",
				"lineThickness": 1,
				"title": "222.222.2.22",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-8",
				"lineColor": "#66b7e0",
				"lineThickness": 1,
				"title": "333.333.3.33",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-9",
				"lineColor": "#9fc66e",
				"lineThickness": 1,
				"title": "444.444.4.44",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-10",
				"lineColor": "#6c889c",
				"lineThickness": 1,
				"title": "999.999.99.999",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "BPS"
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Bytes"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"marginTop": 0,
			"marginBottom": 30,
			"marginLeft": 35,
			"equalWidths": true,
			"spacing": 6,
			"align": "center",
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Bytes"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line2value_06_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 8,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "111.111.1.11",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-2",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "222.222.2.22",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-3",
				"lineColor": "#8297e6",
				"lineThickness": 1,
				"title": "333.333.3.33",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-4",
				"lineColor": "#cc8ebd",
				"lineThickness": 1,
				"title": "444.444.4.44",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-5",
				"lineColor": "#adada8",
				"lineThickness": 1,
				"title": "999.999.99.999",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-6",
				"lineColor": "#8a77c9",
				"lineThickness": 1,
				"title": "111.111.1.11",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-7",
				"lineColor": "#f17178",
				"lineThickness": 1,
				"title": "222.222.2.22",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-8",
				"lineColor": "#66b7e0",
				"lineThickness": 1,
				"title": "333.333.3.33",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-9",
				"lineColor": "#9fc66e",
				"lineThickness": 1,
				"title": "444.444.4.44",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "triangleRight",
				"bulletSize": 8,
				"id": "AmGraph-10",
				"lineColor": "#6c889c",
				"lineThickness": 1,
				"title": "999.999.99.999",
				"valueAxis": "ValueAxis-2",
				"dashLength": 3,
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "PPS"
			},
			{
				"id": "ValueAxis-2",
				"position": "right",
				"gridAlpha": 0,
				"labelOffset": 3,
				"title": "Packets"
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"marginTop": 0,
			"marginBottom": 30,
			"marginLeft": 35,
			"equalWidths": true,
			"spacing": 6,
			"align": "center",
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Packets"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4300,
				"column-7": 3700,
				"column-8": 2500,
				"column-9": 1200,
				"column-10": 3400,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line04_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN:SS",
		"autoMarginOffset": 28,
		"marginTop": 8,
		"marginRight": 52,
		"categoryAxis": {
			"minPeriod": "ss"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-1",
				"lineColor": "#ffc168",
				"lineThickness": 1,
				"title": "111.111.1.11",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-2",
				"lineColor": "#90d18a",
				"lineThickness": 1,
				"title": "222.222.2.22",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-3",
				"lineColor": "#8297e6",
				"lineThickness": 1,
				"title": "333.333.3.33",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-4",
				"lineColor": "#cc8ebd",
				"lineThickness": 1,
				"title": "444.444.4.44",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"bullet": "round",
				"bulletSize": 7,
				"id": "AmGraph-5",
				"lineColor": "#adada8",
				"lineThickness": 1,
				"title": "999.999.99.999",
				"valueField": "column-5"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"title": "Duration",
				"gridAlpha": 0.65
			}
		],
		"balloon": {
			"borderThickness": 1,
			"pointerWidth": 10
		},
		"legend": {
			"enabled": true,
			"marginTop": 14,
			"marginBottom": 30,
			"marginLeft": 40,
			"marginRight": 2,
			"equalWidths": true,
			"spacing": 6,
			"align": "center",
			"markerLabelGap": 7,
			"markerSize": 13,
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": -2
		},
		"titles": [
			{
				"bold": false,
				"color": "#333333",
				"id": "Title-1",
				"size": 15,
				"text": "Graph Based Durations"
			}
		],
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"date": "2016-11-30 07:57:57"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"date": "2016-11-30 07:57:58"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"date": "2016-11-30 07:57:59"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"date": "2016-11-30 07:58:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"date": "2016-11-30 07:58:01"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"date": "2016-11-30 07:58:02"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"date": "2016-11-30 07:58:03"
			}
		]
	}
);
AmCharts.makeChart("amchart_line05_div",
	{
		"type": "serial",
		"theme":"theme_01",
		"categoryField": "date",
		"dataDateFormat": "YYYY-MM-DD HH:NN",
		"categoryAxis": {
			"minPeriod": "mm"
		},
		"chartCursor": {
			"enabled": true,
			"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN:SS"
		},
		"chartScrollbar": {
			"enabled": true
		},
		"graphs": [
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-1",
				"bullet": "round",
				"bulletSize": 7,
				"title": "1 Title Name",
				"valueField": "column-1"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-2",
				"bullet": "round",
				"bulletSize": 7,
				"title": "2 Title Name",
				"valueField": "column-2"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-3",
				"bullet": "round",
				"bulletSize": 7,
				"title": "3 Title Name",
				"valueField": "column-3"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-4",
				"bullet": "round",
				"bulletSize": 7,
				"title": "4 Title Name",
				"valueField": "column-4"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-5",
				"bullet": "round",
				"bulletSize": 7,
				"title": "5 Title Name",
				"valueField": "column-5"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-6",
				"bullet": "round",
				"bulletSize": 7,
				"title": "6 Title Name",
				"valueField": "column-6"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-7",
				"bullet": "round",
				"bulletSize": 7,
				"title": "7 Title Name",
				"valueField": "column-7"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-8",
				"bullet": "round",
				"bulletSize": 7,
				"title": "8 Title Name",
				"valueField": "column-8"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-9",
				"bullet": "round",
				"bulletSize": 7,
				"title": "9 Title Name",
				"valueField": "column-9"
			},
			{
				"balloonText": "[[title]]: <b>[[value]]</b>",
				"id": "AmGraph-10",
				"bullet": "round",
				"bulletSize": 7,
				"title": "10 Title Name test",
				"valueField": "column-10"
			}
		],
		"valueAxes": [
			{
				"id": "ValueAxis-1",
				"stackType": "regular",
				"gridAlpha": 0.65,
				"title": "Bytes",
			}
		],
		"balloon": {
			"borderThickness": 1
		},
		"legend": {
			"enabled": true,
			"equalWidths": true,
			"horizontalGap": 10,
			"labelWidth": 150,
			"marginTop": 0,
			"marginRight": 10,
			"markerLabelGap": 8,
			"markerSize": 12,
			"position": "right",
			//"switchable": false,
			"useGraphSettings": true,
			"verticalGap": 8
		},
		"dataProvider": [
			{
				"column-1": 80,
				"column-2": 50,
				"column-3": 70,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:40:00"
			},
			{
				"column-1": 60,
				"column-2": 70,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:45:00"
			},
			{
				"column-1": 20,
				"column-2": 30,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:50:00"
			},
			{
				"column-1": 10,
				"column-2": 30,
				"column-3": 50,
				"column-4": 60,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 07:55:00"
			},
			{
				"column-1": 20,
				"column-2": 10,
				"column-3": 70,
				"column-4": 50,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 08:00:00"
			},
			{
				"column-1": 30,
				"column-2": 20,
				"column-3": 50,
				"column-4": 40,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 08:05:00"
			},
			{
				"column-1": 60,
				"column-2": 80,
				"column-3": 40,
				"column-4": 30,
				"column-5": 5,
				"column-6": 4,
				"column-7": 3,
				"column-8": 2,
				"column-9": 1,
				"column-10": 3,
				"date": "2016-11-30 08:10:00"
			}
		]
	}
);
