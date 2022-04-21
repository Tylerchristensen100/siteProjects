import React, {useState} from 'react';
import {FaStar} from 'react-icons/fa';

const createArray = (length) => [...Array(length)];

function StarRating({totalStars = 5}) {
    const [selectedStars, setSelectedStars] = useState(0);
    return createArray(totalStars).map((n, i) => <Star key={i} />);
}



function Star({selected=false, onSelect}) {

    return (
        <>
        <FaStar color={selected ? "red" : "gray"} onClick={onSelect}/>
        </>
    );
}
export default StarRating;