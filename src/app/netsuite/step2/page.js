import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Integration Detail" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Integration Detail" text="App detail page showing Buy with Prime Integration users can install" top={29} left={79} backLink="/netsuite/step1" nextLink="/netsuite/step3" direction="left" />
          <img src="/netsuite/2.png" />
          <img src="/netsuite/3.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}