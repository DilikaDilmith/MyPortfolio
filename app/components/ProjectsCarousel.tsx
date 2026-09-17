"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Project } from "../data/projects";

interface ProjectsCarouselProps {
  projects: Project[];
}

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mouse drag-to-scroll state
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const dragged = useRef(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate current visible card index
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length > 0) {
      const cardWidth = children[0].offsetWidth + 24; // width + gap
      const newIndex = Math.min(
        Math.round(scrollLeft / cardWidth),
        projects.length - 1
      );
      setActiveIndex(Math.max(0, newIndex));
    }
  }, [projects.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 420;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];
    if (children[index]) {
      children[index].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  // Drag-to-scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    isDown.current = true;
    dragged.current = false;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeftPos.current = el.scrollLeft;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      dragged.current = true;
    }
    el.scrollLeft = scrollLeftPos.current - walk;
  };

  const onMouseUp = () => {
    isDown.current = false;
  };

  return (
    <div className="relative">
      {/* Header section with title and controls */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div>
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <span className="text-sm font-mono text-muted">03</span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Featured Work
            </span>
            <span className="h-px w-12 sm:w-16 bg-border" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Recent Projects
          </h2>
          <p className="mt-1.5 sm:mt-2 text-muted max-w-xl text-xs sm:text-sm md:text-base">
            Explore web apps, mobile systems, and AI platforms built with modern architectures.
          </p>
        </div>

        {/* Controls: Counter + Navigation Buttons */}
        <div className="flex items-center gap-3 sm:gap-4 self-start sm:self-end">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono text-muted">
            <span className="font-semibold text-foreground">
              0{activeIndex + 1}
            </span>
            <span className="opacity-40">/</span>
            <span className="opacity-60">0{projects.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous project"
              className="p-2 sm:p-2.5 rounded-xl border border-border bg-card/80 text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:bg-card/80 disabled:hover:border-border disabled:hover:text-foreground disabled:cursor-not-allowed transition-all duration-200 active:scale-95 shadow-sm"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next project"
              className="p-2 sm:p-2.5 rounded-xl border border-border bg-card/80 text-foreground hover:bg-accent/10 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:bg-card/80 disabled:hover:border-border disabled:hover:text-foreground disabled:cursor-not-allowed transition-all duration-200 active:scale-95 shadow-sm"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Carousel Container */}
      <div className="relative group">
        {/* Carousel Tracks */}
        <div
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-3 px-0.5 cursor-grab active:cursor-grabbing select-none"
        >
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="w-[84vw] max-w-[320px] sm:max-w-[380px] md:w-[420px] shrink-0 snap-start rounded-2xl border border-border bg-card shadow-sm hover:shadow-xl hover:border-accent/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden group/card"
            >
              <div>
                {/* Image Section */}
                <div className="relative aspect-[16/10] bg-muted/10 border-b border-border overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      loading={index === 0 ? "eager" : "lazy"}
                      sizes="(max-width: 640px) 84vw, (max-width: 1024px) 380px, 420px"
                      className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-card">
                      <span className="text-xs text-muted">Preview available soon</span>
                    </div>
                  )}

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10">
                    <span className="px-2.5 py-0.5 sm:py-1 rounded-full border border-border/80 bg-card/90 backdrop-blur-md text-[10px] font-mono font-medium text-foreground tracking-wide shadow-sm flex items-center gap-1.5">
                      <Sparkles size={10} className="text-accent" />
                      {project.category}
                    </span>
                  </div>

                  {/* Top Right: Number Pill */}
                  <div className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10">
                    <span className="px-2 py-0.5 rounded-md border border-border/80 bg-card/90 backdrop-blur-md text-[10px] font-mono text-muted shadow-sm">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover/card:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-2 sm:mt-2.5 text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="mt-4 sm:mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md border border-border/80 bg-background/80 text-[10px] sm:text-[11px] font-mono text-muted group-hover/card:border-border transition-colors"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Action Links */}
              <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-border bg-card flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (dragged.current) e.preventDefault();
                  }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-xs font-semibold text-muted hover:text-foreground transition-colors group/link"
                >
                  <FaGithub size={14} />
                  <span>Source Code</span>
                  <ArrowUpRight
                    size={12}
                    className="opacity-60 group-hover/link:opacity-100 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                  />
                </a>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (dragged.current) e.preventDefault();
                    }}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-accent/10 border border-accent/20 text-xs font-semibold text-accent hover:bg-accent/20 transition-all"
                  >
                    <ExternalLink size={12} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom Indicators & Navigation Hints */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Clickable pill dots */}
        <div className="flex items-center gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? "w-8 bg-accent"
                  : "w-2 bg-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Interactive hint */}
        <p className="text-xs text-muted/80 flex items-center gap-2 font-mono">
          <span>← Scroll or drag to explore projects →</span>
        </p>
      </div>
    </div>
  );
}
