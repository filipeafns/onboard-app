import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/app/Components/Tooltip/tooltip";

export default function Home() {
  return (
    <main>
      <Link href="/">go back home</Link>
      <Tooltip text="This is a custom tooltip!" top={10} left={50} stepLink="/01-test/step1" />
      <Image
        src="/1.png"
        width={1440}
        height={900}
        alt="Step1"
      />
    </main>
  );
}