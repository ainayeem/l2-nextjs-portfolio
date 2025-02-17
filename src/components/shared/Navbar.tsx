"use client";
import Link from "next/link";
// import { ModeToggle } from "../ui/mode-toggle";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 border-b container mx-auto">
      <div className="flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold">Nayeem</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-6">
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

      <div className="flex items-center">
        {session?.user ? (
          // Logout Button
          <Button className="px-5 py-1.5 rounded-md transition duration-200 mr-4" onClick={() => signOut()}>
            Logout
          </Button>
        ) : (
          // Login Button
          <Button asChild className="px-5 py-1.5 rounded-md transition duration-200 mr-4">
            <Link href="/login">Login</Link>
          </Button>
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
