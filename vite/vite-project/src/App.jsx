import Header from './header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
