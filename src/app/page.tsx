import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        
      {/* <Image
              src="/trixtern_full.svg"
              alt="Trixtern Technologies"
              width={180}
              height={120}
            /> */}

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <a
            className="rounded-full border border-solid "
            rel="noopener noreferrer"
          >
          </a>
          <h1 className="text-4xl font-bold text-center sm:text-left">
          Trixtern Technologies
        </h1>
        <p className="text-sm text-center sm:text-left ">
        Trixtern Technologies is a forward-thinking tech company dedicated to helping businesses streamline workflows, enhance productivity, and drive growth through innovative digital solutions. We specialize in cutting-edge software development, automation, and seamless integrations, ensuring efficiency and scalability. Our mission is to empower businesses with technology that transforms operations and maximizes success.
        </p>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          .
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          .
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          .
        </a>
      </footer>
    </div>
  );
}
