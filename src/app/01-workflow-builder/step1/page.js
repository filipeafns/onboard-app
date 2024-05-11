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
        <Tooltip text="Navigate your integrations settings by exploring the tabs." top={5} left={10} backLink="/" nextLink="/01-workflow-builder/step2" direction="right" />
          <img src="/test.png"/>
        </div>
      </div>
    </main>
  );
}