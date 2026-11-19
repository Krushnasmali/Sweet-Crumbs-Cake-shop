
window.CakeOrders={
 get(){return safeGet('cakeOrders',[])},
 place(details){let cart=CakeCart.get();if(!cart.length)throw Error('Your cart is empty.');let totals=CakeCart.totals();let order={id:'CK'+Date.now().toString().slice(-8),date:new Date().toISOString(),items:cart,details,totals,status:'Order Placed',paymentStatus:details.payment==='Cash on Delivery'?'Pay on delivery':'Demo payment selected'};let orders=this.get();orders.unshift(order);localStorage.setItem('cakeOrders',JSON.stringify(orders));CakeCart.save([]);localStorage.removeItem('cakeCoupon');return order}
};
