import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"



export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item : MenuItem) => {
        const existe = order.find(orderItem => orderItem.id === item.id)
        if(existe) {
            const orderActualizado = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setOrder(orderActualizado)
        } else {
        const nuevoPoroducto = {...item, quantity: 1}
        setOrder([...order, nuevoPoroducto])
        }
    }

    const removerItem = (id : MenuItem['id']) => {
        setOrder(order.filter(item => item.id !== id))
    }

    const reduceQuantity = (id : MenuItem['id']) => {
        const item = order.find(orderItem => orderItem.id === id)
        if (item && item.quantity > 1) {
            // Si la cantidad es mayor a 1, reducir en 1
            const orderActualizado = order.map(orderItem => 
                orderItem.id === id 
                    ? {...orderItem, quantity: orderItem.quantity - 1} 
                    : orderItem
            )
            setOrder(orderActualizado)
        } else if (item && item.quantity === 1) {
            // Si la cantidad es 1, eliminar el producto completamente
            setOrder(order.filter(item => item.id !== id))
        }
    }

    const addQuantity = (id : MenuItem['id']) => {
        const orderActualizado = order.map(orderItem => 
            orderItem.id === id 
                ? {...orderItem, quantity: orderItem.quantity + 1} 
                : orderItem
        )
        setOrder(orderActualizado)
    }

    const clearOrder = () => {
        setOrder([])
    }

    return {
        addItem,
        order,
        removerItem,
        reduceQuantity,
        addQuantity,
        clearOrder
    }
}