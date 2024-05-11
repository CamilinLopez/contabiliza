import { ReactNode } from 'react';
import Navconsola from '@/components/consola/navConsola';
import Bar from '@/components/consola/Bar';

export default function LayoutConsola({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10">
        <Navconsola />
      </div>
      <div className="bg-[#f2f2f2] flex flex-grow overflow-auto">
        <div className="sticky top-0 h-full">
          <Bar />
        </div>
        <div className="h-auto">{children}</div>
      </div>
    </div>
  );
}
