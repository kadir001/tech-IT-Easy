import './App.css';

import {inventory, bestSellingTv} from "./constants/inventory.js";
import {calculateTotalSold} from "./helper/Sales.js";
import {calculateTotalBought} from "./helper/Bought.js";
import {showTv} from './helper/ShowTV.js';
import { formatPrice } from './helper/formatPrice';
import { getScreenSizes } from './helper/getScreenSizes';


function App() {
  const totalSold = calculateTotalSold(inventory);
  const totalBought = calculateTotalBought(inventory);
  const tvName = showTv(bestSellingTv);
  const tvPrice = formatPrice(bestSellingTv.price);


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
          <p>
              <h1>{tvName}</h1>
          </p>
          <p>
              {tvPrice}
          </p>

          <p>
              {getScreenSizes(bestSellingTv)}<br/>
              {getScreenSizes(inventory[0])}<br/>
              {getScreenSizes(inventory[1])}
          </p>

      </div>
  );
}

export default App
