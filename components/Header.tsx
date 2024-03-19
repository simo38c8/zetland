'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="fixed z-50 flex h-16 w-full items-center justify-between bg-white px-5 shadow-md dark:bg-black lg:px-24">
      <NavigationMenu>
        <NavigationMenuList className="flex w-full justify-between">
          <Link href="/">
            <NavigationMenuItem>
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 overflow-hidden rounded-lg">
                  <Image
                    alt="Newspaper logo"
                    height="48"
                    src="/icons/placeholder.svg"
                    style={{
                      aspectRatio: '48/48',
                      objectFit: 'cover',
                    }}
                    width="48"
                  />
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold leading-none">
                    The Example <span className="text-primary">Times</span>
                  </h1>
                  <p className="text-sm text-gray-500">The most reliable source of fake news</p>
                </div>
              </div>
            </NavigationMenuItem>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header
