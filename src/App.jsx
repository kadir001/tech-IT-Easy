import './App.css';

import {inventory} from "./constants/inventory.js";
import {calculateTotalSold} from "./helper/Sales.js";
import {calculateTotalBought} from "./helper/Bought.js";

function App() {
  const totalSold = calculateTotalSold(inventory);
  const totalBought = calculateTotalBought(inventory);

  console.log('Totaal verkocht:', totalSold);
  console.log('Totaal ingekocht', totalBought);
  return (
      <div>
        <h1>TV Dashboard</h1>
          <p>
              Totaal aantal verkochte tv's:{' '}
              <span className="sold-count">{totalSold}</span>
          </p>
          <p>
              Totaal aantal ingekochte tv's:{' '}
              <span className="bought-count">{totalBought}</span>
          </p>
          <p>
              Totaal aantal verkoopbare tv's:{' '}
              <span className="forSale-count">{totalBought - totalSold}</span>
          </p>
      </div>
  );
}

export default App
