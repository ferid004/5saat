import { createContext, useContext } from "react";
import useLocalStorege from "../hook/useLocalStorege";


const wishContext = createContext()

export function WishProvider({ children }) {
    const [wish, setwish] = useLocalStorege('wish')

    function handlewish(item) {
        const index = wish.findIndex(x => x._id === item._id)
        if (index === -1) {
            setwish([...wish, item])
            return
        }
        setwish(wish.filter(x => x._id !== item._id))
    }

    const data = { wish, setwish, handlewish }

    return (
        <wishContext.Provider value={data}>
            {children}
        </wishContext.Provider>
    )
}
export const useWish = () => useContext(wishContext)