'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera, Eye } from 'lucide-react';

interface GalleryImage {
  id: string;
  title: string;
  category: string;
  src: string;
  aspectRatio: string;
  exif: {
    camera: string;
    lens: string;
    focalLength: string;
    aperture: string;
    shutterSpeed: string;
    iso: string;
  };
}

const IMAGES: GalleryImage[] = [
  {
    id: '1',
    src: '/gallery/potrait-1.jpg', 
    title: 'Burti Blueprint',
    category: 'portraits',
    aspectRatio: 'aspect-[3/4]', 
    exif: {
      camera: 'Sony A7R V',
      lens: '85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/500s',
      iso: '100',
    },
  },
  {
    id: '2',
    src: '/gallery/event-1.jpg',
    title: '',
    category: 'events',
    aspectRatio: 'aspect-[4/3]', 
    exif: {
      camera: 'Canon EOS R5',
      lens: '50mm f/1.2L',
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/250s',
      iso: '200',
    },
  },
  {
    id: '3',
    src: '/gallery/commercial-1.jpg',
    title: 'The Big-Man Ride',
    category: 'commercial',
    aspectRatio: 'aspect-[3/4]',
    exif: {
      camera: 'Nikon Z9',
      lens: '105mm f/1.4',
      focalLength: '105mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: '160',
    },
  },
  {
    id: '4',
    src: '/gallery/potrait-2.jpg', 
    title: '',
    category: 'portraits',
    aspectRatio: 'aspect-[3/4]', 
    exif: {
      camera: 'Sony A7R V',
      lens: '85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/500s',
      iso: '100',
    },
  },
  {
    id: '5',
    src: '/gallery/event-2.jpg',
    title: 'Omo Alhaji',
    category: 'events',
    aspectRatio: 'aspect-[4/3]', 
    exif: {
      camera: 'Canon EOS R5',
      lens: '50mm f/1.2L',
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/250s',
      iso: '200',
    },
  },
  {
    id: '6',
    src: '/gallery/commercial-2.jpg',
    title: '',
    category: 'commercial',
    aspectRatio: 'aspect-[3/4]',
    exif: {
      camera: 'Nikon Z9',
      lens: '105mm f/1.4',
      focalLength: '105mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: '160',
    },
  },
   {
    id: '7',
    src: '/gallery/potrait-3.jpg', 
    title: '',
    category: 'portraits',
    aspectRatio: 'aspect-[3/4]',
    exif: {
      camera: 'Sony A7R V',
      lens: '85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/500s',
      iso: '100',
    },
  },
  {
    id: '8',
    src: '/gallery/event-3.jpg',
    title: 'Bad-B Staple',
    category: 'events',
    aspectRatio: 'aspect-[4/3]', 
    exif: {
      camera: 'Canon EOS R5',
      lens: '50mm f/1.2L',
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/250s',
      iso: '200',
    },
  },
  {
    id: '9',
    src: '/gallery/commercial-3.jpg',
    title: '',
    category: 'commercial',
    aspectRatio: 'aspect-[3/4]',
    exif: {
      camera: 'Nikon Z9',
      lens: '105mm f/1.4',
      focalLength: '105mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: '160',
    },
  },
   {
    id: '10',
    src: '/gallery/lifestyle-1.jpg', // Path relative to the public folder
    title: '',
    category: 'lifestyle',
    aspectRatio: 'aspect-[3/4]', // Vertical orientation
    exif: {
      camera: 'Sony A7R V',
      lens: '85mm f/1.4 GM',
      focalLength: '85mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/500s',
      iso: '100',
    },
  },
  {
    id: '11',
    src: '/gallery/lifestyle-2.jpg',
    title: '',
    category: 'lifestyle',
    aspectRatio: 'aspect-[4/3]', // Horizontal orientation
    exif: {
      camera: 'Canon EOS R5',
      lens: '50mm f/1.2L',
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/250s',
      iso: '200',
    },
  },
  {
    id: '12',
    src: '/gallery/lifestyle-3.jpg',
    title: '',
    category: 'lifestyle',
    aspectRatio: 'aspect-[3/4]',
    exif: {
      camera: 'Nikon Z9',
      lens: '105mm f/1.4',
      focalLength: '105mm',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: '160',
    },
  },
];

const CATEGORIES = ['All', 'Portraits', 'Events', 'Commercial', 'Urban'];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const filteredPhotos = activeCategory === 'All'
    ? IMAGES
    : IMAGES.filter(p => p.category === activeCategory);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleNext = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrev = () => {
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-4 md:px-12 max-w-7xl mx-auto text-center">
      <div className="mb-8">
        <span className="text-sm uppercase tracking-[0.3em] text-lavender-300 font-mono">
          Curated Portfolio
        </span>
        <h2 className="text-4xl md:text-5xl font-light text-platinum-100 mt-2">
          Selected Works
        </h2>
      </div>

      {/* Hidden initially: Show button to reveal gallery grid */}
      {!isExpanded ? (
        <div className="py-12">
          <p className="text-platinum-400 font-light mb-8 max-w-md mx-auto">
            Explore a curated collection of editorial frames, commercial captures, and timeless moments.
          </p>
          <button
            onClick={() => setIsExpanded(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-mocha-800 border border-lavender-300/30 text-lavender-300 rounded-full font-medium hover:bg-lavender-300 hover:text-mocha-900 transition-all duration-300 shadow-lg"
          >
            <Eye className="w-4 h-4" />
            <span>Load & View Gallery Grid</span>
          </button>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-light transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-lavender-300 text-mocha-900 font-medium shadow-[0_0_15px_rgba(216,180,254,0.3)]'
                    : 'bg-mocha-800 text-platinum-200 hover:border-lavender-300/40 border border-mocha-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            <AnimatePresence>
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={photo.id}
                  onClick={() => setSelectedPhotoIndex(index)}
                  className="group relative h-100 rounded-xl overflow-hidden bg-mocha-800 border border-mocha-700 cursor-pointer shadow-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-mocha-900 via-transparent opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                    <span className="text-xs uppercase tracking-widest text-lavender-300 font-mono">
                      {photo.category}
                    </span>
                    <h3 className="text-xl font-light text-platinum-100 mt-1">
                      {photo.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-3 text-xs text-platinum-400 font-mono">
                      <Camera className="w-3.5 h-3.5 text-lavender-300" />
                      <span>{photo.exif.camera}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}

      {/* Full-Screen Lightbox Modal */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-mocha-900/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-10 text-left"
          >
            {/* Top Bar */}
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
              <div>
                <span className="text-xs font-mono text-lavender-300 tracking-widest uppercase">
                  {currentPhoto.category}
                </span>
                <h2 className="text-xl md:text-2xl text-platinum-100 font-light">
                  {currentPhoto.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedPhotoIndex(null)}
                className="p-3 rounded-full bg-mocha-800 border border-mocha-700 text-platinum-200 hover:text-lavender-300 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Image Display */}
            <div className="relative flex-1 flex items-center justify-center my-4">
              <button
                onClick={handlePrev}
                className="absolute left-2 md:left-6 z-10 p-3 rounded-full bg-mocha-800/80 border border-mocha-700 text-platinum-200 hover:bg-mocha-700 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="relative w-full h-[70vh] max-w-5xl">
                <Image
                  key={currentPhoto.id}
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  fill
                  className="object-contain rounded-lg shadow-2xl border border-mocha-700"
                />
              </div>

              <button
                onClick={handleNext}
                className="absolute right-2 md:right-6 z-10 p-3 rounded-full bg-mocha-800/80 border border-mocha-700 text-platinum-200 hover:bg-mocha-700 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* EXIF Metadata Bar */}
            <div className="max-w-xl mx-auto w-full bg-mocha-800 border border-mocha-700 rounded-xl py-3 px-6 flex flex-wrap justify-around items-center text-xs md:text-sm font-mono text-platinum-300">
              <div><span className="text-platinum-400">Body:</span> {currentPhoto.exif.camera}</div>
              <div><span className="text-platinum-400">Lens:</span> {currentPhoto.exif.lens}</div>
              <div><span className="text-platinum-400">Shutter:</span> {currentPhoto.exif.shutterSpeed}</div>
              <div><span className="text-platinum-400">ISO:</span> {currentPhoto.exif.iso}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}