import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Gallery from '@/components/Gallery';
import Booking from '@/components/Booking';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-mocha-900 text-platinum-200 relative selection:bg-lavender-300 selection:text-mocha-900">
      <CustomCursor />
      <Navbar />
      
      {/* Full-Screen Immersive Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">
        <span className="text-xs md:text-sm uppercase tracking-[0.4em] text-lavender-300 mb-4 font-mono">
          Visual Arts &amp; Photography
        </span>
        
        <h1 className="text-4xl md:text-7xl font-light text-platinum-100 tracking-tight max-w-4xl mb-6">
          TWG ♠️
        </h1>
        
        <p className="text-platinum-400 max-w-md font-light text-sm md:text-base mb-10">
          Editorial, Commercial &amp; Lifestyle Photography.
        </p>
        
        <div className="flex flex-row items-center justify-center gap-4">
          <a 
            href="#gallery" 
            className="px-7 py-3.5 bg-lavender-300 text-mocha-900 font-medium text-sm rounded-full hover:bg-lavender-400 transition-all shadow-lg"
          >
            Explore Gallery
          </a>
          <a 
            href="#booking"
            className="px-7 py-3.5 border border-mocha-700 text-platinum-200 text-sm rounded-full hover:border-lavender-300/50 hover:bg-mocha-800 transition-all"
          >
            Book a Session
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 font-mono text-[10px] tracking-widest uppercase pointer-events-none">
          <span>Scroll</span>
          <div className="w-px h-6 bg-lavender-300 animate-pulse" />
        </div>
      </section>

      {/* Gallery Section */}
      <div id="gallery" className="py-20">
        <Gallery />
      </div>

      {/* Booking Section */}
      <div id="booking" className="py-20 border-t border-mocha-800">
        <Booking />
      </div>

      <Footer />
    </main>
  );
}