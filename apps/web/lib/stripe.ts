import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2024-11-20.acacia",
  typescript: true,
});

let stripePromise: ReturnType<typeof loadStripe> | null = null;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
}

export const PLANS = [
  {
    id: "free",
    name: "Free",
    tier: "FREE",
    description: "Get started with AI for free",
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "100 messages / month",
      "1 conversation",
      "3 API keys",
      "Basic models",
      "Community support",
    ],
    limits: {
      messages: 100,
      tokens: 50_000,
      storage: 10 * 1024 * 1024, // 10 MB
      teamMembers: 1,
    },
  },
  {
    id: "pro",
    name: "Pro",
    tier: "PRO",
    description: "For individuals and small teams",
    priceMonthly: 2900,
    priceYearly: 24900,
    priceIdMonthly: process.env.STRIPE_PRICE_PRO_MONTHLY,
    priceIdYearly: process.env.STRIPE_PRICE_PRO_YEARLY,
    features: [
      "10,000 messages / month",
      "Unlimited conversations",
      "10 API keys",
      "GPT-4o, Claude 3.5",
      "File uploads (50MB)",
      "Knowledge base (RAG)",
      "AI Agents",
      "Priority support",
    ],
    limits: {
      messages: 10_000,
      tokens: 5_000_000,
      storage: 1 * 1024 * 1024 * 1024, // 1 GB
      teamMembers: 5,
    },
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tier: "ENTERPRISE",
    description: "For large teams and organizations",
    priceMonthly: 9900,
    priceYearly: 99900,
    priceIdMonthly: process.env.STRIPE_PRICE_ENTERPRISE_MONTHLY,
    features: [
      "Unlimited messages",
      "Unlimited conversations",
      "Unlimited API keys",
      "All AI models",
      "Custom model support",
      "Multi-tenant",
      "SSO / SAML",
      "SLA + dedicated support",
      "Audit logs",
      "Custom integrations",
    ],
    limits: {
      messages: Infinity,
      tokens: Infinity,
      storage: 100 * 1024 * 1024 * 1024,
      teamMembers: Infinity,
    },
  },
] as const;
