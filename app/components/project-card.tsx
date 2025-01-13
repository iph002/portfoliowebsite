import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="block w-80 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-50 transition-colors">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  )
}

