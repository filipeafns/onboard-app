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
          <Tooltip text="This is a custom tooltip!" top={70} left={30} stepLink="/01-workflow-builder/step2" />
          <img src="/test.png"/>
        </div>
      </div>
    </main>
  );
}