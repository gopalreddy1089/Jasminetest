it("Test942/setup", async function() {
	var _data = testcaseData_1642395304669.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnSetup"]);
	kony.automation.button.click(["Test942/Form1","btnSetup"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setuplbl"], "text")).toEqual(_data.assert.setuplbl);
});