interface Plan {
  label: string;
  price?: string;
  description: string;
  features: string[];
}

export const services = [
  {
    label: "Tailored Recommendations.",
    description: `
      Zenith offers personalized  suggestions for frameworks, 
      databases, backend services, and more based  on project requirements.
    `,
  },
  {
    label: "Streamlined Workflow.",
    description: `
      We simplify the development  process by providing 
      a suggested workflow and best practices for project  implementation.
    `,
  },
  {
    label: "Optimized Tech Stack.",
    description: `
      We help you as a developer build  efficient and scalable 
      applications by recommending the best tools for  their specific needs.
    `,
  },
  {
    label: "Expert Guidance.",
    description: `
      We offer expert guidance and  insights to help 
      developers make informed decisions about their tech  stack.
    `,
  },
];

export const benefits = [
  {
    label: "20 days saved",
    description: `on tool selection.`,
  },
  {
    label: "98% faster",
    description: `time to ship.`,
  },
  {
    label: "300% increase",
    description: `in project efficiency.`,
  },
  {
    label: "6× faster",
    description: `to find the perfect stack.`,
  },
];

export const planList: Plan[] = [
  {
    label: "Basic",
    price: "0",
    description:
      "Ideal for individuals or small teams getting started with Zenith.",
    features: ["Limited project support", "Access to community forum"],
  },

  {
    label: "Starter",
    price: "20",
    description:
      "Suitable for small teams or individual developers looking for additional features and support.",
    features: [
      "Enhanced tool recommendations covering a wider range of frameworks, databases, and libraries",
      "Comprehensive architecture suggestions and patterns for scalability",
      "Priority email support for faster response times",
      "Collaboration tools for team projects, including shared workspaces and project boards",
    ],
  },

  {
    label: "Professional",
    description:
      "Designed for growing teams or businesses requiring advanced features and dedicated support.",
    features: [
      "Advanced tool recommendations with team-based analysis and customization options",
      "In-depth architecture reviews and personalized scalability strategies",
      "Dedicated account manager for personalized support and guidance",
      "Customizable workflows and integrations with other development tools and services",
    ],
  },
];
