import { menuItems } from "@/app/lib/menu";
import { Text } from "../text/Text";

type SideMenuProps = {
  isOpen?: boolean;
};

export const SideMenu = ({ isOpen }: SideMenuProps) => {
  const show = "translate-x-0 transition-all duration-300 ease-in-out";
  const hide = "translate-x-[-100%] transition-all duration-300 ease-in-out";

  const openClose = `fixed z-50 top-1/2 -translate-y-[45%] w-7/12 h-4/5
      rounded-r-2xl pt-20 pb-20 pl-6 backdrop-blur-lg bg-opacity-60 bg-slate-300 
      border-2 border-t-app-primary border-r-app-primary border-b-app-primary
      ${isOpen ? hide : show}`;

  return (
    <aside className={openClose}>
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
