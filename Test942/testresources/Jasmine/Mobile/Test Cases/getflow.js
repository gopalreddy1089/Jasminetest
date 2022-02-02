it("Test942/getflow", async function() {
	var _data = testcaseData_1642395643186.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnGetFlowTag"]);
	kony.automation.button.click(["Test942/Form1","btnGetFlowTag"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","getlbl"], "text")).toEqual(_data.assert.getlbl);
});