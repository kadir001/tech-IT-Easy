import './App.css';

import {inventory, bestSellingTv} from "./constants/inventory.js";
import {calculateTotalSold} from "./helper/Sales.js";
import {calculateTotalBought} from "./helper/Bought.js";
import BestSellingTv from "./components/BestSellingTv.jsx";



function App() {
    const totalSold = calculateTotalSold(inventory);
    const totalBought = calculateTotalBought(inventory);

    function handleButtonClick(event) {
        console.log(event.target.textContent);
    }


    return (
        <main className="dashboard">
            <h1>Tech it easy dashboard</h1>

            <section className="stock-section">
                <h2>Verkoopoverzicht</h2>

                <div className="stats-grid">
                    <article className="stat-card sold-card">
                        <p>Aantal verkochte producten</p>
                        <span className="sold-count">{totalSold}</span>
                    </article>

                    <article className="stat-card bought-card">
                        <p>Aantal ingekochte producten</p>
                        <span className="bought-count">{totalBought}</span>
                    </article>

                    <article className="stat-card for-sale-card">
                        <p>Aantal te verkopen producten</p>
                        <span className="forSale-count">
            {totalBought - totalSold}
          </span>
                    </article>
                </div>
            </section>

            <section className="best-selling">
                <h2>Best verkochte tv</h2>

                <BestSellingTv tv={bestSellingTv} />
            </section>
            <section className="sort-buttons">
                <button onClick={handleButtonClick}>
                    Meest verkocht eerst
                </button>

                <button onClick={handleButtonClick}>
                    Goedkoopste eerst
                </button>

                <button onClick={handleButtonClick}>
                    Meest geschikt voor sport eerst
                </button>
            </section>
        </main>
    );
}

export default App
