"use client";
import {useState} from 'react';
import {ArrowUpRight,Check} from 'lucide-react';
export function Contact({sectionId='contact'}:{sectionId?:string}) {
 const [ready,setReady]=useState(false);
 return <section id={sectionId} className="contact-section section-pad">
  <div><p className="eyebrow">Your next chapter</p><h2>It starts with<br/><em>a conversation.</em></h2><p className="contact-intro">Buying, selling, or simply considering what comes next. Tell Brad what’s on your mind.</p><p className="prototype-note">Inquiry preview only. Nothing is sent or saved. Contact destinations will be connected after confirmation.</p></div>
  <form onSubmit={e=>{e.preventDefault();setReady(true);}} onChange={()=>setReady(false)}>
   <div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="First and last name" maxLength={120}/></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" maxLength={254}/></label></div>
   <label>I’m interested in<select name="interest" defaultValue=""><option value="" disabled>Select a conversation</option><option>Buying a home</option><option>Selling a home</option><option>Exploring communities</option><option>Something else</option></select></label>
   <label>A little about your plans<textarea name="message" rows={3} placeholder="What would you like to discuss?" maxLength={2000}/></label>
   <button type="submit" className="action solid">Preview my inquiry <ArrowUpRight size={17}/></button>
   {ready&&<p role="status" className="form-success"><Check size={18}/> Your inquiry preview is ready. This prototype has not sent your details. A live contact destination is still to be confirmed.</p>}
  </form>
 </section>;
}
