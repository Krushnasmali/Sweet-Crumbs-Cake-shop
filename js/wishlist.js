
window.CakeWishlist={
 get(){return safeGet('cakeWishlist',[])},
 toggle(id){let a=this.get();a=a.includes(id)?a.filter(x=>x!==id):[...a,id];localStorage.setItem('cakeWishlist',JSON.stringify(a));updateHeaderCounts();toast(a.includes(id)?'Added to wishlist.':'Removed from wishlist.')},
 remove(id){localStorage.setItem('cakeWishlist',JSON.stringify(this.get().filter(x=>x!==id)));updateHeaderCounts()},
 has(id){return this.get().includes(id)}
};
