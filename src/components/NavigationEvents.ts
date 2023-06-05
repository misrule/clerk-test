'use client';
 
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
}
export function NavigationEvents( { children }: Props ) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isPublic = ["/"].includes(pathname);

  useEffect(() => {
    
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);
 
  return null;
}