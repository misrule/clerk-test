import { currentUser, UserButton } from "@clerk/nextjs";
import  Link  from "next/link";


export default async function Home() {
  const user = await currentUser();
  return (
    <main className="flex main-h-full flex-col items-center gap-8 p-24">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Prototype.
      </h1>
      {user ? (
          <>
            <p>Hello, User: {user.emailAddresses[0]?.emailAddress}</p>
            <UserButton afterSignOutUrl="/" />
          </>
        ) : (
          <Link href="/auth/sign-in" className="text-blue-500">
            Sign in
          </Link>
        )}      
    </main>
  )
}
