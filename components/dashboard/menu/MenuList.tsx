"use client";
import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Import Lucide Icons
import {
  Home,
  LayoutTemplate,
  MousePointerClick,
  Anchor,
  Settings,
} from "lucide-react";

type MenuListProps = {
  menuList: Global.Menu.MenuItem[];
  // iconMapping: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>>;
};

const MenuList: FC<MenuListProps> = ({ menuList }) => {
  const pathName = usePathname();

  // Declare Icons for mapping
  const iconMapping: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    Home,
    LayoutTemplate,
    MousePointerClick,
    Anchor,
    Settings,
  };

  return (
    <ul className="w-full flex flex-col gap-3 justify-center items-center">
      {menuList.map((menu, index) => {
        const Icon = iconMapping[menu.icon];
        return (
          <li
            key={index}
            className={`${pathName === `${menu.link}` ? "w-full group py-2 bg-slate-100 rounded-md" : "w-full group py-2 group hover:bg-slate-100 hover:transition-all hover:ease-in rounded-md"}`}
          >
            <Link href={menu.link}>
              <div
                className={`${pathName === `${menu.link}` ? "flex flex-col items-center justify-center gap-2 text-slate-900" : "flex flex-col items-center justify-center gap-2 group-hover:text-slate-900 group-hover:transition-all group-hover:ease-in"}`}
              >
                <Icon className="w-6 h-6" />
                <p className="text-sm">{menu.title}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuList;
