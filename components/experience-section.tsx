import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Oro Media Labs",
      location: "On-site",
      duration: "July 2024 - December 2024",
      description: [
        "Worked directly with the frontend team to develop responsive and interactive web applications using React, Tailwind CSS, and Next.js",
        "Contributed to real-time projects crucial to startup operations, ensuring high user experience and performance standards",
        "Implemented modern web development best practices, debugging and maintaining codebases",
        "Optimized applications for scalability and stability within a fast-paced startup environment",
      ],
      technologies: ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Git"],
    },
  ]

  const education = [
    {
      degree: "Masters of Computer Application",
      institution: "Vellore Institute of Technology, Bhopal",
      duration: "2023 - 2025",
      status: "Completed",
      cgpa: "7.40",
    },
    {
      degree: "Bachelors of Computer Application",
      institution: "Presidency College Hebbal, Bangalore",
      duration: "2020 - 2023",
      status: "Completed",
      cgpa: "8.12",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            My professional journey and educational background that shaped my expertise in web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="font-heading font-semibold text-2xl mb-8 text-primary flex items-center">
              <Building className="mr-3 h-6 w-6" />
              Work Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-primary mb-1">{exp.title}</h4>
                        <p className="font-medium text-card-foreground mb-2">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="mr-1 h-3 w-3" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4 text-sm text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 bg-primary rounded-full flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading font-semibold text-2xl mb-8 text-primary flex items-center">
              <Calendar className="mr-3 h-6 w-6" />
              Education
            </h3>

            <div className="flex flex-col gap-[60px]">
              {education.map((edu, index) => (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h4 className="font-heading font-semibold text-lg text-primary mb-1">{edu.degree}</h4>
                        <p className="font-medium text-card-foreground mb-1">{edu.institution}</p>
                        {"cgpa" in edu && (
                          <p className="text-sm text-muted-foreground">CGPA: {edu.cgpa}</p>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center mb-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          {edu.duration}
                        </div>
                        <Badge variant={edu.status === "Completed" ? "default" : "secondary"} className="text-xs">
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
