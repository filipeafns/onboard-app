import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Select Inegration" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 2" text="Search or pick an integration from the list!" top={54} left={44} backLink="/01-workflow-builder/step1" nextLink="/01-workflow-builder/step3" direction="top" />
          <img src="/workflows/create/wf-new2.png" />
        </div>
      </div>
    </main>
  );
}