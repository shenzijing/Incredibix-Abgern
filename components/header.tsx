import Link from 'next/link';
import { ThemeToggle } from '@/components/theme-toggle';
import { Music2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Music2 className="h-6 w-6" />
          <span className="font-bold">Incredibox Abgerny</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="#features" className="text-sm hover:text-primary">
            Features
          </Link>
          <Link href="#how-to-play" className="text-sm hover:text-primary">
            How to Play
          </Link>
          <Link href="#faq" className="text-sm hover:text-primary">
            FAQ
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}