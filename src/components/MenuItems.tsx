import type {MenuItem} from "../types"

type MenuItemsProps = {
  item: MenuItem,
  addItem: (item : MenuItem) => void
}



export default function MenuItems({item, addItem} : MenuItemsProps) {
  return (
    <>
      <button
      className=" border-2 border-slate-200 p-3 rounded-lg w-full mb-5 flex justify-between items-center hover:bg-amber-200 cursor-pointer "
      onClick={() => addItem(item)}
      >

      <p>{item.name}</p>
      <p className=" font-black">${item.price}</p>
    
      </button>
    </>
  )
}
