import React from 'react'
import { Section } from './utils/Section'
import { Button, buttonVariants } from './ui/button'
import { GithubIcon } from './icons/GithubIcon'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { TwitterIcon } from './icons/TwitterIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'

export const Header = () => {
  return (
    <header className='sticky bg-background top-0 py-4'>
        <Section className='flex items-baseline'>
            <h1 className='text-lg font-bold text-primary'>richarde.com</h1>
            {/* <p className='text-lg text-primary'>
                Software Engineer
            </p> */}
            <div className='flex-1' />
            <ul className='flex item-center gap-2'>
                <Link href="https://github.com/nomricharde"className={cn(buttonVariants({variant: 'outline'}), 'size-6 p-0')}>
                    <GithubIcon size={12} className='text-foreground'/>
                </Link>
                <Link href="#"className={cn(buttonVariants({variant: 'outline'}), 'size-6 p-0')}>
                    <TwitterIcon size={12} className='text-foreground'/>
                </Link>
                <Link href="https://www.linkedin.com/in/nomenjanahary-richardet-688857207/"className={cn(buttonVariants({variant: 'outline'}), 'size-6 p-0')}>
                    <LinkedInIcon size={12} className='text-foreground'/>
                </Link>
            </ul>
        </Section>
    </header>
  )
}
