import { useState } from "react"
import type { OrderItem } from "../types"

type TotalProps = {
  order: OrderItem[]
  clearOrder: () => void
}

export default function Total({ order, clearOrder }: TotalProps) {
  const [tip, setTip] = useState<number>(0)
  const [showAlert, setShowAlert] = useState<boolean>(false)

  // Calcular el subtotal de todos los productos
  const subtotal = order.reduce((total, item) => total + (item.price * item.quantity), 0)
  
  // Calcular la propina
  const tipAmount = subtotal * (tip / 100)
  
  // Calcular el total final
  const total = subtotal + tipAmount

  // Función para procesar el pago
  const handlePayment = () => {
    if (order.length === 0) {
      alert("No hay productos en la orden")
      return
    }
    
    // Limpiar la orden
    clearOrder()
    setTip(0)
    
    // Mostrar alerta de confirmación
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 3000)
  }

  return (
    <div>
      <h2 className="text-3xl font-black mb-5">Total y Propina</h2>
      <form className="space-y-5">
        <div>
          <label className="block mb-2 font-bold text-lg" htmlFor="tip">
            Propina:
          </label>
          <select
            id="tip"
            value={tip}
            onChange={(e) => setTip(Number(e.target.value))}
            className="w-full border border-slate-300 rounded-md p-2"
          >
            <option value="0">Selecciona la propina</option>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
          </select>
        </div>
        
        <div className="space-y-2">
          <p className="text-lg">
            Subtotal: <span className="font-bold">${subtotal.toFixed(2)}</span>
          </p>
          {tip > 0 && (
            <p className="text-lg">
              Propina ({tip}%): <span className="font-bold">${tipAmount.toFixed(2)}</span>
            </p>
          )}
        </div>
        
        <div className="mt-5 border-t pt-3">
          <p className="text-xl">
            Total a pagar: <span className="font-bold text-2xl">${total.toFixed(2)}</span>
          </p>
        </div>
      </form>
      <div className=" mt-4">
        <button 
          onClick={handlePayment}
          className=" bg-green-400 py-2 px-4 rounded-lg hover:bg-green-600 text-amber-100 font-semibold transition"
        >
          Pagar
        </button>
      </div>
      
      {/* Alerta de confirmación */}
      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce">
          <p className="font-semibold">¡Pago procesado exitosamente!</p>
          <p className="text-sm">Gracias por tu compra</p>
        </div>
      )}
    </div>
  )
}
