it("Test942/setflow", async function() {
	var _data = testcaseData_1643635835155.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnsetflow"]);
	kony.automation.button.click(["Test942/Form1","btnsetflow"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setlbl"], "text")).toEqual(_data.assert.setlbl);
});