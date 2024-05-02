import { menuItems } from "@/app/lib/menu";
import { Text } from "../text/Text";

type SideMenuProps = {
  isOpen?: boolean;
  inView?: boolean;
  highlight?: string;
};

export const SideMenu = ({ isOpen, inView, highlight }: SideMenuProps) => {
  const show = "translate-x-0 transition-all duration-300 ease-in-out";
  const hide = "translate-x-[-100%] transition-all duration-300 ease-in-out";

  const openClose = `fixed z-30 top-1/2 -translate-y-[45%] w-7/12 h-4/5
      rounded-r-2xl pt-20 pb-20 pl-4 backdrop-blur-lg bg-opacity-60 bg-slate-300 
      border-2 border-t-app-primary border-r-app-primary border-b-app-primary
      ${isOpen ? show : hide}`;

  return (
    <aside className={openClose}>
      <div className="relative h-full">
        {/* <span
          className="absolute top-[-20px] bottom-[-20px]
                        left-0 border-l-2 border-slate-400"
        /> */}
        <span className="absolute w-1 h-full border-1 bg-slate-400" />
        <ul className="h-full flex flex-col gap-3 pt-2 pb-2 overflow-auto">
          {menuItems.map((item) => (
            <li key={item.id}>
              {highlight === item.title ? (
                <div className="border-b-2 border-slate-400">
                  <Text tag="p" size="regular" weight="semibold" className="pl-3">
                    {item.title}
                  </Text>
                </div>
              ) : (
                <Text tag="p" size="regular" className="pl-3">
                  {item.title}
                </Text>
              )}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
