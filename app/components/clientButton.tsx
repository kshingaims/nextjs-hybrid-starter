"use client";

import { appInsights } from "../../src/appInsights";

export default function ClientButton() {
  const handleClick = () => {
    // Application Insights にイベントを送信
    appInsights.trackEvent({ 
      name: "ButtonClicked", 
      properties: { buttonName: "MyButton" } 
    });
    console.log("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
