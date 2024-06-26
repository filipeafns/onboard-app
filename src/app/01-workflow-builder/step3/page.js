import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Create a worflow" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 3" text="Click New Workflow to start building your first workflow" top={10} left={64} backLink="/01-workflow-builder/step2" nextLink="/01-workflow-builder/step4" direction="right" />
          <img src="/workflows/create/wf-new3.png" />
        </div>
      </div>
    </main>
  );
}