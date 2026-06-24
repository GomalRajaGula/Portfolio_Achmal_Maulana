import { motion, Variants } from 'framer-motion';
import { Users } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface Props {
  itemVariants: Variants;
  dots: { x: number; y: number }[];
}

export default function CollaborationCard({ itemVariants, dots }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 h-[424px]">
      <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <Users className="h-6 w-6 text-indigo-400" />
          </div>
          <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
            [VALUES]
          </span>
        </div>

        {/* Constellation graphic background */}
        <div className="relative h-28 my-6 rounded border border-white/[0.03] bg-black/10 overflow-hidden">
          {dots.map((dot, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, (i % 2 === 0 ? 5 : -5), 0] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut' }}
              style={{ position: 'absolute', left: `${dot.x}%`, top: `${dot.y}%` }}
              className="h-1.5 w-1.5 rounded-full bg-indigo-400/50"
            />
          ))}
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
            Collaboration
          </h3>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
            Working with cross-functional designer, developer, and tenant logistics squads to execute releases and meet organizational objectives.
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
