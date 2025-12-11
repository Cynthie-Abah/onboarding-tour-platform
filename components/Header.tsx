'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Compass, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export function Header() {
  const pathname = usePathname();
//   const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 border-b bg-gray-100/80 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo - Left */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <Compass className="h-6 w-6 text-[#2A1E5C]" />
          </motion.div>
          <span className="font-bold text-xl group-hover:text-[#2A1E5C] transition-colors">TourGuide</span>
        </Link>

        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-[#2A1E5C] relative ${
                isActive('/') ? 'text-[#2A1E5C]' : 'text-muted-foreground'
              }`}
            >
              Home
              {isActive('/') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2A1E5C]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-[#2A1E5C] relative ${
                isActive('/about') ? 'text-[#2A1E5C]' : 'text-muted-foreground'
              }`}
            >
              About
              {isActive('/about') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2A1E5C]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
            <Link
              href="/docs"
              className={`text-sm font-medium transition-colors hover:text-[#2A1E5C] relative ${
                isActive('/docs') ? 'text-[#2A1E5C]' : 'text-muted-foreground'
              }`}
            >
              Documentation
              {isActive('/docs') && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#2A1E5C]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>
        </div>

        {/* Sign In Button - Right */}
        <div className="hidden md:flex items-center">
          <Link href="/login">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="bg-linear-to-br from-[#2A1E5C] via-[#2A1E5Cee] to-[#2A1E5Ccc] hover:from-[#2A1E5C]/90 hover:to-[#2A1E5Cee]/90 text-white rounded-full px-6">
                Sign In
              </Button>
            </motion.div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg hover:bg-brand-teal/10 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-brand-teal" />
          ) : (
            <Menu className="h-6 w-6 text-brand-teal" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden border-t bg-white/95 backdrop-blur-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive('/')
                    ? 'bg-brand-teal/20 text-brand-teal'
                    : 'text-slate-600 hover:bg-brand-teal/10'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive('/about')
                    ? 'bg-brand-teal/20 text-brand-teal'
                    : 'text-slate-600 hover:bg-brand-teal/10'
                }`}
              >
                About
              </Link>
              <Link
                href="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive('/docs')
                    ? 'bg-brand-teal/20 text-brand-teal'
                    : 'text-slate-600 hover:bg-brand-teal/10'
                }`}
              >
                Documentation
              </Link>
              <Link
                href="/login"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-linear-to-r from-brand-teal to-brand-sky hover:from-brand-teal/90 hover:to-brand-sky/90 text-white rounded-full">
                  Sign In
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
