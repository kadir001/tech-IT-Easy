import './App.css';
import {calculateTotalSold} from "./helper/Sales.js";
import {inventory} from "./constants/inventory.js";

function App() {
  const totalSold = calculateTotalSold(inventory);

  console.log('Totaal verkocht:', totalSold);
  return (
      <div>
        <h1>TV Dashboard</h1>
          <p>
              Totaal aantal verkochte tv's:{' '}
              <span className="sold-count">{totalSold}</span>
          </p>
      </div>
  );
}

export default App
