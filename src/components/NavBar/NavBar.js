import './NavBar.css'  
import CarWidget from '../CarWidget/CarWidget' 

const NavBar = () => {
    return (
        <nav className='title'>
            <h1>SHOP-TECNOLOGY</h1>
            <div className='list_container'>
                <button className='button_style'>celulares</button>
                <button className='button_style'>tablets</button>
                <button className='button_style'>notebook</button>
                <CarWidget/>
            </div>
            
        </nav>
    )
}

export default NavBar