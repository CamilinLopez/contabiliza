import { ReactNode } from 'react';
import Navconsola from '@/components/consola/navConsola/navConsola';
import LeftBar from '@/components/consola/LeftBar/LeftBar';

export default function LayoutConsola({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="sticky top-0 z-10">
        <Navconsola />
      </div>
      <div className="bg-[#f2f2f2] flex flex-grow overflow-auto">
        <div className="sticky top-0 h-full">
          <LeftBar />
        </div>
        <div className="px-8">{children}</div>
      </div>
    </div>
  );
}
