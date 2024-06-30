import { Component, useState } from "react";
import { CoreConcept } from "./Components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header.jsx";
import TabButton from "./Components/TabButton.jsx";
import { EXAMPLES } from "./data.js";
import "./index.css";
function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);
  // ------------------function handleSelect(selectedButton) selectedButton is a
  // parameter that we are accepting from the onselect below------------------------
  function handleSelect(selectedButton) {
    // console.log(selectedButton)
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept {...CORE_CONCEPTS[2]} />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
              label="Jsx"
            />
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
              label="State"
            />
          </menu>

          {!selectedTopic && <p>Please select an option.</p>}
          {selectedTopic && (
            <section id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>{EXAMPLES[selectedTopic].code}</pre>
            </section>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
