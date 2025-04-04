import '@fortawesome/fontawesome-free/css/all.min.css';

export default function About() {
  return (
    <div className="max-w-2xl mx-auto flex flex-col items-center px-6 text-center">

      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <p className="mb-4 text-lg">
        I’m currently in my final year of Data Science studies at the University of Bergen, while working part-time as a customer support agent and sales coordinator in both B2B and B2C.
      </p>
      <p className="mb-4 text-lg">
        With hands-on experience in programming (Java, Python, TypeScript, JavaScript), data analysis, machine learning, and tools like Power BI, Power Apps, APIs, and HubSpot — I enjoy combining technical skills with real-world problem solving.
      </p>
      <p className="mb-4 text-lg">
        I’m fluent in Norwegian, English, and German, and I bring both an analytical mindset and strong communication skills to any team I’m part of. Whether it’s building a dashboard or improving a customer journey, I’m always curious and ready to learn something new.
      </p>

      <a
        href="https://www.linkedin.com/in/isabell-philipp-3927862a4/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 transition-transform transform hover:scale-110"
      >
        <i className="fa-brands fa-linkedin" style={{ fontSize: '40px', color: '#0A66C2' }}></i>
      </a>
    </div>
  );
}
