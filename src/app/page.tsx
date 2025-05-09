"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <h1 className="text-3xl font-bold mb-4">Welcome to GetSetPin</h1>
        <Link href="/login">
          <Button>Login</Button>
        </Link>
      </main>
    </div>
  );
}
