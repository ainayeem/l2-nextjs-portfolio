"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiSolidMessageDetail } from "react-icons/bi";
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
    {
      href: "/dashboard/view-message",
      icon: <BiSolidMessageDetail className="h-5 w-5" />,
      label: "Messages",
    },
  ];

  return (
    <div className="min-h-screen p-2 lg:p-4 rounded-xl">
      <ul className="space-y-4">
        {sidebarItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`flex items-center rounded-md transition-colors 
            text-sm sm:text-base md:text-lg lg:text-xl
            ${pathname === item.href ? "text-teal-500 font-bold border-teal-500" : "dark:text-white hover:bg-teal-500 hover:text-white"}
          `}
            >
              <span className="hidden sm:inline-block sm:mr-3">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
