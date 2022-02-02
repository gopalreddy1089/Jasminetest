it("Test942/objectsync", async function() {
	var _data = testcaseData_1642395522626.dataset;
	await kony.automation.playback.waitFor(["Test942/Form1","btnObjectSync"]);
	kony.automation.button.click(["Test942/Form1","btnObjectSync"]);
	await kony.automation.playback.wait(2000);
	expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","objsynclbl"], "text")).toEqual(_data.assert.objsynclbl);
});