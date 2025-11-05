import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsLayout from './components/NewsLayout';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <NewsLayout />
      <Footer />
    </div>
  );
}
