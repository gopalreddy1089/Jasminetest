it("Test942/SendCustomMetrics", async function() {
	var _data = testcaseData_1643636014048.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btncustommetics"]);
	kony.automation.button.click(["Test942/Form1","btncustommetics"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","metricslbl"], "text")).toEqual(_data.assert.metricslbl);
});