let products = {
    ColdDrinks: [
        {
            name: "Drink-cola",
            price: 3.50,
            img: "img/c1.PNG",
            weight: "220g"
        },
        {
            name: "Drink-orange",
            price: 4.50,
            img: "img/c2.PNG",
            weight: "240g"
        },
        {
            name: "Drink-apple",
            price: 5.30,
            img: "img/c3.PNG",
            weight: "320g"
        },
        {
            name: "Drink-orange",
            price: 5.70,
            img: "img/c2.PNG",
            weight: "180g"
        },
        {
            name: "Drink-apple",
            price: 3.80,
            img: "img/c3.PNG",
            weight: "220g"
        },
        {
            name: "Drink-cola",
            price: 4.50,
            img: "img/c1.PNG",
            weight: "250g"
        }
    ],
    Burgers: [
        {
            name: "chicken-cheese",
            price: 3.50,
            img: "img/burgure.PNG",
            weight: "220g"
        },
        {
            name: "chicken-Deluxe",
            price: 4.50,
            img: "img/b2.PNG",
            weight: "240g"
        },
        {
            name: "Ham-burger",
            price: 5.30,
            img: "img/b3.PNG",
            weight: "320g"
        },
        {
            name: "Big-johnr",
            price: 5.70,
            img: "img/b4.PNG",
            weight: "180g"
        },
        {
            name: "Spicy-chicken",
            price: 3.80,
            img: "img/b5.PNG",
            weight: "220g"
        },
        {
            name: "Super-stars",
            price: 4.50,
            img: "img/b6.PNG",
            weight: "250g"
        }
    ],
    Pizzas: [
        {
            name: "pepproni-pizz",
            price: 3.50,
            img: "img/p1.PNG",
            weight: "220g"
        },
        {
            name: "chicken-pizza",
            price: 4.50,
            img: "img/p2.PNG",
            weight: "240g"
        },
        {
            name: "cheese-pizza",
            price: 5.30,
            img: "img/p3.PNG",
            weight: "320g"
        },
        {
            name: "chicken-pizza",
            price: 5.70,
            img: "img/p2.PNG",
            weight: "180g"
        },
        {
            name: "cheese-pizza",
            price: 3.80,
            img: "img/p3.PNG",
            weight: "220g"
        },
        {
            name: "pepproni-pizz",
            price: 4.50,
            img: "img/p1.PNG",
            weight: "250g"
        }
    ],
    Wok: [
        {
            name: "pepproni-pizz",
            price: 3.50,
            img: "img/w1.PNG",
            weight: "220g"
        },
        {
            name: "chicken-pizza",
            price: 4.50,
            img: "img/w2.PNG",
            weight: "240g"
        },
        {
            name: "cheese-pizza",
            price: 5.30,
            img: "img/w3.PNG",
            weight: "320g"
        },
        {
            name: "chicken-pizza",
            price: 5.70,
            img: "img/w2.PNG",
            weight: "180g"
        },
        {
            name: "cheese-pizza",
            price: 3.80,
            img: "img/w3.PNG",
            weight: "220g"
        },
        {
            name: "pepproni-pizz",
            price: 4.50,
            img: "img/w1.PNG",
            weight: "250g"
        }
    ],
    Desserts: [
        {
            name: "vanilla-dessert",
            price: 3.50,
            img: "img/d1.PNG",
            weight: "220g"
        },
        {
            name: "chocklet",
            price: 4.50,
            img: "img/d2.PNG",
            weight: "240g"
        },
        {
            name: "coffee-dessert",
            price: 5.30,
            img: "img/d3.PNG",
            weight: "320g"
        },
        {
            name: "chocklet",
            price: 5.70,
            img: "img/d2.PNG",
            weight: "180g"
        },
        {
            name: "coffee-dessert",
            price: 3.80,
            img: "img/d3.PNG",
            weight: "220g"
        },
        {
            name: "vanilla-dessert",
            price: 4.50,
            img: "img/d1.PNG",
            weight: "250g"
        }
    ],
    Pasta: [
        {
            name: "pepproni-pasta",
            price: 3.50,
            img: "img/w1.PNG",
            weight: "220g"
        },
        {
            name: "chicken-pasta",
            price: 4.50,
            img: "img/w2.PNG",
            weight: "240g"
        },
        {
            name: "cheese-pasta",
            price: 5.30,
            img: "img/w3.PNG",
            weight: "320g"
        },
        {
            name: "chicken-pasta",
            price: 5.70,
            img: "img/w2.PNG",
            weight: "180g"
        },
        {
            name: "cheese-pasta",
            price: 3.80,
            img: "img/w3.PNG",
            weight: "220g"
        },
        {
            name: "pepproni-pasta",
            price: 4.50,
            img: "img/w1.PNG",
            weight: "250g"
        }
    ]
};

let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []; 
let categoryImages = {
    ColdDrinks: "img/Capture6.PNG", 
    Burgers: "img/burgure.PNG",       
    Pizzas: "img/pizza.PNG",         
    Wok: "img/wok.PNG",  
    Desserts: "img/dessert.PNG",  
    Pasta: "img/pasta.PNG"  
};


function renderCategories() {
    let catsDiv = document.querySelector("#productCats");
    let cats = Object.keys(products);
    catsDiv.innerHTML = "";
    cats.forEach((cat) => {
        catsDiv.innerHTML += `
            <div class="category" onclick="renderProducts('${cat}')">
                <img src="${categoryImages[cat]}" alt="${cat}">
                <h3>${cat}</h3>
            </div>
        `;
    });
}


function renderProducts(category) {
    let productsDiv = document.querySelector("#productCats");
    productsDiv.innerHTML = "";
    document.getElementById("backButton").style.display = "block"; 
    document.getElementById("span").innerText = "Products";

    products[category].forEach((product, index) => {
        productsDiv.innerHTML += `
            <div class="category">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p style="color: #a0a0a0;">${product.weight}</p>
                <h4 style="color: #ffca40; margin: 1rem 0rem;">$${product.price.toFixed(2)}</h4>
                <button class="btn btn-outline-warning" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onclick="addToCart('${category}', ${index})">Add To Cart</button>
            </div>
        `;
    });
}


function addToCart(category, index) {
    let product = products[category][index];
    let existingProductIndex = cart.findIndex(item => item.name === product.name);
    
    if (existingProductIndex > -1) {
        cart[existingProductIndex].qty += 1;
    } else {
        product.qty = 1;
        cart.push(product);
    }
    localStorage.setItem('shoppingCart', JSON.stringify(cart)); 
    renderCart();
}


function renderCart() {
    let cartItemsDiv = document.querySelector("#cartItems");
    let cartTotal = 0;
    cartItemsDiv.innerHTML = "";

    cart.forEach((item, index) => {
        let total = (item.price * item.qty).toFixed(2);
        cartTotal += parseFloat(total);
        cartItemsDiv.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>${item.qty}</td>
                <td>$${total}</td>
                <td><button class="btn btn-danger" onclick="removeFromCart(${index})">Remove</button></td>
            </tr>
        `;
    });

    document.querySelector("#cartTotal").innerText = `$${cartTotal.toFixed(2)}`;
}


function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('shoppingCart', JSON.stringify(cart)); 
    renderCart();
}


function checkout() {
    if (cart.length > 0) {
        alert(`Checkout complete! Total: $${document.querySelector("#cartTotal").innerText}`);
        cart = [];
        localStorage.removeItem('shoppingCart'); 
        renderCart();
    } else {
        alert("Cart is empty!");
    }
}


function goBackToCategories() {
    document.getElementById("backButton").style.display = "none";
    document.getElementById("span").innerText = "Categories"; 
    renderCategories(); 
}


renderCategories();
renderCart(); 