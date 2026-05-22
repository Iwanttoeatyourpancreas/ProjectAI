import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import "./style.css";

const storyParagraphs = [
  'My journey has always been driven by curiosity. Over time, I discovered that learning is not limited to classrooms or traditional systems. It is a lifelong process powered by discipline, creativity, and the internet.',
  'I have met incredible people throughout my journey, each bringing unique perspectives, experiences, and ideas into my life. Every interaction helped me grow intellectually and personally.',
  'Today, I am independently self-studying advanced subjects through MIT OpenCourseWare, including Economics (14-1), Artificial Intelligence and Decision Making (Course 6-4), Mathematics (18), and Finance (15-3).',
  'My goal is to become a true interdisciplinary thinker, combining finance, economics, artificial intelligence, theoretical computer science, and business to build impactful ideas for the future.',
];

const visionCards = [
  {
    title: 'Interdisciplinary Thinking',
    description:
      'Creating bridges between finance, economics, AI, theoretical computer science, and business.',
  },
  {
    title: 'Polymath Journey',
    description:
      'Deeply exploring multiple disciplines instead of limiting myself to one field.',
  },
  {
    title: 'AI + FinTech',
    description:
      'Building AI-powered fintech systems focused on algorithmic trading and intelligent decision-making.',
  },
  {
    title: 'Internet Education',
    description:
      'Believing that anyone can learn almost anything through the internet with discipline and purpose.',
  },
  {
    title: 'Blockchain & Transparent Finance',
    description:
      'Exploring borderless transactions, decentralized systems, transparent banking, and the future of trustless global finance through blockchain technology.',
  },
  {
    title: 'Computational Civilizations',
    description:
      'Exploring the idea that future civilizations may increasingly rely on synthetic environments, intelligent simulations, and AI-generated data to solve real-world problems at planetary scale.',
  },
  {
    title: 'Cybersecurity & Digital Infrastructure',
    description:
      'Exploring cybersecurity, secure systems, digital infrastructure, and the protection of intelligent networks in an increasingly AI-driven world.',
  },
  {
    title: 'Humanity & Emerging Technology',
    description:
      'Studying the long-term relationship between artificial intelligence, automation, computational systems, and the future evolution of human civilization.',
  },
];

const socials = [
  {
    platform: 'Instagram',
    username: '@shivanxhverma',
    link: 'https://instagram.com/shivanxhverma',
  },
  {
    platform: 'Snapchat',
    username: '@Shivanxhverma',
    link: 'https://snapchat.com/add/Shivanxhverma',
  },
  {
    platform: 'Telegram',
    username: '@shivanxhverma',
    link: 'https://t.me/shivanxhverma',
  },
  {
    platform: 'Spotify',
    username: 'Shivanxhverma',
    link: 'https://open.spotify.com/user/316do7tainqq55w54jb2jyy5lbbq?si=7a29ce69dc7047a5',
  },
  {
    platform: 'Discord',
    username: '@shivanxhverma',
    link: 'https://discord.com/users/893037527584342056',
  },
  {
    platform: 'Email',
    username: 'shivanxhverma@gmail.com',
    link: 'mailto:shivanxhverma@gmail.com',
  },
];

function SectionTitle({ eyebrow, title, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <div className="text-[0.7rem] sm:text-sm uppercase tracking-[0.35em] text-cyan-200/90 mb-4 sm:mb-6">
        {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[0.95] tracking-[-0.04em] text-balance">
        {title}
      </h2>
    </div>
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function PolymathResumeWebsite() {
  const { scrollYProgress } = useScroll();
  const [currentIST, setCurrentIST] = useState('');

  const skyY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const sunY = useTransform(scrollYProgress, [0, 1], [0, 240]);
  const forestY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const mistOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0.35]);
  const riverScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);

  useEffect(() => {
    const update = () => {
      setCurrentIST(
        new Date().toLocaleString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
  className="min-h-screen text-white overflow-x-hidden font-sans selection:bg-cyan-300/30 selection:text-white"
  style={{
    background:
      "radial-gradient(circle at top, #0f172a 0%, #020617 40%, #000000 100%)",
  }}
>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-cyan-300 via-blue-200 to-amber-300"
        style={{ scaleX: scrollYProgress }}
      />

 <nav className="sticky top-0 z-50 backdrop-blur-2xl border-b border-white/10 bg-black/15">
        <div className="max-w-7xl mx-auto px-6 py-4 sm:py-5 flex items-center justify-between">
          <div>
            <div className="text-lg sm:text-2xl font-semibold tracking-tight bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-transparent">
              Shivansh Verma
            </div>
            <div className="text-[0.68rem] sm:text-xs text-white/55 tracking-[0.3em] uppercase mt-1">
              Finance • AI • Economics
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a
              href="#story"
              className="hover:text-white transition-colors duration-300"
            >
              Story
            </a>
            <a
              href="#vision"
              className="hover:text-white transition-colors duration-300"
            >
              Vision
            </a>
            <a
              href="#socials"
              className="hover:text-white transition-colors duration-300"
            >
              Connect
            </a>
            <div className="ml-4 px-4 py-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 text-cyan-100 text-xs backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              IST • {currentIST || 'Loading...'}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <section className="relative min-h-[100svh] flex items-center justify-center px-5 sm:px-6">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute inset-x-0 bottom-0 h-[24vh] bg-[linear-gradient(to_top,rgba(4,17,13,0.95),rgba(4,17,13,0.0))]"
              style={{ opacity: mistOpacity }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto text-center pt-12 sm:pt-20">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-5 sm:px-6 py-3 rounded-full border border-cyan-300/15 bg-white/[0.04] backdrop-blur-2xl mb-8 sm:mb-10 shadow-[0_0_40px_rgba(59,130,246,0.08)]">
                <div className="w-2 h-2 bg-blue-300 rounded-full animate-pulse" />
                <span className="text-sm text-white/75">
                  Building the Future of Interdisciplinary Knowledge &
                  Intelligence
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-semibold leading-[0.88] tracking-[-0.07em] mb-6 drop-shadow-[0_0_60px_rgba(110,231,183,0.24)] text-balance">
                A
                <br />
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent">
                  Polymath
                </span>
                <br />
                Journey.
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-white/68 leading-relaxed mb-10 sm:mb-12 text-balance">
                Exploring the intersection of finance, economics, artificial
                intelligence, mathematics, and technology, guided by curiosity,
                vision, and a deep love for learning.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#story"
                  className="px-7 sm:px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-[1.03] transition-all duration-300 shadow-[0_12px_40px_rgba(255,255,255,0.2)]"
                >
                  Explore My Story
                </a>
                <a
                  href="#socials"
                  className="px-7 sm:px-8 py-4 rounded-full border border-white/18 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300"
                >
                  Connect With Me
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="story" className="relative py-24 sm:py-32 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <SectionTitle
                  eyebrow="My Story"
                  title={
                    <>
                      Curiosity,
                      <span className="text-white/40"> Growth </span>& Vision.
                    </>
                  }
                />
                <p className="mt-6 text-white/60 text-lg leading-relaxed max-w-xl">
                  Like a forest constantly growing toward sunlight, my journey
                  has been shaped by learning, reinvention, intellectual
                  curiosity, and the desire to build something meaningful for
                  the future.
                </p>
              </div>
            </Reveal>

            <div className="space-y-5 sm:space-y-6">
              {storyParagraphs.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.05}>
                  <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_0_70px_rgba(0,0,0,0.18)] hover:shadow-[0_0_100px_rgba(59,130,246,0.16)] transition-shadow duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/8 via-transparent to-blue-200/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="relative text-base sm:text-lg text-white/74 leading-relaxed">
                      {paragraph}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="vision" className="relative py-20 sm:py-24 px-5 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <Reveal>
              <div className="text-center mb-14 sm:mb-20">
                <SectionTitle
                  center
                  eyebrow="Vision & Mission"
                  title={
                    <>
                      Building the
                      <br />
                      Future Through{' '}
                      <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent">
                        Knowledge.
                      </span>
                    </>
                  }
                />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {visionCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 0.06}>
                  <div className="group h-full relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-7 sm:p-8 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 shadow-[0_0_60px_rgba(0,0,0,0.16)] hover:shadow-[0_0_100px_rgba(59,130,246,0.18)]">
                    <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-cyan-300/10 blur-2xl group-hover:bg-cyan-200/18 transition-colors duration-500" />
                    <div className="relative text-5xl font-semibold text-white/15 mb-7">
                      0{index + 1}
                    </div>
                    <h3 className="relative text-2xl font-semibold mb-4">
                      {card.title}
                    </h3>
                    <p className="relative text-white/62 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-28 sm:py-32 px-5 sm:px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal>
              <div className="text-[0.7rem] sm:text-sm uppercase tracking-[0.35em] text-cyan-200/90 mb-8">
                Philosophy
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-semibold leading-[1.02] tracking-[-0.04em] mb-10 text-balance">
                “You can learn almost
                <br />
                everything from the internet.
                <br />
                You just need to know
                <br />
                how to use it correctly.”
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg sm:text-xl text-white/62 max-w-3xl mx-auto leading-relaxed text-balance">
                Learning is deeply personal for me. I genuinely enjoy
                understanding systems, ideas, mathematics, technology, markets,
                and intelligence itself.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="socials" className="relative py-24 sm:py-28 px-5 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <div className="text-center mb-12 sm:mb-16">
                <SectionTitle
                  center
                  eyebrow="Socials"
                  title={<>Connect With Me.</>}
                />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
              {socials.map((social, index) => (
                <Reveal key={social.platform} delay={index * 0.06}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-10 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 shadow-[0_0_70px_rgba(0,0,0,0.16)] hover:shadow-[0_0_120px_rgba(59,130,246,0.18)]"
                  >
                    <div className="text-[0.7rem] sm:text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
                      {social.platform}
                    </div>
                    <div className="text-white/52">Explore →</div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 px-6 text-center text-white/42 backdrop-blur-2xl bg-black/20">
        <p className="text-balance">
        Designed & Developed by Shivansh Verma
        </p>
      </footer>
    </div>
  );
}
