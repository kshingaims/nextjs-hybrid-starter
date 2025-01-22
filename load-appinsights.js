require('dotenv').config({ path: '.env.local' });
console.log("Current Directory:", process.cwd());
let appInsights = require('applicationinsights');

console.log(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING);

if (!process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    console.error("Error: APPLICATIONINSIGHTS_CONNECTION_STRING is not defined in environment variables.");
    process.exit(1);
  }

appInsights
  .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING)
  .setAutoCollectConsole(true)
  .setAutoCollectDependencies(true)
  .setAutoCollectExceptions(true)
  .setAutoCollectHeartbeat(true)
  .setAutoCollectPerformance(true, true) 
  .setAutoCollectRequests(true)
  .setAutoDependencyCorrelation(true)
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
  .setSendLiveMetrics(true)
  .setUseDiskRetryCaching(true);

appInsights.defaultClient.setAutoPopulateAzureProperties(true);

appInsights.start();
