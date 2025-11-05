import { useState } from 'react';
import { Menu, Search } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Politique', href: '#politique' },
    { label: 'Économie', href: '#economie' },
    { label: 'Culture', href: '#culture' },
    { label: 'Sports', href: '#sports' },
    { label: 'Technologie', href: '#technologie' },
    { label: 'Environnement', href: '#environnement' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 lg:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen((v) => !v)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <a href="#" className="font-semibold tracking-tight text-slate-900 text-lg sm:text-xl">
              Le Quotidien Français
            </a>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Rechercher..."
                className="w-44 md:w-64 rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800"
                aria-label="Rechercher"
              />
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            </div>
          </div>
        </div>

        {open && (
          <div className="lg:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded-md px-2 py-2 text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Rechercher..."
                    className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800"
                    aria-label="Rechercher"
                  />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
