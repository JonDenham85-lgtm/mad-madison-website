export default function Page() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-10">Install MAD Madison AI</h1>
      <p className="text-white/70 mb-10">Choose your platform below to install the MAD Madison AI app.</p>
      <div className="flex flex-col gap-6 items-center">
        <a className="px-8 py-4 bg-teal-500 text-black rounded-xl font-bold text-xl">App Store (Coming Soon)</a>
        <a className="px-8 py-4 bg-teal-500 text-black rounded-xl font-bold text-xl">Play Store (Coming Soon)</a>
        <a href="/app" className="px-8 py-4 bg-white text-black rounded-xl font-bold text-xl">Launch Web App</a>
      </div>
    </div>
  );
}