it("Test942/FlushEvent", async function() {
	var _data = testcaseData_1643635931986.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","Button0a1ccfa8af0a549"]);
	kony.automation.button.click(["Test942/Form1","Button0a1ccfa8af0a549"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","flushlbl"], "text")).toEqual(_data.assert.flushlbl);
});