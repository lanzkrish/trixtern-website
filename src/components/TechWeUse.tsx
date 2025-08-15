import React from "react";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "python",
  "c",
  "go",
  "kotlin",
  "ruby",
  "php",
  "swift",
  "rust",
  "vue",
  "angular",
  "svelte",
  "react",
  "flutter",
  "android",
  "html",
  "css",
  "nodejs",
  "express",
  "nextjs",
  "prisma",
  "aws",
  "postgres",
  "firebase",
  "nginx",
  "vercel",
  "testing-library",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "vscode",
  "androidstudio",
  "figma",
];

const simpleIconsMap: Record<string, string> = {
  android: "android",
  "testing-library": "testinglibrary",
  jira: "jira",
  sonarqube: "sonarqube",
};

const TechWeUse: React.FC = () => {
  const images = slugs.map((slug) => {
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
            <img
              src={img.src}
              alt={img.alt}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2 transition-transform duration-200 hover:scale-110"
              loading="lazy"
            />
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
