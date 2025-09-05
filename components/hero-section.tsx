"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl mb-6 text-balance">
              {"Hi, I'm "}
              <span className="text-cyan-400">Vikas Sharma</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-200 text-pretty">
              Full Stack Web Developer specializing in React, Next.js, and modern web technologies
            </p>
            <p className="mb-8 text-gray-300 text-pretty text-2xl">
              Passionate about creating scalable applications and delivering exceptional user experiences. 
            </p>

            {/* Desktop CTA: visible only on lg+, hidden on mobile/tablet */}
            <div className="hidden lg:flex gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="secondary" onClick={scrollToProjects} className="font-semibold">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 font-semibold"
                asChild
              >
                <a href="https://drive.google.com/file/d/1C55qPqI3vZmyrQAg7swlb4gu-NaGZFPq/view?usp=sharing" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="md:order-1 lg:order-2 flex flex-col items-center justify-center lg:justify-end">
            <div className="relative mb-6 sm:mb-0">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl">
                <Image
                  src="/images/vikas-profile.jpg"
                  alt="Vikas Sharma"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-4xl text-black">👋</span>
              </div>
            </div>
            {/* Mobile/Tablet CTA: shown below image on < lg */}
            <div className="mt-6 md:mt-10 w-full flex lg:hidden flex-col gap-4 justify-center">
              <Button size="lg" variant="secondary" onClick={scrollToProjects} className="font-semibold w-full md:w-64 self-center">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-slate-900 font-semibold w-full md:w-64 self-center"
                asChild
              >
                <a href="https://drive.google.com/file/d/1C55qPqI3vZmyrQAg7swlb4gu-NaGZFPq/view?usp=sharing" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
