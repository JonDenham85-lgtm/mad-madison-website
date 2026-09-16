export default function Page() {
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="text-5xl font-bold mb-6">MAD Madison AI</h1>
      <p className="text-xl max-w-2xl mb-10">
        Your unified AI system for automation, revenue, deployment, and owner‑level control.
      </p>

      <a
        href="/app"
        className="px-10 py-4 bg-teal-500 text-black font-bold rounded-xl text-xl"
      >
        Launch Madison
      </a>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        <div>
          <h2 className="text-2xl font-bold mb-3">Automation</h2>
          <p className="text-white/70">Shopify, YouTube, Social Hub, App Builder, Ads.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Owner‑Locked</h2>
          <p className="text-white/70">Only Jon & Alison have full system authority.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-3">Daily Reports</h2>
          <p className="text-white/70">Revenue summaries delivered automatically.</p>
        </div>
      </div>
    </div>
  );
}