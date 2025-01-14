import ProjectCard from '../components/project-card'

const projects = [
  { title: 'Snake', description: 'First own project, Java', link: '' },
  { title: 'Bysykkel', description: 'Machine Learning, Data Preparation, Frontend', link: '' },
  { title: 'Rodent Reboot', description: 'Group Project, Java,  LibGDX, Solid, AGILE, TEST-DRIVEN Design, Design Patterns', link: 'https://github.com/iph002/Rodent-Reboot' },
  { title: 'Project 4', description: 'Description of Project 4', link: '' },
]

export default function Portfolio() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
  )
}



