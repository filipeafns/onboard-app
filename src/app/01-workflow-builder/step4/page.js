import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Configure Workflow" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 4" text="Let's give the workflow a name?" top={9} left={10} backLink="/01-workflow-builder/step3" nextLink="/01-workflow-builder/step5" direction="top" />
          <img src="/workflows/create/wf-new4.png" />
        </div>
      </div>
    </main>
  );
}