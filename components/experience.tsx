import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Intern – Gamification & Digital Badging",
      company: "Caerus Skill Matic India Pvt Ltd",
      period: "Jan 2024 – Apr 2024",
      location: "Bangalore",
      achievements: [
        "Built leaderboard and rewards system using Node.js and PostgreSQL for gamified learning platforms",
        "Developed React-based UI for digital badges with WebSocket-driven updates",
        "Contributed to Agile sprint cycles delivering full-stack features",
        "Collaborated with cross-functional teams to implement user engagement features",
        "Gained hands-on experience with modern web development practices and methodologies",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional experience and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 transition-all duration-300 hover:shadow-lg card-gradient-border">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
                          {experience.title}
                        </h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge
                          variant="outline"
                          className="mb-1 md:mb-0 border-gray-300 bg-gradient-to-r from-gray-50 to-purple-50"
                        >
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-gray-400 to-purple-300 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  )
}
