import { ReactNode } from 'react';
import Navconsola from '@/components/consola/navConsola';
import Bar from '@/components/consola/Bar';

export default function LayoutConsola({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navconsola />
      <div className="bg-[#f2f2f2] h-screen">
        <div className='flex' >
          <Bar />
          {children}
        </div>
      </div>
    </div>
  );
}
