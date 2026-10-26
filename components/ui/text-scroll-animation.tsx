"use client";

import {useRef,type ReactNode} from 'react';
import {motion,useScroll,useTransform,useReducedMotion,type MotionValue} from 'framer-motion';
import {cn} from '@/lib/utils';

type CharacterProps={char:string;index:number;centerIndex:number;scrollYProgress:MotionValue<number>;reduced:boolean};

/** Adapted from the supplied Skiper31 CharacterV1: a visible, bounded scroll-driven assembly. */
function Character({char,index,centerIndex,scrollYProgress,reduced}:CharacterProps){
 const distance=Math.max(-8,Math.min(8,index-centerIndex));
 const x=useTransform(scrollYProgress,[0,.85],[distance*9,0]);
 const rotateX=useTransform(scrollYProgress,[0,.85],[distance*8,0]);
 const y=useTransform(scrollYProgress,[0,.85],[Math.abs(distance)*5,0]);
 const opacity=useTransform(scrollYProgress,[0,.85],[.3,1]);
 return <motion.span className="scroll-title-character" style={reduced?{x:0,y:0,rotateX:0,opacity:1}:{x,y,rotateX,opacity}}>{char}</motion.span>;
}

export function TextScrollAnimation({lead,text,id,className}:{lead:string;text:string;id?:string;className?:string}){
 const target=useRef<HTMLHeadingElement>(null);
 const {scrollYProgress}=useScroll({target,offset:['start 0.9','start 0.2']});
 const reduced=useReducedMotion();
 const center=(text.length-1)/2;
 const words=text.split(' ');
 return <h2 id={id} ref={target} className={cn('text-scroll-heading',className)} aria-label={`${lead} ${text}`}><span className="scroll-title-lead" aria-hidden="true">{lead}</span><span className="scroll-title-line" aria-hidden="true">{words.map((word,wordIndex)=>{const start=words.slice(0,wordIndex).join(' ').length+(wordIndex?1:0);return <span className="scroll-title-word" key={wordIndex}>{Array.from(word).map((char,letter)=><Character key={letter} char={char} index={start+letter} centerIndex={center} scrollYProgress={scrollYProgress} reduced={!!reduced}/>)}</span>;})}</span></h2>;
}

export function ScrollReveal({children,className,delay=0}:{children:ReactNode;className?:string;delay?:number}){
 const reduced=useReducedMotion();
 return <motion.div className={className} initial={reduced?false:{opacity:.3,y:64}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:reduced?0:.8,delay:reduced?0:delay,ease:[.22,1,.36,1]}}>{children}</motion.div>;
}
