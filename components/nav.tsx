import Link from "next/link"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "PROJECTS", href: "/projects" },
  { name: "RESUME", href: "/resume" },
  { name: "CONTACTS", href: "/contacts" },
]

export function Nav() {
  return (
    <div className="flex">
      {/* Vertical name */}
      <div className="w-[150px] bg-main p-4 min-h-screen flex items-center">
        <div className="rotate-[270deg] transform origin-center whitespace-nowrap text-2xl font-bold tracking-widest">
          Yeunwook Kim
        </div>
      </div>

      {/* Navigation header */}
      <div className="flex-1">
        <nav className="flex border-b-2 border-border">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-8 py-4 text-foreground hover:bg-main transition-colors border-r-2 border-border",
                "last:border-r-0"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button className="ml-auto px-8 border-l-2 border-border">
            🌞
          </button>
        </nav>
      </div>
    </div>
  )
} 