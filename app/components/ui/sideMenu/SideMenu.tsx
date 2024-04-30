import { menuItems } from "@/app/lib/menu";
import { Text } from "../text/Text";

type SideMenuProps = {
  slide?: string;
};

export const SideMenu = ({ slide }: SideMenuProps) => {
  return (
    <aside
      className={`fixed z-50 top-1/2 -translate-y-[45%] w-7/12 h-4/6
      rounded-r-2xl pt-20 pb-20 pl-6 backdrop-blur-lg bg-opacity-60 bg-slate-300 
      border-2 border-t-app-primary border-r-app-primary border-b-app-primary 
      transition-all duration-300 ease-in-out ${slide}`}
    >
      <div className="relative h-full">
        <div
          className="absolute top-[-10px] bottom-[-10px]
                        left-0 border-l-2 border-slate-400"
        />
        <ul className="h-full flex flex-col gap-3 pl-3 overflow-auto">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Text tag="p" size="regular">
                {item.title}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
