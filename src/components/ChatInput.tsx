"use client"
import React, { useEffect, useRef, useState } from "react"
import { Button } from "react-aria-components"
import { useKeyPress } from "../hooks/useKeyPress";
import { Command, CommandPalette } from "./CommandPalette/CommandPalette";


const mp = {
  title: "Create a Meal Plan",
  description: "Create a meal plan for a specified number of days.",
  vars: [
    {
      name: "days",
      ask: "How many days?"
    },
    {
      name: "number_meals",
      ask: "For how many days?"
    },
    {
      name: "yes_items",
      ask: "Any special items you want to include in the plan?"
    },
    {
      name: "no_items",
      ask: "Are there any items I SHOULD NOT include?"
    }
  ],
  template: "Create me a {days} day vegetarian meal plan consisting of {number_meals} per day. Include {[yes_items]}. Don't include {[no_items]}"
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
    [ "react", {
      type: 'prompt',
      description: 'Describe react dev setup.',
      content: "I'm using Vite, React, NextJS, and TailwindCSS."
    }]
  ])


export default function ChatInput() {
  const [prompt, setPrompt] = useState<string>("");
  const [paletteVisible, setPaletteVisible] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const escapePressed = useKeyPress("Escape");

  useEffect(() => {
    if (escapePressed) {
      setPaletteVisible(false);
    }
  }, [escapePressed]);

  const handleSlash = (text: string) => {
    // If the first character is a slash, then we know it's a command.
    // Pop up the command menu. The user can either select a command or
    // finish typing the command. Either way, we need to lookup the command
    // and populate the textarea with the command's text. If the command doesn't
    // exist, then we need to show an unobtrusive error message, and let the user
    // continue typing.
    if (text[0] === "/") {
      console.log("Show Command menu")
      setPaletteVisible(true);
      // If the user completes the command, we need to get the word after the slash.
      // If the word is a valid command, then we need to populate the textarea.

      const command = text.split(" ")[0].slice(1)
      const replace = commands.get(command)

      if (replace) {
        setPaletteVisible(false);
        return replace.content || "";
      } else {
        console.log(`Command '${command}' not found.`);
      }
    }
    return text;
  }

  const handleSelect = () => {
    console.log("Select")
  }

  const configurePalette = () => {
    if (!textareaRef.current) return null;

    const height = textareaRef.current.getBoundingClientRect().height;
    const bottom = `${Math.round(height+12)}px`;
    return <CommandPalette 
              commands={commands} 
              style={{bottom: `${bottom}` }} 
              className={`absolute left-0`}
    />
  }

  const handlePrompt = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = handleSlash(e.target.value); 
    setPrompt(newValue);
    if (!newValue) {
      setPaletteVisible(false);
    }
  }
  
  return (
    <div className="flex items-center gap-4 w-[70vw] p-8
       bg-slate-700 rounded-lg">
      <div className="relative w-full">
        <textarea 
          ref={textareaRef}
          className="w-full resize-none rounded-lg bg-slate-800 px-6 py-4 
            text-white
          focus:bg-slate-900 outline-none
          focus:border-green-600 focus:outline-green-300
          " 
          placeholder="Enter prompt here..."
          value={prompt}
          onChange={handlePrompt}
          />
          {paletteVisible && configurePalette()}
      </div>      
      {/* bg-gradient-to-r from-orange-400 to-rose-400 */}

      <Button className="px-4 py-2 
      bg-gradient-to-b from-green-500 to-green-700
      text-white rounded-md">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>

      </Button>
    </div>
  )
}