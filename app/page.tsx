import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from './components/CurrentTimeFromAPI';

export default function Home() {
  noStore();
  const timeOnServer = new Date().toLocaleTimeString('en-US');
  const dbHost = process.env.DB_HOST;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div>
        This is a Next.js application hosted on Azure Static Web Apps with hybrid rendering. The time on the server is <strong>{timeOnServer}</strong>.
    </div>
    <CurrentTimeFromAPI />
    <div>
      <h1>Environment Variable</h1>
      <p>DB HOST: {dbHost}</p>
    </div>
</main>
  );
}
