export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white">
        <header className="w-full py-6 px-8 flex justify-between items-center border-b border-white/10">
          <h1 className="text-2xl font-bold">MAD Madison AI</h1>
          <nav className="flex gap-8 text-lg">
            <a href="/">Home</a>
            <a href="/pricing">Pricing</a>
            <a href="/install">Install</a>
            <a href="/support">Support</a>
            <a href="/app">Launch App</a>
          </nav>
        </header>
        <main className="px-8 py-12">{children}</main>
        <footer className="w-full py-10 px-8 border-t border-white/10 text-center text-white/60">
          © 2026 MAD Madison AI — All Rights Reserved
        </footer>
      </body>
    </html>
  );
}