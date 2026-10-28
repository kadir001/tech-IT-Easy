
import {showTv} from '../helper/ShowTV.js';
import { formatPrice } from '../helper/FormatPrice.js';
import { getScreenSizes } from '../helper/GetScreenSizes.js';

function BestSellingTv({ tv }) {
    return (
        <article className="tv-card">
            <div className="tv-image">
                <img src={tv.sourceImg} alt={showTv(tv)} />
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

export default BestSellingTv;
