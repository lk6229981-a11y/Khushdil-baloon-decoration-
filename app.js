let cart = [];

function addItem() {
    const name = document.getElementById('itemName').value;
    const imageInput = document.getElementById('imageInput').files[0];
    if (!name || !imageInput) {
        alert("कृपया फोटो और नाम दोनों डालें।");
        return;
    }
    const reader = new FileReader();

    reader.onload = function(e) {
        const item = { name: name, image: e.target.result };
        displayItem(item);
    };

    reader.readAsDataURL(imageInput);
}

function displayItem(item) {
    const catalog = document.getElementById('catalog');
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `<img src="${item.image}" width="100">
                     <p>${item.name}</p>
                     <button onclick="addToCart('${item.name}')">कार्ट में डालें</button>`;
    catalog.appendChild(div);
}

function addToCart(itemName) {
    cart.push(itemName);
    alert(itemName + ' कार्ट में डाल दिया गया!');
}

function checkout() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    if (cart.length === 0) {
        alert("आपका कार्ट खाली है!");
        return;
    }

    if (paymentMethod === 'cod') {
        alert("ऑर्डर सफल! आपका पेमेंट कैश ऑन डिलीवरी होगा।");
    } else if (paymentMethod === 'online') {
        alert("ऑनलाइन पेमेंट गेटवे पर रीडायरेक्ट किया जा रहा है...");
    }
    cart = [];
    document.getElementById('cart').innerHTML = '';
}
