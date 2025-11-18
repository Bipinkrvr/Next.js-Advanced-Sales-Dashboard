import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Sales App</h1>
        <p className="text-lg mb-8">
          This is the homepage. The main content is on the dashboard.
        </p>
        <Link
          href="/dashboard"
          className="rounded-md bg-indigo-600 px-4 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500"
        >
          Go to Dashboard
        </Link>
      </div>
    </main>
  );
}