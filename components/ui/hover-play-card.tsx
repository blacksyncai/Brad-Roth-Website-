"use client";

import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type HoverPlayCardProps = {src:string;poster?:string;className?:string;loop?:boolean;mutedOnHover?:boolean;autoPlay?:boolean};

/** User-supplied HoverPlayCard, adapted for touch, keyboard, reduced motion and native controls. */
export default function HoverPlayCard({src,poster,className,loop=false,mutedOnHover=true,autoPlay=false}:HoverPlayCardProps) {
 const videoRef=useRef<HTMLVideoElement>(null);
 const pointerInside=useRef(false);
 const manual=useRef(false);
 const [userStarted,setUserStarted]=useState(false);
 const [isPlaying,setIsPlaying]=useState(false);
 const [failed,setFailed]=useState(false);
 const reduce=useReducedMotion();
 useEffect(()=>{
  if(!autoPlay)return;
  const v=videoRef.current;if(!v)return;
  const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
  const sync=()=>{if(preference.matches){v.pause();v.autoplay=false;}else if(!manual.current){v.muted=true;v.autoplay=true;void v.play().catch(()=>{});}};
  sync();preference.addEventListener('change',sync);
  return ()=>preference.removeEventListener('change',sync);
 },[autoPlay]);
 async function enter() {
  pointerInside.current=true;
  const v=videoRef.current;
  if(!v || manual.current || reduce || !mutedOnHover || !window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
  v.muted=true;
  try {await v.play(); if(!pointerInside.current && !manual.current) v.pause();} catch {/* Click-to-play remains available when autoplay is blocked. */}
 }
 function leave() {pointerInside.current=false;if(!manual.current&&!autoPlay) videoRef.current?.pause();}
 async function toggle() {
  const v=videoRef.current;if(!v)return;
  if(manual.current && !v.paused) {v.pause();return;}
  manual.current=true;setUserStarted(true);v.muted=false;
  try {await v.play();}catch {setFailed(true);}
 }
 return <div className={cn('film-player',className)} onPointerEnter={()=>void enter()} onPointerLeave={leave}>
  <video ref={videoRef} src={src} poster={poster} loop={loop} muted={autoPlay&&!userStarted} autoPlay={autoPlay&&!reduce} playsInline controls={userStarted} preload={autoPlay?'auto':'none'} aria-label="Brad Roth’s supplied 30-second commercial" onPlay={()=>setIsPlaying(true)} onPause={()=>setIsPlaying(false)} onEnded={()=>{setIsPlaying(false);}} onError={()=>setFailed(true)}/>
  <motion.div className="film-control" initial={false} animate={{opacity:1}} transition={{duration:reduce?0:.2}}>
   <Button type="button" variant="ghost" size="icon" onClick={()=>void toggle()} aria-label={userStarted&&isPlaying?'Pause video':isPlaying?'Watch video with sound':'Play video with sound'} className="film-play">
    {userStarted&&isPlaying?<Pause size={21}/>:isPlaying?<Volume2 size={21}/>:<Play size={21}/>}
   </Button>
   <span aria-live="polite">{isPlaying?(userStarted?'Playing with sound':'Muted preview'):'Watch Brad’s film'}<small>30 seconds</small></span>
  </motion.div>
  {failed&&<p className="film-error" role="status">Video unavailable in this browser. <a href={src} download>Download the film</a>.</p>}
 </div>;
}
