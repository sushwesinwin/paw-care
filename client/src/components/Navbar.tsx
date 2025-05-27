import { Menu } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Outlet } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blog" },
  { name: "Adoption 🤍", href: "/adoption" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 w-full shadow-sm bg-background/95 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-4xl text-green-600">PawCare</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-20">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-md font-semibold transition-colors text-gray-500 hover:text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/sign-in"
            className="font-semibold text-md text-gray-600 hover:text-gray-900"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="bg-green-600 text-white hover:bg-green-600/80 px-6 py-2 rounded-full transition-all ease-in-out duration-300 font-semibold text-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-white/80 backdrop-blur-md border-l border-gray-200 p-10"
          >
            <div className="flex flex-col space-y-4 mt-8 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-lg font-semibold transition-colors text-gray-900 hover:text-green-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Link
                  to="/sign-in"
                  className="font-semibold text-md text-gray-600 hover:text-gray-900"
                >
                  Sign In
                </Link>
               
                <Link
                  to="/sign-up"
                  className="bg-green-600 text-white hover:bg-green-600/80 rounded-full p-2 transition-all ease-in-out duration-300 font-semibold text-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
    <Outlet />
    </>
  );
}
