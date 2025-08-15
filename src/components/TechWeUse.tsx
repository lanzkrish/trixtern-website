import React from "react";

const slugs = [
  "javascript",
"typescript",
"python",
"java",
"c",
"go",
"rust",
"kotlin",
"swift",
"dart",
"php",
"ruby",
"html",
"css",
"react",
"angular",
"vue",
"svelte",
"nextjs",
"flutter",
"android",
"nodejs",
"express",
"laravel",
"tailwindcss",
"bootstrap",
"materialui",
"sass",
"prisma",
"aws",
"azure",
"gcp",
"firebase",
"postgres",
"mongodb",
"supabase",
"redis",
"nginx",
"vercel",
"netlify",
"docker",
"kubernetes",
"terraform",
"ansible",
"testing-library",
"jest",
"cypress",
"vitest",
"git",
"github",
"gitlab",
"bitbucket",
"jira",
"vscode",
"androidstudio",
"figma",
"webassembly",
"threejs",
"tensorflow",
"pytorch",
"openai",
"langchain",
"huggingface",
"blockchain",
"ethereum",
"solidity",
"web3js",
"metamask",
"ipfs",
"graphql",
"apollo",
"fastapi",
"django",
"springboot",
"nest",
"astro",
"remix",
"bun",
"deno",
"electron",
"tauri",
"unity",
"unrealengine",
"blender",
"godot",
"serverless",


];

const simpleIconsMap: Record<string, string> = {
  android: "android",
  "testing-library": "testinglibrary",
  jira: "jira",
  serverless: "serverless",
  openai: "openai",
  langchain: "langchain",
  huggingface: "huggingface",
  ethereum: "ethereum",
  solidity: "solidity",
  web3js: "web3dotjs",
  "web3.js": "web3dotjs",
  springboot: "springboot",
};

const customIconsMap: Record<string, string> = {
  blockchain: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdv1mx6yM4EO0BnrF7zU9qespT1ykulHCNLwDj",
  metamask: "https://eu0yhcfg0e.ufs.sh/f/rKAT0N5cfFSdCULtoojOfaGy8RJTBWVXd9boUtAmix4l0Mp1",
  // ...other custom icons if needed
};

// Add documentation URLs for each technology
const docsMap: Record<string, string> = {
  javascript: "https://developer.mozilla.org/docs/Web/JavaScript",
  typescript: "https://www.typescriptlang.org/docs/",
  python: "https://docs.python.org/3/",
  java: "https://docs.oracle.com/en/java/",
  c: "https://devdocs.io/c/",
  go: "https://go.dev/doc/",
  rust: "https://doc.rust-lang.org/",
  kotlin: "https://kotlinlang.org/docs/home.html",
  swift: "https://swift.org/documentation/",
  dart: "https://dart.dev/guides",
  php: "https://www.php.net/docs.php",
  ruby: "https://www.ruby-lang.org/en/documentation/",
  html: "https://developer.mozilla.org/docs/Web/HTML",
  css: "https://developer.mozilla.org/docs/Web/CSS",
  react: "https://react.dev/",
  angular: "https://angular.io/docs",
  vue: "https://vuejs.org/guide/introduction.html",
  svelte: "https://svelte.dev/docs",
  nextjs: "https://nextjs.org/docs",
  flutter: "https://docs.flutter.dev/",
  android: "https://developer.android.com/docs",
  nodejs: "https://nodejs.org/en/docs/",
  express: "https://expressjs.com/en/starter/installing.html",
  laravel: "https://laravel.com/docs",
  tailwindcss: "https://tailwindcss.com/docs",
  bootstrap: "https://getbootstrap.com/docs/",
  materialui: "https://mui.com/material-ui/getting-started/",
  sass: "https://sass-lang.com/documentation/",
  prisma: "https://www.prisma.io/docs",
  aws: "https://docs.aws.amazon.com/",
  azure: "https://learn.microsoft.com/en-us/azure/?product=popular",
  gcp: "https://cloud.google.com/docs",
  firebase: "https://firebase.google.com/docs",
  postgres: "https://www.postgresql.org/docs/",
  mongodb: "https://www.mongodb.com/docs/",
  supabase: "https://supabase.com/docs",
  redis: "https://redis.io/docs/",
  nginx: "https://nginx.org/en/docs/",
  vercel: "https://vercel.com/docs",
  netlify: "https://docs.netlify.com/",
  docker: "https://docs.docker.com/",
  kubernetes: "https://kubernetes.io/docs/",
  terraform: "https://developer.hashicorp.com/terraform/docs",
  ansible: "https://docs.ansible.com/",
  "testing-library": "https://testing-library.com/docs/",
  jest: "https://jestjs.io/docs/getting-started",
  cypress: "https://docs.cypress.io/",
  vitest: "https://vitest.dev/guide/",
  git: "https://git-scm.com/doc",
  github: "https://docs.github.com/",
  gitlab: "https://docs.gitlab.com/",
  bitbucket: "https://support.atlassian.com/bitbucket-cloud/docs/",
  jira: "https://support.atlassian.com/jira-software-cloud/docs/",
  vscode: "https://code.visualstudio.com/docs",
  androidstudio: "https://developer.android.com/studio",
  figma: "https://help.figma.com/hc/en-us",
  webassembly: "https://webassembly.org/docs/",
  threejs: "https://threejs.org/docs/",
  tensorflow: "https://www.tensorflow.org/learn",
  pytorch: "https://pytorch.org/docs/stable/index.html",
  openai: "https://platform.openai.com/docs/",
  langchain: "https://js.langchain.com/docs/",
  huggingface: "https://huggingface.co/docs",
  blockchain: "https://en.wikipedia.org/wiki/Blockchain",
  ethereum: "https://ethereum.org/en/developers/docs/",
  solidity: "https://docs.soliditylang.org/",
  web3js: "https://web3js.readthedocs.io/",
  metamask: "https://docs.metamask.io/",
  ipfs: "https://docs.ipfs.tech/",
  graphql: "https://graphql.org/learn/",
  apollo: "https://www.apollographql.com/docs/",
  fastapi: "https://fastapi.tiangolo.com/",
  django: "https://docs.djangoproject.com/",
  springboot: "https://docs.spring.io/spring-boot/docs/current/reference/html/",
  nest: "https://docs.nestjs.com/",
  astro: "https://docs.astro.build/",
  remix: "https://remix.run/docs/en/v1",
  bun: "https://bun.sh/docs",
  deno: "https://deno.com/manual",
  electron: "https://www.electronjs.org/docs/latest/",
  tauri: "https://tauri.app/v1/guides/",
  unity: "https://docs.unity3d.com/",
  unrealengine: "https://docs.unrealengine.com/",
  blender: "https://docs.blender.org/",
  godot: "https://docs.godotengine.org/",
  serverless: "https://www.serverless.com/framework/docs/",
};

const TechWeUse: React.FC = () => {
  const images = slugs.map((slug) => {
    if (customIconsMap[slug]) {
      return {
        src: customIconsMap[slug],
        alt: slug,
      };
    }
    if (simpleIconsMap[slug]) {
      return {
        src: `https://cdn.simpleicons.org/${simpleIconsMap[slug]}`,
        alt: slug,
      };
    }
    return {
      src: `https://skillicons.dev/icons?i=${slug}`,
      alt: slug,
    };
  });

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 p-4 sm:p-8">
        {images.map((img) => (
          <div key={img.alt} className="flex flex-col items-center">
            <a
              href={docsMap[img.alt] || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 flip-360"
                loading="lazy"
              />
            </a>
            <span className="text-xs text-center capitalize">
              {img.alt.replace(/js$/, ".js").replace(/-/g, " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechWeUse;
