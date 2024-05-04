import Management from '@/components/welcomePage/registerUser';
import Navigation from '@/components/welcomePage/navigation';
import Foter from '@/components/welcomePage/foter';

export default function Home() {
  return (
    <>
      <Navigation />
      <Management />
      <Foter />
    </>
  );
}
