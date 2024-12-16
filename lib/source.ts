import { docs, meta } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import IconContainer from "@/components/icon";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as LuIcons from "react-icons/lu";

const allIcons = {
  ...FaIcons,
  ...SiIcons,
  ...LuIcons,
};

export const source = loader({
  baseUrl: "/docs",
  source: createMDXSource(docs, meta),
  icon(icon) {
    if (icon && icon in allIcons) {
      const IconComponent = allIcons[icon as keyof typeof allIcons];
      return createElement(IconContainer, { icon: IconComponent });
    }
  },
});
