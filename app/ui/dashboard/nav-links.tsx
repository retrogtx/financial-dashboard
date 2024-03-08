'use client';
import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ...

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'Documents', href: '/documents', icon: DocumentDuplicateIcon },
    { name: 'Team', href: '/team', icon: UserGroupIcon },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              pathname === link.href && 'bg-sky-100 text-blue-600'
            )}
          >
            <LinkIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}