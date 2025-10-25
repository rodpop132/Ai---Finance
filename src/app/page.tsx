"use client";

import { useRouter } from "next/navigation";
import { useCallback } from "react";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  const router = useRouter();

  const handleComplete = useCallback(() => {
    router.push("/landing");
  }, [router]);

  return <LoadingScreen onComplete={handleComplete} />;
}
