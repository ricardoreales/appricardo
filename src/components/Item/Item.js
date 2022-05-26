import './Item.css'
const Item = ({id, name, price, img}) => {
    return (
        <div className='cardItem'>
            <img src={img} />
            <h1>{name}</h1>
            {price}
        </div>
    )
}

export default Item