"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ElementType;
}

export const NavigationLink: React.FC<NavigationItem> = ({
  name,
  href,
  icon: Icon,
}) => {
  const currentPath = usePathname();
  const isActive = href === currentPath;

  const linkClasses = classNames(
    isActive
      ? "bg-orange-600 text-white"
      : "text-stone-800 hover:text-white hover:bg-orange-500",
    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
  );

  const iconClasses = classNames(
    isActive ? "text-white" : "text-stone-800 group-hover:text-white",
    "h-6 w-6 shrink-0"
  );

  return (
    <Link href={href} className={linkClasses}>
      <Icon className={iconClasses} aria-hidden="true" />
      {name}
    </Link>
  );
};
