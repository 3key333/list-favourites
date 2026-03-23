import { useState } from "react"
import { createPortal } from 'react-dom'

export const usePortal = () => {

    const [selectedItem , setSelectedItem] = useState(null)

    const openPortal = (item) => {
        setSelectedItem(item)
    }

    const closePortal = () => {
        setSelectedItem(null)
    } 

    const Portal = ({children}) => {

        return createPortal(
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 1,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <div style={{backgroundColor: 'white', display: 'flex',  padding: 24, borderRadius: 8}}>
                    {children}
                </div>

            </div>,
            document.getElementById("modal")
        )
    }

    return {closePortal, openPortal, Portal, selectedItem}

}