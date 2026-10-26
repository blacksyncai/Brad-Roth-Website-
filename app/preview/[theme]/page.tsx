import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {themes,type Theme} from '@/lib/content';
import {ConceptPage} from '@/components/concept-page';
export function generateStaticParams(){return themes.map(t=>({theme:t.slug}));}
export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{theme:string}>}):Promise<Metadata>{const {theme}=await params;return {title:themes.find(t=>t.slug===theme)?.title??'Concept'};}
export default async function Preview({params}:{params:Promise<{theme:string}>}){const {theme}=await params;if(!themes.some(t=>t.slug===theme))notFound();return <ConceptPage theme={theme as Theme}/>;}
