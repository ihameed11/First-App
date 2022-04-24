import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

function Search( {placeholder}){

        return (
            <div className="search">
                <div className="searchInput">
                    <input type='text' placeholder={placeholder}/>
                    <div className="searchIcon">
                          <SearchIcon/>
                    </div>
                </div>
                
            </div>
        );
    
}

export default Search;
