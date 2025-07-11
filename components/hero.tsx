"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Download, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Hi, I&apos;m <span className="gradient-text">Puneeth M M</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span className="bg-gradient-to-r from-gray-500 via-purple-300 to-gray-600 bg-clip-text text-transparent">
                  Electronics & Communication Engineering Student
                </span>
              </span>
              <noscript>
                <span>ECE Student | Full Stack Developer | ML Enthusiast | Hardware Engineer</span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg bg-gradient-to-r from-gray-500 via-purple-200 to-gray-600 bg-clip-text text-transparent">
              Building innovative solutions across software and hardware domains with hands-on experience in AI/ML and
              embedded systems
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full btn-gradient">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full bg-transparent border-gray-300 hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100"
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100"
            >
              <Link href="https://github.com/hellotheir04" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 text-gray-500" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100"
            >
              <Link href="https://www.linkedin.com/in/puneeth-m-m-7944b625b/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 text-gray-500" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-gradient-to-r hover:from-gray-100 hover:to-purple-100"
            >
              <Link href="mailto:mmpuneeth2@gmail.com">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block js-only">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-gray-400 animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
