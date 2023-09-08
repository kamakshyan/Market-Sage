// import { type ClassValue, clsx } from "clsx"
const { type: ClassValue, clsx } = require('clsx');


import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs))
}
