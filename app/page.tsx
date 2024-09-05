"use client"
import Image from "next/image";
import { motion } from 'framer-motion'
import { Header } from "@/Components/Header";
import { Features } from "@/Components/Features";
import { TeamProfiles } from '@/Components/TeamProfiles'
import { About } from '@/Components/About'
import { CTA } from '@/Components/CTA'
import { Footer } from '@/Components/Footer'


export default function Home() {
  return (
    <section className="w-screen mx-0 px-0">
      <Header />
      <div className="relative z-[15] flex flex-col justify-center bg-gray-900">
      <About />
      <Features />
      <TeamProfiles/>
      <CTA />
      <Footer />
      </div>
    </section>
  );
}
