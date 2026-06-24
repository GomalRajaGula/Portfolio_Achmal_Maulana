import { motion, Variants } from 'framer-motion';
import { Calendar } from 'lucide-react';
import GlassCard from '../ui/GlassCard';

interface Props {
  itemVariants: Variants;
}

export default function EventManagementCard({ itemVariants }: Props) {
  return (
    <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-2 h-[424px]">
      <GlassCard className="flex h-full flex-col justify-between p-8 border-white/[0.04] bg-white/[0.01]">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10">
            <Calendar className="h-6 w-6 text-indigo-400" />
          </div>
          <span className="text-[10px] font-bold text-zinc-600 tracking-wider">
            [LOGISTICS]
          </span>
        </div>

        {/* JKB Fest mini schedule widget */}
        <div className="my-6 space-y-2 border border-white/[0.04] rounded-lg bg-black/20 p-3 text-[10px] tracking-wider uppercase font-bold text-zinc-400">
          <div className="flex justify-between border-b border-white/[0.04] pb-1.5 text-zinc-600">
            <span>Task Timeline</span>
            <span>State</span>
          </div>
          <div className="flex justify-between items-center text-zinc-300">
            <span>Tenant Maps Setup</span>
            <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 text-[8px] text-emerald-400">Done</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Vendor Coordination</span>
            <span className="rounded bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 text-[8px] text-emerald-400">Done</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Stage Flow Run</span>
            <span className="rounded bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 text-[8px] text-indigo-400">Active</span>
          </div>
        </div>

        <div>
          <h3 className="font-display text-base font-bold text-white uppercase tracking-wider">
            Event Management
          </h3>
          <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-sans">
            Coordinating stage scheduling, tenant locations, security protocols, and vendor registries for local events like JKB Fest.
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
}
