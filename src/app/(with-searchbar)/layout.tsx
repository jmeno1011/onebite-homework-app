import { ReactNode } from 'react'
import Searchbar from './searchbar';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Searchbar />
      {children}
    </div>
  )
}
