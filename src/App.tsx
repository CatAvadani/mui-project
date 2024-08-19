import './App.css';
import RecipeReviewCard from './components/Card';
import Navbar from './components/Navbar';

function App() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      {/* Other components go here */}
      <div style={{ flexGrow: 1, marginTop: '4rem' }}>
        <div
          style={{
            gridColumnGap: '1rem',
            gridRowGap: '1rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          <RecipeReviewCard />
          <RecipeReviewCard />
          <RecipeReviewCard />
        </div>
      </div>
    </div>
  );
}

export default App;
