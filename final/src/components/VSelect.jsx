const VSelect = ({categories,onChange}) =>{
    return(
        
    <select 
    name="categories" 
    id="categories"
    onChange={(e) => onChange(e.target.value)}

    >
        {categories.map((elem,index) =>
        (
            <option 
            key={elem.c_id} 
            value={elem.c_id}
            >{elem.category}
            </option>
        )
        )}
    </select>
    )
}
export default VSelect