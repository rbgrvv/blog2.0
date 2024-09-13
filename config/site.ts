export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Blog.",
  description: "",
  navItems: [
    {
      label: "Главная",
      href: "/",
    },
    {
      label: "Посты",
      href: "/posts",
    },
    // {
    //   label: "Archive",
    //   href: "/memories",
    // },
    // {
    //   label: "Reminders",
    //   href: "/reminders",
    // },
    {
      label: "Про меня",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/rufatbagir",
    twitter: "https://twitter.com/getnextui",
    docs: "/about",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
