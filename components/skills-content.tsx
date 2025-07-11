import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SkillsContent() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["C", "Java", "Python", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Web Development & ML",
      skills: ["React", "Bootstrap", "Node.js", "PostgreSQL", "TensorFlow", "PyTorch"],
    },
    {
      category: "Hardware & Tools",
      skills: ["DMM", "Oscilloscope", "AFG", "Power Supply", "PCB Design"],
    },
    {
      category: "Core Concepts",
      skills: ["Data Structures", "OOPS", "OS", "DBMS", "Networking"],
    },
    {
      category: "Additional Technologies",
      skills: ["OpenCV", "NumPy", "Keras", "MATLAB", "MongoDB", "Express"],
    },
  ]

  return (
    <div>
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
          Skills
        </h3>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
          My technical expertise across software and hardware domains
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-card">
            <Card className="h-full card-gradient-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm bg-gradient-to-r from-gray-100 to-purple-100 text-gray-600"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
