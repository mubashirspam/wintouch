"use client";

import { useRouter } from "next/navigation";
import ExamForm from "@/app/components/sections/ExamForm";

export default function ExamRegisterPage() {
  const router = useRouter();

  const handleSuccess = () => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      <ExamForm onSuccess={handleSuccess} variant="embedded" />
    </main>
  );
}
