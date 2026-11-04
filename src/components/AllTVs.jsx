
import {showTv} from '../helper/ShowTV.js';
import { formatPrice } from '../helper/formatPrice';
import { getScreenSizes } from '../helper/getScreenSizes';

function AllTVs({ tv }) {
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
            </div>
        </article>
    );
}

export default AllTVs;
