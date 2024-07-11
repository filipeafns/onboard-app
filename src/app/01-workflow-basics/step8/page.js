import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Hide block from users" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Hide block from users" text="This toggle allows you to hide a block from your end users. Commonly used when the destination is a data warehouse (in which case you wouldn't want to prompt the user to authenticate)." top={15} left={25} backLink="/01-workflow-basics/step7" nextLink="/01-workflow-basics/step9" direction="left" />
          <img src="/workflow-basics/wf-basics-8.png" />
        </div>
      </div>
    </main>
  );
}