import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faChevronRight, faKeyboard, faLanguage, faLocationDot, faMoon, faRightToBracket, faSun, faUserGear } from '@fortawesome/free-solid-svg-icons'

interface DropdownItemProps {
  onSelect?: () => void;
  icon?: React.ReactNode;
  label: string;
  children?: React.ReactNode;
}
function DropdownItem({onSelect,icon, label, children}: DropdownItemProps ) {
  return (
    <DropdownMenu.Item onSelect={onSelect} 
      className="grid grid-cols-[1.5rem_1fr_auto] gap-4 p-2 cursor-default ">
        {icon 
          ? icon
          : <div className="w-4 h-4 bg-slate-400 rounded-full"/>}
      
      <div className="text-sm font-light">{label}</div>
      {children}
    </DropdownMenu.Item>
  )
}
export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="rounded-full">
          <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="bg-slate-700 rounded-md p-4 w-72 ">
          <DropdownItem label="Sign Out" icon={<FontAwesomeIcon icon={faRightToBracket} />}/>
          <DropdownItem label="My Account" icon={<FontAwesomeIcon icon={faUserGear} />} />
          <DropdownItem label="View Usage" icon={<FontAwesomeIcon icon={faChartSimple} />} />
          <div className="border-b border-white/20 mx-2" />
          <DropdownMenu.Separator />
   
          <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger>
            <div className="grid grid-cols-[1.5rem_1fr_auto] gap-4 p-2 text-sm font-light cursor-default">
            <FontAwesomeIcon icon={faMoon} />
              Appearance: Theme
              <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </DropdownMenu.SubTrigger>              
            

            <DropdownMenu.Portal>
              <DropdownMenu.SubContent
                sideOffset={2}
                alignOffset={-5}
             className="bg-slate-700 rounded-md shadow-md" >
                <DropdownItem label="Use Device Theme" />
                <DropdownItem label="Light Theme" />
                <DropdownItem label="Dark Theme" />
              </DropdownMenu.SubContent>
            </DropdownMenu.Portal>
          </DropdownMenu.Sub>
          <DropdownItem label="Language: English" icon={<FontAwesomeIcon icon={faLanguage} />}/>
          <DropdownItem label="Location: US" icon={<FontAwesomeIcon icon={faLocationDot} />}/>
          <DropdownItem label="Keyboard Shortcuts" icon={<FontAwesomeIcon icon={faKeyboard} />}/>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}