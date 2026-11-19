
window.CakeAuth={
 users(){return safeGet('cakeUsers',[])},
 current(){return safeGet('cakeCurrentUser',null)},
 register(user){let users=this.users();if(users.some(x=>x.email.toLowerCase()===user.email.toLowerCase()))throw Error('An account with this email already exists.');users.push(user);localStorage.setItem('cakeUsers',JSON.stringify(users))},
 login(email,password){let u=this.users().find(x=>x.email.toLowerCase()===email.toLowerCase()&&x.password===password);if(!u)throw Error('Email or password is incorrect.');localStorage.setItem('cakeCurrentUser',JSON.stringify({name:u.name,email:u.email,mobile:u.mobile}));return u},
 logout(){localStorage.removeItem('cakeCurrentUser');location.href='index.html'}
};
