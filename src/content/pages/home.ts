import app from "../app";

export default {
  hero: {
    tagline: "Your best partner for wealth growth",
    title: "Grow your wealth effortlessly with expert-managed investments.",
    description: `${app.name} lets you pick from curated investment opportunities. You choose where to put your money — we do the work, and you enjoy the returns.`,
  },
  partners: [
    {
      name: "Avaloq",
      image: "/img/partners/avaloq.svg",
    },
    {
      name: "Metaco",
      image: "/img/partners/metaco.png",
    },
    {
      name: "Sygnum",
      image: "/img/partners/sygnum.png"
    },
    {
      name: "OTransfer",
      image: "/img/partners/otransfer.png",
    },
    {
      name: "Monarch",
      image: "/img/partners/monarch.png",
    },
    {
      name: "Holded",
      image: "/img/partners/holded.png",
    },
    {
      name: "AlphaSense",
      image: "/img/partners/alphasense.png"
    }
  ],
  whyChooseUs: {
    title: `Why choose ${app.name}?`,
    content: `${app.name} gives you control over where your money goes — and then takes care of everything else. No market stress, no trading screens, just solid results.`,
    reasons: [
      {
        label: "You pick. We execute.",
        description: "Select from expertly vetted investment tracks. Once you choose, we manage everything — from allocation to optimization — for maximum growth.",
        icon: "lucide:check-circle"
      },
      {
        label: "Reliable returns",
        description: "Our investment teams and systems are built to reduce risk and deliver steady profits. Your money doesn’t sit idle — it works for you.",
        icon: "lucide:trending-up"
      },
      {
        label: "No hassle, no guesswork",
        description: "Forget about reading market news or managing trades. We keep you updated with performance reports while we handle the heavy lifting.",
        icon: "lucide:bar-chart-2"
      }
    ]
  },
  investmentOptions: {
    title: "Investment Options",
    description: "Browse our carefully designed investment tracks. Choose what fits your goals — from low-risk growth to aggressive returns — and let us do the rest."
  },
  features: {
    title: [
      "Built for Confidence",
      "Powered by Expertise"
    ],
    description: `${app.name} equips you with clarity, confidence, and choice. Our platform is built to simplify investing while maximizing impact.`,
    items: [
      {
        label: "Curated investment tracks",
        description: "Our team designs smart, transparent investment routes. Pick the one that aligns with your risk appetite and timeline.",
        icon: "lucide:folder-open"
      },
      {
        label: "Automated execution",
        description: "We handle allocation, rebalancing, and monitoring — all powered by data and managed by experts.",
        icon: "lucide:cpu"
      },
      {
        label: "Performance insights",
        description: "You stay informed with clear, digestible updates about your portfolio’s growth and trajectory.",
        icon: "lucide:line-chart"
      },
      {
        label: "Risk-adjusted growth models",
        description: "Our algorithms adapt your investment performance to your chosen risk level — ensuring you're not overexposed while maximizing your upside.",
        icon: "lucide:shield-check"
      }
    ]
  },
  customers: {
    title: "Who We Serve",
    description: `Whether you're planning ahead, growing your wealth, or diversifying your portfolio, ${app.name} makes investing accessible and effective.`,
    items: [
      {
        label: "Business Owners & Executives",
        description: "Let your idle capital work harder while you focus on running your business.",
        image: "/img/customers/executives.jpg"
      },
      {
        label: "Private Clients",
        description: "Build generational wealth through strategic hands-off investing.",
        image: "/img/customers/private-clients.jpg"
      },
      {
        label: "Retirees & Pre-retirees",
        description: "Enjoy peace of mind with options built for stability and consistent returns.",
        image: "/img/customers/retirees.jpg"
      },
      {
        label: "Smart Investors",
        description: "If you know the value of compounding, we’ll help your capital do more.",
        image: "/img/customers/investors.jpg"
      },
      {
        label: "New to investing?",
        description: "We simplify the complex. Choose a plan, fund it, and watch it grow.",
        image: "/img/customers/new-to-investing.jpg"
      }
    ]
  }
}
