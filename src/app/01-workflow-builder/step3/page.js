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
        <Tooltip text="What's going on here on step 3?" top={75} left={40} backLink="/01-workflow-builder/step2" nextLink="/01-workflow-builder/step1" direction="left" />
          <img src="/test2.png"/>
        </div>
      </div>
    </main>
  );
}