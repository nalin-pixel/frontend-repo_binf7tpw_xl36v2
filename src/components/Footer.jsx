import { Facebook, Instagram, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Le Quotidien Français</h3>
          <p className="mt-2 text-sm text-slate-600 max-w-sm">
            Une rédaction indépendante pour décrypter l’actualité française et internationale avec exigence et pédagogie.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a aria-label="Twitter" href="#" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="Facebook" href="#" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Instagram" href="#" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              <Instagram className="h-5 w-5" />
            </a>
            <a aria-label="Contact" href="#" className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Ressources</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-slate-600 hover:text-slate-900">Mentions légales</a></li>
            <li><a href="#" className="text-slate-600 hover:text-slate-900">Politique de confidentialité</a></li>
            <li><a href="#" className="text-slate-600 hover:text-slate-900">Cookies</a></li>
            <li><a href="#" className="text-slate-600 hover:text-slate-900">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Newsletter</h4>
          <p className="mt-2 text-sm text-slate-600">Inscrivez-vous pour recevoir nos meilleures analyses chaque semaine.</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              required
              placeholder="Votre e-mail"
              className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800"
            />
            <button type="submit" className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800">
              S’abonner
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Le Quotidien Français — Tous droits réservés.</p>
          <p className="text-xs text-slate-500">Made in France</p>
        </div>
      </div>
    </footer>
  );
}
