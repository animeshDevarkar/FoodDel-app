import React, { useRef } from 'react';
import './ExploreMenu.css';
import {menu_list} from '../../assets/frontend_assets/assets'

const ExploreMenu = ({ category, setCategory }) => {
    const listRef = useRef(null);

    const scrollLeft = () => {
        listRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        listRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of dishes.</p>
            <div className='explore-menu-list-container'>
                <button className='explore-menu-arrow left' onClick={scrollLeft}>&#10094;</button>
                <div className='explore-menu-list' ref={listRef}>
                    {menu_list.map((item, index) => (
                        <div 
                            onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
                            key={index} 
                            className='explore-menu-list-item'
                        >
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image || "/placeholder.svg"} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    ))}
                </div>
                <button className='explore-menu-arrow right' onClick={scrollRight}>&#10095;</button>
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;

