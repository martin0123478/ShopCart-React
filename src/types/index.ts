export type MenuItem = {
    id: number,
    name: string,
    price: number
}

export type Ordertem = MenuItem & {
    quantity: number
}