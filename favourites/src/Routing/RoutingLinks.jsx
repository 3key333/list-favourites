import {   
    Routes,          
    Route,                
} from 'react-router-dom'
import { Error } from '../Components/Error404/Error'
import { Favourites } from '../Components/Favourites/Favourites'

export const RoutingLinks = () => {
    return(
        <Routes>
            <Route path='/' element={<></>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    )
} 