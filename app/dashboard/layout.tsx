// layout.tsx
// # Used for shared layouts across multiple pages.
// # Wraps child components (including page.tsx).
// # Typically includes UI elements like navigation bars, sidebars, and footers.
// # Remains persistent across navigations, preventing unnecessary re-renders.

import { Metadata } from 'next';
import SideNav from '@/app/ui/dashboard/sidenav';
export const experimental_ppr = true;

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
