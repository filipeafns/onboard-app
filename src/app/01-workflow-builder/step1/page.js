import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Getting Started" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Step 1" text="Navigate your integrations settings by exploring the tabs." top={5} left={10} backLink="/" nextLink="/01-workflow-builder/step2" direction="bottom" />
          <img src="/test.png" />
        </div>
      </div>
    </main>
  );
}