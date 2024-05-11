import styles from "./page.module.css";
import Navigation from "./Components/Tooltip/navigation";

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <h1>Explore apps</h1>
      <ul>
        <li>Workflow Builder</li>
        <li>Logging</li>
      </ul>
    </main>
  );
}
