"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Send, Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

type Status = "idle" | "sending" | "success" | "error";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "dilikadilmith@gmail.com",
    href: "mailto:dilikadilmith@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 75 220 6048",
    href: "tel:+94752206048",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kadawatha, Sri Lanka",
    href: undefined,
  },
];

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !subject || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all required fields before sending.");
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setErrorMsg("Contact form is not configured yet. Please try again later.");
      setTimeout(() => setStatus("idle"), 6000);
      return;
    }

    const templateParams = { name, email, subject, message };

    try {
      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="text-sm font-mono text-muted">04</span>
          <span className="text-xs uppercase tracking-[0.2em] text-muted">
            Get In Touch
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Let's Connect
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-muted max-w-2xl">
          Interested in working together or have a question? Reach out below.
        </p>

        <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* LEFT — Contact info */}
          <div className="space-y-3.5 sm:space-y-4">
            <p className="text-xs uppercase tracking-wider text-muted font-mono mb-1 sm:mb-2">
              Contact Information
            </p>

            {contactInfo.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="flex items-start gap-3 sm:gap-4 p-3.5 sm:p-5 rounded-xl border border-border bg-card hover:border-accent/60 transition-colors">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-muted font-mono">
                      {label}
                    </p>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm font-medium text-foreground truncate">
                      {value}
                    </p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}

            {/* Socials */}
            <div className="p-4 sm:p-5 rounded-xl border border-border bg-card">
              <p className="text-[10px] uppercase tracking-wider text-muted font-mono mb-2.5 sm:mb-3">
                Social
              </p>
              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href="https://github.com/DilikaDilmith"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-lg border border-border bg-background/50 text-muted hover:text-foreground hover:border-accent transition-colors"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/dilika-dilmith-748633299/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-lg border border-border bg-background/50 text-muted hover:text-foreground hover:border-accent transition-colors"
                >
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <form
            onSubmit={handleSubmit}
            className="p-4 sm:p-6 rounded-2xl border border-border bg-card space-y-3.5 sm:space-y-4 shadow-xs"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                type="text"
                placeholder="Internship opportunity / Project collaboration"
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs uppercase tracking-wider text-muted font-mono mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : status === "success" ? (
                <>
                  <CheckCircle2 size={18} />
                  Message Sent!
                </>
              ) : status === "error" ? (
                <>
                  <AlertCircle size={18} />
                  Failed — Try Again
                </>
              ) : (
                <>
                  Send Message
                  <Send size={18} />
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <p className="text-xs text-green-500 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                Thanks! Your message was sent successfully. I'll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500 flex items-center gap-1.5">
                <AlertCircle size={14} />
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}