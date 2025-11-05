function ArticleCard({ category, color, title, excerpt, image, anchor }) {
  return (
    <a href={anchor || '#'} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
      <img src={image} alt={title} className="h-44 w-full object-cover transition duration-300 group-hover:scale-105" />
      <div className="p-4">
        <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white ${color}`}>{category}</span>
        <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-slate-700">{title}</h3>
        <p className="mt-1 text-sm text-slate-600">{excerpt}</p>
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
            <a href="#" className="block text-slate-900 hover:text-slate-700 font-medium leading-snug">
              {it.title}
            </a>
            {it.meta && <p className="mt-0.5 text-xs text-slate-500">{it.meta}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function NewsLayout() {
  const articles = [
    {
      category: 'Technologie',
      color: 'bg-indigo-700',
      title: 'IA : une feuille de route européenne pour une innovation responsable',
      excerpt: "Régulation, investissements et souveraineté numérique : l'Union affine sa stratégie.",
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop',
    },
    {
      category: 'Environnement',
      color: 'bg-emerald-700',
      title: 'Qualité de l’air : les grandes villes accélèrent la transition',
      excerpt: 'Zones à faibles émissions et transports décarbonés au cœur des dispositifs.',
      image: 'https://images.unsplash.com/photo-1495314736024-fa5e4b37b979?q=80&w=2069&auto=format&fit=crop',
    },
    {
      category: 'Culture',
      color: 'bg-rose-700',
      title: 'Cinéma français : un renouveau porté par la jeune création',
      excerpt: "Fréquentation en hausse, nouvelles voix et formats hybrides s'imposent.",
      image: 'https://images.unsplash.com/photo-1649695121665-fb2f81f41cf8?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaW4lQzMlQTltYSUyMGZyYW4lQzMlQTdhaXMlMjAlM0ElMjB1bnxlbnwwfDB8fHwxNzYyMzY0NjY5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      category: 'Politique',
      color: 'bg-slate-900',
      title: "Budget 2025 : quelles marges de manœuvre pour l'État ?",
      excerpt: 'Décryptage des priorités et des arbitrages attendus.',
      image: 'https://images.unsplash.com/photo-1700700736033-6ee8cb5ff176?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCdWRnZXQlMjAyMDI1JTIwJTNBJTIwcXVlbGxlc3xlbnwwfDB8fHwxNzYyMzY0NjY5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
    {
      category: 'Économie',
      color: 'bg-blue-900',
      title: "Inflation : l'alimentation baisse, l'énergie reste sous tension",
      excerpt: 'Les ménages adaptent leurs dépenses, les entreprises révisent leurs prévisions.',
      image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1974&auto=format&fit=crop',
    },
    {
      category: 'Sports',
      color: 'bg-emerald-700',
      title: 'JO Paris : les coulisses d’une organisation hors norme',
      excerpt: 'Sécurité, mobilités, héritage : les grands enjeux passés au crible.',
      image: 'https://images.unsplash.com/photo-1681403975635-4dd2a45ac4e4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxKTyUyMFBhcmlzJTIwJTNBJTIwbGVzfGVufDB8MHx8fDE3NjIzNjQ2NzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    },
  ];

  const mostRead = [
    { title: 'Travail : ce qui change avec la semaine en 4 jours', meta: 'Il y a 2 h' },
    { title: 'Énergie : la facture moyenne recule au premier semestre', meta: 'Il y a 3 h' },
    { title: 'Culture : un nouveau musée ouvre ses portes à Lyon', meta: 'Il y a 5 h' },
    { title: 'Climat : alerte canicule dans le Sud-Ouest', meta: 'Il y a 6 h' },
  ];

  const latest = [
    { title: 'Technologie : l’Europe adopte un standard de cybersécurité', meta: 'Il y a 12 min' },
    { title: "Transports : des trains de nuit supplémentaires cet été", meta: 'Il y a 36 min' },
    { title: 'Immobilier : les taux poursuivent leur baisse', meta: 'Il y a 58 min' },
    { title: 'Santé : les urgences pédiatriques sous tension', meta: 'Il y a 1 h 15' },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <div id="politique" className="grid gap-6 sm:grid-cols-2">
            {articles.slice(0, 4).map((a, idx) => (
              <ArticleCard key={idx} {...a} />
            ))}
          </div>
          <div id="technologie" className="grid gap-6 sm:grid-cols-2">
            {articles.slice(4, 6).map((a, idx) => (
              <ArticleCard key={idx} {...a} />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <SidebarSection title="Les plus lus" items={mostRead} />
          <SidebarSection title="Dernières mises à jour" items={latest} />
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
    </section>
  );
}
