it("Test942/getflow", async function() {
	var _data = testcaseData_1643635881601.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btngetflow"]);
	kony.automation.button.click(["Test942/Form1","btngetflow"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","getlbl"], "text")).toEqual(_data.assert.getlbl);
});