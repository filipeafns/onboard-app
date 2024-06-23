import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Adding a Trigger" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 5" text="Select a trigger from the list, is an event that starts your workflw." top={27} left={20} backLink="/01-workflow-builder/step4" nextLink="/01-workflow-builder/step6" direction="left" />
          <img src="/workflows/create/wf-new5.png" />
        </div>
      </div>
    </main>
  );
}