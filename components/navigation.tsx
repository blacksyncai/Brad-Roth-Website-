"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import type {Theme} from '@/lib/content';
const links=[['Meet Brad','#about']] as const;
export function Navigation({theme}:{theme:Theme}) {
 const [open,setOpen]=useState(false);
 return <header className={`site-header nav-${theme}`}>
  <Link href="/" className="brand-link" aria-label="Brad Roth Group — concept collection"><Image src="/brand/brg-original.png" alt="Brad Roth Group" width={1274} height={1074} priority/></Link>
  <nav aria-label="Main navigation" className="desktop-nav">{links.map(([label,href])=><a key={href} href={href}>{label}</a>)}</nav>
  <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15}/></a>
  <button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  {open&&<nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav">{[...links,['Let’s talk','#contact']].map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={18}/></a>)}</nav>}
 </header>;
}
