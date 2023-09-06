const addProduct = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const name = productName.value;
    const quantity = productQuantity.value;

    productName.value = " ";
    productQuantity.value = " ";

    displayProduct(name,quantity)
    saveLocalStorage(name,quantity);

}

const displayProduct = (name,quantity) => {
 
    const displayList = document.getElementById('product-list');
    const li = document.createElement('li');
  
    li.innerText = `${name} ${quantity}`;

    displayList.appendChild(li);
}

const getStoreCart = () => {
    let cart ={};
    const storeCart = localStorage.getItem('cart');
    if(storeCart){
        cart =JSON.parse(storeCart);
    
    }
    return cart;
}

const saveLocalStorage = (name, quantity) => {
    const cart = getStoreCart();
    cart[name]= quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayShowLocalStorage = () => {
    const saveCart = getStoreCart();
    for(const name in saveCart){
        const quantity = saveCart[name];
        displayProduct(name, quantity);
    }
}

displayShowLocalStorage();