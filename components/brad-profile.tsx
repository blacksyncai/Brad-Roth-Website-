import {ArrowUpRight} from 'lucide-react';
import {TextScrollAnimation,ScrollReveal} from '@/components/ui/text-scroll-animation';
const highlights=[
 {value:'$400M+',label:'Sales volume',detail:'Real estate, personally considered.'},
 {value:'24+',label:'Years of experience',detail:'A personal perspective on Southern California real estate.'},
 {value:'Equity Union',label:'Brokerage affiliation',detail:'An independent personal identity. An established brokerage connection.'},
 {value:'Selling SoCal',label:'A new chapter',detail:'Brad Roth on Selling SoCal. Coming soon to Apple TV.'},
] as const;
export function BradProfile(){return <section className="brad-profile" aria-labelledby="brad-profile-title"><div className="brad-profile-heading"><p className="eyebrow">BRAD ROTH GROUP / A BROADER PERSPECTIVE</p><TextScrollAnimation id="brad-profile-title" lead="REAL ESTATE." text="BEYOND THE ADDRESS."/><p>A personal approach to Southern California real estate. The perspective of Brad Roth Group, the brokerage connection of Equity Union, and a new chapter on screen with Selling SoCal.</p></div><dl className="brad-highlights">{highlights.map((h,i)=><ScrollReveal className={`brad-highlight ${i===0?'brad-highlight-primary':''}`} delay={i*.14} key={h.label}><dt><span className="highlight-index">0{i+1}</span>{h.label}</dt><dd><strong>{h.value}</strong><p>{h.detail}</p></dd></ScrollReveal>)}</dl><div className="brad-profile-bottom"><span>YOUR NEXT CHAPTER. A PERSONAL CONVERSATION.</span><a href="#inquiry">Work with Brad <ArrowUpRight size={16}/></a></div></section>;}
