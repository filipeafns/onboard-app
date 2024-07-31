import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Buy With Prime App Listed" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Buy With Prime App" text="Alloy enables NetSuite with new integrations, such as Buy With Prime." top={49} left={42} backLink="/" nextLink="/netsuite/step2" direction="left" />
          <img src="/netsuite/1.png" />
          <img src="/netsuite/2.png" className="hidethis" />
        </div>
      </div>
    </main>
  );
}