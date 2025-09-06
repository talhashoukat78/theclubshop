'use client';

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  const isAuthPage = pathname === '/login' || pathname === '/signup';
  const isDashboardPage = pathname.startsWith('/dashboard');

  return (
    <>
      {!isAdminPage && !isAuthPage && !isDashboardPage && <Navbar />}
      {children}
      {!isAdminPage && !isAuthPage && !isDashboardPage && <Footer />}
    </>
  );
}
