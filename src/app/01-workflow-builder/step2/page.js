import Link from "next/link";
import Image from "next/image";
import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";

export default function Home() {
  return (
    <main>
      <div className="shot-container">
        <Navigation />
        <div className="hotspot">
          <Tooltip title="Step 2" text="This is a custom tooltip!" top={10} left={50} backLink="/01-workflow-builder/step1" nextLink="/01-workflow-builder/step3" direction="left" />
          <img src="/test.png" />
        </div>
      </div>
    </main>
  );
}