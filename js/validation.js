
window.CakeValidation={
 email:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v||''),
 mobile:v=>/^[6-9]\d{9}$/.test((v||'').replace(/\s/g,'')),
 pincode:v=>/^\d{6}$/.test(v||''),
 required:v=>String(v??'').trim().length>0,
 password:v=>(v||'').length>=8,
 futureDate:v=>!!v&&new Date(v+'T00:00:00')>=new Date(new Date().toDateString())
};
window.validateForm=function(form){let valid=true;form.querySelectorAll('[required]').forEach(el=>{let msg='';if(!el.value.trim())msg='This field is required.';else if(el.type==='email'&&!CakeValidation.email(el.value))msg='Enter a valid email.';else if(el.name==='mobile'&&!CakeValidation.mobile(el.value))msg='Enter a valid 10-digit mobile number.';else if(el.name==='pincode'&&!CakeValidation.pincode(el.value))msg='Enter a valid 6-digit pincode.';let error=el.parentElement.querySelector('.error');if(!error){error=document.createElement('small');error.className='error';el.parentElement.append(error)}error.textContent=msg;if(msg)valid=false});return valid};
