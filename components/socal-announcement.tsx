"use client";
import {useState} from 'react';
import {ArrowUpRight,X} from 'lucide-react';
export function SocalAnnouncement({editorial=false}:{editorial?:boolean}){
 const [visible,setVisible]=useState(true);
 if(!visible)return <div id="selling-socal"/>;
 return <aside className={`socal-announcement ${editorial?'socal-editorial':''}`} id="selling-socal" aria-label="Selling SoCal announcement"><div className="socal-popup"><a href="#contact"><span className="socal-popup-title">Brad Roth on Selling SoCal <ArrowUpRight size={13} aria-hidden="true"/></span><span className="socal-popup-detail">Coming soon to Apple TV <span className="apple-tv-mark" aria-hidden="true"/></span></a><button type="button" aria-label="Dismiss Selling SoCal announcement" onClick={()=>setVisible(false)}><X size={13}/></button></div></aside>;
}
