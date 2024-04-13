import { products, type Product } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart";
import { cookies } from "next/headers";
import { WidgetItem } from '../../../components/WidgetItem';

export const metadata = {
 title: 'Carrito de compras',
 description: 'Carrito de compras',
};

interface ProductInCart {
    product: Product;
    quantity: number;
}

const getProductsInCart = (cart: {[id:string]:number}): ProductInCart[]  => {
    const productsInCart: ProductInCart[] = []

    for (const id of Object.keys(cart)) {
        const product  = products.find(product => product.id === id)
        if(product) {
            productsInCart.push({ product, quantity: cart[id]})
        }
    }

    return productsInCart
}
export default function CartPage() {

    const cookiesStore = cookies()
    const cart = JSON.parse(cookiesStore.get('cart')?.value ?? '{}') as { [id: string]: number }

    const productsInCart = getProductsInCart(cart)

    const totalToPay = productsInCart.reduce((total, product) => total + product.product.price * product.quantity, 0)

  return (
    <div>
      <h1 className="text-5xl">Productos en el carrito</h1>
      <hr  className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full "> 
      <div className="flex flex-col gap-2 w-full sm:w-8/12">
    {
        productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
        ))
    }
      </div>
     
     <div className="flex flex-col w-full sm:w-4/12">
        <WidgetItem title="Total a pagar">
            <div className="flex mt-2 justify-center gap-4">
                <h3 className="text-3xl font-bold text-gray-700">${(totalToPay * 1.21).toFixed(2)}</h3>

            </div>
            <span className="text-bold text-center text-gray-500 ">Impuestos 21%: ${(totalToPay * 0.21).toFixed(2)}</span>

        </WidgetItem>

     </div>
      </div>
    </div>
  );
}