import './styles.css'

function QuantityInput () {
    return (
        <div >
            <input className="quantity-input" type="number" value="1" min="1"></input>
        </div>
    )
}

export default QuantityInput