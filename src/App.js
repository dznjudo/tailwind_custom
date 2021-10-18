import logo from './logo.svg';
import AppShell from './AppShell'

function App() {
  return (
    <div>
      <AppShell>
      <header>
        <img src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </AppShell>
    </div>
  );
}

export default App;
