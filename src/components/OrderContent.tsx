import { MenuItem, Ordertem } from "../types"
import { formatCurrency } from "../helpers"

type OrderContet = {
    order: Ordertem[],
    removeItem: (id: MenuItem['id']) => void

}
export const OrderContent = ({ order, removeItem }: OrderContet) => {
    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>
            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                    <p>La orden está  vacia</p>
                    : (

                        order.map(item => (

                            <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
                                <div>
                                    <p>
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    <p className="font-black">
                                        Cantidad: {item.quantity} -  {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>
                                <button className="bg-red-600 h-8 w-8 rounded-full text-white"
                                    onClick={() => removeItem(item.id)}>
                                    X
                                </button>
                            </div>
                        ))
                    )

                }
            </div>
        </div>
    )
}
