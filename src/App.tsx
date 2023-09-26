import logo from './logo.svg';
import './App.css';

function App(): JSX.Element {
  return (
    <main className="h-screen bg-dark-night text-white flex justify-center">
      <header className="flex flex-col items-center space-y-4">
        <img src={logo} className="App-logo mt-4" alt="logo" />
        <p>
          This is a
          {' '}
          <code>src/starter.ts</code>
        </p>
        <p>
          With
          {' '}
          <strong>
            <i>Typescript, jest, eslint, prettier, husky</i>
          </strong>
          {' '}
          full configured
        </p>
        <a
          className="text-link-pink p-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </main>
  );
}

export default App;
