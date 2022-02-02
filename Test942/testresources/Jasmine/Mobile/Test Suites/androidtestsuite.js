define(["Test942/Test Cases/setup_data","Test942/Test Cases/setflow_data","Test942/Test Cases/getflow_data","Test942/Test Cases/flushevent_data","Test942/Test Cases/custommetrics_data"], function() {
	describe("Test942/Test Suites/androidtestsuite", function() {
		it("Test942/setup", async function() {
			var _data = testcaseData_1642395304669.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnSetup"]);
			kony.automation.button.click(["Test942/Form1","btnSetup"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setuplbl"], "text")).toEqual(_data.assert.setuplbl);
		});
		
		it("Test942/setflow", async function() {
			var _data = testcaseData_1642395590627.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnSetFlowTag"]);
			kony.automation.button.click(["Test942/Form1","btnSetFlowTag"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","setlbl"], "text")).toEqual(_data.assert.setlbl);
		});
		
		it("Test942/getflow", async function() {
			var _data = testcaseData_1642395643186.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnGetFlowTag"]);
			kony.automation.button.click(["Test942/Form1","btnGetFlowTag"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","getlbl"], "text")).toEqual(_data.assert.getlbl);
		});
		
		it("Test942/flushevent", async function() {
			var _data = testcaseData_1642395693245.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnFlushEvents"]);
			kony.automation.button.click(["Test942/Form1","btnFlushEvents"]);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","btnFlushEvents"], "")).toEqual(_data.assert.btnFlushEvents);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","flushlbl"], "text")).toEqual(_data.assert.flushlbl);
		});
		
		it("Test942/custommetrics", async function() {
			var _data = testcaseData_1642395747730.dataset;
			await kony.automation.playback.waitFor(["Test942/Form1","btnSendCustomMetrics"]);
			kony.automation.button.click(["Test942/Form1","btnSendCustomMetrics"]);
			await kony.automation.playback.wait(1000);
			expect(kony.automation.widget.getWidgetProperty(["Test942/Form1","metricslbl"], "text")).toEqual(_data.assert.metricslbl);
		});
	});
});