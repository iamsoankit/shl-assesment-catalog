"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link href="/" className="font-bold text-xl">
            SHL Assessment Recommender
          </Link>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className={`${pathname === "/" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/docs"
                className={`${pathname === "/docs" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-blue-600 font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                About
              </Link>
            </li>
            <li>
              <Button asChild variant="outline">
                <a href="https://www.shl.com/solutions/products/product-catalog/" target="_blank" rel="noopener noreferrer">
                  SHL Catalog
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
