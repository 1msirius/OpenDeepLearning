import React from "react";
import { FaGithub, FaDiscord, FaYoutube, FaLinkedinIn, FaRedditAlien } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-fd-card py-12 text-fd-secondary-foreground">
      <div className="container flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
          <div className="text-sm mb-4 sm:mb-0 text-center sm:text-left prose">
            <span> © 2023-{new Date().getFullYear()} OpenDeepLearning </span>
          </div>
          <div className="flex justify-center sm:justify-end gap-5 text-[18px]">
            <a href="https://x.com/ODL_AI" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="hover:opacity-80" />
            </a>
            <a href="https://github.com/OpenDeepLearningAI" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:opacity-80"  />
            </a>
            <a href="https://discord.com/invite/QgZHExcssR" target="_blank" rel="noopener noreferrer">
              <FaDiscord className="hover:opacity-80" />
            </a>
            <a href="https://www.youtube.com/@OpenDeepLearningAI" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:opacity-80" />
            </a>
            <a href="https://www.reddit.com/r/OpenDeepLearning/" target="_blank" rel="noopener noreferrer">
              <FaRedditAlien className="hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/company/opendeeplearning" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:opacity-80" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
