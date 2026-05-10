import Link from "next/link";
import { ArrowRight, Bot, Brain, Code2, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="container py-24 md:py-32 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm text-muted-foreground mb-8 bg-muted/50">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Production-ready AI SaaS Boilerplate
        </div>
        <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Build your AI SaaS{" "}
          <span className="gradient-text">10x faster</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          A production-grade boilerplate with AI chat, authentication, billing,
          vector search, agents, and everything you need to launch your AI
          startup today.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/register">
              Start building for free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="https://github.com" target="_blank">
              <Code2 className="mr-2 h-5 w-5" />
              View on GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-24 border-t">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything you need to ship
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Stop reinventing the wheel. Start with a battle-tested foundation
            and focus on what makes your product unique.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="border-t py-16 bg-muted/30">
        <div className="container text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
            Built with the best tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground font-medium text-sm">
            {[
              "Next.js 15","FastAPI","PostgreSQL","Prisma","Stripe",
              "OpenAI","Anthropic","Redis","Docker","Turborepo",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border bg-background"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to build?
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Join thousands of developers shipping AI products faster with our
          boilerplate.
        </p>
        <Button size="lg" asChild>
          <Link href="/register">
            Get started for free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </section>
    </>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-6 hover:shadow-md transition-shadow">
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const FEATURES = [
  {
    icon: Brain,
    title: "Multi-provider AI",
    description:
      "OpenAI, Anthropic, and local Ollama support out of the box. Switch providers with a single config change.",
  },
  {
    icon: Shield,
    title: "Auth & RBAC",
    description:
      "Full authentication with Google, GitHub, and email. Role-based access control with JWT sessions.",
  },
  {
    icon: Zap,
    title: "Billing & Stripe",
    description:
      "Monthly/yearly subscriptions, usage-based billing, free trials, invoice history, and customer portal.",
  },
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "ReAct agent framework with tool calling, memory, multi-agent orchestration, and workflow execution.",
  },
  {
    icon: Code2,
    title: "RAG Pipeline",
    description:
      "Upload PDFs, CSVs, and docs. Automatic chunking, embedding, and semantic search via pgvector.",
  },
  {
    icon: Sparkles,
    title: "SaaS Dashboard",
    description:
      "Admin dashboard with user analytics, revenue metrics, AI usage tracking, and error monitoring.",
  },
];
