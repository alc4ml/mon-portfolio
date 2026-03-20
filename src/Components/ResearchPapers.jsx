import React from "react";
import { FaFileAlt, FaCode, FaExternalLinkAlt } from "react-icons/fa";

const researchPapers = [
  {
    id: 1,
    title: "Estimating Domain Shift in Cross-Domain Object Detection",
    authors: "Your Name, Collaborators",
    venue: "Master’s Research Internship",
    year: "2026",
    status: "In Progress",
    abstract:
      "This work investigates how visual representations extracted from deep learning models can be used to estimate and characterize domain shift in cross-domain object detection scenarios. The goal is to better understand performance degradation across heterogeneous datasets and support more robust adaptation strategies.",
    tags: [
      "Computer Vision",
      "Object Detection",
      "Domain Adaptation",
      "Deep Learning",
    ],
    paperUrl: "#",
    codeUrl: "#",
    projectUrl: "#",
  },
  {
    id: 2,
    title: "Similarity Metrics for Visual Representation Alignment Across Domains",
    authors: "Your Name, Collaborators",
    venue: "Research Project",
    year: "2026",
    status: "Under Review",
    abstract:
      "This project explores statistical and embedding-based metrics to compare source and target visual domains. It focuses on measuring representation similarity and studying how these estimates correlate with downstream performance in machine learning systems.",
    tags: [
      "Representation Learning",
      "Vision Transformers",
      "Similarity Metrics",
      "Machine Learning",
    ],
    paperUrl: "#",
    codeUrl: "#",
    projectUrl: "#",
  },
  {
    id: 3,
    title: "Few-Shot Detection Across Heterogeneous Visual Environments",
    authors: "Your Name, Collaborators",
    venue: "Independent Study",
    year: "2025",
    status: "Draft",
    abstract:
      "An exploratory study on few-shot object detection in settings where training and deployment domains differ significantly. The work examines how limited supervision and domain shift jointly affect generalization.",
    tags: [
      "Few-Shot Learning",
      "Cross-Domain Learning",
      "Object Detection",
      "Generalization",
    ],
    paperUrl: "#",
    codeUrl: "#",
    projectUrl: "#",
  },
];

const interests = [
  "Computer Vision",
  "Object Detection",
  "Domain Adaptation",
  "Representation Learning",
  "Deep Learning",
  "Vision Transformers",
];

const getStatusClasses = (status) => {
  switch (status) {
    case "Published":
      return "bg-green-500/15 text-green-400 border border-green-400/30";
    case "Under Review":
      return "bg-yellow-500/15 text-yellow-300 border border-yellow-300/30";
    case "In Progress":
      return "bg-blue-500/15 text-blue-300 border border-blue-300/30";
    case "Draft":
      return "bg-pink-500/15 text-pink-300 border border-pink-300/30";
    default:
      return "bg-white/10 text-gray-300 border border-white/10";
  }
};

const ResearchPapers = () => {
  return (
    <section className="bg-[#111132] text-white min-h-screen py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Hero */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#43e97b] mb-3">
            Research
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">
            Research Papers
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
            A selection of research work, scientific projects, and ongoing
            studies in computer vision, machine learning, and domain adaptation.
            This page gathers publications, drafts, and research-oriented work
            focused on robust visual understanding across challenging domains.
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-5">
            Research Interests
          </h2>
          <div className="flex flex-wrap gap-3">
            {interests.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.04] text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Papers */}
        <div className="space-y-6">
          {researchPapers.map((paper) => (
            <article
              key={paper.id}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-4">
                <div className="max-w-3xl">
                  <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-2">
                    {paper.title}
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    {paper.authors}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">
                    {paper.venue} · {paper.year}
                  </p>
                </div>

                <div className="md:ml-6">
                  <span
                    className={`inline-flex px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap ${getStatusClasses(
                      paper.status
                    )}`}
                  >
                    {paper.status}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base mb-5 max-w-4xl">
                {paper.abstract}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {paper.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs md:text-sm border border-pink-400/20 bg-pink-400/10 text-pink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={paper.paperUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm text-gray-200"
                >
                  <FaFileAlt size={14} />
                  Read Paper
                </a>

                <a
                  href={paper.codeUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm text-gray-200"
                >
                  <FaCode size={14} />
                  Code
                </a>

                <a
                  href={paper.projectUrl}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] transition text-sm text-gray-200"
                >
                  <FaExternalLinkAlt size={12} />
                  Project Page
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-[#43e97b]/20 bg-[#43e97b]/5 p-6">
          <p className="text-sm md:text-base text-gray-300 leading-relaxed">
            Some entries may correspond to ongoing work, early-stage drafts, or
            research projects not yet publicly available. Links can be updated
            progressively as papers, code repositories, or project pages become
            accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;