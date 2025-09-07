'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Home");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-solid"></div>
    </div>
  );
}
