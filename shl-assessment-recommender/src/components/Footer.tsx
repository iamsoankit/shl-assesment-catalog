"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">SHL Assessment Recommender</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              An intelligent recommendation system that helps hiring managers find the right assessments for their recruitment needs.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-600 hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <a
                  href="https://www.shl.com/solutions/products/product-catalog/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  SHL Catalog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">API</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  API Overview
                </a>
              </li>
              <li>
                <a
                  href="/api/recommend?query=Java developers&max=3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Example API Request
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} SHL Assessment Recommender. All rights reserved.</p>
          <p className="mt-2">
            This is a demonstration project. Not affiliated with SHL Group Holdings.
          </p>
        </div>
      </div>
    </footer>
  );
}
