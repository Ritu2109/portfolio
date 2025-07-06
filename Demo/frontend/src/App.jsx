import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import {
  Github,
  Linkedin,
  Mail,
  Code, // Used for HTML, CSS, JS, TS, Kotlin, Knex.js, Redux, Tanstack, VSCode
  Smartphone, // Used for React Native
  Database, // Used for MongoDB, PostgreSQL, MySQL Workbench
  Server, // Used for Node.js, Express.js
  Figma, // Used for Tailwind CSS, Bootstrap
  Rocket, // Used for GSAP
  Briefcase,
  User,
  Award,
  Phone,
  Home,
  ArrowUpCircle,
  ExternalLink,
  Search, // Used for "Explore Projects"
  Cloud, // Used for AWS Lambda
  Box, // Used for Three.js
} from "lucide-react";

// Register GSAP plugins upfront for all components
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const App = () => {
  // Refs for various elements to animate
  const heroRef = useRef(null);
  const sectionsRef = useRef([]); // For general section fade-in
  const aboutParagraphsRef = useRef([]);
  const skillCardsRef = useRef([]); // For individual skill cards
  const projectCardsRef = useRef([]); // For individual project cards
  const contactLinksRef = useRef([]); // For individual contact links
  const navbarRef = useRef(null);
  const heroBlobsRef = useRef([]); // Ref for hero background blobs

  // State for "Back to Top" button visibility
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Helper functions to add elements to their respective refs.
  // These are crucial for GSAP to target dynamically rendered elements.
  const addToRefs = (refArray) => (el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  // Assign specific add functions for clarity
  const addSectionRef = addToRefs(sectionsRef);
  const addAboutParagraphRef = addToRefs(aboutParagraphsRef);
  const addSkillCardRef = addToRefs(skillCardsRef);
  const addProjectCardRef = addToRefs(projectCardsRef);
  const addContactLinkRef = addToRefs(contactLinksRef);
  const addHeroBlobRef = addToRefs(heroBlobsRef);

  // GSAP Animations and Scroll Handling
  useEffect(() => {
    // Clear refs at the start of each effect run to ensure fresh collection
    // This is important because React might re-render lists, and old refs might persist.
    sectionsRef.current = [];
    aboutParagraphsRef.current = [];
    skillCardsRef.current = [];
    projectCardsRef.current = [];
    contactLinksRef.current = [];
    heroBlobsRef.current = [];

    // Use setTimeout with 0ms delay to ensure DOM is fully rendered
    // and refs are populated before GSAP attempts to find targets.
    const timeoutId = setTimeout(() => {
      // Create a GSAP Context to manage all animations and ScrollTriggers.
      // This helps with cleanup on component unmount.
      let ctx = gsap.context(() => {
        // Hero section animation timeline
        const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (heroRef.current) {
          heroTl
            .fromTo(
              heroRef.current,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1 }
            )
            .fromTo(
              heroRef.current.querySelector("h1"),
              { opacity: 0, scale: 0.8, filter: "blur(10px)" },
              {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: 0.2,
                filter: "blur(0px)",
              },
              "<0.2"
            )
            .fromTo(
              heroRef.current.querySelector("p"),
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.7 },
              "<0.3"
            )
            .fromTo(
              heroRef.current.querySelectorAll("a"),
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 },
              "<0.3"
            );
        }

        // Hero background blobs parallax effect
        // Ensure heroBlobsRef.current has elements before animating
        if (heroBlobsRef.current.length > 0) {
          gsap.to(heroBlobsRef.current, {
            yPercent: 20, // Move blobs 20% slower than scroll
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true, // Smoothly animate on scroll
            },
          });
        }

        // Navbar scroll effect: changes padding and background on scroll
        if (navbarRef.current) {
          ScrollTrigger.create({
            trigger: "body",
            start: "top -100", // When body scrolls 100px down
            end: "bottom top",
            onEnter: () =>
              gsap.to(navbarRef.current, {
                padding: "0.5rem 1rem",
                duration: 0.3,
                backgroundColor: "rgba(17, 24, 39, 0.95)",
              }),
            onLeaveBack: () =>
              gsap.to(navbarRef.current, {
                padding: "0.75rem 1rem",
                duration: 0.3,
                backgroundColor: "rgba(17, 24, 39, 0.9)",
              }),
          });
        }

        // Generic fade-in for main sections as they enter view
        sectionsRef.current.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%", // When top of section is 80% from top of viewport
                toggleActions: "play none none none",
                once: true, // Animation plays only once
              },
            }
          );
        });

        // About section paragraphs: staggered fade-in
        if (aboutParagraphsRef.current.length > 0) {
          gsap.fromTo(
            aboutParagraphsRef.current,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.2, // Each paragraph animates with a delay
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#about", // Trigger on the parent section
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        // Skills section cards: staggered fade-in with bounce
        if (skillCardsRef.current.length > 0) {
          gsap.fromTo(
            skillCardsRef.current,
            { opacity: 0, y: 50, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: "#skills", // Trigger on the parent section
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        // Projects section cards: staggered fade-in
        if (projectCardsRef.current.length > 0) {
          gsap.fromTo(
            projectCardsRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#projects", // Trigger on the parent section
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }

        // Contact section links: staggered fade-in from left
        if (contactLinksRef.current.length > 0) {
          gsap.fromTo(
            contactLinksRef.current,
            { opacity: 0, x: -50 },
            {
              opacity: 1,
              x: 0,
              duration: 0.7,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#contact", // Trigger on the parent section
                start: "top 70%",
                toggleActions: "play none none none",
                once: true,
              },
            }
          );
        }
      }); // End of gsap.context

      // Cleanup function for GSAP context
      return () => ctx.revert();
    }, 0); // End of setTimeout

    // Back to Top button visibility logic (not a GSAP animation, so outside context)
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup for setTimeout and event listener
    return () => {
      clearTimeout(timeoutId); // Clear the timeout if component unmounts early
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array for the main useEffect, runs once on mount

  // Function to smoothly scroll to the top of the page
  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.inOut" });
  };

  // Navigation items data
  const navItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "About", icon: User, id: "about" },
    { name: "Skills", icon: Award, id: "skills" },
    { name: "Projects", icon: Briefcase, id: "projects" },
    { name: "Contact", icon: Phone, id: "contact" },
  ];

  // Skills data, including a custom React icon and new technologies
  const skills = [
    { name: "HTML", icon: Code, category: "Frontend" },
    { name: "CSS", icon: Code, category: "Frontend" },
    { name: "JavaScript", icon: Code, category: "Frontend" },
    { name: "TypeScript", icon: Code, category: "Frontend" },
    {
      name: "React.js",
      icon: ({ size, className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.23174 23 20.46348"
          width={size}
          height={size}
          className={className}
          fill="currentColor"
        >
          <title>React Logo</title>
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
      category: "Frontend",
    },
    { name: "Node.js", icon: Server, category: "Backend" },
    { name: "Express.js", icon: Server, category: "Backend" },
    { name: "Knex.js", icon: Code, category: "Backend" }, // Knex.js is a SQL query builder
    { name: "Mongoose ODM", icon: Database, category: "Database" }, // Mongoose is for MongoDB
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MySQL Workbench", icon: Database, category: "Database" }, // MySQL Workbench is a tool for MySQL
    { name: "WordPress", icon: Figma, category: "CMS" }, // Figma icon for general web design/CMS
    { name: "React Native", icon: Smartphone, category: "Mobile" },
    { name: "Kotlin", icon: Code, category: "Mobile" },
    { name: "Redux", icon: Code, category: "State Management" }, // Generic code icon for state management
    { name: "Tanstack Query", icon: Code, category: "Data Fetching" }, // Generic code icon for Tanstack
    {
      name: "Tailwind CSS",
      icon: ({ size, className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M18.5 9.51a4.2 4.2 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.3 4.3 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51m-13 4.98a4.2 4.2 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.3 4.3 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51"></path>
        </svg>
      ),
    },
    { name: "Bootstrap", icon: Figma, category: "Styling" },
    { name: "GitHub", icon: Github, category: "Tools" },
    { name: "VS Code", icon: Code, category: "Tools" },
    { name: "AWS Lambda", icon: Cloud, category: "Cloud/Serverless" }, // Using Cloud icon for Lambda
    { name: "GSAP", icon: Rocket, category: "Animation" },
    {
      name: "Three.js",
      icon: ({ size, className }) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          {/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}
          <path d="m3.2,2.91c-.11,0-.2.09-.2.21,0,.02,0,.03,0,.05l2.19,8.87s0,.02,0,.03l2.19,8.87c.03.11.14.18.25.15.03,0,.07-.03.09-.05l13.21-12.7c.08-.08.08-.21,0-.29-.02-.03-.06-.04-.09-.05l-4.38-1.26s-.06-.03-.09-.03l-8.64-2.49s-.07-.03-.11-.03l-4.38-1.26s-.04,0-.06,0Zm.28.5l3.75,1.08-2.82,2.71-.94-3.79Zm4.43,1.28l3.68,1.06-2.76,2.66-.92-3.72Zm-.4.09l.92,3.73-3.69-1.06,2.77-2.67Zm4.76,1.16l3.69,1.06-2.77,2.67-.92-3.74Zm-.39.1l.91,3.71-3.68-1.05,2.76-2.66Zm4.77,1.16l3.75,1.08-2.81,2.71-.93-3.79Zm-.4.09l.92,3.73-3.69-1.06,2.77-2.67Zm-11.69.53l3.76,1.08-2.82,2.72-.94-3.79Zm4.43,1.27l3.69,1.06-2.77,2.67-.92-3.73Zm-.39.1l.94,3.8-3.76-1.08,2.82-2.72Zm4.75,1.16l3.76,1.08-2.82,2.72-.94-3.8Zm-.39.1l.94,3.8-3.75-1.08,2.82-2.71Zm-7.29,1.85l3.69,1.06-2.77,2.67-.92-3.73Zm4.43,1.28l3.68,1.06-2.76,2.66-.92-3.72Zm-.41.03l.92,3.73-3.69-1.06,2.77-2.67Zm-2.95,3.04l3.81,1.09-2.86,2.76-.95-3.85Z"></path>
        </svg>
      ),
    }, // Using Cube icon for 3D
  ];

  // Projects data (keeping existing placeholders as no new project data was provided)
  const projects = [
    {
      title: "Confidential PMS System",
      description:
        "Developed a robust Project Management System for a private client, focusing on secure data handling, real-time collaboration, and custom reporting. Due to confidentiality, direct links are not available, but a detailed case study can be discussed upon request.",
      technologies: ["MERN Stack", "WebSockets", "AWS S3", "Stripe API"],
      type: "confidential",
      githubLink: null,
      liveLink: null,
      caseStudyLink: "#contact", // Link to contact section for discussion
      image: "https://placehold.co/600x400/1e293b/e2e8f0?text=Confidential+PMS",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce application built with MERN stack, featuring user authentication, product catalog, shopping cart, and order management.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      type: "public",
      githubLink: null,
      liveLink: null,
      caseStudyLink: "#contact",
      image: "https://placehold.co/600x400/1e293b/e2e8f0?text=E-commerce+App",
    },
    {
      title: "Mobile Task Manager",
      description:
        "A cross-platform mobile application developed with React Native for efficient task management, including push notifications and offline capabilities.",
      technologies: ["React Native", "Firebase", "Redux"],
      type: "public",
      githubLink: null,
      liveLink: null,
      caseStudyLink: "#contact",
      image: "https://placehold.co/600x400/1e293b/e2e8f0?text=Mobile+App",
    },
    {
      title: "Kotlin Android App",
      description:
        "A native Android application developed using Kotlin, demonstrating advanced UI/UX patterns and integrating with external APIs.",
      technologies: ["Kotlin", "Android Studio", "Retrofit"],
      type: "public",
      githubLink: null,
      liveLink: null,
      caseStudyLink: "#contact",
      image: "https://placehold.co/600x400/1e293b/e2e8f0?text=Android+App",
    },
    {
      title: "Portfolio Website (This One!)",
      description:
        "A responsive and animated portfolio website built with React, Tailwind CSS, and GSAP to showcase development skills. This is the current site you are viewing.",
      technologies: ["React", "Tailwind CSS", "GSAP"],
      type: "public",
      githubLink: null,
      liveLink: "#",
      caseStudyLink: "#contact",
      image: "https://placehold.co/600x400/1e293b/e2e8f0?text=Portfolio+Site",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-inter">
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md shadow-lg rounded-b-lg mx-2 mt-2 md:mx-4 md:mt-4 transition-all duration-300 ease-in-out border border-transparent hover:border-purple-700"
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            Ritu Makwana
          </a>
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800 transform hover:-translate-y-1" // Added hover effect
              >
                <item.icon size={18} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
          {/* Mobile Menu Button - Placeholder, implement a proper toggle */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-purple-400 focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      >
        {/* Dynamic background blobs for visual flair */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            ref={addHeroBlobRef}
            className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob top-10 left-10"
          ></div>
          <div
            ref={addHeroBlobRef}
            className="absolute w-96 h-96 bg-fuchsia-600 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-2000 bottom-10 right-10"
          ></div>
          <div
            ref={addHeroBlobRef}
            className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-4000 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          ></div>
        </div>
        <div className="relative z-10 p-8 max-w-5xl mx-auto bg-gray-800 bg-opacity-70 rounded-3xl shadow-2xl border border-purple-500/30 backdrop-blur-sm">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 mb-6 drop-shadow-lg">
            Ritu Makwana
          </h1>
          <p className="text-2xl md:text-4xl font-light text-gray-200 mb-10">
            Full Stack & Mobile Application Developer
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#projects"
              className="px-10 py-5 bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 text-lg"
            >
              <Search size={22} /> {/* Changed icon to Search */}
              <span>Explore My Projects</span> {/* Changed text */}
            </a>
            <a
              href="#contact"
              className="px-10 py-5 border-2 border-purple-600 text-purple-400 font-semibold rounded-full shadow-lg transform hover:scale-105 hover:bg-purple-600 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 text-lg"
            >
              <Mail size={22} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={addSectionRef}
        className="py-24 px-4 md:px-8 bg-gray-800 rounded-lg shadow-xl m-4 md:m-8 border border-gray-700"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-400 mb-12 relative inline-block">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></span>
          </h2>
          <div className="max-w-4xl mx-auto text-xl text-gray-300 leading-relaxed">
            <p className="mb-8" ref={addAboutParagraphRef}>
              Hello! I'm a passionate Full Stack and Mobile Application
              Developer with a strong focus on creating robust, scalable, and
              user-friendly applications. My journey in development began with a
              curiosity for how things work and a desire to build solutions that
              make a real impact.
            </p>
            <p className="mb-8" ref={addAboutParagraphRef}>
              I specialize in the **MERN stack (MongoDB, Express.js, React,
              Node.js)** for web development, crafting dynamic and responsive
              user interfaces, and building powerful backend APIs. On the mobile
              front, I leverage **React Native** for cross-platform solutions
              and **Kotlin** for native Android applications, ensuring optimal
              performance and a seamless user experience.
            </p>
            <p ref={addAboutParagraphRef}>
              My toolkit also includes modern styling with **Tailwind CSS** for
              rapid UI development and **GSAP** for creating engaging,
              high-performance animations. I thrive in collaborative
              environments and am always eager to learn new technologies and
              tackle challenging problems. Let's build something amazing
              together!
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={addSectionRef}
        className="py-24 px-4 md:px-8 bg-gray-900 rounded-lg shadow-xl m-4 md:m-8 border border-gray-800"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-400 mb-12 relative inline-block">
            My Skills
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={index}
                ref={addSkillCardRef}
                className="bg-gray-800 p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20"
              >
                {/* Render the icon component directly */}
                <skill.icon
                  size={56}
                  className="text-purple-400 mb-4 animate-bounce-subtle"
                />
                <h3 className="text-2xl font-semibold text-gray-100">
                  {skill.name}
                </h3>
                <p className="text-base text-gray-400 mt-2">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={addSectionRef}
        className="py-24 px-4 md:px-8 bg-gray-800 rounded-lg shadow-xl m-4 md:m-8 border border-gray-700"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-400 mb-12 relative inline-block">
            My Projects
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={addProjectCardRef}
                className="bg-gray-900/60 rounded-2xl shadow-xl overflow-hidden border border-gray-700 transform hover:scale-105 hover:rotate-1 transition-all duration-300 group hover:border-purple-500 hover:shadow-purple-500/20 backdrop-blur-md" // Added backdrop-blur-md and hover:rotate-1
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover object-center rounded-t-2xl transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/1e293b/e2e8f0?text=Project+Image`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <p className="text-white text-center text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mt-4">
                    {/* Only show View Details button for all projects now */}
                    <a
                      href={project.caseStudyLink}
                      className="inline-flex items-center px-5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-md transform hover:scale-105 transition-all duration-300 ease-in-out" // Added shadow-md and font-semibold
                    >
                      <ExternalLink size={20} className="mr-2" /> View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={addSectionRef}
        className="py-24 px-4 md:px-8 bg-gray-900 rounded-lg shadow-xl m-4 md:m-8 border border-gray-800"
      >
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-purple-400 mb-12 relative inline-block">
            Get In Touch
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-fuchsia-500 rounded-full"></span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            I'm always open to new opportunities, collaborations, and
            interesting projects. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="mailto:your.email@example.com"
              ref={addContactLinkRef}
              className="flex items-center space-x-3 bg-gray-800 p-5 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20 text-xl"
            >
              <Mail size={28} className="text-purple-400" />
              <span className="text-lg text-gray-200">
                your.email@example.com
              </span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              ref={addContactLinkRef}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gray-800 p-5 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20 text-xl"
            >
              <Linkedin size={28} className="text-purple-400" />
              <span className="text-lg text-gray-200">LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/yourusername"
              ref={addContactLinkRef}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gray-800 p-5 rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-purple-500 hover:shadow-purple-500/20 text-xl"
            >
              <Github size={28} className="text-purple-400" />
              <span className="text-lg text-gray-200">GitHub Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-center text-gray-400 text-base rounded-t-lg mx-4 border-t border-gray-700">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Ritu Makwana. All rights reserved.
        </p>
        <p>
          Crafted with <span className="text-fuchsia-400">&hearts;</span> using
          React, Tailwind CSS, and GSAP.
        </p>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 animate-bounce-subtle"
          aria-label="Back to top"
        >
          <ArrowUpCircle size={28} />
        </button>
      )}
    </div>
  );
};

export default App;
