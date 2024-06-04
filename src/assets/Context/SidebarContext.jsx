import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export const SidebarProvider = (props) => {
    const [style, setstyle] = useState({});
    const [className, setclassName] = useState('sidebar-container')
    return (
        <SidebarContext.Provider value={{style, setstyle, className, setclassName}}>
            {props.children}
        </SidebarContext.Provider>
    );
}