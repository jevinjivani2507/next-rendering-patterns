"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="mb-8">
      <div className="max-w-xl mx-auto">
        <div className="bg-muted inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]">
          <Link
            href="/ssr"
            className={cn(
              "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
              pathname === "/ssr" && "bg-background text-foreground shadow-sm"
            )}
          >
            SSR
          </Link>
          <Link
            href="/csr"
            className={cn(
              "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
              pathname === "/csr" && "bg-background text-foreground shadow-sm"
            )}
          >
            CSR
          </Link>
          <Link
            href="/ssg"
            className={cn(
              "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
              pathname === "/ssg" && "bg-background text-foreground shadow-sm"
            )}
          >
            SSG
          </Link>
          <Link
            href="/isr"
            className={cn(
              "inline-flex h-[calc(100%-1px)] items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm",
              pathname === "/isr" && "bg-background text-foreground shadow-sm"
            )}
          >
            ISR
          </Link>
        </div>
      </div>
    </nav>
  );
}
