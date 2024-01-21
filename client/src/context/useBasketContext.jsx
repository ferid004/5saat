import { createContext, useContext } from "react";
import useLocalStorege from "../hook/useLocalStorege";


const basketContext = createContext()

export function BasketProvider({ children }) {
    const [basket, setbasket] = useLocalStorege('basket')

    function handlebasket(item) {
        const index = basket.findIndex(x => x._id === item._id)
        if (index === -1) {
            item.count=1
            setbasket([...basket, item])
            return
        }
        basket[index].count++
        setbasket([...basket])
    }
    function artir(item) {
        const index = basket.findIndex(x => x._id === item._id)
        basket[index].count++
        setbasket([...basket])
    }
    function azalt(item) {
        const index = basket.findIndex(x => x._id === item._id)
        if (basket[index].count<1) {
            setbasket(basket.filter(x => x._id !== item._id))
            return
        }
        basket[index].count--
        setbasket([...basket])
    }
    function basketdelete(item) {
        setbasket(basket.filter(x => x._id !== item._id))
    }

    const data = { basket, setbasket, handlebasket,basketdelete,artir,azalt }

    return (
        <basketContext.Provider value={data}>
            {children}
        </basketContext.Provider>
    )
}
export const usebasket = () => useContext(basketContext)