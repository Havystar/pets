import React,{useState} from 'react'

export function Searchbar(){
    const [item,setItem] = useState(''); 

    const onSubmit = e => {
        e.preventDefault();
        submitSearch(item);
        setItem("")
    }
    const submitSearch = ()=>{
        console.log("Searched for", item)
    }
    return(
        <div class="searchbar">

            <form onSubmit={onSubmit}>
                <input 
                    class="serchbar-input"
                    type="text" 
                    name="Search" 
                    placeholder="Szukaj" 
                    value={item}
                    onChange={e => setItem(e.target.value)}>
                </input>

            </form>

        </div>
    )
}