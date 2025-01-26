import '@fortawesome/fontawesome-free/css/all.min.css';


export default function About() {
  return (
    <div className="max-w-2xl height-screen flex flex-col justify-center items-center">
      <p className="mb-4">
        Hello!
      </p>
      <p className="mb-4">
        work in progress
      </p>
      <a
        href="https://www.linkedin.com/in/isabell-philipp-3927862a4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-linkedin" style={{ fontSize: '40px', color: '#0A66C2' }}></i>
      </a>
    </div>
  )
}
