import {
  BrowserRouter,    
  Link,                      
  useLocation      
} from 'react-router-dom'
import './App.scss'
import { RoutingLinks } from './Routing/RoutingLinks'
import { useContext } from 'react'
import { FavouritesContext } from './Context/Context'
import { usePortal } from './Components/Portal/portal'

function FavoritesMain() {
  const { closePortal, openPortal, Portal, selectedItem } = usePortal()

  const { addInFavouritesList, recipes } = useContext(FavouritesContext)

  const location = useLocation()

  if(location.pathname !== '/') return null

  return(
    <main>
      <div className="main-inner">

      <div className="main-title">
        <Link to='/favourites'><h1>Блюда</h1></Link>
      </div>

      <div className="list-recipes">

        {recipes.map( (item) => (

          <div className='dish' key={item.id}>
           
            
            <div className='dish-name' onClick={()=>openPortal(item)}>
              {item.name}
            </div>
            

            <div className='dish-button'> 

              <button onClick={()=>addInFavouritesList(item.id)} style={{ backgroundColor: item.isFavourite ? 'red' : 'rgba(8, 182, 8, 0.801)' }}>
                {item.isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}
              </button>

            </div>

          </div>
        ))}

        {selectedItem ? (
          <Portal>

            <div className='portal-text' style={{maxWidth: 700}}>
              {selectedItem.cooking}
            </div>

            <div className='portal-btn-container' style={{marginLeft:25}}>
              <button onClick={closePortal}>✕</button>
            </div>
              
          </Portal>
        ) : null}  
     

      </div>

      </div>
    </main>
  )
}

function App() {
  return (
    <>
      <BrowserRouter>

        <RoutingLinks/>
        <FavoritesMain/>

      </BrowserRouter>
    </>
  )
}

export default App
