import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Globe, Smartphone, Monitor, Server, HardDrive, Wrench } from "lucide-react"

export function AboutSection() {
  const skills = {
    frontend: ["React.js", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "Python", "C++", "Java"],
    database: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
    tools: ["Git", "VS Code", "Postman", "ChatGPT", "Claude", "Cursor", "Gemini"],
  }

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Monitor className="h-6 w-6" />,
      skills: skills.frontend,
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: skills.backend,
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      iconColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-800 hover:bg-green-200",
    },
    {
      title: "Database",
      icon: <HardDrive className="h-6 w-6" />,
      skills: skills.database,
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      iconColor: "text-purple-600",
      badgeColor: "bg-purple-100 text-purple-800 hover:bg-purple-200",
    },
    {
      title: "Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: skills.tools,
      color: "bg-amber-50 border-amber-200 hover:bg-amber-100",
      iconColor: "text-amber-600",
      badgeColor: "bg-amber-100 text-amber-800 hover:bg-amber-200",
    },
  ]

  const highlights = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Frontend Development",
      description: "Expert in React, Next.js, and modern CSS frameworks for creating responsive user interfaces",
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Backend Development",
      description: "Proficient in Node.js, Express.js, and database management for scalable applications",
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment with modern best practices",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring optimal experience across all devices",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl mb-4 text-primary">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm a passionate full-stack developer with hands-on experience in modern web technologies. I love creating
            scalable applications that solve real-world problems and deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="font-heading font-semibold text-2xl mb-6 text-primary">Professional Summary</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Proficient in web development with hands-on experience in React, Tailwind CSS, Next.js, and modern
                front-end technologies. I worked as a Web Developer Intern at Oro Media Labs, contributing to real-time
                projects and client-centric solutions.
              </p>
              <p>
                My experience spans both front-end and back-end technologies, including JavaScript, Node.js, Express.js,
                and MongoDB, with a strong foundation in C++, Java, and Python.
              </p>
              <p>
                I excel in project presentation, coding competitions, and open-source contributions, demonstrating
                strong teamwork and problem-solving skills through joint projects and freelancing.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">{highlight.icon}</div>
                  <h4 className="font-semibold text-lg mb-2 text-card-foreground">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`${category.color} transition-all duration-300 hover:shadow-lg hover:scale-105`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.iconColor} mr-3`}>{category.icon}</div>
                  <h4 className="font-heading font-semibold text-lg text-gray-800">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      className={`${category.badgeColor} text-xs font-medium transition-colors duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
