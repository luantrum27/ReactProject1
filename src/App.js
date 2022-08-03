import Navbar from './components/Navbar';
import AppRouter from './routes/AppRouter'
import PortfolioRouter from './routes/PortfolioRouter';

function App() {

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
      <PortfolioRouter />
    </div>
  );
}

export default App;
