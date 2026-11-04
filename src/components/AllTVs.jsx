
import { showTv } from '../helper/ShowTV.js';
import { formatPrice } from '../helper/formatPrice';
import { getScreenSizes } from '../helper/getScreenSizes';
import outOfStock from '../assets/out-of-stock.png';

function AllTVs({ tv }) {
    return (
        <article className="tv-card">

            <div className="tv-image">
                <img src={tv.sourceImg} alt={showTv(tv)} />

                {tv.sold === tv.originalStock && (
                    <img
                        className="sold-out-image"
                        src={outOfStock}
                        alt="Uitverkocht"
                    />
                )}
            </div>

            <div className="tv-details">
                <h3>{showTv(tv)}</h3>

                <p className="tv-price">
                    {formatPrice(tv.price)}
                </p>

                <p className="screen-sizes">
                    {getScreenSizes(tv)}
                </p>

                <ul className="feature-list">
                    {tv.options.map((option) => (
                        <li key={option.name}>
                            <span
                                className={
                                    option.applicable
                                        ? 'feature-yes'
                                        : 'feature-no'
                                }
                            >
                                {option.applicable ? '●' : '⊖'}
                            </span>
                            {option.name}
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default AllTVs;
