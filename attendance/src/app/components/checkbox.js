"use client"
import { useState } from 'react';


const Push = (firstName, lastName, date, isChecked) => {
    console.log(firstName, lastName, date, isChecked)
    fetch('/api/setchecked', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, date, isChecked})
    })
}

function Checkbox({key, firstName, lastName,  date, attended}) {
    const [isChecked, setChecked] = useState(attended);


    function toggleCheckboxChange() {
        setChecked((prev) => !prev)
        Push(firstName, lastName, date, !isChecked);
    }

    return(
        <>
            <input id={key}  className="checkbox" type="checkbox" checked={isChecked} onChange={() => toggleCheckboxChange()} />
        </>
    )

}
export default Checkbox;