"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Linkedin, Mail } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div
            className={`font-heading font-bold text-xl transition-all duration-300 ${
              scrolled ? "text-primary opacity-100" : "text-white opacity-0 pointer-events-none"
            }`}
          >
            Vikas Sharma
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className={`transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`transition-colors ${
                scrolled ? "text-foreground hover:text-primary" : "text-white hover:text-white/80"
              }`}
            >
              Contact
            </button>

            <div className="flex items-center space-x-4 ml-4">
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className={scrolled ? "" : "text-white hover:bg-white hover:text-black"}
              >
                <a
                  href="https://github.com/Vikas2430"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className={scrolled ? "" : "text-white hover:bg-white hover:text-black"}
              >
                <a
                  href="www.linkedin.com/in/vikas-sharma-20ba522a0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                asChild
                className={scrolled ? "" : "text-white hover:bg-white hover:text-black"}
              >
                <a href="mailto:sharma.vikas606@gmail.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${scrolled ? "" : "text-white hover:text-white/80"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden pb-4 rounded-lg shadow-lg mt-2 ${
            scrolled ? "bg-white" : "bg-white/95 backdrop-blur-sm"
          }`}>
            <div className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("about")}
                className={`text-left transition-colors ${
                  scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                }`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`text-left transition-colors ${
                  scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`text-left transition-colors ${
                  scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`text-left transition-colors ${
                  scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                }`}
              >
                Contact
              </button>

              <div className="flex items-center space-x-4 pt-4">
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="https://github.com/Vikas2430"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="www.linkedin.com/in/vikas-sharma-20ba522a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors ${
                      scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a
                    href="mailto:sharma.vikas606@gmail.com"
                    className={`transition-colors ${
                      scrolled ? "text-gray-700 hover:text-primary" : "text-gray-800 hover:text-primary"
                    }`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
