var LOCAL_STORAGE_WISHLIST_KEY="shopify-wishlist",LOCAL_STORAGE_DELIMITER=",",BUTTON_ACTIVE_CLASS="active",selectors={button:"[button-wishlist]",grid:"[grid-wishlist]"};document.addEventListener("DOMContentLoaded",function(){var buttons=document.querySelectorAll(selectors.button)||[];buttons.length&&setupButtons(buttons);var grid=document.querySelector(selectors.grid)||!1;grid&&setupGrid(grid)});var setupGrid=function(grid){var wishlist=getWishlist(),wihslitExistBtn=document.querySelector(".wishlist-page");wishlist.length>0&&(wihslitExistBtn.classList="wishlist_exists");var requests=wishlist.map(function(handle){var productTileTemplateUrl="/products/"+handle+"?view=card";return fetch(productTileTemplateUrl).then(function(res){return res.text()})});Promise.all(requests).then(function(responses){var wishlistProductCards=responses.join("");grid.innerHTML=wishlistProductCards;var buttons=grid.querySelectorAll(selectors.button)||[];buttons.length&&setupButtons(buttons)})},setupButtons=function(buttons){buttons.forEach(function(button){var productHandle=button.dataset.productHandle||!1;if(!productHandle)return console.error("[Wishlist] Missing `data-product-handle` attribute. Failed to update the wishlist.");wishlistContains(productHandle)&&button.classList.add(BUTTON_ACTIVE_CLASS),button.addEventListener("click",function(){updateWishlist(productHandle),button.classList.toggle(BUTTON_ACTIVE_CLASS)})})},getWishlist=function(){var wishlist=localStorage.getItem(LOCAL_STORAGE_WISHLIST_KEY)||!1;return wishlist?wishlist.split(LOCAL_STORAGE_DELIMITER):[]},setWishlist=function(array){var wishlist=array.join(LOCAL_STORAGE_DELIMITER);return array.length?localStorage.setItem(LOCAL_STORAGE_WISHLIST_KEY,wishlist):localStorage.removeItem(LOCAL_STORAGE_WISHLIST_KEY),wishlist},updateWishlist=function(handle){var wishlist=getWishlist(),indexInWishlist=wishlist.indexOf(handle);return indexInWishlist===-1?wishlist.push(handle):wishlist.splice(indexInWishlist,1),setWishlist(wishlist)},wishlistContains=function(handle){var wishlist=getWishlist();return wishlist.indexOf(handle)!==-1},resetWishlist=function(){return setWishlist([])};$(".action-wishlist").on("click",function(){$(this).addClass("loading-wishlist adding-wishlist"),setTimeout(function(){$(".action-wishlist").removeClass("loading-wishlist")},1e3),setTimeout(function(){$(".adding-wishlist").removeClass("adding-wishlist")},2e3)});
//# sourceMappingURL=/cdn/shop/t/10/assets/wishlist.js.map?v=164725692185917909391690129555
