export const urlBase = new URL("https://open-deeplearning.vercel.app");

export const domain = "https://open-deeplearning.vercel.app";

export const blogAuthors: Record<string, AuthorData> = {
  kane: {
    name: "Kane Wang",
    title: "YEE式機器龍作者",
    url: "https://bento.me/kanewang",
    image_url: "/blog/kane50613.jpg",
  },
  wolf: {
    name: "Wolf yuan 狼苑",
    title: "黑貓音樂機器人作者 兼 機器人伺服器管理",
    url: "https://github.com/wolf-yuan-6115",
    image_url: "/blog/WolfYuan.png",
  },
  kay: {
    name: "美味的小圓 Kay Xue",
    title: "Yeecord 以前的小幫手",
    url: "https://github.com/Kayxue",
    image_url: "/blog/kay.jpg",
  },
  nathan: {
    name: "Nathan",
    title: "Yeecord 現任管理員 兼 ZeitFrei 合作機器人作者",
    url: "https://github.com/Nat1anWasTaken/",
    image_url: "/blog/nathan.jpg",
  },
  money: {
    name: "Fuma",
    title: "Yeecord 網站的前端工程師",
    url: "https://fuma-dev.vercel.app",
    image_url: "/blog/money.jpg",
  },
  taipei: {
    name: "Taipei101",
    title: "Yeecord 網路工程師 兼 台北 101 網路股份有限公司創始��",
    url: "https://taipei101.xyz",
    image_url: "/blog/taipei.jpg",
  },
};

export type AuthorData = {
  name: string;
  url?: string;
  title?: string;
  image_url?: string;
};
