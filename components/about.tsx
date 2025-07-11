import { Card, CardContent } from "@/components/ui/card"
import { Code2, Cpu, Zap, Brain } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-gray-500" />,
      title: "Full Stack Development",
      description: "Expertise in JavaScript, React, Node.js, and modern web technologies",
    },
    {
      icon: <Brain className="h-10 w-10 text-gray-500" />,
      title: "Machine Learning & AI",
      description: "Experience with TensorFlow, PyTorch, and computer vision applications",
    },
    {
      icon: <Cpu className="h-10 w-10 text-gray-500" />,
      title: "Hardware Engineering",
      description: "Proficient with DMM, Oscilloscope, AFG, PCB design, and analog validation",
    },
    {
      icon: <Zap className="h-10 w-10 text-gray-500" />,
      title: "Embedded Systems",
      description: "Real-time systems development and hardware-software integration",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Results-driven Electronics and Communication Engineering undergraduate with hands-on experience in
                full-stack web development, machine learning, real-time embedded systems, and hardware debugging.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Proven track record in building responsive user interfaces, performing comprehensive hardware
                validation, implementing AI-driven solutions, and delivering full-stack applications using modern
                technology stacks. Strong background in both software development and hardware engineering with
                expertise in front-end/back-end, circuit design, and system optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg card-gradient-border">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-purple-100">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold bg-gradient-to-r from-gray-600 via-purple-300 to-gray-500 bg-clip-text text-transparent">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
