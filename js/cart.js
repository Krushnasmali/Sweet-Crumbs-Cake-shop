
window.CakeCart={
 get(){return safeGet('cakeCart',[])},
 save(items){localStorage.setItem('cakeCart',JSON.stringify(items));updateHeaderCounts()},
 add(product,options={}){let cart=this.get();let size=options.size||'1';let price=product.sizes?.[size]||product.price;let key=product.id+'-'+size+'-'+(options.eggless?'eggless':'egg');let found=cart.find(x=>x.key===key);if(found)found.quantity+=options.quantity||1;else cart.push({key,id:product.id,name:product.name,image:product.image,size,price,quantity:options.quantity||1,eggless:!!options.eggless,deliveryDate:options.deliveryDate||'',message:options.message||''});this.save(cart);toast(product.name+' added to cart.')},
 update(key,delta){let c=this.get().map(x=>x.key===key?{...x,quantity:Math.max(1,x.quantity+delta)}:x);this.save(c)},
 remove(key){this.save(this.get().filter(x=>x.key!==key));toast('Item removed from cart.')},
 totals(){let subtotal=this.get().reduce((s,x)=>s+x.price*x.quantity,0);let coupon=safeGet('cakeCoupon',null);let discount=coupon?Math.round(subtotal*coupon.rate):0;return{subtotal,delivery:subtotal>=1000||subtotal===0?0:70,discount,total:subtotal+(subtotal>=1000||subtotal===0?0:70)-discount}}
};
