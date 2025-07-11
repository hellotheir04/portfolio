import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function Education() {
  const education = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      degree: "B.E. in Electronics and Communication Engineering",
      institution: "Nitte Meenakshi Institute of Technology",
      period: "2021 – 2025",
      grade: "GPA: 7.89/10.0",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      degree: "12th (PUC)",
      institution: "Sri Vyshnavi Chetana PU Science College",
      period: "Mar 2020",
      grade: "87.5%",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      degree: "10th (CBSE)",
      institution: "Saint John's English Medium School",
      period: "Aug 2018",
      grade: "67.6%",
    },
  ]

  const certifications = [
    "Mastering DS & Algorithms in C/C++ - Udemy",
    "Signal Processing Onramp - MathWorks MATLAB Platform",
    "Introduction to Cloud Computing - IBM Coursera",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and certifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">{edu.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{edu.period}</p>
                      <p className="text-sm text-muted-foreground">{edu.grade}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Certifications</h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <span className="mr-3 h-2 w-2 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
