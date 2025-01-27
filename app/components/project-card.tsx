import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"

interface ProjectCardProps {
  title: string
  description: string
  link: string
  image?: string
}

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
  return (
    <Card className="w-full max-w-[300px] h-[400px] sm:max-w-[250px] lg:max-w-[300px] flex flex-col"> {/* Responsive sizes */}
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle> {/* Truncate long titles */}
      </CardHeader>
      {image && (
        <div className="relative w-full h-40"> {/* Fixed image height */}
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      )}
      <CardContent className="flex-1 overflow-hidden">
        <CardDescription className="line-clamp-3">{description}</CardDescription> {/* Limit description */}
      </CardContent>
      <CardFooter>
        {link && (
          <Button asChild>
            <Link href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
