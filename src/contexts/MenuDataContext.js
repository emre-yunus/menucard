import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {getProductsFromDb} from "../services/firestoreProducts";

const MenuDataContext = createContext();

export function MenuDataProvider(props) {
    const [menuData, setMenuData] = useState([]);
    const api = useMemo(() => ({ menuData, setMenuData }), [menuData, setMenuData]);

    const loadMenu = async function () {
        setMenuData(await getProductsFromDb());
    }

    useEffect(() => loadMenu(), []);

    return <MenuDataContext.Provider value={api}>
        {props.children}
    </MenuDataContext.Provider>
}

export const useMenuDataContext = () => useContext(MenuDataContext);