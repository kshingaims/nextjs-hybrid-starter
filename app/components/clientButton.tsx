"use client";

import { appInsights } from "../../src/appInsights";

export default function ClientButton() {
  const handleClick = () => {
    try {
      appInsights.trackEvent({ 
        name: "ButtonClicked", 
        properties: { buttonName: "MyButton" } 
      });
      console.log("Button clicked! Event sent to Application Insights.");
      console.log("Instrumentation Key:", process.env.NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY);
    } catch (error) {
      console.error("Failed to send event to Application Insights:", error);
    }
  };

  return <button onClick={handleClick}>Click Me</button>;
}
