import Link from "next/link"
export default function Dashboard() {
  return (
    <main className="flex main-h-full flex-col items-center gap-8 p-24
    bg-slate-900">
      <h1 className="text-4xl font-bold text-center">
        Dashboard
      </h1>
      <h2>Here you will find all the beautiful things...</h2>
      <Link href="/prompts">Prompting experiments</Link>
    </main>
  )
}