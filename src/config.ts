import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://hmzadev.com/",
  author: "Hamza Rashid",
  desc: "A websit about me",
  title: "HmzaDev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/hamza12700",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "linkedin.com/in/printf-hamza-rashid",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:c44help@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/Hamza_Rash1d",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/hamza12700",
    linkTitle: `${SITE.title} on Discord`,
    active: true,
  },
];
