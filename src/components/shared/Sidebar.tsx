"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaHome, FaPencilAlt } from "react-icons/fa";
import { PiProjectorScreenChartFill } from "react-icons/pi";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarItems = [
    {
      href: "/dashboard",
      icon: <FaHome className="h-5 w-5" />,
      label: "Dashboard",
    },
    {
      href: "/dashboard/blogs",
      icon: <FaPencilAlt className="h-5 w-5" />,
      label: "Blogs",
    },
    {
      href: "/dashboard/create-project",
      icon: <PiProjectorScreenChartFill className="h-5 w-5" />,
      label: "Projects",
    },
  ];

  return (
    <div className="min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        {sidebarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center space-x-2 p-3 rounded-md transition-colors ${
                pathname === item.href ? "text-teal-500 font-bold border-b-2 border-teal-500" : "dark:text-white hover:bg-teal-500 hover:text-white"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
