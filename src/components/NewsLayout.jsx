import { useEffect, useMemo, useState } from 'react';

function ArticleCard({ category, color, title, excerpt, image, anchor }) {
  return (
    <a href={anchor || '#'} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      )}
      <div className="p-4">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${color}`}>
          {category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-slate-700">{title}</h3>
        {excerpt && <p className="mt-1 text-sm text-slate-600 line-clamp-3">{excerpt}</p>}
      </div>
    </a>
  );
}

function SidebarSection({ title, items }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">{title}</h4>
      <ul className="mt-3 space-y-3">
        {items.map((it, idx) => (
          <li key={idx} className="border-b last:border-0 border-slate-100 pb-3 last:pb-0">
            <a href={it.link || '#'} className="block text-slate-900 hover:text-slate-700 font-medium leading-snug">
              {it.title}
            </a>
            {it.meta && <p className="mt-0.5 text-xs text-slate-500">{it.meta}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

const COLOR_BY_CATEGORY = {
  Politique: 'bg-slate-900',
  'Économie': 'bg-blue-900',
  Culture: 'bg-rose-700',
  Sports: 'bg-emerald-700',
  Technologie: 'bg-indigo-700',
  Environnement: 'bg-emerald-700',
};

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

export default function NewsLayout() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || '';
        const res = await fetch(`${base}/api/news?limit=24`);
        if (!res.ok) throw new Error('Erreur de chargement');
        const data = await res.json();
        setItems(data.items || []);
      } catch (e) {
        setError("Impossible de récupérer l'actualité en temps réel.");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const grouped = useMemo(() => {
    const groups = {
      Politique: [],
      'Économie': [],
      Culture: [],
      Sports: [],
      Technologie: [],
      Environnement: [],
    };
    for (const it of items) {
      const cat = groups[it.category] ? it.category : 'Politique';
      groups[cat].push(it);
    }
    return groups;
  }, [items]);

  const mostRead = useMemo(() => {
    return (items || []).slice(0, 6).map((x) => ({ title: x.title, link: x.link }));
  }, [items]);

  const latest = useMemo(() => {
    return (items || []).slice(6, 12).map((x) => ({ title: x.title, link: x.link }));
  }, [items]);

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {loading && (
        <div className="py-16 text-center text-slate-600">Chargement de l’actualité…</div>
      )}
      {!loading && error && (
        <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-red-700">{error}</div>
      )}

      {!loading && (
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-8">
            {Object.entries(grouped).map(([cat, arr]) => (
              <div key={cat} id={slug(cat)} className="space-y-4">
                <h2 className="text-lg font-semibold tracking-tight text-slate-900">{cat}</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {arr.slice(0, 4).map((a, idx) => (
                    <ArticleCard
                      key={`${cat}-${idx}`}
                      category={a.category}
                      color={COLOR_BY_CATEGORY[a.category] || 'bg-slate-900'}
                      title={a.title}
                      excerpt={a.summary}
                      image={a.image}
                      anchor={a.link}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            {mostRead.length > 0 && <SidebarSection title="Les plus lus" items={mostRead} />}
            {latest.length > 0 && <SidebarSection title="Dernières mises à jour" items={latest} />}
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700">Édition du soir</h4>
              <p className="mt-2 text-sm text-slate-600">Recevez l’essentiel de l’actualité chaque soir à 18h.</p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Votre e-mail"
                  className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-800"
                />
                <button
                  type="submit"
                  className="rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
                >
                  S’inscrire
                </button>
              </form>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
