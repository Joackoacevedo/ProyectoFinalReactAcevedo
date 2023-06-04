import { useRef } from "react"
import { useSearchParams } from "react-router-dom"
import "../App.css";



const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const inputRef = useRef()

    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()

        const value = inputRef.current.value

        setSearchParams({
            search: value
        })
    }

    return (
        <form className="busca" onSubmit={handleSubmit}>
            <input ref={inputRef} type="text" className="form-control" style={{maxWidth: '450px'}}/>
            <button type="submit" className="btn btn-primary">Buscar</button>
        </form>
    )
}

export default Buscador