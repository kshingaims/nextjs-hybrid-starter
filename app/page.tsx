import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from './components/CurrentTimeFromAPI';
import { appInsights } from '../src/appInsights';

import ClientButton from "./components/clientButton";

export default function Home() {
  noStore();
  const timeOnServer = new Date().toLocaleTimeString('en-US');
  const test = process.env.TEST;
  const handleClick = () => {
    appInsights.trackEvent({ name: 'PageButtonClicked', properties: { button: 'main' } });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
        This is a Next.js application hosted on Azure Static Web Apps with hybrid rendering. The time on the server is <strong>{timeOnServer}</strong>.
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
</main>
  );
}
