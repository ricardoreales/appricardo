const products = [
    {id: '1', name: 'remera roja', price: 1200,stock: 200,img:'imagenes/remeraRoja.jpg'},
    {id: '2', name: 'remera azul', price: 2300,stock: 100,img:'imagenes/remeraAzul.jpg'},
    {id: '3', name: 'remera blanca', price: 3000,stock: 80,img:'imagenes/remeraBlanca.jpg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}