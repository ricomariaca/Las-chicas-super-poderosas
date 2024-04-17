import { FaStar } from "react-icons/fa";
import { useState } from "react";

export const StarRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label>
                        <input
                            hidden
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className={`text-xl transition duration-200 ease-in-out ${currentRating <= (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
                                }`}
                            size={20}

                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );

            })}

        </div>
    )
}


