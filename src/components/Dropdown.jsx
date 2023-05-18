import { useState } from "react"

const Dropdown = ({options}) => {
    const [color, setColor] = useState("")
    const renderedOptions = options.map(option => <option value={option.value} className="rounded p-1 hover:bg-sky-100">{option.label}</option>)
    return (
        <select  name="color" id="color" className="cursor-pointer border rounded p-3 shadow bg-white w-48" onChange={(e) => setColor(e.target.value)} value={color}>
            <option value="" selected disabled hidden>Select...</option>
            {renderedOptions}
        </select>
    )
}

export default Dropdown