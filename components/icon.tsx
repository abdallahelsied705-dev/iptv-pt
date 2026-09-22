import {
  Flag, Signal, MonitorSmartphone, Tag, MessageCircle, Shield, Check, Mail,
  PlayCircle, MonitorPlay, AppWindow, Tv2, Cast, Tv, Box, Apple, Smartphone,
  Laptop, SatelliteDish, ExternalLink,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  flag: Flag,
  signal: Signal,
  devices: MonitorSmartphone,
  tag: Tag,
  chat: MessageCircle,
  shield: Shield,
  check: Check,
  mail: Mail,
  playcircle: PlayCircle,
  monitorplay: MonitorPlay,
  appwindow: AppWindow,
  tv2: Tv2,
  cast: Cast,
  tv: Tv,
  box: Box,
  apple: Apple,
  smartphone: Smartphone,
  laptop: Laptop,
  satellitedish: SatelliteDish,
  monitorsmartphone: MonitorSmartphone,
  externallink: ExternalLink,
};

export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const LucideIconComponent = icons[name] ?? Check;
  return <LucideIconComponent size={size} strokeWidth={2} aria-hidden="true" />;
}
