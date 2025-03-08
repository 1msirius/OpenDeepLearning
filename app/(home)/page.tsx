import { Heart, LucideIcon, MousePointer } from "lucide-react";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { buttonVariants } from "@/components/ui/button";
import ContributorCounter from "@/components/contributor-count";
import Img from "./img.png";

import {
  RocketIcon,
  TimerIcon,
  LayoutIcon,
  KeyboardIcon,
  PersonStandingIcon,
} from "lucide-react";
import { ReactNode } from "react";

export default function Page(): React.ReactElement {
  return (
    <>
      <div
        className="absolute inset-x-0 top-[200px] h-[250px] max-md:hidden"
        style={{
          background:
            "repeating-linear-gradient(to right, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px), repeating-linear-gradient(to bottom, hsl(var(--primary)/.1),hsl(var(--primary)/.1) 1px,transparent 1px,transparent 50px)",
        }}
      />
      <main className="container relative max-w-[1100px] px-2 py-4 lg:py-16">
        <div
          style={{
            background:
              "repeating-linear-gradient(to bottom, transparent, hsl(var(--secondary)/.2) 500px, transparent 1000px)",
          }}
        >
          <div className="relative">
            <Hero />
          </div>
          <Feedback_1 />
          <div
            className="container relative overflow-hidden border-x border-t py-16 sm:py-24"
            style={{
              backgroundImage:
                'radial-gradient(circle at bottom center, hsl(var(--secondary)), hsl(var(--background)))',
            }}
          >
            <h2 className="bg-gradient-to-b from-fd-primary to-fd-foreground/40 bg-clip-text text-center text-2xl font-semibold text-transparent sm:text-3xl">
              Loved by users.
              <br />
              Built for developers.
            </h2>
          </div>
          <Feedback />
          <Highlights />
          <Contributing />
        </div>
      </main>
    </>
  );
}

function Hero(): React.ReactElement {
  return (
    <div className="container relative z-[2] flex flex-col overflow-hidden border-x border-t bg-fd-background px-6 pt-12 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden">
      <h1 className="mb-8 text-4xl font-medium md:hidden">Build Your Docs</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        Build excellent documentation site with less effort
      </h1>
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        Fumadocs is a <span className="text-fd-foreground">beautiful</span>{' '}
        documentation framework with{' '}
        <span className="text-fd-foreground">a complete toolchain</span>,
        powered by <span className="text-foreground">Next.js App Router</span>.
        Designed to be flexible and fast.
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/courses"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          Start Learning
        </Link>
        <a
          href="https://discord.com/invite/bxnwugmNZg"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'rounded-full bg-fd-background',
            }),
          )}
        >
          Community
        </a>
      </div>
      <Image
        src={Img}
        alt="preview"
        className="mb-[-250px] mt-8 min-w-[800px] select-none duration-1000 animate-in fade-in slide-in-from-bottom-12 md:mb-[-370px] md:min-w-[1100px]"
        priority
      />
      <div
        className="absolute inset-0 z-[-1]"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse at top, transparent 60%, hsla(250,90%,90%,0.2))',
            'linear-gradient(to bottom, transparent 30%, hsl(var(--primary) / 0.2))',
            'linear-gradient(to bottom, hsl(var(--background)) 40%, transparent)',
            'repeating-linear-gradient(45deg, transparent,transparent 60px, hsl(var(--primary)) 61px, transparent 62px)',
          ].join(', '),
        }}
      />
    </div>
  );
}

function Feedback_1(): React.ReactElement {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 py-8 md:py-16">
      <div
        className="absolute inset-x-0 bottom-0 z-[-1] h-24 opacity-30 duration-1000 animate-in fade-in"
        style={{
          maskImage: 'linear-gradient(to bottom,transparent,white)',
          backgroundImage:
            'linear-gradient(to right, #4ebfff, transparent, #e92a67)',
        }}
      />
      <p className="text-center font-medium text-muted-foreground">
        Trusted by awesome teams and developers
      </p>

      <div className="mt-6 rounded-xl border bg-gradient-to-b from-secondary p-4 shadow-lg">
        <p className="text-sm font-medium">
          {`"A gorgeous documentation framework that composes beautifully into the
          App Router."`}
        </p>
        <div className="mt-4 flex flex-row items-center gap-2">
          <Image
            src="https://avatars.githubusercontent.com/u/35677084"
            alt="avatar"
            width="32"
            height="32"
            className="size-8 rounded-full"
          />
          <div>
            <a
              href="https://shew.dev"
              rel="noreferrer noopener"
              className="text-sm font-medium"
            >
              Anthony Shew
            </a>
            <p className="text-xs text-fd-muted-foreground">
              Turbo DX at Vercel
            </p>
          </div>
          <Link
            href="/showcase"
            className={cn(
              buttonVariants({ variant: 'outline', className: 'ml-auto' }),
            )}
          >
            Showcase
          </Link>
        </div>
      </div>
    </div>
  );
}

function Feedback(): React.ReactElement {
  return (
    <div className="relative flex flex-col items-center overflow-hidden border-x border-t px-6 pb-16 pt-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix
            Space，是一个小型的个人空间程序。继承了传统的博客，有着不同于博客的丰富的内容。适合那些喜欢写不同风格或类型的写作爱好者。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/41265413"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/Innei"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                Innei
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 程序开发者
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix Space 的文档非常详细，总有新的内容和功能在开发中。我自己也在用
            Mix
            Space，博文加手记的记录个人空间体验非常不错。它改变了我的写作方式。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/96452465"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/PaloMiku"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                Mikuの鬆
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 文档贡献者
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "Mix Space
            是个小众但不简单博客系统，设计了文稿、手记、思考三个不同型的写作方式，在此基础上还写了很多有意思的特性。"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/108316419"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/wuhang2003"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                WuHang2003
              </a>
              <p className="text-sm text-fd-muted-foreground">
                Mix Space 开源社区成员
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border bg-gradient-to-b from-secondary/50 p-6 shadow-lg hover:shadow-xl transition-shadow">
          <p className="text-base font-medium mb-6">
            "用了一年多的 Mix
            Space，最让我觉得舒服的一点是别人如果要和我换友链，可以自助提交，我只需要点个通过就可以了，也借此交到了很多的朋友，光这一点我觉得就很不错了"
          </p>
          <div className="flex items-center gap-3">
            <Image
              src="https://avatars.githubusercontent.com/u/62463715"
              alt="avatar"
              width="48"
              height="48"
              className="size-12 rounded-full"
            />
            <div className="text-left">
              <a
                href="https://github.com/NiuBoss123"
                rel="noreferrer noopener"
                className="text-base font-medium hover:underline"
              >
                MisakaAkio
              </a>
              <p className="text-sm text-fd-muted-foreground">Mix Space 用户</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 z-[-1] opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, hsl(var(--secondary)), transparent 70%)",
        }}
      />
    </div>
  );
}

function Contributing(): React.ReactElement {
  return (
    <div className="flex flex-col items-center border-x border-t px-4 py-16 text-center">
      <Heart className="mb-4" />
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
        Made Possible by You.
      </h2>
      <p className="mb-4 text-fd-muted-foreground">
        Fumadocs is 100% powered by passion and open source community.
      </p>
      <div className="mb-8 flex flex-row items-center gap-2">
        <Link
          href="/sponsors"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          Sponsors
        </Link>
        <a
          href="https://github.com/fuma-nama/fumadocs/graphs/contributors"
          rel="noreferrer noopener"
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          Contributors
        </a>
      </div>
      <ContributorCounter repoOwner="fuma-nama" repoName="fumadocs" />
    </div>
  );
}

function Highlights(): React.ReactElement {
  return (
    <div className="grid grid-cols-1 border-r md:grid-cols-2 lg:grid-cols-3">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-2 text-center">
        <h2 className="bg-[#5c76a0] pl-1 text-2xl font-semibold">Highlights</h2>
        <MousePointer className="-ml-1 mt-8" />
      </div>
      <Highlight icon={RocketIcon} heading="Light and Fast.">
        Powerful documentation site with Next.js App Router.
      </Highlight>
      <Highlight icon={TimerIcon} heading="Performance.">
        Less client components, less Javascript, optimized images.
      </Highlight>
      <Highlight icon={LayoutIcon} heading="Accessibility & UX first.">
        Focus on user experience and accessibility.
      </Highlight>
      <Highlight icon={SearchIcon} heading="Syntax Highlighting.">
        Beautiful syntax highlighter, powered by{" "}
        <a href="https://shiki.style" rel="noreferrer noopener">
          Shiki
        </a>
        .
      </Highlight>
      <Highlight icon={KeyboardIcon} heading="Automation.">
        Useful remark/rehype plugins. Typescript Twoslash, OpenAPI docs
        generation, and more.
      </Highlight>
      <Highlight icon={PersonStandingIcon} heading="Personalized.">
        Advanced options for customising your theme in a comfortable way.
      </Highlight>
    </div>
  );
}

function Highlight({
  icon: Icon,
  heading,
  children,
}: {
  icon: LucideIcon;
  heading: ReactNode;
  children: ReactNode;
}): React.ReactElement {
  return (
    <div className="border-l border-t px-6 py-12">
      <div className="mb-4 flex flex-row items-center gap-2 text-fd-muted-foreground">
        <Icon className="size-4" />
        <h2 className="text-sm font-medium">{heading}</h2>
      </div>
      <span className="font-medium">{children}</span>
    </div>
  );
}
