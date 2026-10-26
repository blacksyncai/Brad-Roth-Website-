"use client";
import {useEffect,type ReactNode} from 'react';
import {useReducedMotion} from 'framer-motion';
import ReactLenis from 'lenis/react';

export function SmoothScroll({children,enabled}:{children:ReactNode;enabled:boolean}){
 const reduced=useReducedMotion();
 useEffect(()=>{
  if(!enabled)return;
  const revealTarget=(event:MouseEvent)=>{
   const anchor=(event.target as Element)?.closest?.('a[href^="#"]');
   const href=anchor?.getAttribute('href');if(!href||href.length<2)return;
   let target:HTMLElement|null=null;
   try{target=document.getElementById(decodeURIComponent(href.slice(1)));}catch{return;}
   while(target){if(target instanceof HTMLDetailsElement)target.open=true;target=target.parentElement;}
  };
  document.addEventListener('click',revealTarget,true);
  return()=>document.removeEventListener('click',revealTarget,true);
 },[enabled]);
 if(!enabled||reduced)return <>{children}</>;
 return <ReactLenis root options={{autoRaf:true,lerp:.1,smoothWheel:true,syncTouch:false,anchors:{offset:-60}}}>{children}</ReactLenis>;
}
