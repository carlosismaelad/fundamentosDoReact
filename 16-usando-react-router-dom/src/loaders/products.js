import products from '../database.json'

export default function loadProducts({ params }) {
    // const { productId } = params

    const product = products.find(p => p.id === +params.productId)

    if (!product) {
        throw new Response('404 Not found!', { status: 404 })
    }

    return product
}
