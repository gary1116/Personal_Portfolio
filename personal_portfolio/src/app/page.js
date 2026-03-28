'use client'
import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Image from "next/image";

export default function Home() {
  return (
   <div className="">
    <Hero/>
    <About/>
    <Experience />
   </div>
  );
}
