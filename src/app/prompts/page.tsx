import ChatInput from "@/components/ChatInput"
import { Command, CommandPalette } from "@/components/CommandPalette/CommandPalette"

export const metadata = {
  title: 'Prompt Testing',
  description: 'Testing new ways to prompt.',
}

const commands = new Map<string, Command>([
  [ "code", {
      type: 'shortcut',
      description: 'Display output in a code window.',
      content: "Enclose output between ``` and ```"
    }],
    [ "md", {
      type: 'shortcut',
      description: 'Format output as Markdown.',
      content: "Use Markdown."
    }],
    [ "help", {
      type: 'shortcut',
      description: 'Display a list of available commands.',
      content: "Help thyself."
    }],
  ])

export default function Prompts() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-8 p-24
    bg-slate-900">
      <h1 className="text-4xl font-bold text-center">
        Prompt Testing
      </h1>
      <div className="h-80"></div>
      <ChatInput />
      {/* <CommandPalette commands={commands}/> */}
    </main>      
  )
}