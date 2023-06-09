import React from "react";
import classNames from "classnames";
import {
  ChatBubbleLeftEllipsisIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { NavigationLink } from "./NavigationLink";

const navigation = [
  { name: "Chat", href: "/app/chat", icon: ChatBubbleLeftEllipsisIcon },
  { name: "Projects", href: "/app/projects", icon: FolderIcon },
  { name: "Agents", href: "/app/agents", icon: UsersIcon },
  { name: "Templates", href: "/app/templates", icon: DocumentDuplicateIcon },
];

export type SidebarLayoutProps = {};

export const SidebarLayout: React.FC<SidebarLayoutProps> = ({}) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-orange-400 px-6 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt="Your Company"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <NavigationLink {...item} />
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto">
            <NavigationLink href="#" name="Settings" icon={Cog6ToothIcon} />
          </li>
        </ul>
      </nav>
    </div>
  );
};
