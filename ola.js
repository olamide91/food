let carts = document.querySelectorAll('.add-cart');

for (let i = 0; i < carts.length; i++){
      carts[i].addEventListener('click', function(){
            alert('added to cart');
      })

}