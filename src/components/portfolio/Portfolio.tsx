import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown, ArrowRight, Award, BookOpen, BriefcaseBusiness, CheckCircle2,
  ChevronRight, Code2, Database, Download, ExternalLink, FileText, Github,
  GraduationCap, Linkedin, Mail, MapPin, Menu, MessageSquare, Phone, Send,
  Sparkles, Terminal, UserRound, X, BrainCircuit, BarChart3, Layers3, Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories, certifications, education, experiences, navigation, projects, skills, socialProfiles } from "./data";

type LinkPlaceholderProps = { label: string; icon?: React.ReactNode; compact?: boolean };

function LinkPlaceholder({ label, icon, compact = false }: LinkPlaceholderProps) {
  return (
    <Button type="button" variant="outline" size={compact ? "sm" : "default"} disabled title={`${label} link has not been added yet`}>
      {icon}{label}<span className="sr-only"> — link not added</span>
    </Button>
  );
}

function SectionHeading({ kicker, title, description }: { kicker: string; title: string; description?: string }) {
  return (
    <div className="section-heading reveal">
      <span className="section-kicker"><span />{kicker}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function SocialLinks({ centered = false }: { centered?: boolean }) {
  const icons = [Linkedin, Github, Trophy, Code2, Terminal, Sparkles, GraduationCap];
  return (
    <div className={`social-links ${centered ? "justify-center" : ""}`} aria-label="Professional profiles">
      {socialProfiles.map((profile, index) => {
        const Icon = icons[index] ?? ExternalLink;
        return (
          <button key={profile} type="button" className="social-button" disabled title={`${profile} link has not been added yet`} aria-label={`${profile} — link not added`}>
            <Icon /><span>{profile}</span>
          </button>
        );
      })}
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navigation.map((item) => document.getElementById(item.toLowerCase())).filter(Boolean) as HTMLElement[];
      const current = sections.reduce((found, section) => section.offsetTop <= window.scrollY + 180 ? section.id : found, "home");
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-inner">
        <button className="brand" onClick={() => go("home")} aria-label="Go to home"><span>NC</span><strong>Nilesh Chatap</strong></button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <button key={item} className={active === item.toLowerCase() ? "active" : ""} onClick={() => go(item.toLowerCase())}>{item}</button>)}
        </nav>
        <Button variant="ghost" size="icon" className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close navigation" : "Open navigation"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open ? <nav className="mobile-nav" aria-label="Mobile navigation">{navigation.map((item) => <button key={item} className={active === item.toLowerCase() ? "active" : ""} onClick={() => go(item.toLowerCase())}>{item}<ChevronRight /></button>)}</nav> : null}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="neural-field" aria-hidden="true">{Array.from({ length: 18 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}</div>
      <div className="hero-content">
        <div className="hero-copy reveal visible">
          <div className="availability"><span /> Open to internships & opportunities</div>
          <p className="hero-eyebrow">AI & Data Science Student</p>
          <h1>Nilesh <em>Chatap</em></h1>
          <div className="hero-role"><span>AI/ML</span><b>•</b><span>Generative AI</span><b>•</b><span>Data Science</span><b>•</b><span>Python</span></div>
          <p className="hero-intro">Building intelligent solutions with Artificial Intelligence, Machine Learning, Generative AI and Data Analytics.</p>
          <div className="hero-actions">
            <Button variant="premium" size="lg" asChild><a href="#projects">View My Projects <ArrowRight /></a></Button>
            <Button variant="outline" size="lg" disabled title="Resume PDF has not been uploaded"><Download /> Download Resume</Button>
            <Button variant="ghost" size="lg" asChild><a href="#contact"><Mail /> Contact Me</a></Button>
          </div>
          <SocialLinks />
        </div>
        <div className="hero-visual reveal visible" aria-label="AI and data visualization">
          <div className="orbit orbit-one"><span>ML</span></div>
          <div className="orbit orbit-two"><span>AI</span><span>01</span></div>
          <div className="brain-core"><BrainCircuit /><strong>Intelligence</strong><small>Ideas → Models → Impact</small></div>
          <div className="signal-card signal-a"><BarChart3 /><span>Data Analytics</span></div>
          <div className="signal-card signal-b"><Sparkles /><span>Generative AI</span></div>
          <div className="signal-card signal-c"><Code2 /><span>Python</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Scroll to about"><span>Explore portfolio</span><ArrowDown /></a>
    </section>
  );
}

function About() {
  const stats = [[GraduationCap, "B.E. AI & Data Science"], [Code2, "Multiple AI/ML Projects"], [BriefcaseBusiness, "AI/ML Internship Experience"], [BookOpen, "Research Publication"]] as const;
  return (
    <section id="about" className="section-shell section-pad">
      <div className="content-wrap">
        <SectionHeading kicker="About me" title="Curious by nature. Driven by impact." />
        <div className="about-layout">
          <div className="about-copy reveal">
            <p className="lead">I am a B.E. Artificial Intelligence & Data Science student at Savitribai Phule Pune University with a strong interest in Artificial Intelligence, Machine Learning, Generative AI, Data Analytics and AI Agents.</p>
            <p>I enjoy transforming ideas into practical applications using Python, Machine Learning, LLMs, NLP and data-driven technologies. I have gained practical experience through internships and have worked on AI agents, resume analysis, recommendation systems, dashboards, automation and analytics projects.</p>
            <p>My goal is to continuously learn emerging AI technologies and build scalable solutions that solve real-world problems.</p>
            <div className="objective"><span>Career objective</span><p>To start my career in Artificial Intelligence and Data Science by leveraging my expertise in Python, Machine Learning, and Generative AI to build intelligent, scalable solutions while contributing to impactful projects and continuously enhancing my technical skills.</p></div>
          </div>
          <div className="stat-grid reveal">{stats.map(([Icon, label], i) => <article className="stat-card" key={label}><span>0{i + 1}</span><Icon /><h3>{label}</h3></article>)}</div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return <section id="education" className="section-shell section-pad alt-section"><div className="content-wrap"><SectionHeading kicker="Learning path" title="Education" description="The academic foundation behind my work in intelligent systems and data." /><div className="timeline">{education.map((item, i) => <article className="timeline-item reveal" key={item.institution}><div className="timeline-node"><GraduationCap /></div><div className="timeline-card"><div className="timeline-meta"><span>{item.period}</span><span><MapPin />{item.location}</span></div><p className="timeline-index">0{i + 1} / EDUCATION</p><h3>{item.institution}</h3><h4>{item.qualification}</h4></div></article>)}</div></div></section>;
}

function Experience() {
  return <section id="experience" className="section-shell section-pad"><div className="content-wrap"><SectionHeading kicker="Professional journey" title="Experience" description="Practical work across artificial intelligence, analytics, automation and student advocacy." /><div className="timeline experience-timeline">{experiences.map((item, i) => <article className="timeline-item reveal" key={item.company}><div className="timeline-node"><BriefcaseBusiness /></div><div className="timeline-card"><div className="timeline-meta"><span>{item.period}</span><span><MapPin />{item.location}</span></div><p className="timeline-index">0{i + 1} / EXPERIENCE</p><h3>{item.company}</h3><h4>{item.role}</h4><ul>{item.points.map(point => <li key={point}><CheckCircle2 />{point}</li>)}</ul><LinkPlaceholder compact label="View Certificate" icon={<Award />} /></div></article>)}</div></div></section>;
}

function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter(project => project.categories.includes(active)), [active]);
  return (
    <section id="projects" className="section-shell section-pad alt-section"><div className="content-wrap wide"><SectionHeading kicker="Selected work" title="Projects built around real problems" description="AI agents, intelligent applications and data products designed from idea to working prototype." />
      <div className="filter-row" role="group" aria-label="Filter projects">{categories.map(category => <Button key={category} variant={active === category ? "premium" : "filter"} size="sm" onClick={() => setActive(category)} aria-pressed={active === category}>{category}</Button>)}</div>
      <div className="project-grid" aria-live="polite">{filtered.map((project, i) => <article className="project-card reveal visible" key={project.title}><div className="project-image"><img src={project.image} alt={`Concept artwork for ${project.title}`} loading="lazy" width={1200} height={800} /><span>{project.year}</span></div><div className="project-body"><p className="project-number">PROJECT / 0{i + 1}</p><h3>{project.title}</h3><h4>{project.subtitle}</h4><p>{project.description}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><ul>{project.features.map(feature => <li key={feature}><CheckCircle2 />{feature}</li>)}</ul><div className="project-actions"><LinkPlaceholder compact label="GitHub" icon={<Github />} /><LinkPlaceholder compact label="Live Demo" icon={<ExternalLink />} /><LinkPlaceholder compact label="View Project" icon={<ArrowRight />} /></div></div></article>)}</div>
    </div></section>
  );
}

function Skills() {
  const icons = [Code2, Layers3, BrainCircuit, Database, Terminal, UserRound];
  return <section id="skills" className="section-shell section-pad"><div className="content-wrap"><SectionHeading kicker="Technical toolkit" title="Skills & capabilities" description="The technologies and working habits I use to turn data and ideas into useful systems." /><div className="skills-grid">{skills.map((skill, i) => { const Icon = icons[i] ?? Code2; return <article className="skill-card reveal" key={skill.group}><div className="skill-heading"><Icon /><h3>{skill.group}</h3></div><div className="skill-list">{skill.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div></div></section>;
}

function Publications() {
  return <section id="publications" className="section-shell section-pad alt-section"><div className="content-wrap"><SectionHeading kicker="Research" title="Publication" description="Exploring how data reveals patterns in digital audiences and content performance." /><article className="publication-card reveal"><div className="publication-mark"><BookOpen /><span>2026</span></div><div><span className="eyebrow">Research publication</span><h3>YouTube Trending Video Analytics</h3><p className="publication-by">Nilesh Chatap · International Journal of Advanced Research in Science, Engineering and Technology (IJARSET)</p><p>Research focused on YouTube trending datasets, engagement analysis, and audience behavior insights.</p><div className="action-row"><LinkPlaceholder label="View Publication" icon={<ExternalLink />} /><LinkPlaceholder label="View Certificate" icon={<Award />} /></div></div></article></div></section>;
}

function Certifications() {
  return <section id="certifications" className="section-shell section-pad"><div className="content-wrap wide"><SectionHeading kicker="Continuous learning" title="Certifications" description="Focused learning across artificial intelligence, prompt engineering, generative AI and Python." /><div className="cert-grid">{certifications.map(([title, issuer], i) => <article className="cert-card reveal" key={title}><div className="cert-icon"><Award /></div><span>0{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{issuer || "Certificate issuer not specified"}</p><LinkPlaceholder compact label="View Certificate" icon={<ExternalLink />} /></article>)}</div></div></section>;
}

function Resume() {
  return <section id="resume" className="section-shell section-pad resume-section"><div className="content-wrap"><div className="resume-panel reveal"><div className="resume-icon"><FileText /></div><div><span className="section-kicker"><span />Professional profile</span><h2>My Resume</h2><p>Explore my education, experience, projects, technical skills, certifications and achievements.</p></div><div className="action-row"><Button variant="premium" size="lg" disabled title="Resume PDF has not been uploaded"><ExternalLink />View Resume</Button><Button variant="outline" size="lg" disabled title="Resume PDF has not been uploaded"><Download />Download Resume</Button></div><small>Resume file awaiting upload: Nilesh_Chatap_Resume.pdf</small></div></div></section>;
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio enquiry");
    const message = `Hello Nilesh,\n\n${String(data.get("message") || "")}\n\nFrom: ${String(data.get("name") || "")} (${String(data.get("email") || "")})`;
    window.location.href = `mailto:nileshchatap25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setSent(true);
  };
  return <section id="contact" className="section-shell section-pad alt-section"><div className="content-wrap"><SectionHeading kicker="Start a conversation" title="Let's Connect" description="I am always interested in learning, collaborating and working on innovative AI, Machine Learning and Data Science projects." /><div className="contact-grid"><div className="contact-info reveal"><a href="mailto:nileshchatap25@gmail.com"><Mail /><span><small>Email</small>nileshchatap25@gmail.com</span></a><a href="tel:+919021412625"><Phone /><span><small>Phone</small>+91-9021412625</span></a><div><MapPin /><span><small>Location</small>Maharashtra, India</span></div><SocialLinks /></div><form className="contact-form reveal" onSubmit={submit}><div className="form-row"><label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label><label>Email<input type="email" name="email" required autoComplete="email" placeholder="you@example.com" /></label></div><label>Subject<input name="subject" required placeholder="What would you like to discuss?" /></label><label>Message<textarea name="message" required rows={6} placeholder="Write your message..." /></label><Button type="submit" variant="premium" size="lg"><Send />Send Message</Button>{sent ? <p className="form-note" role="status">Your email app should now be ready with this message.</p> : null}</form></div></div></section>;
}

function Footer() {
  return <footer><div className="footer-inner"><div><div className="brand footer-brand"><span>NC</span><strong>Nilesh Chatap</strong></div><p>AI & Data Science Student</p><small>Building intelligent solutions with AI, ML, GenAI and Data Analytics.</small></div><SocialLinks centered /><p className="copyright">© 2026 Nilesh Chatap. All Rights Reserved.</p></div></footer>;
}

export function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); }), { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><Navbar /><main><Hero /><About /><Education /><Experience /><Projects /><Skills /><Publications /><Certifications /><Resume /><Contact /></main><Footer /></>;
}
