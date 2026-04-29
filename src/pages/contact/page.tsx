import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/use-page-meta.ts";

const CONTACT_INFO = [
  {
    icon: Phone,
    label: "Phone",
    value: "(214) 253-8405",
    href: "tel:+12142538405",
    sublabel: "Available 24/7",
  },
  {
    icon: Mail,
    label: "Email",
    value: "admin@huntnhire.co",
    href: "mailto:admin@huntnhire.co",
    sublabel: "Response within 1 hour",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "2019 Allen St, Dallas, TX 75204",
    href: undefined,
    sublabel: "United States",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "24 hours, 7 days a week",
    href: undefined,
    sublabel: "Including holidays",
  },
] as const;

const SUBJECT_OPTIONS = [
  "General Inquiry",
  "Request a Quote",
  "Corporate Account",
  "Wedding Transportation",
  "Feedback",
  "Other",
] as const;

function ContactHero() {
  return (
    <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Questions, quotes, or custom requests — our team responds within
            minutes, not hours. We{"'"}re here to help 24/7.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !subject || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || undefined,
          subject,
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error((data as { error?: string }).error ?? "Failed to send");
      }

      setIsSubmitted(true);
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card border border-border p-10 sm:p-14 text-center"
      >
        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="size-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
          Message Received
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          Thank you for reaching out. A member of our team will get back to you
          within the hour.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link to="/book">
            <Button className="rounded-none uppercase tracking-wider text-xs font-semibold px-8">
              Book a Ride
              <ChevronRight className="size-4 ml-1" />
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="rounded-none border border-primary/30 text-primary hover:bg-primary/10 uppercase tracking-wider text-xs font-semibold px-8"
            onClick={() => {
              setIsSubmitted(false);
              setName("");
              setEmail("");
              setPhone("");
              setSubject("");
              setMessage("");
            }}
          >
            Send Another Message
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border p-8 sm:p-10"
    >
      <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
        Send Us a Message
      </h2>
      <div className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="contact-name">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-name"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-none bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">
              Email <span className="text-destructive">*</span>
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-none bg-background"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2">
            <Label htmlFor="contact-phone">Phone</Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-none bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-subject">
              Subject <span className="text-destructive">*</span>
            </Label>
            <Select value={subject} onValueChange={setSubject} required>
              <SelectTrigger
                id="contact-subject"
                className="rounded-none bg-background"
              >
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                {SUBJECT_OPTIONS.map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact-message">
            Message <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="contact-message"
            placeholder="Tell us about your transportation needs..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="rounded-none bg-background resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-none uppercase tracking-wider text-xs font-semibold py-5"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="size-4 ml-2" />
        </Button>
      </div>
    </form>
  );
}

function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-3">
          Reach Us Directly
        </p>
        <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
          Contact Information
        </h2>
      </div>

      <div className="space-y-6">
        {CONTACT_INFO.map((item) => {
          const content = (
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <item.icon className="size-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-foreground font-medium">{item.value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.sublabel}
                </p>
              </div>
            </div>
          );
          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="block hover:opacity-80 transition-opacity"
              >
                {content}
              </a>
            );
          }
          return <div key={item.label}>{content}</div>;
        })}
      </div>

      <div className="bg-card border border-border p-6 mt-8">
        <h3 className="font-serif text-lg font-bold text-foreground mb-2">
          Need a Ride?
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Skip the form and book your luxury ride directly.
        </p>
        <Link to="/book">
          <Button className="w-full rounded-none uppercase tracking-wider text-xs font-semibold">
            Book Now
            <ChevronRight className="size-4 ml-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function ContactPage() {
  usePageMeta({
    title: "Contact Hunt&Hire | 24/7 Luxury Transportation Support",
    description:
      "Get in touch with Hunt&Hire for quotes, corporate accounts, wedding transportation, or general inquiries. Call (214) 253-8405 or send a message. We respond within the hour.",
    keywords:
      "contact Hunt&Hire, limo service phone number, luxury transportation quote, corporate limo inquiry",
  });

  return (
    <main>
      <ContactHero />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
