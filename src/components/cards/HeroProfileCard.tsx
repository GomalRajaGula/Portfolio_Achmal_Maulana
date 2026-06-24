import { motion, MotionValue } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Clock, Briefcase, Terminal } from 'lucide-react';
import GlassCard from '../ui/GlassCard';
import { siteConfig } from '@/data/site';

interface HeroProfileCardProps {
  cardRotateX: MotionValue<number>;
  cardRotateY: MotionValue<number>;
  localTime: string;
}

export default function HeroProfileCard({ cardRotateX, cardRotateY, localTime }: HeroProfileCardProps) {
  const profile = siteConfig.hero.profile;

  return (
    <motion.div
      animate={{ y: [-10, 10, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="w-full max-w-sm"
    >
      <motion.div style={{ rotateX: cardRotateX, rotateY: cardRotateY }}>
        <GlassCard className="p-8 border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[50px] pointer-events-none" />

          <div className="flex flex-col gap-8 relative z-10">
            {/* Header: Avatar & Name */}
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="h-20 w-20 rounded-full border-2 border-white/10 overflow-hidden bg-zinc-900 shadow-lg">
                  <Image
                    src="/avatar.png"
                    alt={profile.name}
                    width={80}
                    height={80}
                    priority
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white tracking-tight">
                  {profile.name}
                </h3>
                <p className="text-xs text-zinc-400 font-medium mt-1">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Content: Role & Location */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  <Briefcase className="w-3.5 h-3.5" />
                  {profile.currentRoleLabel}
                </div>
                <p className="text-sm font-medium text-zinc-200">
                  {profile.currentRole}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5" />
                  {profile.techStackLabel}
                </div>
                <div className="flex flex-wrap gap-2">
                  {profile.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer: Time & Location */}
            <div className="pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" />
                {profile.location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-zinc-500" />
                {localTime || '00:00:00 WIB'}
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </motion.div>
  );
}
