import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:{default:'Brad Roth Group — Three perspectives',template:'%s | Brad Roth Group'},description:'Three distinct homepage concepts for Brad Roth Group, affiliated with Equity Union.',robots:{index:false,follow:false}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>;}
