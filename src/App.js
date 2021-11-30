import './App.css';
import Section from './components/section';
import ZBlock from './components/z-block';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Z-index playground</p>
      </header>
      {/* First section ----------------------------------------------- */}
      <Section title="Simple flow">
        <ZBlock z={2} />
        <ZBlock />
        <ZBlock />
      </Section>
      {/* Second section ---------------------------------------------- */}
      <Section title="Simple flow (with flexbox)" flex>
        <ZBlock z={2} />
        <ZBlock z={1} />
        <ZBlock />
      </Section>
      {/* Third section ----------------------------------------------- */}
      <Section title="With container">
        <ZBlock>
          <ZBlock z={2} />
          <ZBlock />
          <ZBlock />
        </ZBlock>
        <ZBlock />
      </Section>
      {/* Fourth section ---------------------------------------------- */}
      <Section title="With two containers" flex>
        <ZBlock>
          <ZBlock z={2} />
          <ZBlock />
          <ZBlock />
        </ZBlock>
        <ZBlock>
          <ZBlock z={2} />
          <ZBlock />
          <ZBlock />
        </ZBlock>
      </Section>
    </div>
  );
}

export default App;
