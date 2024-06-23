import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Trigger Event" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 6" text="Select a trigger event" top={44} left={20} backLink="/01-workflow-builder/step5" nextLink="/01-workflow-builder/step7" direction="left" />
          <img src="/workflows/create/wf-new6.png" />
        </div>
      </div>
    </main>
  );
}