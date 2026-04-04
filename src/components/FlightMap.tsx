"use client";

import { useEffect, useRef } from "react";

interface Airport {
  name: string;
  lat: number;
  lng: number;
}

interface Flight {
  from: Airport;
  to: Airport;
}

interface Props {
  flights?: Flight[];
}

export default function FlightMap({ flights = [] }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;

    import("globe.gl").then((mod) => {
      const Globe = mod.default;

      const arcs = flights.map((f) => ({
        startLat: f.from.lat,
        startLng: f.from.lng,
        endLat: f.to.lat,
        endLng: f.to.lng,
        label: `${f.from.name} → ${f.to.name}`,
      }));

      // Origin dots
      const origins = flights.map((f) => ({
        lat: f.from.lat,
        lng: f.from.lng,
        name: f.from.name,
      }));

      // Destination rings (pulsing = direction indicator)
      const destinations = flights.map((f) => ({
        lat: f.to.lat,
        lng: f.to.lng,
        name: f.to.name,
      }));

      const size = el.clientWidth;

      Globe({ animateIn: true })(el)
        .width(size)
        .height(size)
        .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
        .backgroundImageUrl("//unpkg.com/three-globe/example/img/night-sky.png")
        // Solid continuous arcs
        .arcsData(arcs)
        .arcColor(() => "#d4956a")
        .arcDashLength(1)
        .arcDashGap(0)
        .arcDashAnimateTime(0)
        .arcStroke(0.6)
        .arcAltitude(0.3)
        .arcLabel("label")
        // Origin: small bright dots
        .pointsData(origins)
        .pointLat("lat")
        .pointLng("lng")
        .pointLabel("name")
        .pointColor(() => "#e8d5b7")
        .pointAltitude(0.01)
        .pointRadius(0.3)
        // Destination: pulsing rings indicate direction
        .ringsData(destinations)
        .ringLat("lat")
        .ringLng("lng")
        .ringColor(() => () => "#d4956a")
        .ringAltitude(0.005)
        .ringMaxRadius(2.5)
        .ringPropagationSpeed(1.5)
        .ringRepeatPeriod(1200)
        .pointOfView({ lat: 30, lng: 140, altitude: 2.2 });
    });

    return () => {
      el.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full rounded-xl overflow-hidden my-6"
      style={{ aspectRatio: "1 / 1", background: "#000010" }}
    />
  );
}
