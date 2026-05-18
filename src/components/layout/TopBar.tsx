import { MapPin, Phone, Mail, Clock, Sparkles } from 'lucide-react';
import { siteConfig } from '@/src/config/site';

export function TopBar() {
  return (
    <div className="hidden border-b border-white/10 bg-brand-deep text-cream/85 md:block">
      <div className="container-shell flex items-center justify-between py-2.5 text-[13px]">
        <div className="flex flex-wrap items-center gap-5">
          <div className="flex items-center gap-2 transition-colors hover:text-cream">
            <Phone className="h-3.5 w-3.5 text-gold" />
            <span>{siteConfig.phone}</span>
          </div>

          <div className="flex items-center gap-2 transition-colors hover:text-cream">
            <Mail className="h-3.5 w-3.5 text-gold" />
            <span>{siteConfig.email}</span>
          </div>

          <div className="flex items-center gap-2 text-cream/70 transition-colors hover:text-cream">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            <span>{siteConfig.locationLabel}</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-cream/75 backdrop-blur-sm">
          <Sparkles className="h-3.5 w-3.5 text-gold" />
          <Clock className="h-3.5 w-3.5 text-gold" />
          <span>{siteConfig.officeHours}</span>
        </div>
      </div>
    </div>
  );
}
