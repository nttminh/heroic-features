import logo from './logo.svg';
import './App.css';
import { DefaultLayout } from './components/Layout';
import WelcomeCard from './components/WelcomeCard';
import PageContent from './components/PageContent';

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <WelcomeCard />
        <PageContent />
      </DefaultLayout>
    </div>
  );
}

export default App;
