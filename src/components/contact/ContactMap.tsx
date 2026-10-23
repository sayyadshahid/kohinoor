'use client';

import { useEffect, useRef } from 'react';
import { MAPS_SEARCH_URL, SITE } from '../../config/site';
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
  const mapRef = useRef(null);

  useEffect(() => {
    mapRef.current?.flyTo({
      center: [location.lng, location.lat],
      zoom: 14,
      duration: 1800,
      essential: true,
      padding: { top: 0, bottom: 0, left: 0, right: 0 },
    });
  }, []);

  return (
    <div className="h-full min-h-[400px] w-full relative overflow-hidden rounded-2xl border border-line-strong bg-canvas-alt group">
      <Map
        ref={mapRef}
        center={[location.lng, location.lat]}
        zoom={13}
        theme="light"
        className="h-full w-full"
        attributionControl={false}
      >
        <MapMarker longitude={location.lng} latitude={location.lat}>
          <MarkerContent>
            <div className="relative flex items-center justify-center">
              <div className="absolute size-7 bg-brand/25 rounded-full animate-ping" />
              <div className="relative size-4 rounded-full bg-gradient-to-br from-mocha-700 via-mocha-600 to-platinum-400 border-2 border-white/80 shadow-[0_0_15px_rgba(58,43,36,0.45)] transition-transform duration-300 group-hover:scale-110" />
            </div>
          </MarkerContent>

          <MarkerTooltip className="bg-brand border border-mocha-700 px-3 py-1.5 rounded-lg shadow-lift">
            <span className="font-semibold text-on-dark">{location.name}</span>
          </MarkerTooltip>

          <MarkerPopup className="p-0 border-none bg-transparent">
            <div className="relative p-4 w-72 space-y-3 bg-surface/95 backdrop-blur-xl rounded-xl border border-line-strong shadow-deep overflow-hidden">
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-mocha-700 via-mocha-500 to-platinum-400" />
              <div className="space-y-1 pt-1">
                <h4 className="font-serif font-semibold text-brand text-xl leading-tight">
                  {location.name}
                </h4>
                <p className="text-sm text-ink-muted italic">{location.address}</p>
              </div>
              <div className="h-px bg-line w-full" />
              <p className="text-sm text-ink-soft/90 leading-relaxed">{location.description}</p>
              <div className="flex justify-between items-end pt-2">
                <div className="space-y-0.5">
                  <p className="text-[10px] text-ink-muted/60 uppercase tracking-widest font-semibold">
                    Coordinates
                  </p>
                  <span className="text-xs text-ink-muted/80 font-mono">
                    {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                  </span>
                </div>
                <a
                  href={MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-brand-soft hover:bg-mocha-200 text-xs text-brand font-semibold transition-colors duration-200 border border-mocha-200"
                >
                  Navigate →
                </a>
              </div>
            </div>
          </MarkerPopup>
        </MapMarker>

        <MapControls position="bottom-right" showZoom showFullscreen />
      </Map>
    </div>
  );
}
