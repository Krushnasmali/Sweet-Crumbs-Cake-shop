
window.CakeCustom={
 get(){return safeGet('cakeCustomRequests',[])},
 submit(data){let all=this.get();let req={...data,id:'CCR'+Date.now().toString().slice(-8),status:'Pending',createdAt:new Date().toISOString()};all.unshift(req);localStorage.setItem('cakeCustomRequests',JSON.stringify(all));return req}
};
