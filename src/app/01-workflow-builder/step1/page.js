import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Integrations page" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 1" text="Navigate the integrations pages to create a new integration." top={14} left={18} backLink="/" nextLink="/01-workflow-builder/step2" direction="left" />
          <img src="/workflows/create/wf-new1.png" />
        </div>
      </div>
    </main>
  );
}