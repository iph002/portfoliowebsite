"use client"

import { useState, useEffect } from "react"
import ProjectCard from "../components/project-card"
import { Button } from "../components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useSwipeable } from "react-swipeable"

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
  {
    title: "Portfolio Website",
    description: "Portfolio Website using HTML, Typescript and React.",
    link: "https://github.com/iph002/portfoliowebsite",
    image: "/images/PortfolioWebsiteCardImage.png",
  },
]

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel")
  const [isCompact, setIsCompact] = useState(false)

  const nextProject = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  const prevProject = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)

  const handlers = useSwipeable({
    onSwipedLeft: nextProject,
    onSwipedRight: prevProject,
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  // Detect when the screen is too narrow for the buttons
  const updateLayout = () => {
    const carouselContainer = document.getElementById("carousel-container")
    const cardElement = document.getElementById("current-card")


    if (carouselContainer && cardElement) {
      const containerWidth = carouselContainer.offsetWidth
      const cardWidth = cardElement.offsetWidth
      const totalWidth = cardWidth 

      // Check if the buttons and card fit within the container
      setIsCompact(totalWidth > containerWidth)
    }
  }

  // Add a resize listener to dynamically adjust layout
  useEffect(() => {
    window.addEventListener("resize", updateLayout)
    updateLayout() // Initial check
    return () => window.removeEventListener("resize", updateLayout)
  }, [])

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="mb-6 flex justify-center">
        {/* Toggle View Mode Buttons */}
        <Button variant={viewMode === "grid" ? "solid" : "outline"} onClick={() => setViewMode("grid")}>
          View All
        </Button>
        <Button
          variant={viewMode === "carousel" ? "solid" : "outline"}
          onClick={() => setViewMode("carousel")}
          className="ml-4"
        >
          Carousel
        </Button>
      </div>

      {viewMode === "carousel" ? (
        <div
          {...handlers}
          id="carousel-container"
          className="flex items-center justify-center w-full relative"
        >
          {/* Previous Button */}
          {!isCompact && (
            <Button
              onClick={prevProject}
              variant="outline"
              size="icon"
              className="hidden sm:block sm:mr-4"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          )}

          {/* Project Card */}
          <div
            id="current-card"
            className={`w-full max-w-[90%] sm:max-w-[600px] ${
              isCompact ? "mx-auto" : ""
            }`}
          >
            <ProjectCard {...projects[currentIndex]} />
          </div>

          {/* Next Button */}
          {!isCompact && (
            <Button
              onClick={nextProject}
              variant="outline"
              size="icon"
              className="hidden sm:block sm:ml-4"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Grid View */}
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </div>
  )
}
