it("Test942/custommetrics", async function() {
	var _data = testcaseData_1642395747730.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnSendCustomMetrics"]);
	kony.automation.button.click(["Test942/Form1","btnSendCustomMetrics"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","metricslbl"], "text")).toEqual(_data.assert.metricslbl);
});