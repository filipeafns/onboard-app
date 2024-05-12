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
          <Tooltip title="Step 2" text="This is a custom tooltip!" top={10} left={50} backLink="/01-workflow-builder/step1" nextLink="/01-workflow-builder/step3" direction="top" />
          <img src="/test.png" />
        </div>
      </div>
    </main>
  );
}