import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brown-900 text-cream py-12">
      <div className="container-custom">
        <div className="text-center">
          <Link href="/">
            <div className="elegant-serif text-2xl mb-4 cursor-pointer">Therosessom .</div>
          </Link>
          <p className="text-cream/70 mb-6">
            Creating beautiful websites for your brands
          </p>
          <div className="hidden flex justify-center space-x-6">
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-cream/70 hover:text-cream transition-colors">
              Terms of Service
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-cream/20">
            <p className="text-cream/50 text-sm">
              © 2025 Therosessom. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}