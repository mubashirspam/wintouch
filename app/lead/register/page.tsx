"use client";

import { useRouter } from "next/navigation";
import AdmissionForm from "@/app/components/sections/AdmissionForm";

export default function LeadRegisterPage() {
  const router = useRouter();

  const handleSuccess = () => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      <AdmissionForm onSuccess={handleSuccess} variant="embedded" />
    </main>
  );
}
