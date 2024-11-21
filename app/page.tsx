"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  Download,
  Github,
  ExternalLink,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      category: "Languages",
      items: [
        "Python",
        "JavaScript",
        "Java",
        "C++",
        "SQL",
        "Dart",
        "PHP",
        "C#",
      ],
    },
    {
      category: "Web Technologies",
      items: [
        "React",
        "Node.js",
        "HTML5",
        "CSS3",
        "RESTful APIs",
        "PHP",
        "Bootstrap",
      ],
    },
    { category: "Databases", items: ["MongoDB", "PostgreSQL", "MySQL"] },
    {
      category: "Tools & Platforms",
      items: ["Git", "Docker", "Cloudflare", "Linux", "Agile/Scrum"],
    },
    {
      category: "Concepts",
      items: [
        "OOP",
        "Data Structures",
        "Algorithms",
        "Software Design Patterns",
        "Software Design Architecture",
        "Software Testing",
      ],
    },
  ];

  const projects = [
    {
      title: "Stealthify",
      description:
        "A data anonymization tool that helps add another layer of security to the stored data",
      technologies: ["HTML", "CSS", "TypeScript", "NodeJS", "MongoDB"],
      github: "https://github.com/Ken69420/Stealthify.git",
      demo: "https://ai-task-manager.example.com",
    },
    {
      title: "Blockchain Voting System",
      description:
        "A secure and transparent voting system built on blockchain technology.",
      technologies: ["Solidity", "Ethereum", "Web3.js", "React"],
      github: "https://github.com/johndoe/blockchain-voting",
    },
    {
      title: "Weather Dashboard",
      description:
        "A Flutter app displaying weather information based on the user's location or inputted city",
      technologies: ["Dart", "PHP", "Flutter", "Laravel"],
      github: "https://github.com/johndoe/collab-code-editor",
      demo: "https://collab-code.example.com",
    },
  ];

  const education = [
    {
      degree: "Bachelor Computer Science",
      institution: "International Islamic University Malaysia",
      duration: "2021 - 2025 (Expected)",
      details: [
        "Major in Software Engineering",
        "GPA: 3.48/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Database Systems, Software Engineering, Web Development, Artificial Intelligence",
      ],
    },
    {
      degree: "High School",
      institution: "SMK Agama Arau",
      duration: "2015 - 2020",
      details: ["Science stream students", "Played Chess in state level"],
    },
  ];

  const blogPosts = [
    {
      title: "Understanding the Basics of Machine Learning",
      date: "2023-05-15",
      description:
        "An introduction to machine learning concepts and their applications in software engineering.",
      slug: "understanding-machine-learning-basics",
    },
    {
      title: "The Future of Web Development: Web Assembly",
      date: "2023-04-22",
      description:
        "Exploring how Web Assembly is changing the landscape of web development.",
      slug: "future-of-web-development-web-assembly",
    },
    {
      title: "Best Practices for Writing Clean, Maintainable Code",
      date: "2023-03-10",
      description:
        "Tips and techniques for writing code that's easy to understand and maintain.",
      slug: "best-practices-clean-maintainable-code",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white sticky top-0 z-10">
        <nav className="container mx-auto px-6 py-3">
          <ul className="flex justify-center space-x-4">
            <li>
              <button
                onClick={() => scrollTo("home")}
                className="hover:text-gray-300"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("about")}
                className="hover:text-gray-300"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("skills")}
                className="hover:text-gray-300"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("projects")}
                className="hover:text-gray-300"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("education")}
                className="hover:text-gray-300"
              >
                Education
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("blog")}
                className="hover:text-gray-300"
              >
                Blog
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="hover:text-gray-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-8">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center"
        >
          <Image
            src="/rmvbgprofilepicture.png"
            alt="Profile Picture"
            width={200}
            height={200}
            className="rounded-full mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold mb-4">Daniel &apos;Imran</h1>
          <h2 className="text-2xl mb-6">Software Engineering Student</h2>
          <p className="mb-8 max-w-xl">
            I&apos;m a curious and versatile software engineering student who
            loves diving into diverse technologies. My core passions lie in
            developing user-friendly software solutions, innovative web
            applications, and navigating the complexities of cybersecurity. I
            thrive at the crossroads of learning, development and
            problem-solving
          </p>
          <div className="flex space-x-4">
            <Button onClick={() => scrollTo("projects")}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <a href="/john-doe-resume.pdf" download>
                Download Resume <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>

        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">
              Hi, I&apos;m Daniel &apos;Imran, a passionate software engineering
              student with a lifelong love for technology. My journey into the
              tech world began at an early age, inspired by my father, who
              introduced me to the fascinating world of computers.
            </p>
            <p className="mb-4">
              I am currently pursuing a Bachelor&apos;s degree in Computer
              Science, specializing in Software Engineering, at the
              International Islamic University Malaysia. I love dabbling in all
              kinds of technologies, from programming languages and frameworks
              to project management, software design architecture, testing,
              blockchain, UI/UX, data structures, networks, and cybersecurity.
              While some of these I&apos;ve delved deeply into, others I&apos;m
              exploring at a foundational level, driven by curiosity and a
              desire to learn.
            </p>
            <p className="mb-4">
              Beyond academics, I&apos;m actively involved in cybersecurity
              awareness initiatives and enjoy creating challenging CTF (Capture
              The Flag) competitions to engage and educate the community.
              Staying updated with the latest tech trends and participating in
              forums are some of my favorite activities, allowing me to
              constantly learn and share insights with like-minded enthusiasts.
            </p>
            <p>
              With a strong foundation and a curious mind, IWith a strong
              foundation and a curious mind, I’m always eager to explore new
              challenges and contribute to impactful technological
              advancements.m always eager to explore new challenges and
              contribute to impactful technological advancements.
            </p>
          </div>
        </section>

        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="mb-6">
              <h3 className="text-xl font-semibold mb-2">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.title}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.degree}>
                <CardHeader>
                  <CardTitle>{edu.degree}</CardTitle>
                  <CardDescription>
                    {edu.institution} | {edu.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {edu.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="blog" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Academic Papers</h2>
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>
                    <a href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </a>
                  </CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Daniel &apos;Imran. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/Ken69420"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-imran-41a785242/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:dnielmranazam@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
