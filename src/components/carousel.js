import * as React from "react"
import { useEffect, useState } from "react"

const Carousel = () => {
    const data = ['1', '2', '3', '4', '5']
    const [currentIndex, setCurrentIndex] = useState(0)
    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length-1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex+1)
    }

    useEffect(() => {
        const interval = setInterval(() => {carouselInfiniteScroll()}, 3000)
        return () => clearInterval(interval)
    })
    return ( 
        <div>
        </div>
    )
}

export default Carousel