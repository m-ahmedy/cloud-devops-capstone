import './App.css';
import { DEPLOYMENT } from './config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the Capstone Project for Cloud Devops Nanodegree
        </p>
        {
          DEPLOYMENT && <p>
            Deployment: <span style={{
              color: DEPLOYMENT,
              textTransform: 'capitalize'
            }}>{DEPLOYMENT}</span>
          </p>
        }
        <a
          className="App-link"
          href="https://github.com/m-ahmedy/cloud-devops-capstone"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to Capstone Repo
        </a>
      </header>
    </div>
  );
}

export default App;
