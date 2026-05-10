import Link from "next/link";
import { Sparkles } from "lucide-react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left — branding */}
      <div className="hidden lg:flex flex-col justify-between bg-primary p-12 text-primary-foreground">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-bold text-xl">
            {process.env.NEXT_PUBLIC_APP_NAME ?? "AI SaaS"}
          </span>
        </Link>

        <blockquote className="space-y-2">
          <p className="text-lg font-medium leading-relaxed">
            &ldquo;This boilerplate saved us months of development. We shipped
            our AI product in 2 weeks instead of 3 months.&rdquo;
          </p>
          <footer className="text-sm opacity-75">
            — Sarah Chen, Founder & CTO at Luminary AI
          </footer>
        </blockquote>

        <div className="text-xs opacity-50">
          © 2025 AI SaaS Boilerplate
        </div>
      </div>

      {/* Right — form */}
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
