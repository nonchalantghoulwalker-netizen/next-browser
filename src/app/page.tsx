// src/app/page.tsx
export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Welcome back, Student! 👋</h1>
      <p className="text-gray-500 mb-8">Here is your study dashboard for today.</p>
      
      {/* Placeholder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
          <h3 className="font-semibold text-lg mb-1">AI Study Hub</h3>
          <p className="text-sm text-gray-500">Ask a question or summarize a document.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
          <h3 className="font-semibold text-lg mb-1">Today's Habits</h3>
          <p className="text-sm text-gray-500">0 of 3 habits completed.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-900 rounded-xl border dark:border-gray-800 shadow-sm">
          <h3 className="font-semibold text-lg mb-1">Recent Files</h3>
          <p className="text-sm text-gray-500">You have 12 files uploaded.</p>
        </div>
      </div>
    </div>
  );
}
