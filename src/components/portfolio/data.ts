import emailImage from "@/assets/project-email.jpg";
import resumeImage from "@/assets/project-resume.jpg";
import supportImage from "@/assets/project-support.jpg";
import voiceImage from "@/assets/project-voice.jpg";
import analyticsImage from "@/assets/project-analytics.jpg";
import infosysAiCertificate from "@/assets/infosys-ai-certificate.png.asset.json";
import promptEngineeringCertificate from "@/assets/prompt-engineering-certificate.png.asset.json";
import googleGenAiCertificate from "@/assets/google-genai-certificate.png.asset.json";
import infosysCertificate from "@/assets/infosys-springboard-certificate.png.asset.json";
import ibmCertificate from "@/assets/ibm-skillsbuild-certificate.png.asset.json";
import googleAmbassadorCertificate from "@/assets/google-ambassador-certificate.png.asset.json";
import elevateLabsCertificate from "@/assets/elevate-labs-certificate.png.asset.json";

export const navigation = ["Home", "About", "Education", "Experience", "Projects", "Skills", "Publications", "Certifications", "Resume", "Contact"];

export type SocialProfile = { label: string; url?: string };

export const socialProfiles: SocialProfile[] = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/nilesh-chatap-967101348" },
  { label: "GitHub", url: "https://github.com/" },
  { label: "Kaggle", url: "https://kaggle.com/nileshchatap" },
  { label: "HackerRank", url: "https://www.hackerrank.com/profile/nileshchatap25" },
  { label: "Hack2Skill", url: "https://bit.ly/hack2skill-user" },
  { label: "Google Developer", url: "https://g.dev/nileshchatap" },
  { label: "Google Skills", url: "https://www.skills.google/public_profiles/f019ff51-59d7-4290-ab48-1fd51cf04b2e" },
];

export const education = [
  { institution: "Savitribai Phule Pune University (SPPU)", qualification: "B.E. in Artificial Intelligence & Data Science", period: "2024 – Present", location: "Pune, India" },
  { institution: "HSC (12th Grade)", qualification: "First Class", period: "2023 – 2024", location: "Maharashtra, India" },
];

export type Experience = { company: string; role: string; period: string; location: string; points: string[]; certificateUrl?: string };

export const experiences: Experience[] = [
  { company: "Infosys Springboard", role: "Artificial Intelligence Intern", period: "Feb 2026 – Apr 2026", location: "Remote", certificateUrl: infosysCertificate.url, points: ["Built AI and Generative AI projects using Python, TensorFlow, PyTorch, NumPy, and Scikit-learn.", "Developed an Email Classification AI Agent using Prompt Engineering and Large Language Models (LLMs).", "Improved AI model performance through evaluation, testing, and iterative optimization.", "Worked on AI Agents and real-world Generative AI applications."] },
  { company: "IBM SkillsBuild", role: "AIML Intern", period: "Dec 2025 – Jan 2026", location: "Remote", certificateUrl: ibmCertificate.url, points: ["Built Machine Learning models using Python on real-world datasets.", "Performed preprocessing, analysis, and evaluation using AI/ML techniques.", "Completed internship onboarding and AI learning modules successfully."] },
  { company: "Google Student Ambassador", role: "Campus Representative", period: "Sept 2025 – Feb 2026", location: "Remote", certificateUrl: googleAmbassadorCertificate.url, points: ["Promoted awareness and adoption of Google AI tools among students.", "Explored AI platforms including Google Gemini and emerging AI technologies."] },
  { company: "Elevate Labs", role: "Data Analyst Intern", period: "Sept 2025 – Nov 2025", location: "Remote", certificateUrl: elevateLabsCertificate.url, points: ["Built Power BI dashboards for KPI tracking and business insights.", "Used Python, Pandas, Excel, and Power BI for data analysis and visualization."] },
];

export const categories = ["All", "Artificial Intelligence", "Machine Learning", "Generative AI", "AI Agents", "Data Science", "Data Analytics", "Automation"];

export type Project = {
  title: string; subtitle: string; year: string; description: string;
  technologies: string[]; categories: string[]; features: string[]; image: string;
  githubUrl?: string; projectUrl?: string;
};

export const projects: Project[] = [
  { title: "Ambient Email Assistant", subtitle: "AI Agent", year: "2026", description: "An intelligent AI email assistant designed for automated email processing and workflow automation.", technologies: ["Python", "LLMs", "NLP", "Automation"], categories: ["Artificial Intelligence", "Generative AI", "AI Agents", "Automation"], features: ["Gmail API / IMAP email processing", "Entity extraction and sentiment analysis", "Category-wise classification and response generation", "Flask / FastAPI interactive prototype"], image: emailImage, githubUrl: "https://github.com/Joshika-Mentor/AI_Building-an-Ambient-Agent-with-LangGraph-for-an-Email-Assistant/tree/nileshchatap", projectUrl: "https://emailsortai.lovable.app" },
  { title: "FindInternship", subtitle: "AI + ATS Resume Analyzer", year: "2026", description: "An AI-powered platform for resume analysis, ATS scoring and personalized internship recommendations.", technologies: ["Python", "LLMs", "NLP", "FastAPI", "PostgreSQL"], categories: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Data Science"], features: ["Resume upload and ATS scoring", "Skill and experience extraction", "LLM-based resume suggestions", "Internship recommendations and tracking dashboard"], image: resumeImage, githubUrl: "https://github.com/NileshChatap2625-Star/findinternship", projectUrl: "https://findinternship.vercel.app/" },
  { title: "SmartHelp AI", subtitle: "Enterprise Support Agent", year: "2026", description: "An autonomous AI customer support agent designed to perform reasoning, task execution and decision-making workflows.", technologies: ["Python", "AI Agents", "Kaggle"], categories: ["Artificial Intelligence", "Generative AI", "AI Agents"], features: ["Kaggle AI Agents framework", "Autonomous reasoning and task execution", "Prompt Engineering and evaluation metrics", "Kaggle AI Agents Capstone badge"], image: supportImage, githubUrl: "https://github.com/NileshChatap2625-Star/neurobot-ai", projectUrl: "https://emargencyai.lovable.app" },
  { title: "JARVIS AI Control", subtitle: "Voice Automation", year: "2025", description: "A voice-controlled AI assistant designed for automation and system-level tasks.", technologies: ["Python", "Speech Recognition", "TTS"], categories: ["Artificial Intelligence", "Automation"], features: ["Speech recognition and text-to-speech", "Real-time voice interaction", "Automation and system tasks", "Modular architecture for future expansion"], image: voiceImage, githubUrl: "https://github.com/NileshChatap2625-Star/Jarvis.py" },
  { title: "YouTube Trending Video Analytics", subtitle: "Audience Intelligence", year: "2025", description: "A data analytics project focused on understanding trending video behavior and audience engagement.", technologies: ["Python", "Pandas", "Power BI"], categories: ["Data Science", "Data Analytics"], features: ["Trending dataset analysis", "Views, likes, categories and posting behavior", "Statistical engagement analysis", "Power BI dashboards and virality insights"], image: analyticsImage },
];

export const skills = [
  { group: "Languages", items: ["Python", "C", "SQL", "Data Structures", "OOP"] },
  { group: "Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "SciPy", "TensorFlow", "PyTorch"] },
  { group: "AI / ML", items: ["Machine Learning", "Artificial Intelligence", "Prompt Engineering", "LLMs", "Generative AI", "AI Agents"] },
  { group: "Databases", items: ["MySQL"] },
  { group: "Tools", items: ["Power BI", "Git", "GitHub", "Google Colab", "VS Code", "PyCharm", "Eclipse", "IntelliJ IDEA"] },
  { group: "Behavioral Skills", items: ["Leadership", "Team Player", "Analytical Thinking", "Eagerness to Learn"] },
];

export type Certification = { title: string; issuer: string; certificateUrl?: string };

export const certifications: Certification[] = [
  { title: "Artificial Intelligence", issuer: "Infosys", certificateUrl: infosysAiCertificate.url },
  { title: "Prompt Engineering", issuer: "Infosys", certificateUrl: promptEngineeringCertificate.url },
  { title: "Introduction to Generative AI", issuer: "Google Cloud" },
  { title: "Getting Started with Generative AI", issuer: "IBM SkillsBuild" },
  { title: "GenAI Powered Data Analytics", issuer: "Tata" },
  { title: "5-Day Gen AI Intensive Course", issuer: "Google" },
  { title: "Google Student Ambassador Certification", issuer: "Google" },
  { title: "Online Python Training Course", issuer: "" },
];
