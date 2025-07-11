import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "AI-Driven Image Enhancement",
      description:
        "Implemented Zero-DCE model to enhance low-light images with no reference data, achieving 8.11 PSNR and 0.1565 SSIM. Trained lightweight CNN using self-supervised losses for real-time enhancement on edge devices.",
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Computer Vision"],
      codeLink: "#",
      liveLink: null,
    },
    {
      title: "Hostel Administration System",
      description:
        "Built full-stack hostel room management platform with real-time updates, role-based access control, and automated notification system for bookings and maintenance requests.",
      tags: ["JavaScript", "Node.js", "Express", "MongoDB", "Bootstrap"],
      codeLink: "#",
      liveLink: null,
    },
    {
      title: "AMS Debug & Validation Project",
      description:
        "Developed automated test framework using Python for measuring Power IC parameters. Designed custom test PCB to validate signal integrity across variable load conditions with comprehensive documentation.",
      tags: ["Python", "MATLAB", "PCB Design", "Hardware Validation", "Test Automation"],
      codeLink: "#",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A showcase of my work across AI/ML, web development, and hardware engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col card-gradient-border">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="border-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100 bg-transparent"
                      >
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="border-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100 bg-transparent"
                        >
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
