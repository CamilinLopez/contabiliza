import Management from '@/components/managementConsole';
import Navigation from '@/components/welcomePage/navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <Management />
      <div>
        footer
      </div>
    </>
  );
}
