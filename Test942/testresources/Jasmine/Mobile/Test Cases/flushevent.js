it("Test942/flushevent", async function() {
	var _data = testcaseData_1642395693245.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnFlushEvents"]);
	kony.automation.button.click(["Test942/Form1","btnFlushEvents"]);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","btnFlushEvents"], "")).toEqual(_data.assert.btnFlushEvents);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","flushlbl"], "text")).toEqual(_data.assert.flushlbl);
});