import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="This is how to Get Started" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 3" text="What's going on here on step 3?" top={75} left={40} backLink="/01-workflow-builder/step2" nextLink="/01-workflow-builder/step1" direction="right" />
          <img src="/test2.png" />
        </div>
      </div>
    </main>
  );
}