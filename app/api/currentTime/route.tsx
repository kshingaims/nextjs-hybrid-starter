import { NextResponse } from 'next/server';
import { appInsights } from "../../../src/appInsights"; // Application Insights をインポート

export const dynamic = 'force-dynamic';

export async function GET() { 
    const currentTime = new Date().toLocaleTimeString('en-US');

    // ✅ Application Insights にログを送信
    appInsights.trackTrace({
      message: `API Route accessed: currentTime=${currentTime}`,
      severityLevel: 1, // 情報レベル (0: Verbose, 1: Info, 2: Warning, 3: Error, 4: Critical)
    });

    return NextResponse.json({ 
        message: `Hello from the API! The current time is ${currentTime}.`
    });
}