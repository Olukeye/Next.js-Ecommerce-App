import React, {useState, useEffect } from 'react'


const Checkbox =({categories, handleFilters})=> {
    const [checked, setChecked] = useState([])
    
    const handleToggle = c => () => {
        // return first index or -1 in the array 
        const presntCategoryId = checked.indexOf(c.name)
        const newCheckedCategoryId = [...checked]
        // if present was not already in the checked state = push
        // else pull or  take off
        if(presntCategoryId === -1){
            newCheckedCategoryId.push(c)
        } else {
            newCheckedCategoryId.splice(presntCategoryId, 1)
        }
        // console.log(newCheckedCategoryId)
        setChecked(newCheckedCategoryId)
        handleFilters(newCheckedCategoryId)
    }

    // method for the checkbox 
    return categories.map((c, i) => (
        <li key={i} className="list-unstyled">
            <input onChange={handleToggle(c._id)} 
            value={checked.indexOf(c._id === -1)}
             type="checkbox" className="form-check-input" />
            <label className="form-check-label">
                {c.name}
            </label>
        </li>
    ))
}

export default Checkbox;