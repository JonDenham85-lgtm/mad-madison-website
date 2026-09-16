export default function Page() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-10">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="border border-white/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Starter</h2>
          <p className="text-white/70 mb-6">Basic access to Madison tools.</p>
          <p className="text-3xl font-bold mb-6">$9/mo</p>
          <button className="px-6 py-3 bg-teal-500 text-black rounded-lg font-bold">Choose Starter</button>
        </div>
        <div className="border border-white/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <p className="text-white/70 mb-6">Full automation suite.</p>
          <p className="text-3xl font-bold mb-6">$29/mo</p>
          <button className="px-6 py-3 bg-teal-500 text-black rounded-lg font-bold">Choose Pro</button>
        </div>
        <div className="border border-white/20 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Owner</h2>
          <p className="text-white/70 mb-6">Jon & Alison only.</p>
          <p className="text-3xl font-bold mb-6">$0</p>
          <button className="px-6 py-3 bg-teal-500 text-black rounded-lg font-bold">Owner Access</button>
        </div>
      </div>
    </div>
  );
}