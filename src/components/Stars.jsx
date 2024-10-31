import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

function Stars({rate}){
    const [rateScore, setRateScore] = useState(rate);

    return(
        <div>
            {[...Array(rateScore)].map((a, i) => (
                <FaStar className="star-lg" key={i} onClick={() => setRateScore(i + 1)} />
            ))}
            {[...Array(5 - rateScore)].map((a, i) => (
                <FaRegStar className="star-lg" key={i} onClick={() => setRateScore(rateScore + i + 1)} />
            ))}
    </div>
    );
}

export default Stars;
