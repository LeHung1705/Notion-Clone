import { Button } from "@/components/ui/button";
import { ArrowLeftCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex space-x-2 items-center animate-pulse">
      <ArrowLeftCircle className="h-10 w-10" />
      <h1 className="font-bold">
        Get started by creating a New Document
      </h1>
    </main>
  );
}
