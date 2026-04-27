export type Project = {
  slug: string;
  title: string;
  type: string;
  summary: string;
  stack: string[];
  github: string;
  live?: string;
  role?: string;
  team?: string;
  timeline?: string;
  contributions?: string[];
  highlights?: { label: string; body: string }[];
};

export const projects: Project[] = [
  {
    slug: "wtfp-car-quotation",
    title: "WTFP Car Quotation",
    type: "Mobile-first SaaS",
    summary:
      "Web app for car dealerships to create, manage, and export purchase quotations with car details, payment options, and accessories. Shipped with a 4-person team across 239+ commits.",
    stack: ["Nuxt", "NestJS", "MySQL"],
    github: "https://github.com/Fameeeee/wtfp-car-quotation",
    live: "wtfp-car-quotation.vercel.app",
    role: "Full-stack engineer",
    team: "4 engineers",
    timeline: "Capstone project",
    contributions: [
      "TODO: list the specific features you owned (e.g. quotation builder, PDF export, auth, deploy pipeline).",
      "TODO: clarify your slice of the 239 commits — frontend? backend? both?",
      "TODO: any production-impact metric you can quote (users, dealerships onboarded, etc.).",
    ],
    highlights: [
      {
        label: "Why Nuxt + NestJS",
        body: "TODO: short rationale — why this stack vs. monolith / Next.js fullstack / etc.",
      },
      {
        label: "Mobile-first decisions",
        body: "TODO: describe how the UI was designed for dealership reps working on phones in the lot.",
      },
      {
        label: "What I'd change",
        body: "TODO: one honest retrospective — schema choice, deploy flow, or testing gap.",
      },
    ],
  },
  {
    slug: "secure-snack-order-system",
    title: "Secure Snack Order System",
    type: "Microservices · DevSecOps",
    summary:
      "Snack ordering system on a local Kubernetes cluster (kind) with Podman-built images and security-minded defaults. One script builds, loads, and deploys every service.",
    stack: ["Next.js", "NestJS", "Postgres", "K8s"],
    github: "https://github.com/Fameeeee/secure-snack-order-system",
    role: "Solo project",
    timeline: "Self-directed",
    contributions: [
      "Containerized every service with Podman and wired up a single deploy script (build → load → apply).",
      "Ran the full system on a local Kubernetes cluster (kind) — services, deployments, secrets, ingress.",
      "Applied security-minded defaults: non-root containers, scoped service accounts, no plaintext secrets.",
    ],
    highlights: [
      {
        label: "Why Podman over Docker",
        body: "Daemonless and rootless by default — fewer privileges, better fit for a security-focused project.",
      },
      {
        label: "Why kind for the cluster",
        body: "Reproducible local Kubernetes in seconds. Same manifests would deploy to a real cluster with no rewrites.",
      },
      {
        label: "TODO: architecture diagram",
        body: "Add an architecture diagram (services, network policies, ingress) — referenced in portfolio notes.",
      },
    ],
  },
  {
    slug: "selfhosted-dashboard",
    title: "Selfhosted Dashboard",
    type: "Polyglot full-stack",
    summary:
      "Self-hosted dashboard combining a TypeScript frontend with a Go backend. Includes infrastructure-as-code, migrations, and modular services.",
    stack: ["TypeScript", "Go", "Docker"],
    github: "https://github.com/Fameeeee/selfhosted-dashboard",
    role: "Solo project",
    timeline: "Ongoing",
    contributions: [
      "TODO: list the modules / services you built.",
      "TODO: note migrations / IaC choices (which tool, which DB).",
      "TODO: what does the dashboard actually surface?",
    ],
    highlights: [
      {
        label: "Why Go on the backend",
        body: "TODO: short rationale (concurrency, single binary, learning, etc.).",
      },
      {
        label: "Polyglot tradeoffs",
        body: "TODO: what's harder when the frontend and backend speak different languages?",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
