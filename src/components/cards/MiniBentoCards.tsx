import { motion, Variants } from 'framer-motion';
import { MessageSquare, TrendingUp } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface Props {
  itemVariants: Variants;
}

export function PublicSpeakingCard({ itemVariants }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-[200px]">
      <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <MessageSquare className="h-5 w-5 text-indigo-400" />
          </div>
          {/* Audio soundbar animation */}
          <div className="flex items-end gap-1 h-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [6, ((i * 7) % 24) + 6, 6] }}
                transition={{ duration: 0.8 + i * 0.1, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 rounded-full bg-indigo-500"
              />
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
            Public Speaking
          </h3>
          <p className="mt-1 text-[11px] text-zinc-400 leading-normal font-sans">
            Presenting technical solutions, pitches, and hosting university development workshops.
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function EntrepreneurshipCard({ itemVariants }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1 h-[200px]">
      <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <TrendingUp className="h-5 w-5 text-indigo-400" />
          </div>
          <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/10">
            +100% SUCCESS
          </span>
        </div>

        <div className="mt-4">
          <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
            Entrepreneurship
          </h3>
          <p className="mt-1 text-[11px] text-zinc-400 leading-normal font-sans">
            Adapting logistics under pressure and managing micro-ventures with performance metrics.
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
