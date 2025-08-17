// ---------------------------------------------------------------- Imports ----------------------------------------------------------------
import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Smartphone,
  Code,
  Server,
  Database,
  Wrench,
  Mail,
  X,
} from "lucide-react"; // Lucide Icons
import "./index.css"; // keep for particles + extra animations
import { projectsData } from "./projectDetails";

// ---------------------------------------------------------------- Component ----------------------------------------------------------------
export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  // -------------------- Create Floating Particles --------------------
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.width = Math.random() * 10 + 5 + "px";
        particle.style.height = particle.style.width;
        particle.style.animationDuration = Math.random() * 10 + 10 + "s";
        particle.style.animationDelay = Math.random() * 10 + "s";
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  // -------------------- Form Submit --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxUqIXyzTIecVFgNc_4P6P0owVAC6XNdZVbWOGKzK5K99h5TxGOKnuvl_31McksrehI/exec", {
        method: "POST",
        body: formData
      });
      alert("Message sent! Check Google Sheet for live updates.");
      e.target.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    }
  };

  // -------------------- Create Floating Particles --------------------
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (particlesContainer && particlesContainer.children.length === 0) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.width = Math.random() * 10 + 5 + "px";
        particle.style.height = particle.style.width;
        particle.style.animationDuration = Math.random() * 10 + 10 + "s";
        particle.style.animationDelay = Math.random() * 10 + "s";
        particlesContainer.appendChild(particle);
      }
    }
  }, []);

  // -------------------- Navbar Scroll Effect --------------------
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar?.classList.add("bg-opacity-80", "backdrop-blur-md", "shadow-lg");
      } else {
        navbar?.classList.remove("bg-opacity-80", "backdrop-blur-md", "shadow-lg");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // -------------------- Smooth Scrolling --------------------
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  // -------------------- Fade-in on Scroll --------------------
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (selectedProject) {
      // Prevent background scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll
      document.body.style.overflow = "auto";
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);



  // ---------------------------------------------------------------- JSX ----------------------------------------------------------------
  return (
    <>
      {/* -------------------- Project Modal -------------------- */}
      {selectedProject && (
        <div
          className="fixed  inset-0 bg-black/20 backdrop-blur-xs h-screen flex justify-center items-center z-[99999]  "
          onClick={(e) => {
            // Close modal if click is on overlay, not inside modal content
            if (e.target === e.currentTarget) setSelectedProject(null);
          }}
        >
          <div className="bg-gray-900 rounded-2xl p-8 max-w-2xl w-full border border-purple-500/40 relative h-[70vh] modal-scrollbar overflow-y-auto ">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="mb-4">{selectedProject.icon}</div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">{selectedProject.title}</h3>
            <p className="text-gray-300 whitespace-pre-line">{selectedProject.details}</p>
          </div>
        </div>
      )}


      <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-poppins overflow-x-hidden relative min-h-screen">
        <div className="stars">
          {Array.from({ length: 80 }).map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>



        <div className="particles absolute inset-0 -z-10" id="particles"></div>

        {/* Navigation */}
        <nav
          id="navbar"
          className="fixed w-full top-0 left-0 z-50 transition-all duration-300 bg-gray-900/50"
        >
          <ul className="flex justify-center gap-8 py-4 font-orbitron text-lg">
            <li><a href="#home" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#skills" className="hover:text-purple-400 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-purple-400 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-purple-400 transition">Contact</a></li>
          </ul>
        </nav>

        {/* ---------------------------------------------------------------- Hero Section ---------------------------------------------------------------- */}
        <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          {/* Floating particles background */}
          <div className="absolute inset-0 -z-10">
            <div className="particle w-16 h-16 left-10 bottom-10"></div>
            <div className="particle w-24 h-24 right-10 top-20"></div>
          </div>

          {/* Hero Content */}
          <div className="max-w-3xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Hi, I'm{" "}
              <span className="animated-gradient">Ritu Makwana</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300 typing">
              Frontend Developer | React Native | MERN Stack Enthusiast
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex gap-6 justify-center">
              <a
                href="#projects"
                className="cta px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="cta px-6 py-3 rounded-lg bg-gray-900/60 backdrop-blur-md border border-purple-500 text-white font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>


        {/* About Section */}
        {/* ---------------------------------------------------------------- About Me Section ---------------------------------------------------------------- */}
        <section id="about" className="section text-center">
          <h2 className="text-4xl font-bold text-white mb-10 drop-shadow-glow">About Me</h2>

          <div className="max-w-4xl mx-auto bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-lg p-10 fade-in border border-purple-500/40">
            <p className="text-gray-300 text-lg leading-relaxed">
              I am a passionate <span className="text-cyan-400 font-semibold">Frontend Developer</span>
              skilled in React, React Native, and MERN Stack development.
              I love building <span className="text-purple-400 font-semibold">modern web applications</span>
              with clean UI and high performance. 🚀
            </p>

            {/* Quick Highlights */}
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="p-6 bg-gray-800/50 rounded-xl border border-cyan-500/40 hover:scale-105 transition-all">
                <i data-lucide="code-2" className="w-8 h-8 text-cyan-400 mx-auto mb-3"></i>
                <h3 className="text-lg font-semibold text-white">Coding</h3>
                <p className="text-sm text-gray-400">Love solving problems with clean code</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl border border-purple-500/40 hover:scale-105 transition-all">
                <i data-lucide="rocket" className="w-8 h-8 text-purple-400 mx-auto mb-3"></i>
                <h3 className="text-lg font-semibold text-white">Innovation</h3>
                <p className="text-sm text-gray-400">Building futuristic, scalable apps</p>
              </div>

              <div className="p-6 bg-gray-800/50 rounded-xl border border-pink-500/40 hover:scale-105 transition-all">
                <i data-lucide="map-pin" className="w-8 h-8 text-pink-400 mx-auto mb-3"></i>
                <h3 className="text-lg font-semibold text-white">Location</h3>
                <p className="text-sm text-gray-400">Based in India 🇮🇳</p>
              </div>
            </div>
          </div>
        </section>


        {/* Skills Section */}
        <section id="skills" className="py-20 px-6 md:px-16 bg-gray-800/40 backdrop-blur-lg rounded-xl">
          <h2 className="text-3xl font-orbitron text-center mb-10 text-purple-300">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Code className="w-8 h-8 text-purple-400" />, title: "Frontend", desc: "HTML5, CSS3, JavaScript, TypeScript, React, React Native, Redux..." },
              { icon: <Server className="w-8 h-8 text-purple-400" />, title: "Backend", desc: "Node.js, Express.js, Knex.js, RESTful APIs, JWT, OAuth2" },
              { icon: <Database className="w-8 h-8 text-purple-400" />, title: "Databases", desc: "MongoDB, MySQL, PostgreSQL" },
              { icon: <Smartphone className="w-8 h-8 text-purple-400" />, title: "Mobile Development", desc: "React Native, Kotlin" },
              { icon: <Wrench className="w-8 h-8 text-purple-400" />, title: "Tools & Platforms", desc: "Postman, GitHub, Docker, Swagger UI, AWS" },
            ].map((skill, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-lg fade-in opacity-0 translate-y-6 transition-all duration-700 hover:scale-105 hover:shadow-neon"
              >
                <div className="mb-3">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-purple-400">{skill.title}</h3>
                <p className="mt-2 text-gray-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section (unchanged) */}
        <section id="projects" className="py-20 px-6 md:px-16">
          <h2 className="text-3xl font-orbitron text-center mb-10 text-purple-300">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-lg fade-in opacity-0 translate-y-6 transition-all duration-700 hover:scale-105 hover:shadow-neon cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-purple-400">{project.title}</h3>
                <p className="mt-2 text-gray-400">{project.shortDesc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 md:px-16 bg-gray-800/40 backdrop-blur-lg rounded-xl">
          <h2 className="text-3xl font-orbitron text-center mb-10 text-purple-300">Get In Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto flex flex-col gap-4">
            <div className="flex gap-4">
              <input type="text" placeholder="Your Name" className="w-1/2 px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg" required />
              <input type="email" placeholder="Your Email" className="w-1/2 px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg" required />
            </div>
            <input type="text" placeholder="Subject" className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg" required />
            <textarea placeholder="Your Message" className="px-4 py-2 bg-gray-900/60 border border-gray-700 rounded-lg" required></textarea>
            <button type="submit" className="mt-2 px-6 py-3 flex items-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-lg shadow-lg hover:scale-110 hover:shadow-neon transition">
              <Mail className="w-5 h-5" /> Send Message
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-gray-400 border-t border-gray-700 mt-20">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://linkedin.com/in/ritu-makwana" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-purple-400 transition" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-purple-400 transition" />
            </a>
          </div>
          <p>&copy; 2024 Ritu Makwana. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
