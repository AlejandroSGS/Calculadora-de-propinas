import MenuItems from "./components/MenuItems"
import Ordenes from "./components/Ordenes"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import Total from "./components/Total"

function App () {

  const { addItem, order, removerItem, reduceQuantity, addQuantity, clearOrder } = useOrder()

  return (
    <>
    <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
    </header>
    
    <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      
      <div>
        <h2 className=" text-3xl font-black mb-5">Menu</h2>
        {menuItems.map(item => (
          <MenuItems
          key={item.id}
          item={item}
          addItem={addItem}
          />
        ))}
      </div>

      <div className=" border border-dashed border-slate-400 p-5 rounded-lg ml-5">
        <Ordenes 
        order={order}
        removerItem={removerItem}
        reduceQuantity={reduceQuantity}
        addQuantity={addQuantity}
        />
        <Total 
          order={order}
          clearOrder={clearOrder}
        />

      </div>


    </main>
    </>
  )
}

export default App