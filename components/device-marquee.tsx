import { deviceLogos } from "@/lib/site-data";

export function DeviceMarquee() {
  const loop = [...deviceLogos, ...deviceLogos];
  return (
    <div className="marquee" aria-label="Dispositivos compatíveis">
      <div className="marquee-track">
        {loop.map((device, i) => (
          <span className="marquee-item" key={`${device}-${i}`}>{device}</span>
        ))}
      </div>
    </div>
  );
}
