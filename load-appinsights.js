require('dotenv').config({ path: '.env.local' });
console.log("Current Directory:", process.cwd());
let appInsights = require('applicationinsights');

console.log(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING);

if (!process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) {
    console.error("Error: APPLICATIONINSIGHTS_CONNECTION_STRING is not defined in environment variables.");
    process.exit(1); // 接続文字列がない場合はエラー終了
  }

// 環境変数から接続文字列を取得し設定
appInsights
  .setup(process.env.APPLICATIONINSIGHTS_CONNECTION_STRING) // Azure Portal で取得
  .setAutoCollectConsole(true) // コンソールログの収集
  .setAutoCollectDependencies(true) // 依存関係の収集
  .setAutoCollectExceptions(true) // 例外の収集
  .setAutoCollectHeartbeat(true) // ハートビートの収集
  .setAutoCollectPerformance(true, true) // パフォーマンスの収集
  .setAutoCollectRequests(true) // リクエストの収集
  .setAutoDependencyCorrelation(true) // 依存関係の相関付け
  .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C) // 分散トレーシング
  .setSendLiveMetrics(true) // ライブメトリクスの送信
  .setUseDiskRetryCaching(true); // ディスクキャッシュの使用

// Azure プロパティの自動設定
appInsights.defaultClient.setAutoPopulateAzureProperties(true);

// Application Insights を開始
appInsights.start();
