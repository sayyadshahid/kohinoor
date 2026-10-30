'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { MAPS_DIRECTIONS_URL, SITE } from '../../config/site';
import { useLocale } from '../../context/LocaleProvider';
import { t } from '../../data/i18n/dict';
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerPopup,
  MarkerTooltip,
} from '../ui/map';

const location = {
  id: 1,
  name: 'Kohinoor Atelier',
  address: SITE.address,
  description:
    'Step into our cutting room for a personal consultation, fabric selection, and trial fitting with our master tailors.',
  lng: SITE.coords.lng,
  lat: SITE.coords.lat,
};

export default function ContactMap() {
  const { locale } = useLocale();
  const mapName = t(locale, 'map_name');
  const mapDescription = t(locale, 'map_desc');
  const mapRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const sync = () => setIsMobile(query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [location.lng, location.lat],
      zoom: 17,
      duration: 1800,
      essential: true,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    });
  }, []);

  return (
    <div className="flex w-full flex-col gap-3 lg:h-full">
      <div className="group relative h-[440px] w-full overflow-hidden rounded-2xl border border-line-strong bg-canvas-alt lg:h-full lg:min-h-[400px]">
        <Map
          ref={mapRef}
          center={[location.lng, location.lat]}
          zoom={17}
          theme="light"
          className="h-full w-full"
          attributionControl={false}
        >
          <MapMarker
            longitude={location.lng}
            latitude={location.lat}
            onClick={() => {
              if (isMobile) setMobileOpen((open) => !open);
            }}
          >
            <MarkerContent>
              <div className="relative flex items-center justify-center">
                <div className="absolute size-7 bg-brand/25 rounded-full animate-ping" />
                <div className="relative size-4 rounded-full bg-gradient-to-br from-mocha-700 via-mocha-600 to-platinum-400 border-2 border-white/80 shadow-[0_0_15px_rgba(58,43,36,0.45)] transition-transform duration-300 group-hover:scale-110" />
              </div>
            </MarkerContent>

            <MarkerTooltip className="bg-brand border border-mocha-700 px-3 py-1.5 rounded-lg shadow-lift">
              <span className="font-semibold text-on-dark">{mapName}</span>
            </MarkerTooltip>

            {!isMobile ? (
              <MarkerPopup className="p-0 border-none bg-transparent" anchor="top" offset={12}>
                <div className="relative w-[min(17rem,calc(100vw-2.5rem))] space-y-2.5 overflow-hidden rounded-xl border border-line-strong bg-surface/95 p-3.5 shadow-deep backdrop-blur-xl sm:p-4">
                  <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-mocha-700 via-mocha-500 to-platinum-400" />
                  <div className="space-y-1 pt-1">
                    <h3
                      id="map-popup-title"
                      className="font-serif font-semibold text-brand text-lg leading-tight sm:text-xl"
                    >
                      {mapName}
                    </h3>
                    <p className="line-clamp-2 text-xs italic text-ink-muted sm:text-sm">
                      {location.address}
                    </p>
                  </div>
                  <div className="h-px w-full bg-line" />
                  <p className="line-clamp-2 text-xs leading-relaxed text-ink-soft/90 sm:text-sm">
                    {mapDescription}
                  </p>
                  <div className="flex items-center justify-between gap-3 border-t border-line pt-2.5">
                    <div className="hidden space-y-0.5 sm:block">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-ink-muted/60">
                        {t(locale, 'map_coords')}
                      </p>
                      <span className="font-mono text-xs text-ink-muted/80">
                        {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                      </span>
                    </div>
                    <a
                      href={MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full rounded-lg border border-mocha-200 bg-brand-soft px-4 py-2 text-center text-xs font-semibold text-brand transition-colors duration-200 hover:bg-mocha-200 sm:w-auto"
                    >
                      {t(locale, 'map_navigate')}
                    </a>
                  </div>
                </div>
              </MarkerPopup>
            ) : null}
          </MapMarker>

          <MapControls position="bottom-right" showZoom showFullscreen />
        </Map>
      </div>

      {isMobile && mobileOpen ? (
        <div className="animate-rise rounded-2xl border border-line-strong bg-surface p-4 shadow-card">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-1">
              <h3
                id="map-mobile-title"
                className="font-serif text-lg font-semibold leading-tight text-brand"
              >
                {mapName}
              </h3>
              <p className="text-xs italic text-ink-muted">{location.address}</p>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label={t(locale, 'map_close_details')}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-canvas text-ink transition-colors hover:bg-brand hover:text-on-dark"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-3 text-xs leading-relaxed text-ink-soft">{mapDescription}</p>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-full bg-brand px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-on-dark shadow-card transition-colors hover:bg-brand-hover"
          >
            {t(locale, 'map_navigate_full')}
          </a>
        </div>
      ) : null}
    </div>
  );
}
