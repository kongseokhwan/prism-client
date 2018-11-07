

	/*amchart_theme_line11 : TiDC상용 Dashboard - Traffic */
	var $chartType_line11 = $('.amchart_theme_line11');
	var $chartType_line11_array = [];
	for (var i = 0; i < $chartType_line11.length; i++) {
		$id = 'chartTempID_line11_' + (i + 1);
		$chartType_line11.eq(i).attr('id', $id);
		$chartType_line11_array[i] = $id;
	}
	// run chart
	for (var i = 0; i < $chartType_line11_array.length; i++) {
		AmCharts.makeChart($chartType_line11_array[i],
			{
				"type": "serial",
				"theme":"theme_01",
				"categoryField": "date",
				"dataDateFormat": "YYYY-MM-DD HH:NN",
				"colors": [
					"#8a77c9",
					"#ffc168",
					"#90d18a",
					"#f17178"
				],
				"autoMargins":false,
				//"autoMarginOffset":30,
				"marginTop": 15,
				"marginRight": 30,
				"marginLeft": 30,
				"marginBottom": 34,
				"categoryAxis": {
					"minPeriod": "mm",
					//"startOnAxis": true,
					"fontSize": 11,
					"axisColor": "#e8e8e8",
					"tickLength": 0,
					"minHorizontalGap": 30,
					//"showFirstLabel": false,
					//"showLastLabel": false
				},
				"chartCursor": {
					"enabled": true,
					"categoryBalloonDateFormat": "YYYY-MM-DD JJ:NN"
				},
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
						"y": "280"
					}
				],
				"graphs": [
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						"id": "AmGraph-1",
						"title": "Last In",
						"valueField": "column-1"
					},
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						"id": "AmGraph-2",
						"title": "Last Out",
						"valueField": "column-2"
					},
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						//"dashLength": 3,
						"lineThickness": 1.5,
						"hidden": true,
						"id": "AmGraph-3",
						"title": "Past In",
						"valueField": "column-3"
					},
					{
						"balloonText": "[[title]]: <b>[[value]]</b>",
						//"dashLength": 3,
						"lineThickness": 1.5,
						"hidden": true,
						"id": "AmGraph-4",
						"title": "Past Out",
						"valueField": "column-4"
					}
				],
				"guides": [
					{
						"above": true,
						"dashLength": 2,
						//"lineThickness": 0.5,
						"id": "Guide-1",
						"inside": true,
						"label": "Last Max bps",
						"labelRotation": 90,
						"lineAlpha": 0.42,
						"lineColor": "#ff0000",
						"color": "rgba(0,0,0,0.5)",
						"position": "right",
						"tickLength": 0,
						"value": 8200
					},
					{
						"above": true,
						"dashLength": 2,
						//"lineThickness": 0.5,
						"id": "Guide-1",
						"inside": true,
						"label": "Last Min bps",
						"labelRotation": 90,
						"lineAlpha": 0.42,
						"lineColor": "#006aff",
						"color": "rgba(0,0,0,0.5)",
						"position": "right",
						"tickLength": 0,
						"value": 900
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
				"legend": {
					"align": "center",
					"useGraphSettings": true,
					"marginTop": -14,
					"marginBottom": 18,
					"marginRight":3,
					"spacing": 20,
					"markerLabelGap": 8
				},
				"dataProvider": [
					{
						"column-1": 7000,
						"column-2": 5000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 07:50"
					},
					{
						"column-1": 6000,
						"column-2": 7000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 07:51"
					},
					{
						"column-1": 2000,
						"column-2": 3000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 07:52"
					},
					{
						"column-1": 4000,
						"column-2": 3000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 07:53"
					},
					{
						"column-1": 2000,
						"column-2": 1000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 07:54"
					},
					{
						"column-1": 3000,
						"column-2": 4000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 07:55"
					},
					{
						"column-1": 6000,
						"column-2": 3000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 07:56"
					},
					{
						"column-1": 8200,
						"column-2": 7000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 07:57"
					},
					{
						"column-1": 6000,
						"column-2": 3000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 07:58"
					},
					{
						"column-1": 4000,
						"column-2": 5000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 07:59"
					},
					{
						"column-1": 6000,
						"column-2": 3000,
						"column-3": 3500,
						"column-4": 2500,
						"date": "2016-11-30 08:00"
					},
					{
						"column-1": 3000,
						"column-2": 5000,
						"column-3": 4500,
						"column-4": 3500,
						"date": "2016-11-30 08:01"
					}
				]
			}
		);
	}
