import { motion, Variants } from 'framer-motion';
import { Brain, Code } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface Props {
  itemVariants: Variants;
  terminalText: string;
}

export default function ProblemSolvingCard({ itemVariants, terminalText }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1 h-[200px]">
      <GlassCard className="flex h-full flex-col justify-between p-6 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-center justify-between">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10">
            <Brain className="h-5 w-5 text-indigo-400" />
          </div>
          <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-zinc-500">
            <Code className="h-3.5 w-3.5" />
            <span>Interactive Terminal</span>
          </div>
        </div>

        {/* Typings console widget */}
        <div className="my-3 font-mono text-[10px] text-emerald-400 bg-black/40 border border-white/[0.04] p-3 rounded-lg overflow-x-auto select-none">
          <span className="text-zinc-600 mr-2">$</span>
          <span>{terminalText}</span>
          <span className="inline-block w-1.5 h-3 bg-emerald-400 ml-1.5 animate-pulse" />
        </div>

        <div>
          <h3 className="font-display text-xs font-bold text-white uppercase tracking-widest">
            Problem Solving
          </h3>
        </div>
      </GlassCard>
    </motion.div>
  );
}
