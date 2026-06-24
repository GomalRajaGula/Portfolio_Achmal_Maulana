import { motion, Variants } from 'framer-motion';
import { Shield } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface Props {
  itemVariants: Variants;
}

export default function LeadershipCard({ itemVariants }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 h-[424px]">
      <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <Shield className="h-6 w-6 text-indigo-400" />
          </div>
          <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
            [ORGANIZATION FOCUS]
          </span>
        </div>
        
        {/* Central connecting hub graphic */}
        <div className="relative h-24 my-6 flex items-center justify-center overflow-hidden">
          <div className="absolute h-10 w-10 rounded-full border border-indigo-500 bg-indigo-950/20 flex items-center justify-center z-10 animate-pulse">
            <span className="text-[8px] font-bold text-white">HUB</span>
          </div>
          {/* Branching floating nodes */}
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={idx}
              animate={{
                y: [0, -10, 10, 0],
                x: [0, 10, -10, 0],
              }}
              transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                left: `${25 + idx * 15}%`,
                top: idx % 2 === 0 ? '10%' : '70%',
              }}
              className="h-6 w-6 rounded-full border border-white/10 bg-[#111111] flex items-center justify-center text-[7px] text-zinc-500 font-bold"
            >
              N{idx + 1}
            </motion.div>
          ))}
          {/* Connecting SVG lines */}
          <svg className="absolute inset-0 h-full w-full stroke-white/5 stroke-1" fill="none">
            <line x1="50%" y1="50%" x2="25%" y2="20%" />
            <line x1="50%" y1="50%" x2="40%" y2="80%" />
            <line x1="50%" y1="50%" x2="55%" y2="15%" />
            <line x1="50%" y1="50%" x2="70%" y2="75%" />
          </svg>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
            Leadership
          </h3>
          <p className="mt-2 text-xs md:text-sm text-zinc-400 leading-relaxed font-sans">
            Guiding student developer squads, organizing community meetups, and hosting workshops to help colleagues grow technically.
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
