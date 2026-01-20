import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import WorkEntry from '../components/WorkEntry';
import BlogCard from '../components/BlogCard';
import { featuredWork, moreProjects, skills, education, researchFocus } from '../data/workData';
import { blogPosts } from '../content/blog';

const Portfolio: React.FC = () => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-bg-primary text-text-primary">

      {/* ========== HOME / HERO SECTION ========== */}
      <section id="home" className="relative min-h-screen flex items-center px-8 md:px-16 py-24">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-bold text-text-primary mb-4">
                Sebastian Vargas
              </h1>

              <p className="text-2xl text-text-secondary font-light">
                EECS @ UC Berkeley
              </p>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#work"
                className="px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-text-secondary rounded hover:border-accent hover:text-accent transition-all"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - Image with subtle corner brackets */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Subtle corner brackets */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-accent opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-accent opacity-30"></div>

              {/* Main image */}
              <div className="relative w-full h-full">
                <img
                  src="./Headshot.jpg"
                  alt="Sebastian Vargas"
                  className="relative w-full h-full object-cover rounded-lg border border-border"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== WORK SECTION ========== */}
      <section id="work" className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4">Selected Work</h2>
            <p className="text-text-secondary">Professional experiences and technical projects</p>
          </motion.div>

          {/* Featured Work */}
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            {featuredWork.map((work, index) => (
              <WorkEntry
                key={work.id}
                title={work.title}
                type={work.type}
                date={work.date}
                location={work.location}
                description={work.description}
                impact={work.impact}
                details={work.details}
                tags={work.tags}
                links={work.links}
                index={index}
              />
            ))}
          </div>

          {/* More Projects Toggle */}
          <div className="max-w-4xl mx-auto">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              onClick={() => setShowMoreProjects(!showMoreProjects)}
              className="w-full py-4 border border-border rounded-lg text-text-secondary hover:border-accent hover:text-accent transition-all font-mono text-sm mb-8"
            >
              {showMoreProjects ? '− Hide' : '+ More Projects'}
            </motion.button>

            {/* More Projects */}
            {showMoreProjects && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-8"
              >
                {moreProjects.map((project, index) => (
                  <WorkEntry
                    key={project.id}
                    title={project.title}
                    type={project.type}
                    date={project.date}
                    location={project.location}
                    description={project.description}
                    impact={project.impact}
                    details={project.details}
                    tags={project.tags}
                    links={project.links}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </div>

          {/* GitHub CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center max-w-4xl mx-auto"
          >
            <p className="text-text-secondary font-mono text-sm mb-4">More on GitHub</p>
            <a
              href="https://github.com/Sentientnapkin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded hover:bg-accent hover:text-white transition-all font-mono text-sm"
            >
              <FaGithub />
              <span>@Sentientnapkin</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== BLOG SECTION ========== */}
      <section id="blog" className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4">Writing</h2>
            <p className="text-text-secondary">Thoughts</p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12 mb-12">
            {blogPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== BACKGROUND SECTION ========== */}
      <section id="background" className="py-24 px-8 md:px-16 bg-bg-secondary/30">
        <div className="max-w-6xl mx-auto">

          {/* Current Focus */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-mono text-accent mb-12">Current Focus</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {researchFocus.map((focus, index) => (
                <motion.div
                  key={focus.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-border rounded-lg p-6 hover:border-accent transition-all"
                >
                  <h3 className="text-lg font-semibold text-accent mb-3">{focus.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {focus.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {focus.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono text-text-tertiary border border-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-20"
          >
            <h2 className="text-2xl font-mono text-accent mb-12">Education</h2>

            {/* UC Berkeley Header */}
            <div className="flex items-center gap-6 mb-8">
              <img
                src="./Berkeley.png"
                alt="UC Berkeley"
                className="w-20 h-20 rounded-lg opacity-80"
              />
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-2">
                  {education.school.name}
                </h3>
                <p className="text-text-secondary font-mono text-sm">
                  {education.school.degree}
                </p>
              </div>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mb-12">
              {education.school.statement}
            </p>

            {/* Coursework */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Completed */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-6">
                  What I've been learning
                </h4>
                <div className="space-y-2">
                  {education.coursework.completed.map((course, i) => (
                    <a
                      key={i}
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="flex items-baseline gap-4 py-2 px-4 rounded hover:bg-bg-secondary/50 transition-all">
                        <span className="font-mono text-sm text-accent min-w-[80px]">
                          {course.code}
                        </span>
                        <span className="text-text-secondary group-hover:text-text-primary transition-colors text-sm">
                          {course.name}
                        </span>
                        <span className="ml-auto text-text-tertiary group-hover:text-accent transition-colors">
                          →
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Upcoming */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-6">
                  What's next
                </h4>
                <div className="space-y-2">
                  {education.coursework.upcoming.map((course, i) => (
                    <div
                      key={i}
                      className="py-2 px-4 rounded bg-bg-secondary/30"
                    >
                      <span className="text-text-secondary font-mono text-sm">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Involvement */}
            <div className="mt-12">
              <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-6">
                Beyond classes
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {education.involvement.map((org, index) => (
                  <a
                    key={index}
                    href={org.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-bg-secondary/30 hover:bg-bg-secondary/50 transition-all border border-transparent hover:border-accent/20 group"
                  >
                    <img
                      src={org.logo}
                      alt={org.name}
                      className="w-12 h-12 rounded-lg"
                    />
                    <div className="flex-1">
                      <p className="font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {org.name}
                      </p>
                      <p className="text-sm text-text-tertiary font-mono">
                        {org.role}
                      </p>
                      {org.description && (
                        <p className="text-xs text-text-tertiary mt-1">
                          {org.description}
                        </p>
                      )}
                    </div>
                    <span className="text-text-tertiary group-hover:text-accent transition-colors">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technical Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-2xl font-mono text-accent mb-12">Technical Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Languages */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">
                  Languages
                </h4>
                <div className="space-y-2">
                  {skills.languages.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text-secondary font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ML/AI */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">
                  ML/AI
                </h4>
                <div className="space-y-2">
                  {skills.ml_ai.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text-secondary font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">
                  Web
                </h4>
                <div className="space-y-2">
                  {skills.web.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text-secondary font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud/Infrastructure */}
              <div>
                <h4 className="text-sm font-mono text-text-tertiary uppercase tracking-wider mb-4">
                  Cloud/Infra
                </h4>
                <div className="space-y-2">
                  {skills.cloud_infra.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      <span className="text-text-secondary font-mono text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section id="contact" className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4">Get in Touch</h2>
            <p className="text-text-secondary">Let's build something together</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Email */}
            <a
              href="mailto:sebastian.vargas@berkeley.edu"
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <FaEnvelope className="text-2xl text-accent" />
              <div>
                <p className="font-mono text-sm text-text-tertiary mb-1">Email</p>
                <p className="text-text-primary group-hover:text-accent transition-colors">
                  sebastian.vargas@berkeley.edu
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Sentientnapkin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <FaGithub className="text-2xl text-accent" />
              <div>
                <p className="font-mono text-sm text-text-tertiary mb-1">GitHub</p>
                <p className="text-text-primary group-hover:text-accent transition-colors">
                  @Sentientnapkin
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sebastian-vargas-/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <FaLinkedin className="text-2xl text-accent" />
              <div>
                <p className="font-mono text-sm text-text-tertiary mb-1">LinkedIn</p>
                <p className="text-text-primary group-hover:text-accent transition-colors">
                  Sebastian Vargas
                </p>
              </div>
            </a>

            {/* Resume Download */}
            <a
              href="./Resume.pdf"
              download
              className="flex items-center gap-4 p-6 border border-border rounded-lg hover:border-accent transition-all group"
            >
              <FaFileDownload className="text-2xl text-accent" />
              <div>
                <p className="font-mono text-sm text-text-tertiary mb-1">Resume</p>
                <p className="text-text-primary group-hover:text-accent transition-colors">
                  Download PDF
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Back to Top */}
      <div className="text-center py-12">
        <a
          href="#home"
          className="inline-block text-text-tertiary hover:text-accent transition-colors font-mono text-sm"
        >
          ↑ Back to top
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
