import Image from "next/image";
import { FaDiscord, FaGithub, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import DarkLogo from "@/public/logo-dark.png";
import LightLogo from "@/public/logo-light.png";

const YEAR = new Date().getFullYear();

export const Footer = (): React.ReactElement => {
  const socialLinks = [
    { href: "https://twitter.com/ODL_AI", icon: FaXTwitter, label: "Twitter" },
    { href: "https://discord.com/invite/bxnwugmNZg", icon: FaDiscord, label: "Discord" },
    { href: "https://github.com/OpenDeepLearningAI", icon: FaGithub, label: "GitHub" },
    { href: "https://www.youtube.com/@OpenDeepLearningAI", icon: FaYoutube, label: "YouTube" },
    { href: "https://www.instagram.com/opendeeplearning/", icon: FaInstagram, label: "Instagram" },
  ];

  return (
    <footer className="mt-auto border-t bg-fd-card py-14 text-fd-secondary-foreground">
      <div className="container flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Image
            src={LightLogo}
            className="dark:hidden w-5 md:w-[18px]"
            alt="OpenDeepLearning"
          />
          <Image
            src={DarkLogo}
            className="hidden dark:flex w-5 md:w-[18px]"
            alt="OpenDeepLearning"
          />
          <p className="text-sm font-medium">
            OpenDeepLearning{" "}
            <span className="text-xs font-normal text-[#757575] dark:text-[#989898] pl-1">
              © {YEAR}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-5">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#757575] dark:text-[#989898] hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            >
              <Icon className="h-[19px] w-[19px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
