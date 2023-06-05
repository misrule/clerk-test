"use client";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import { User } from "@clerk/nextjs/dist/types/server";


export default function AppHeader() {
  const { signOut } = useClerk();
  return (
    <header className="flex items-center justify-between 
    w-full h-16 px-8 bg-slate-900 border-b border-white">
      <Link href="/">
        <div className="flex items-center gap-2">
          {/* ICON */}
          <div className="flex items-center justify-center w-8 aspect-square rounded-full
          hover:border hover:border-white/50 hover:bg-slate-700/70">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          {/* NAME */}
          <div className="font-medium font-mono text-lg text-white">
            Prototype-0
          </div>
        </div>
      </Link>
      {/* RIGHT-SIDE CONTROLS */}
      <div className="flex items-center gap-4">
          <SignedOut>
            <Link href="/dashboard"
              className="px-6 py-2 bg-emerald-500 rounded-md hover:bg-emerald-600">
                Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <div>
              {/* <UserButton afterSignOutUrl="/"/> */}
              {/* <button onClick={() => signOut()}
                className="px-6 py-2 bg-emerald-500 rounded-md hover:bg-emerald-600">
                Sign Out
              </button> */}
              <UserButton afterSignOutUrl="/"/>
            </div>
        </SignedIn>
      </div>
    </header>
  )
}