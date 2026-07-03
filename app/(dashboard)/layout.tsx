'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut, Sparkles } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from '@/app/(login)/actions';
import { usePathname, useRouter } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  if (!user) {
    return (
      <>
        <Link
          href="/pricing"
          className="text-sm font-medium text-[#111827] hover:text-[#2563eb]"
        >
          Pricing
        </Link>

        <Link
          href="/sample-report"
          className="hidden text-sm font-medium text-[#111827] hover:text-[#2563eb] sm:block"
        >
          Sample Report
        </Link>

        <Button
          asChild
          className="rounded-xl border-2 border-[#111827] bg-[#111827] text-white shadow-[0_4px_0_#2563eb] hover:bg-[#1f2937]"
        >
          <Link href="/diagnostic">Start Diagnostic</Link>
        </Button>
      </>
    );
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9 border-2 border-[#111827]">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback className="bg-[#2563eb] text-white">
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>

        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <header className="border-b-2 border-[#111827] bg-[#f7f9fc]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-[#111827] bg-[#2563eb] text-white shadow-[0_4px_0_#111827]">
            <Sparkles className="h-5 w-5" />
          </div>

          <div>
            <span className="block text-lg font-bold leading-none text-[#111827]">
              CaseReady
            </span>
            <span className="text-xs font-medium text-slate-500">
              AI Consulting Prep OS
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex min-h-screen flex-col bg-[#f7f9fc]">
      <Header />
      {children}
    </section>
  );
}