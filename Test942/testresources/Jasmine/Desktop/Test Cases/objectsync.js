it("Test942/objectsync", async function() {
	var _data = testcaseData_1643635767455.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnobjectsync"]);
	kony.automation.button.click(["Test942/Form1","btnobjectsync"]);
	await kony.automation.playback.wait(1000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","objsynclbl"], "text")).toEqual(_data.assert.objsynclbl);
});