import { useEffect, useState } from "react"

export function Async() {
    const [isButtonInvisible, setIsButtonInvisible] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setIsButtonInvisible(true)
        }, 1000)
    }, [])
    return (
        <div>
            <div>Hello Word</div>
            { !isButtonInvisible && <button>Button</button> }
        </div>
    )
}