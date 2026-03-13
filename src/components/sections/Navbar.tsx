import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-1";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-brand-navy hidden sm:inline-block">
              IIT Delhi | DMS
            </span>
            <span className="text-xl font-bold text-brand-navy sm:hidden">
              IITD | DMS
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex flex-row space-x-2">
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#home" className={navigationMenuTriggerStyle()} />}
                >
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#about" className={navigationMenuTriggerStyle()} />}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#project" className={navigationMenuTriggerStyle()} />}
                >
                  Project
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#impact" className={navigationMenuTriggerStyle()} />}
                >
                  Impact
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#testimonials" className={navigationMenuTriggerStyle()} />}
                >
                  Testimonials
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  render={<a href="#contact" className={navigationMenuTriggerStyle()} />}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Toggle (hamburger) -> To be fully interactive later if needed, but styling as vertical stacked list for simplicity per requirements. We can use a simple details/summary or a state toggle. */}
          <div className="md:hidden flex items-center">
            {/* Simple Checkbox Hack for Mobile Menu */}
            <label htmlFor="mobile-menu" className="cursor-pointer p-2">
              <svg className="h-6 w-6 text-brand-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
            <input type="checkbox" id="mobile-menu" className="peer hidden" />
            <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-md transform origin-top scale-y-0 opacity-0 transition-all duration-300 peer-checked:scale-y-100 peer-checked:opacity-100 flex flex-col items-center py-4 space-y-2">
              <a href="#home" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">Home</a>
              <a href="#about" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">About</a>
              <a href="#project" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">Project</a>
              <a href="#impact" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">Impact</a>
              <a href="#testimonials" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">Testimonials</a>
              <a href="#contact" className="text-brand-navy font-medium w-full text-center py-2 hover:bg-gray-50">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
