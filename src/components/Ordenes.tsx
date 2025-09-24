import type { OrderItem, MenuItem } from "../types"

type OrdenesProps = {
  order: OrderItem[]
  removerItem: (id:MenuItem['id']) => void
  reduceQuantity: (id:MenuItem['id']) => void
  addQuantity: (id:MenuItem['id']) => void
}

export default function Ordenes({ order, removerItem, reduceQuantity, addQuantity }: OrdenesProps) {
  return (
    <>
      <h2 className="text-3xl font-black mb-5">Consumo</h2>

      <div className="max-h-96">
        {order.length === 0 ? (
          <p className="text-center my-10">No hay productos agregados</p>
        ) : (
          order.map(item => (
            <div 
              key={item.id} 
              className="border-b border-slate-200 py-3 flex justify-between items-center"
            >
              {/* Información en 2 líneas */}
              <div className="flex flex-col">
                {/* Línea 1: Nombre */}
                <p className="font-medium">{item.name}</p>
                
                {/* Línea 2: Controles de cantidad + Precio */}
                <div className="flex gap-5 items-center">
                  {/* Controles de cantidad */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => reduceQuantity(item.id)}
                      className="bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-700 text-sm"
                    >
                      -
                    </button>
                    <span className="font-medium min-w-[20px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addQuantity(item.id)}
                      className="bg-green-500 text-white w-6 h-6 rounded-full flex items-center justify-center hover:bg-green-700 text-sm"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-lg font-semibold">
                    ${item.price * item.quantity}
                  </span>
                </div>
              </div>

              {/* Botón eliminar completamente */}
              <button 
                className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-800 text-xs"
                onClick={() => removerItem(item.id)}
                title="Eliminar producto completamente"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </>
  )
}
