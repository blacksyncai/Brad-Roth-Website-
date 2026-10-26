import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
const buttonVariants = cva('inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50', {variants:{variant:{default:'bg-primary text-primary-foreground hover:opacity-85',destructive:'bg-red-700 text-white',outline:'border border-current bg-transparent',secondary:'bg-secondary text-secondary-foreground',ghost:'hover:bg-white/20',link:'underline underline-offset-4'},size:{default:'h-11 px-6',sm:'h-9 px-3',lg:'h-12 px-8',icon:'h-12 w-12'}},defaultVariants:{variant:'default',size:'default'}});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
const Button = React.forwardRef<HTMLButtonElement,ButtonProps>(({className,variant,size,asChild=false,...props},ref)=>{const Comp=asChild?Slot:'button';return <Comp className={cn(buttonVariants({variant,size,className}))} ref={ref} {...props}/>;});
Button.displayName='Button';
export {Button,buttonVariants};
