import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

const MenuOptions = ({ item, addItem }: MenuItemProps) => {
    return (
        <button
            className="border-2 border-teal-400 w-full hover:bg-teal-200 p-3 flex justify-between"
            onClick={() => addItem(item)}>
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}

export default MenuOptions
