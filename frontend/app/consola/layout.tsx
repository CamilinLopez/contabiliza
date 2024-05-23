import { ReactNode } from 'react';
import Navconsola from '@/components/consola/navConsola';
import Bar from '@/components/consola/leftBar';
import RigthBar from '@/components/consola/rigthBar';


export default function LayoutConsola({ children }: { children: ReactNode }) {
  return (
    <div className="">
      <Navconsola />
      <div className="bg-[#f2f2f2] h-screen">
        <div className='flex justify-between'>
          <Bar />
          {children}
          <RigthBar/>
        </div>
      </div>
    </div>
  );
}

