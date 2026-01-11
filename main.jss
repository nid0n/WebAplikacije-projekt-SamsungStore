
const devices = [
    {
        id: 1,
        name: "Galaxy S25",
        category: "S-Serija",
        price: 920,
        specs: "200MP | Titanium | 512GB",
        img: "https://www.bigbang.hr/upload/catalog/product/2090572/thumb/mobiteli-samsung-galaxy-s25-256gb-62-7dab47f4_6924268aea19f_640x640r.webp"
    },
    {
        id: 2,
        name: "Galaxy S25+",
        category: "S-Serija",
        price: 1299,
        specs: "7.6\" Glavni zaslon | 12GB RAM",
        img: "https://www.bigbang.hr/upload/catalog/product/2524395/thumb/onlineexclusive-sm-s936-galaxys25plus-front-bluebl_69241172c11d1_640x640r.webp"
    },
     {
        id: 3,
        name: "Galaxy S25 Ultra",
        category: "S-Serija",
        price: 1629,
        specs: "Elegantan dizajn",
        img: "https://www.bigbang.hr/upload/catalog/product/2090569/thumb/0063323-smartphone-samsung-galaxy-s25-ultra-68-12g_692429d2eb72b_640x640r.webp"
    },
    {
        id: 4,
        name: "Galaxy Z Flip 7",
        category: "Z-Serija",
        price: 1199,
        specs: "Kompaktan dizajn za svakodnevnu upotrebu",
        img: "https://www.bigbang.hr/upload/catalog/product/2524389/thumb/asdsfedrgtfhzujikol_686f5eda6db6f_640x640r.webp"
    },
    {
        id: 5,
        name: "Galaxy Watch 8",
        category: "Satovi",
        price: 409,
        specs: "44mm, Bluetooth povezivot ili LTE",
        img: "https://www.bigbang.hr/upload/catalog/product/2524145/thumb/sm-l335-002-front2-silver-thumb_68ba7bea02fe2_640x640r.webp"
    },
    {
        id: 6,
        name: "Galaxy Tab S10+",
        category: "Tableti",
        price: 1149,
        specs: "12.4\" AMOLED zaslon | S Pen",
        img: "https://www.bigbang.hr/upload/catalog/product/1930648/thumb/galaxy-tab-s10-plus-moonstone-blue-product-image-c_69415b1a89fb1_640x640r.webp"
    },
    {
        id: 7,
        name: "Galaxy Buds 3 Pro",
        category: "Slušalice",
        price: 249,
        specs: "Active Noise Cancelling | Hi-Fi zvuk",
        img: "https://www.bigbang.hr/upload/catalog/product/1734004/thumb/hr-galaxy-buds3-pro-r630-sm-r630nzaaeuc-542294322_693149d2eb7f8_640x640r.webp"
    },
    {
        id: 8,
        name: "Smart Tag 2",
        category: "Dodatci",
        price: 39,
        specs: "Jednostavna upotreba, lagan pronalazak",
        img: "https://www.bigbang.hr/upload/catalog/product/1309284/thumb/111367_6851a789bfef9_640x640r.webp"
    },
    {
        id: 9,
        name: "45W Brzi punjač",
        category: "Dodatci",
        price: 49,
        specs: "Super brzo punjenje 2.0",
        img: "https://www.bigbang.hr/upload/catalog/product/2069579/thumb/8806097039709_68521bb914084_640x640r.webp"
    },
    {
        id: 10,
        name: "Zaštitna maska za Galaxy A36",
        category: "Dodatci",
        price: 27,
        specs: "Rugged maskica",
        img: "https://www.bigbang.hr/upload/catalog/product/2202790/thumb/8806097099604_684f4f4cc04d2_640x640r.webp"
    },
    {
        id: 11,
        name: "Dodatni remen za Galaxy Watch Ultra ",
        category: "Dodatci",
        price: 79.99,
        specs: "Dodatni Marine remen za Galaxy Watch Ultra plavi",
        img: "https://www.bigbang.hr/upload/catalog/product/2524678/thumb/8806097626855-2_687105327af5a_640x640r.webp"
    },
    {
        id: 12,
        name: "Bežični punjač 3 u 1",
        category: "Dodatci",
        price: 129.90,
        specs: "Bežični punjač za mobitel, sat i slušalice",
        img: "https://www.bigbang.hr/upload/catalog/product/2350535/thumb/60d51d2212e51fcb13ad2cfa871ad05e034ff8da_6854ccb13a4a4_640x640r.webp"
    },
];


function renderDevices(filterList = devices) {
    const container = document.getElementById('device-list');
    if (!container) return;

    container.innerHTML = '';
    const firstRow = filterList.slice(0, 5);
    const secondRow = filterList.slice(5);

    filterList.forEach(device => {
        container.innerHTML += `
            <div class="car-card" data-aos="fade-up">
                <div class="car-img-container">
                    <a href="${device.img}" target="_blank">
                        <img src="${device.img}" alt="${device.name}" style="width:100%; height:250px; object-fit:contain; background:#f4f4f4;">
                    </a>
                </div>
                <div class="car-info">
                    <span class="brand-tag">${device.category}</span>
                    <h3>${device.name}</h3>
                    <p class="specs">${device.specs}</p>
                    <div class="price-row">
                        <span class="price">${device.price} €</span>
                        <button class="btn-buy" onclick="addToCart(${device.id})">Dodaj u košaricu</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterDevices() {
    const cat = document.getElementById('sCategory').value;
    const price = document.getElementById('sPrice').value;

    const filtered = devices.filter(d => {
        return (cat === 'all' || d.category === cat) &&
               (!price || d.price <= price);
    });

    renderDevices(filtered);
}

function filterByCategory(cat) {
    const filtered = devices.filter(d => d.category === cat);
    renderDevices(filtered);
    document.getElementById('inventory').scrollIntoView({behavior: 'smooth'});
}


function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const device = devices.find(d => d.id === id);
    if (!device) return;

    cart.push(device);
    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    alert(`${device.name} je dodan u košaricu!`);
}
function checkout() {
    const modal = document.getElementById("checkout-modal");
    modal.style.display = "flex";
}
function closeModalAndClear() {
    document.getElementById("checkout-modal").style.display = "none";
    localStorage.removeItem("cart");
    const cartCount = document.getElementById("cart-count");
    if (cartCount) cartCount.textContent = "0";
    window.location.href = "index.html";
}
function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const index = cart.findIndex(item => item.id === id);
    if (index !== -1) {
        const removed = cart.splice(index, 1)[0];
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${removed.name} je uklonjen iz košarice.`);
    }
    loadCart();
    updateCartCount();
}
function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("garage-list");

    if (!container) return;

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = "<p>Košarica je prazna.</p>";
        const totalContainer = document.getElementById("total-value-container");
        if (totalContainer) totalContainer.style.display = "none";
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price;

        container.innerHTML += `
            <div class="car-card" data-id="${item.id}">
                <img src="${item.img}" style="width:100%; border-radius:15px;">
                <div class="car-info">
                    <h3>${item.name}</h3>
                    <p>${item.price} €</p>
                    <button class="btn-remove" onclick="removeFromCart(${item.id})" style="margin-top:15px; padding:12px 20px; font-size:0.9rem; cursor:pointer;">Ukloni</button>
                </div>
            </div>
        `;
    });

    const totalPriceEl = document.getElementById("total-price");
    if (totalPriceEl) totalPriceEl.innerText = total + " €";
    const totalContainer = document.getElementById("total-value-container");
    if (totalContainer) totalContainer.style.display = "block";
}


function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const counter = document.getElementById("cart-count");
    if (counter) counter.innerText = cart.length;
}

document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
    renderDevices();
    updateCartCount();
    loadCart();
});
