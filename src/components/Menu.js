import {Link} from 'react-router-dom'

const Menu = ({menu}) => {
    return (
        <div>
            <h2>Check weather for next few days according your selected location </h2>
            <Link to="/helsinki">Helsinki</Link> <Link to="/tampere">Tampere</Link> <Link to="/turku">Turku</Link>
        </div>
    )
}

export default Menu