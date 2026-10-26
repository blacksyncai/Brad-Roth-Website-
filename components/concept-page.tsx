import Image from 'next/image';
import Link from 'next/link';
import {ArrowUpRight,ArrowDown} from 'lucide-react';
import {themes,type Theme,content} from '@/lib/content';
import {Navigation} from '@/components/navigation';
import {Affiliation} from '@/components/shared';
import {Contact} from '@/components/contact';
import HoverPlayCard from '@/components/ui/hover-play-card';

export function ConceptPage({theme}:{theme:Theme}){
 const selected=themes.find(t=>t.slug===theme)!;
 const film=<HoverPlayCard autoPlay loop src="/media/brad-roth-commercial.mp4" poster="/media/commercial-poster.jpg" className="concept-hero-film"/>;
 return <div className={`theme theme-${theme} concept-only`}>
  <a className="skip-link" href="#main">Skip to content</a>
  <nav className="concept-topbar" aria-label="Homepage concepts"><span>BRG <span className="topbar-divider">/</span> Homepage concepts</span><div>{themes.map((t,i)=><Link key={t.slug} href={`/preview/${t.slug}/`} aria-current={theme===t.slug?'page':undefined} aria-label={`Concept ${i+1}: ${t.title}`}>{i+1}</Link>)}</div><span className="topbar-title">{selected.title}</span></nav>
  <Navigation theme={theme}/>
  <main id="main">
   {theme==='editorial'?<section className="short-hero short-editorial">{film}<div className="short-hero-copy"><p className="eyebrow">BRAD ROTH GROUP · EQUITY UNION</p><h1>Your next chapter.<br/><em>Starts here.</em></h1><p>A personal perspective on a place to call home.</p><a href="#about" className="short-hero-action">Discover Brad <ArrowDown size={16}/></a></div><span className="short-film-caption">A PERSONAL INTRODUCTION / BRAD ROTH</span></section>
   :theme==='architectural'?<section className="short-hero short-architectural"><div className="short-arch-masthead"><p className="eyebrow">BRAD ROTH GROUP / A PERSONAL PERSPECTIVE</p><h1>BRAD<br/>ROTH.</h1><p className="short-arch-bio">Brad Roth is the name behind Brad Roth Group, affiliated with Equity Union. A personal perspective on real estate—and your next chapter.</p><a href="#about">GET TO KNOW BRAD <ArrowUpRight size={18}/></a></div><div className="short-arch-video">{film}<span className="short-film-caption">REAL ESTATE. PERSONALLY CONSIDERED.</span></div></section>
   :<section className="short-hero short-california"><div className="short-california-copy"><p className="eyebrow">BRAD ROTH GROUP · EQUITY UNION</p><h1>Make room<br/>for <em>what’s next.</em></h1><p>A home. A feeling. A new beginning.<br/>Let’s explore what that looks like for you.</p><a href="#about" className="action solid">A personal introduction <ArrowDown size={16}/></a><span className="california-signoff">A little more light.<br/>A little more possibility.</span></div><div className="short-california-video">{film}</div></section>}
   <section id="about" className="short-intro"><div className="short-intro-portrait"><Image src={theme==='architectural'?'/media/brad-headshot.webp':'/media/brad-portrait.webp'} alt="Brad Roth’s supplied portrait" width={theme==='architectural'?1111:619} height={theme==='architectural'?1449:586}/></div><div className="short-intro-copy"><p className="eyebrow">Meet Brad Roth</p><h2>{theme==='architectural'?<>ONE AGENT.<br/>YOUR NEXT CHAPTER.</>:theme==='california'?<>Your next chapter,<br/><em>with Brad.</em></>:<>Real estate.<br/><em>Personally considered.</em></>}</h2><p>{content.introduction}</p></div><div className="short-intro-contact"><Affiliation/><p>{content.about}</p><details id="contact" className="concept-inquiry"><summary className="action">Let’s start a conversation <ArrowUpRight size={16}/></summary><Contact sectionId="inquiry"/></details></div></section>
  </main>
  <footer className="short-footer"><span>BRAD ROTH GROUP · EQUITY UNION</span><span>Design concept {selected.number} · Contact details and disclosures pending confirmation.</span></footer>
 </div>;
}
