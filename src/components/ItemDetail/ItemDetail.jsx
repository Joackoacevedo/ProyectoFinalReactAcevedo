import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import SelectTalle from "../../ejemplos/SelectTalle"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const talles = [
    {
        value: "44",
        label: "44"
    },
    {
        value: "43",
        label: "43"
    },
    {
        value: "42",
        label: "42"
    },
    {
        value: "41",
        label: "41"
    },
    {
        value: "40",
        label: "40"
    },
    {
        value: "39",
        label: "39"
    },
    {
        value: "38",
        label: "38"
    },
    {
        value: "37",
        label: "37"
    },
    {
        value: "36",
        label: "36"
    },
    {
        value: "35",
        label: "35"
    },
    {
        value: "34",
        label: "34"
    },
    {
        value: "33",
        label: "33"
    },
    {
        value: "32",
        label: "32"
    },
    {
        value: "31",
        label: "31"
    },
    {
        value: "30",
        label: "30"
    },
]

const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)


    const [cantidad, setCantidad] = useState(1)
    const [talle, setTalle] = useState(null)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad,
            talle
        }

        agregarAlCarrito(newItem)
    }

    
    return (
        <div>
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p>{item.descripcion}</p>
            <p>Categoria {item.category}</p>
            <p><strong>Precio: ${item.precio}</strong></p>
            <p>Subtotal: {item.precio * cantidad}</p>

            {/* <SelectTalle setTalle={setTalle} options={item.talles} />  */}
            {/* <br /> */}
            {
                isInCart(item.id)
                ? <Link className="btn btn-success" to="/cart">Terminar mi compra</Link>
                : <ItemCount
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    stock={item.stock}
                    agregar={handleAgregar}
                />
            }

        </div>
    )
}

export default ItemDetail