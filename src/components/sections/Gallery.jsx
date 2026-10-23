'use client';

import { useCallback, useMemo, useState } from 'react';
import { GALLERY_FILTERS, GALLERY_ITEMS } from '../../data/gallery';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Section from '../ui/Section';
import SectionHeading from '../ui/SectionHeading';
import GalleryCard from '../gallery/GalleryCard';
import Lightbox from '../gallery/Lightbox';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(
    () =>
      filter === 'All'
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === filter),
    [filter]
  );

  const closeLightbox = useCallback(() => setSelectedItem(null), []);

  return (
    <Section id="gallery" className="py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <SectionHeading
          align="center"
          eyebrow="Portfolio of Finished Works"
          title="Finished Work From Our Cutting Table"
          threadClassName="w-48"
        />

        <div className="flex flex-wrap items-center gap-2">
          {GALLERY_FILTERS.map((category) => (
            <Button
              key={category}
              onClick={() => setFilter(category)}
              variant={filter === category ? 'primary' : 'subtle'}
              size="snug"
              elevation={filter === category ? 'card' : 'none'}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item, index) => (
          <Reveal key={item.id} delay={(index % 3) * 90} className="h-full">
            <GalleryCard item={item} onOpen={setSelectedItem} />
          </Reveal>
        ))}
      </div>

      {selectedItem ? <Lightbox item={selectedItem} onClose={closeLightbox} /> : null}
    </Section>
  );
}
