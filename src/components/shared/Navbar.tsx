"use client";
import { Menu, X } from "lucide-react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/mode-toggle";

type UserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

const Navbar = ({ session }: { session: UserProps | null }) => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 lg:px-0 border-b container mx-auto">
      <div className="flex items-center">
        <Link href="/" className="text-xl font-bold text-teal-500">
          &lt; <span className="text-black dark:text-white">Nayeem</span> /&gt;
        </Link>
      </div>
      {/* Mobile Menu */}
      <button className="md:hidden p-2 rounded focus:outline-none focus:ring" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* pc */}
      <div className="hidden md:flex items-center space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${pathname === href ? "text-teal-500 font-bold border-b-2 border-teal-500" : "dark:text-white hover:text-primary"}`}
          >
            {label}
          </Link>
        ))}
      </div>
      {/* Authentication & Theme Toggle */}
      <div className="hidden md:flex items-center">
        {session?.user ? (
          <Button className="px-5 py-1.5 rounded-md transition duration-200 mr-4" onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          <Button asChild className="px-5 py-1.5 rounded-md transition duration-200 mr-4">
            <Link href="/login">Login</Link>
          </Button>
        )}
        <ModeToggle />
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-0 min-w-[50%] bg-white dark:bg-black shadow-md p-4 flex flex-col items-center md:hidden rounded-md mr-5 z-50">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="block py-2 text-lg text-black dark:text-white hover:text-teal-500"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          {/* Mobile Authentication */}
          {session?.user ? (
            <Button className="w-full mt-4" onClick={() => signOut()}>
              Logout
            </Button>
          ) : (
            <Button asChild className="w-full my-4">
              <Link href="/login">Login</Link>
            </Button>
          )}

          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
