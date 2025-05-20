
import { GlowEffect } from '@/components/ui/glow-effect';
import { ArrowRight } from 'lucide-react';

export function GlowEffectButton({ children, ...btnProps }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className='relative inline-block'>
      <GlowEffect
        colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
        mode='colorShift'
        blur='soft'
        duration={3}
        scale={0.9}
      />
      <button
        {...btnProps}
        className={'relative inline-flex items-center gap-1 rounded-md bg-zinc-950 px-4 py-2 text-base font-semibold text-zinc-50 outline outline-1 outline-[#fff2f21f] shadow-md hover:scale-105 transition-all ' + (btnProps.className || '')}
      >
        {children}
        <ArrowRight className='h-4 w-4 ml-1' />
      </button>
    </div>
  );
}
