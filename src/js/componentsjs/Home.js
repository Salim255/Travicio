import React from 'react';
import * as AiIcons  from 'react-icons/ai'

const Home = () => {
    return (
        <div className="home">
            
            <div className="search-section">
                <h2 className="search-section__travico">
                    Travicio
                </h2>
                <div className="search-section__searchBox">
                < AiIcons.AiOutlineSearch className="search-section__icon" />
                <input type="text" name="search" id="search" placeholder="Search Google or type a URL"  className="search-section__input"/>  
               </div>
               <button type="submit" className="search-section__btn">
                    search
                </button>
            </div>
      
        </div>
            
    )
}

export default Home


