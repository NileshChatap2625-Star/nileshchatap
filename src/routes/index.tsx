import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio/Portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilesh Chatap | AI & Data Science Portfolio" },
      { name: "description", content: "Nilesh Chatap – B.E. Artificial Intelligence & Data Science student specializing in Artificial Intelligence, Machine Learning, Generative AI, Python and Data Analytics." },
      { name: "keywords", content: "Nilesh Chatap, Artificial Intelligence, Data Science, Machine Learning, Generative AI, Python, AI Agents, Data Analytics, Portfolio" },
      { property: "og:title", content: "Nilesh Chatap | AI & Data Science Portfolio" },
      { property: "og:description", content: "Explore Nilesh Chatap's AI, Machine Learning, Generative AI and Data Analytics work." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nilesh Chatap | AI & Data Science Portfolio" },
      { name: "twitter:description", content: "AI & Data Science portfolio featuring practical AI agents, intelligent applications and data analytics projects." },
    ],
  }),
  component: Portfolio,
});
