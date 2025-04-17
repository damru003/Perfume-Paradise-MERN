import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../../pages/StoreProvider';
import { useLocation } from 'react-router-dom';

export const Search = () => {


    const { search, setSearch, showsearch, setshowSearch } = useContext(StoreContext);

    const [visible, setVisible] = useState(true);
    const location = useLocation();

        useEffect(() => {
        if (location.pathname.includes('collections') && showsearch) {
            setVisible(true);
        } else {
            setVisible(false);
        }
        }, [location, showsearch]);

    
    return showsearch && visible ? (
        <div className="text-center mt-20">
            <div className="inline-flex items-center justify-center border border-gray-700 px-5 py-2 mx-5 my-3 rounded-full w-3/4">
                <input 
                    type="text" 
                    placeholder="Search for Products" 
                    className="flex-1 outline-none text-sm" 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    aria-label="Search for products"
                />
                <img 
                    src="assets/frontend_assets/search_icon.png" 
                    alt="Search Icon" 
                    className="w-4"
                />
            </div>
            <img 
                src="assets/frontend_assets/cross_icon.png" 
                alt="Close Search" 
                onClick={() => setshowSearch(false)} 
                className="inline w-3 cursor-pointer" 
                aria-label="Close search"
            />
        </div>
    ) : null;
};
