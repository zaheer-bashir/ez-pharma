import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center w-full h-screen align-middle">
      <div className="flex gap-2 flex-col  ">
        <Input placeholder="Email" />
        <Input placeholder="Password" />
      </div>
    </main>
  );
}
