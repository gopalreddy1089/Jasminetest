define(["Test942/Test Cases/setup_data","Test942/Test Cases/setflow_data","Test942/Test Cases/getflow_data","Test942/Test Cases/FlushEvent_data","Test942/Test Cases/SendCustomMetrics_data"], function() {
	describe("Test942/Test Suites/webtestsuite", function() {
		it("Test942/setup", async function() {
			var _data = testcaseData_1643635663040.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnsetup"]);
			kony.automation.button.click(["Test942/Form1","btnsetup"]);
			await kony.automation.playback.wait(2000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setuplbl"], "text")).toEqual(_data.assert.setuplbl);
		});
		
		it("Test942/setflow", async function() {
			var _data = testcaseData_1643635835155.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnsetflow"]);
			kony.automation.button.click(["Test942/Form1","btnsetflow"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setlbl"], "text")).toEqual(_data.assert.setlbl);
		});
		
		it("Test942/getflow", async function() {
			var _data = testcaseData_1643635881601.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btngetflow"]);
			kony.automation.button.click(["Test942/Form1","btngetflow"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","getlbl"], "text")).toEqual(_data.assert.getlbl);
		});
		
		it("Test942/FlushEvent", async function() {
			var _data = testcaseData_1643635931986.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","Button0a1ccfa8af0a549"]);
			kony.automation.button.click(["Test942/Form1","Button0a1ccfa8af0a549"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","flushlbl"], "text")).toEqual(_data.assert.flushlbl);
		});
		
		it("Test942/SendCustomMetrics", async function() {
			var _data = testcaseData_1643636014048.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btncustommetics"]);
			kony.automation.button.click(["Test942/Form1","btncustommetics"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","metricslbl"], "text")).toEqual(_data.assert.metricslbl);
		});
	});
});