import { ReactNode } from 'react';
import Navconsola from '@/components/consola/navConsola';
import Bar from '@/components/consola/Bar';

export default function LayoutConsola({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-10">
        <Navconsola />
      </div>
      <div className="bg-[#f2f2f2] h-screen flex overflow-auto scrollbar-hide">
        <div className="sticky top-0">
          <Bar />
        </div>
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
}
