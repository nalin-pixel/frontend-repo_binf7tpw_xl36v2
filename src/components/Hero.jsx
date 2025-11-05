export default function Hero() {
  return (
    <section className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="mb-4 flex items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-red-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-700">Urgent</span>
          <p className="text-sm text-slate-600">Suivez en direct: débat à l’Assemblée sur le budget 2025</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <a href="#" className="group relative overflow-hidden rounded-xl lg:col-span-8 border border-slate-200 bg-white">
            <img
              src="https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1974&auto=format&fit=crop"
              alt="Hémicycle de l’Assemblée nationale"
              className="h-72 w-full object-cover transition duration-300 group-hover:scale-105 sm:h-[22rem]"
            />
            <div className="p-5 sm:p-6">
              <span className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Politique</span>
              <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold leading-tight text-slate-900 group-hover:text-slate-700">
                La réforme du logement entre en vigueur en 2025
              </h1>
              <p className="mt-2 text-slate-600">
                Nouvelles aides, plafonds révisés et incitations à la rénovation énergétique: ce qui change pour les ménages et les propriétaires.
              </p>
            </div>
          </a>

          <div className="grid content-between gap-6 lg:col-span-4">
            <a href="#" className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2069&auto=format&fit=crop"
                alt="Startup française"
                className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-blue-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Économie</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-slate-700">
                  Les startups françaises à l’assaut du marché européen
                </h3>
                <p className="mt-1 text-sm text-slate-600">Levées de fonds record et ambitions internationales.</p>
              </div>
            </a>
            <a href="#" className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src="https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2070&auto=format&fit=crop"
                alt="Stade de football"
                className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="p-5">
                <span className="inline-flex items-center rounded-full bg-emerald-700 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">Sports</span>
                <h3 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-slate-700">
                  Coupe du monde 2026 : les Bleus déjà favoris ?
                </h3>
                <p className="mt-1 text-sm text-slate-600">Un effectif renouvelé et une dynamique retrouvée.</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
