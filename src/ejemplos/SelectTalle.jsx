import { useEffect } from "react"

const SelectTalle = ({ setTalle, options }) => {
    const handleSelect = (e) => {
        setTalle(e.target.value)
    }

    useEffect(() => {
        if (Array.isArray(options) && options.length > 0) {
            setTalle(options[0].value)
        }
    }, [options])

    return (
        <select onChange={handleSelect}>
            {Array.isArray(options) &&
                options.map((opt) => (
                    <option value={opt.value} key={opt.value}>
                        {opt.label}
                    </option>
                ))}
        </select>
    )
}

export default SelectTalle