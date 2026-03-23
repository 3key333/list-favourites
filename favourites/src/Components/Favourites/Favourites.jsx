import { useContext } from 'react'
import { FavouritesContext } from '../../Context/Context'
import './Favourites.scss'

export const Favourites = () => {

    const { favouriteDishesArray } = useContext(FavouritesContext)

    return(
        <section className='favourite-list'>
            <div className="favourite-list-inner">

                <div className="favourite-list-title">
                    <h1>Избранное</h1>
                </div>

                <div className="favourite-recipes">
                    {favouriteDishesArray.map( (item) => (
                        <div className="liked-dish" key={item.id}>
                           <li>{item.name}</li>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )

}