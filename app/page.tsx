"use client";

import Hero from "@/components/sections/Hero";
import ProjectsGrid from "@/components/sections/ProjectsGrid";
import TechStack from "@/components/sections/TechStack";
import ContactForm from "@/components/sections/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";
import DynamicBackground from "@/components/DynamicBackground";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <div className="relative min-h-screen overflow-hidden">
      <DynamicBackground />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Projects Section */}
      <section id="projects" className="relative min-h-screen section">
        <div className="relative z-10 section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-16 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="caption mb-4 block"
            >
              02
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="heading-1 text-text-primary mb-6"
            >
              Projekte
            </motion.h2>
          </motion.div>
          <ProjectsGrid />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="relative min-h-screen section">
        <div className="relative z-10 section-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-16 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="caption mb-4 block"
            >
              03
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="heading-1 text-text-primary mb-8"
            >
              Über mich
            </motion.h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Main content with interactive elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Personal Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="card card-hover text-center p-6 group"
                >
                  <motion.div
                    className="text-4xl font-bold text-text-primary mb-2"
                    initial={{ opacity: 0 }}
                    animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    23
                  </motion.div>
                  <div className="caption text-text-secondary">Jahre alt</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="card card-hover text-center p-6 group"
                >
                  <motion.div
                    className="text-2xl text-text-primary mb-2"
                    initial={{ opacity: 0 }}
                    animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    Wuppertal
                  </motion.div>
                  <div className="caption text-text-secondary">Geburtsort</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isAboutInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="card card-hover text-center p-6 group"
                >
                  <motion.div
                    className="text-4xl font-bold text-text-primary mb-2"
                    initial={{ opacity: 0 }}
                    animate={isAboutInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                  >
                    2019
                  </motion.div>
                  <div className="caption text-text-secondary">Seit dem am Koden</div>
                </motion.div>
              </div>

              {/* Main Text */}
              <div className="space-y-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="body-large leading-relaxed"
                >
                  Hallo! Ich bin <span className="text-text-primary font-semibold">Adrian</span>, 23 Jahre alt, geboren in <span className="text-text-primary font-semibold">Wuppertal</span>. 
                  Momentan absolviere ich meine Ausbildung bei der <span className="text-text-primary font-semibold">Telekom</span> als <span className="text-text-primary font-semibold">IT-Systemelektroniker</span> – 
                  eine spannende Mischung aus Hardware und Software, die mir täglich neue Herausforderungen bietet.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="body leading-relaxed"
                >
                  Seit <span className="text-text-primary font-semibold">2019</span> programmiere ich leidenschaftlich und habe mich in dieser Zeit ein breites Spektrum an Technologien angeeignet. 
                  Von <span className="text-text-primary font-semibold">Python</span> und <span className="text-text-primary font-semibold">C++</span> für Backend-Logik und Systemprogrammierung, 
                  über <span className="text-text-primary font-semibold">HTML</span>, <span className="text-text-primary font-semibold">CSS</span> und <span className="text-text-primary font-semibold">React</span> für moderne Web-Interfaces, 
                  bis hin zu <span className="text-text-primary font-semibold">Next.js</span> für performante Full-Stack-Anwendungen und <span className="text-text-primary font-semibold">SQL</span> für Datenbankmanagement – 
                  ich liebe es, die richtige Technologie für jedes Projekt zu finden.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="body leading-relaxed"
                >
                  Was mich antreibt? Die Verbindung von technischer Präzision mit kreativen Lösungen. 
                  Jedes Projekt ist für mich eine Chance, etwas Neues zu lernen und Code zu schreiben, der nicht nur funktioniert, 
                  sondern auch elegant und wartbar ist. Die Ausbildung bei der Telekom gibt mir dabei die perfekte Balance zwischen 
                  strukturiertem Lernen und praktischer Anwendung.
                </motion.p>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <TechStack />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-screen section">
        <div className="relative z-10 section-content max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-16 text-center"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="caption mb-4 block"
            >
              04
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="heading-1 text-text-primary mb-6"
            >
              Kontakt
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="body-large"
            >
              Lass uns zusammenarbeiten oder einfach über Code sprechen.
            </motion.p>
          </motion.div>
          
          <ContactForm />
          <SocialLinks />
        </div>
      </section>
    </div>
  );
}
