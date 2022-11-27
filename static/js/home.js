const userMua = document.getElementById("purchase");
const userBan = document.getElementById("sell");

userMua.addEventListener("click", function() {
    if(confirm("Bạn đồng ý với những điều khoản của chúng tôi? Trở thành người mua hàng.")){
        renderProduct();
    }
})


function renderProduct() {
    let product = document.getElementById("products");
    let product_detail = document.createElement("div");
    product_detail.classList.add("detail-product");

    const title = document.createElement("div");
    title.classList.add("title");
    
    
    
    const user = document.createElement("div");
    user.classList.add("user");
    user.innerText = "Nguyễn Văn A";
    title.appendChild(user);

    const caption = document.createElement("div")
    caption.classList.add("caption");
    caption.innerHTML = "Cần bán áo cũ giá rẻ cho ai cần";
    title.appendChild(caption);
    product_detail.appendChild(title);

    

    
    const img = document.createElement("img");
    img.src = "../static/uploads/211.jpg";
    product_detail.appendChild(img);

    const price = document.createElement("span");
    price.classList.add("price");
    price.innerText = "giá rẻ: 150.000đ";
    product_detail.appendChild(price);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.innerText = "Liên hệ qua số điện thoại: 0325625352";
    product_detail.appendChild(contact);
    product.appendChild(product_detail);
}

userBan.addEventListener("click", function() {
    if(confirm("Bạn muốn trở thành người bán? Đồng ý trở thành đối tác của chúng tôi.")){
        renderFormNguoiBan();
    }
})


function renderFormNguoiBan(){

}