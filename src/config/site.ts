export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Normateca Digital",
  description: "Sistema Integral de Normativas - Plataforma especializada en normativas legales y estándares técnicos de información en México.",
  navItems: [
    {
      label: "Aspectos Éticos y Legales",
      href: "/about",
    },
    {
      label: "Leyes Mexicanas", 
      href: "/laws",
    },
    {
      label: "Estándares Internacionales",
      href: "/standards",
    },
    {
      label: "Aviso de Privacidad",
      href: "/privacy",
    }
  ],
  links: {
    github: "https://github.com/frontio-ai/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};