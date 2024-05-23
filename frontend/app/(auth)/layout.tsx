import { FC, ReactNode } from 'react'

interface AuthLayoutProps {
  children: ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className='flex justify-center items-center h-screen' style={{ backgroundImage: `url('./bgsign.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='bg-slate-200 p-10 rounded-md'>{children}</div>
    </div>
  )
}

export default AuthLayout
