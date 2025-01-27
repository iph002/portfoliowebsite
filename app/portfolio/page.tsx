"use client"

import { useState } from "react"
import ProjectCard from "../components/project-card"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Cyclist traffic forecasting",
    description: "Model to forecast cyclist traffic, using Python, Jupyter Notebook and HTML.",
    link: "https://github.com/iph002/Cyclist-Traffic-Forecast",
    image: "/images/sykkel.png",
  },
  {
    title: "Rodent Reboot",
    description: "Group Project in Java using Agile and TDD.",
    link: "https://github.com/iph002/Rodent-Reboot",
    image: "/images/rodentreboot.png",
  },
  { title: "Portfolio Website", 
    description: "Portfolio Website using HTML, Typescript and React.", 
    link: "https://github.com/iph002/portfoliowebsite",
    image: "/images/PortfolioWebsiteCardImage.png",},
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")

  const nextProject = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  const prevProject = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)

  return (
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-6 flex justify-center">
        <Button variant={viewMode === "grid" ? "solid" : "outline"} onClick={() => setViewMode("grid")}>
          View All
        </Button>
        <Button variant={viewMode === "carousel" ? "solid" : "outline"} onClick={() => setViewMode("carousel")} className="ml-4">
          Carousel
        </Button>
      </div>

      {viewMode === "carousel" ? (
        <div className="flex items-center space-x-4">
          <Button onClick={prevProject} variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <ProjectCard {...projects[currentIndex]} />
          <Button onClick={nextProject} variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </div>
  )
}
