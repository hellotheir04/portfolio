import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Puneeth M M | Electronics & Communication Engineering Student",
  description:
    "Portfolio of Puneeth M M, an Electronics and Communication Engineering undergraduate with expertise in full-stack development, machine learning, and hardware engineering.",
  keywords: [
    "Puneeth M M",
    "Electronics Engineering",
    "Communication Engineering",
    "Full Stack Developer",
    "Machine Learning",
    "Hardware Engineering",
    "JavaScript",
    "Python",
    "React",
    "Node.js",
  ],
  authors: [{ name: "Puneeth M M" }],
  creator: "Puneeth M M",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://puneeth.dev",
    title: "Puneeth M M | Electronics & Communication Engineering Student",
    description:
      "Portfolio of Puneeth M M, an Electronics and Communication Engineering undergraduate with expertise in full-stack development, machine learning, and hardware engineering.",
    siteName: "Puneeth M M Portfolio",
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puneeth M M | Electronics & Communication Engineering Student",
    description:
      "Portfolio of Puneeth M M, an Electronics and Communication Engineering undergraduate with expertise in full-stack development, machine learning, and hardware engineering.",
    creator: "@puneeth",
    images: [],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'