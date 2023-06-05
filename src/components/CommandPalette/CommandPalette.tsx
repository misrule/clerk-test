"use client"
import { useKeyPress } from "@/hooks/useKeyPress";
import { useEffect, useReducer } from "react";
import { PaletteHeader } from "./PaletteHeader";

export interface Command {
  type: string;
  description: string;
  content?: string;
  //onSelect?: () => void;
}

interface CommandPaletteProps {
  commands: Map<string, Command>;
  className?: string;
  style?: React.CSSProperties;
}
// const getCategoryColor = (category: string) => {
//   switch (category) {
//     case "shortcut":
//       return "rgb(59 130 246)";
//     case "prompt":
//       return "rgb(244 63 94)";
//     case "command":
//       return "bg-yellow-500";
//     default:
//       return "bg-slate-500";
//   }
// }
const getStyle = (category: string): React.CSSProperties => {
  switch (category) {
    case "shortcut":
      return { backgroundImage: 'linear-gradient(to bottom, rgb(56, 189, 248), rgb(59, 130, 246))' };
    case "prompt":
      return { backgroundImage: 'linear-gradient(to bottom, rgb(244, 63, 94), rgb(248, 113, 113), rgb(239, 68, 68))', };
    case "command":
      return { backgroundColor: "bg-yellow-500" };
    default:
      return { backgroundColor: "bg-slate-500" };
  }
}




interface SelectionAction {
  type: 'arrowUp' | 'arrowDown' | 'select';
  payload: number;
}

interface SelectedState {
  maxIndex: number;
  selectedIndex: number;
}

const initialState = { selectedIndex: 0 };

const reducer = (state: SelectedState, action: SelectionAction) => {
  switch (action.type) {
    case 'arrowUp':
      return {
        ...state,
        selectedIndex:
          state.selectedIndex !== 0 ? state.selectedIndex - 1 : state.maxIndex,
      };
    case 'arrowDown':
      return {
        ...state,
        selectedIndex:
          state.selectedIndex !== state.maxIndex - 1 ? state.selectedIndex + 1 : 0,
      };
    case 'select':
      return { 
        ...state,
        selectedIndex: action.payload 
      };
    default:
      throw new Error();
  }
};

export function CommandPalette({ commands, className, style }: CommandPaletteProps) {
  const [selected, dispatch] = useReducer(reducer, {
    maxIndex: commands.size,
    selectedIndex: 0,
  });

  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');

  useEffect(() => {
    if (arrowUpPressed) {
      console.log('arrowUpPressed');
      dispatch({ type: 'arrowUp', payload: 0 });
    }
  }, [arrowUpPressed]);

  useEffect(() => {
    if (arrowDownPressed) {
      console.log('arrowDownPressed');
      dispatch({ type: 'arrowDown', payload: 0 });
    }
  }, [arrowDownPressed]);
  
  return (
    <div style={style} className={`${className}  bg-slate-700 p-4 rounded-md`}>
      <div className="flex flex-col justify-center bg-slate-800 border border-black">
        <PaletteHeader />
      { 
        [...commands].map(([key, cmd], i) => {
          return (
            <div key={key}  
              className="grid grid-cols-[5rem_5rem_auto_auto] items-start gap-2 
                p-2  border-b border-black cursor-default 
              hover:bg-slate-700"
              style={{
                backgroundColor: i === selected.selectedIndex ? 'rgb(55 65 81)' : "",
              }}
              role="button"
              aria-pressed={i === selected.selectedIndex}
              tabIndex={0}
              onClick={() => {
                dispatch({ type: 'select', payload: i });
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  dispatch({ type: 'select', payload: i });
                  // e.target.blur();
                }
              }}  
              >
              <div style={ getStyle(cmd.type) } 
                className="px-2 py-1 rounded-md text-xs w-fit">
                {cmd.type}
              </div>
              
              <div className=" font-medium text-sm ">{`/${key}`}</div>

              <div className="text-xs text-light italic text-white/70 px-2">
                {cmd.description}
              </div>
              
              <div className="flex justify-end ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                  className="w-4 h-4 cursor-pointer">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              
            </div>
          ) 
        }
      )}

      </div>
    </div>
  )
}