"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "BIZMID - Pharmacy Inventory Management",
      description:
        "Developed a comprehensive framework for pharmacy inventory management system with features to track goods movement, manage product variants, and provide expiry and low stock notifications.",
      technologies: [".NET", "C#", "SQL Server", "Inventory Management"],
      category: "fullstack",
      github: "https://github.com/Vikas2430/BIZMEDIC",
    },
    {
      title: "COVID-19 Management System",
      description:
        "Created a comprehensive COVID management system with admin and user modules for managing patient reports, updating affected areas, and providing consultation updates.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      category: "fullstack",
      github: "https://github.com/Vikas2430/CTMS",
    },
    {
      title: "The Aarambh Organization Website",
      description:
        "Freelance project for an NGO website showcasing different benefit campaigns, providing detailed information, and integrating donation API for contributions.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "Payment API"],
      category: "frontend",
      github: "https://github.com/Vikas2430/The-Arambh-Foundation",
    },
    {
      title: "Lung Cancer Detection Research",
      description:
        "In-progress research paper focusing on utilizing ANN (Artificial Neural Network) concepts for image-based lung cancer detection using machine learning models.",
      technologies: ["Python", "TensorFlow", "Neural Networks", "Image Processing"],
      category: "ai",
      github: "https://github.com/Vikas2430/Lung-Cancer-detection-System-using-CNN",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Here are some of my recent projects that showcase my skills in full-stack development, from pharmacy
            management systems to AI-powered medical applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border overflow-hidden"
            >
              <CardHeader>
                <CardTitle className="font-heading text-xl text-primary  transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
