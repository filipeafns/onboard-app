import styles from "./page.module.css";
import Navigation from "./Components/Tooltip/navigation";
import Card from "./Components/card";

export default function Home() {
  return (
    <main className="home">
      <Navigation />
      <h1>Explore Guides</h1>
      <ul className="guide-grid">
        <li>
          <Card
            Link="/01-workflow-builder/step1"
            Title="Getting Started"
            Description="In this guide, we'll walk through how to get started building integrations with Alloy Embedded."
            Image="test.png" />
        </li>
        <li>
          <Card
            Link="/01-workflow-builder/step1"
            Title="Authentication"
            Description="Learn how to connect to Alloy's Embedded iPaaS and make requests."
            Image="test.png" />
        </li>
        <li>
          <Card
            Link="/01-workflow-builder/step1"
            Title="Building Workflows"
            Description="Learn how to navigate the Alloy Workflow Builder like a pro."
            Image="test.png" />
        </li>
        <li>
          <Card
            Link="/01-workflow-builder/step1"
            Title="Alloy Modal"
            Description="Learn what the Alloy Modal is and how it helps abstract integration-specific authentication."
            Image="test.png" />
        </li>
      </ul>
    </main>
  );
}
