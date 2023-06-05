export function PaletteHeader() {
  return (
    <div className="flex justify-between items-center border-b border-white/20 mb-1">
      
      <div className="flex justify-between gap-1 items-center p-2">
        <div className="bg-slate-900 font-mono text-xs p-1 rounded-sm border border-white/20">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        </div>
        <div className="text-xs text-white/50 font-mono">
          to navigate
        </div>
      </div>
      
      <div className="flex justify-between gap-1 items-center p-2">
        <div className="bg-slate-900 font-mono text-xs  p-1 rounded-sm border border-white/20">
          enter
        </div>
        <div className="text-xs text-white/50 font-mono">
          to select
        </div>
      </div>

      <div className="flex justify-between gap-1 items-center p-2">
        <div className="bg-slate-900 font-mono text-xs p-1 rounded-sm border border-white/20">
          esc
        </div>
        <div className="text-xs text-white/50 font-mono">
          to dismiss
        </div>
      </div>
    </div>
  )
}