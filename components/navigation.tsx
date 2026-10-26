"use client";
import Image from 'next/image';
import Link from 'next/link';
import {useEffect,useRef,useState} from 'react';
import {Menu,X,ArrowUpRight,ChevronDown,Mail} from 'lucide-react';
import type {Theme} from '@/lib/content';
const groups={realEstate:[['Buying a home','#contact'],['Selling a home','#contact']],media:[['Selling SoCal','#selling-socal'],['Watch Brad','#main']]} as const;
export function Navigation({theme}:{theme:Theme}) {
 const [open,setOpen]=useState(false);
 const [dropdown,setDropdown]=useState<'realEstate'|'media'|null>(null);
 const header=useRef<HTMLElement>(null);
 useEffect(()=>{
  const outside=(event:PointerEvent)=>{if(!header.current?.contains(event.target as Node))setDropdown(null);};
  const escape=(event:KeyboardEvent)=>{if(event.key==='Escape'){setDropdown(null);setOpen(false);}};
  document.addEventListener('pointerdown',outside);document.addEventListener('keydown',escape);
  return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[]);
 const close=()=>{setOpen(false);setDropdown(null);};
 function menu(key:'realEstate'|'media',label:string){return <div className="nav-dropdown"><button type="button" aria-expanded={dropdown===key} aria-controls={`nav-${key}`} onClick={()=>setDropdown(dropdown===key?null:key)}>{label}<ChevronDown size={13} aria-hidden="true"/></button>{dropdown===key&&<div id={`nav-${key}`} className="nav-dropdown-panel">{groups[key].map(([text,href])=><a key={text} href={href} onClick={close}>{text}<ArrowUpRight size={13}/></a>)}</div>}</div>;}
 return <header ref={header} className={`site-header expanded-header nav-${theme}`}>
  <Link href="/" className="brand-link" aria-label="Brad Roth Group homepage"><Image src="/brand/brg-original.png" alt="Brad Roth Group" width={1274} height={1074} priority/></Link>
  <nav aria-label="Main navigation" className="desktop-nav"><a href="#about">About Brad</a>{menu('realEstate','Real Estate')}<a href="#brokerage">Brokerage</a>{menu('media','Media')}<a href="#contact">Contact</a></nav>
  <a className="header-contact" href="#contact"><Mail size={17} aria-hidden="true"/>Let’s talk</a>
  <button className="menu-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>{setOpen(!open);setDropdown(null);}}>{open?<X/>:<Menu/>}</button>
  {open&&<nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-nav"><a href="#about" onClick={close}>About Brad<ArrowUpRight size={16}/></a><details><summary>Real Estate<ChevronDown size={16}/></summary>{groups.realEstate.map(([text,href])=><a href={href} key={text} onClick={close}>{text}<ArrowUpRight size={14}/></a>)}</details><a href="#brokerage" onClick={close}>Brokerage<ArrowUpRight size={16}/></a><details><summary>Media<ChevronDown size={16}/></summary>{groups.media.map(([text,href])=><a href={href} key={text} onClick={close}>{text}<ArrowUpRight size={14}/></a>)}</details><a href="#contact" onClick={close}>Let’s talk<ArrowUpRight size={16}/></a></nav>}
 </header>;
}
