import { FC, ReactNode } from 'react';
import { Button } from './button';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => console.log('login with google');

  return (
    <Button onClick={loginWithGoogle} className='w-full mt-6 bg-custom-azul-1 hover:bg-custom-azul-2 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;