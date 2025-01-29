"use client";

import { useState, useEffect } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { CurrentTimeFromAPI } from "./components/CurrentTimeFromAPI";
import { appInsights } from "../src/appInsights";
import ClientButton from "./components/clientButton";

export default function Home() {
  noStore();
  const [clientTime, setClientTime] = useState<string | null>(null);
  const test = process.env.NEXT_PUBLIC_TEST; // 環境変数の取得

  // ✅ クライアント側でのみ時刻を更新する
  useEffect(() => {
    setClientTime(new Date().toLocaleTimeString("en-US"));
  }, []);

  // ✅ ページロード時の Application Insights ログ
  useEffect(() => {
    appInsights.trackEvent({
      name: "PageLoaded",
      properties: { page: "Home" },
    });
    appInsights.trackTrace({ message: "Home page loaded" });
  }, []);

  const handleClick = () => {
    appInsights.trackEvent({
      name: "PageButtonClicked",
      properties: { button: "main" },
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        This is a Next.js application hosted on Azure Static Web Apps with hybrid rendering.  
        The time on the client is <strong>{clientTime || "Loading..."}</strong>.
      </div>
      <CurrentTimeFromAPI />
      <div>
        <h1>Environment Variable</h1>
        <p>TEST: {test}</p>
      </div>
      <div>
        <h1>Welcome to the App Directory Page</h1>
        <ClientButton />
      </div>
      <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded">
        Click me
      </button>
    </main>
  );
}
