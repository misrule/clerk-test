import {Button, Dialog, DialogTrigger, OverlayArrow, Popover} from 'react-aria-components';


type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
  more?: boolean;
}

function MenuItem({ icon, label, more = false}: MenuItemProps) {

  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-4 p-2">
      <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
      <div className="text-sm font-light">{label}</div>
      {more && <div>&gt;</div>}
    </div>
  )
}

type Props = {
  children?: React.ReactNode;
}
export default function AriaButton({ children }: Props) {

  return (
<DialogTrigger >
  <Button className="rounded-full">
    <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
  </Button>
  <Popover placement="bottom" crossOffset={-120}>
    {/* <OverlayArrow>
      <svg width={12} height={12}>
        <path d="M0 0,L6 6,L12 0" />
      </svg>
    </OverlayArrow> */}
    <Dialog className=" w-72 h-80 bg-slate-700">
      {/* USER PROFILE CARD */}
      <div className="relative flex flex-col items-center">
        <div className="h-20 w-full bg-slate-800"></div>
        <div className="flex flex-col items-center justify-end 
          h-28 w-full p-4 bg-slate-700 border border-slate-800">
          <span className=" font-medium ">Sy Smythe</span>
          <span className="text-xs">sy.smythe@gmail.com</span>
        </div>
        <div className="h-[5.5rem] aspect-square bg-slate-400 rounded-full
          absolute top-10"></div>
      </div>
      <div className="bg-slate-700">
      <MenuItem icon={<div>📝</div>} label="Sign Out" />
      <MenuItem icon={<div>📝</div>} label="My Account" />
      <MenuItem icon={<div>📝</div>} label="View Usage" />

      <div className="border-b border-white/20 mx-2" />
      <MenuItem icon={<div>📝</div>} label="Appearance: Theme" more={true}/>
      <MenuItem icon={<div>📝</div>} label="Language: English" more={true}/>
      <MenuItem icon={<div>📝</div>} label="Location: US" more={true}/>
      <MenuItem icon={<div>📝</div>} label="Keyboard Shortcuts" more={true}/>
      
      <div className="border-b border-white/20"/>
      <MenuItem icon={<div>📝</div>} label="Settings" />
      
      <div className="border-b border-white/20"/>
      <MenuItem icon={<div>📝</div>} label="Help" />
      <MenuItem icon={<div>📝</div>} label="Send Feedback" />
      </div>
    </Dialog>
  </Popover>
</DialogTrigger>
  )
}