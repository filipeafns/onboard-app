import Tooltip from "@/app/Components/Tooltip/tooltip";
import Navigation from "@/app/Components/Tooltip/navigation";
import Header from "@/app/Components/header";

export default function Home() {
  return (
    <main>
      <Header Description="Whitelabel Installer" />
      <Navigation />
      <div className="shot-container">
        <div className="hotspot">
          <Tooltip title="Whitelabel Installer" text="The result is a whitelabel experience. Powered by Alloy under the hood. Visible as Powered by Amazon" top={40} left={60} backLink="/netsuite/step2" nextLink="/netsuite/step1" direction="left" />
          <img src="/netsuite/3.png" />
        </div>
      </div>
    </main>
  );
}