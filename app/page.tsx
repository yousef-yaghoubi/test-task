import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-4">
      <Link href="/products">products</Link>
      
      <Link href="/favorites">favorites</Link>
    </div>
  );
}
