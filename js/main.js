const prices = {"Indoor Plants":150,"Succulents":80,"Herbs":45,"Outdoor Plants":120,"Vegetable Seedlings":60,"Gardening Tools":200};

function updateCost(){
  const sel=document.getElementById('eProduct');
  const box=document.getElementById('costDisplay') || document.getElementById('enquiryResponse');
  if(!sel || !box) return;
  const qEl=document.querySelector('input[name="eQuantity"]:checked');
  let q=qEl?parseInt(qEl.value):1;
  let p=sel.value;
  if(p && prices[p]){
    box.innerHTML="Product: "+p+"<br>Quantity: "+q+"<br>Total Cost: R"+(prices[p]*q);
    box.style.display="block";
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  const sel=document.getElementById('eProduct');
  if(sel){
    sel.addEventListener('change',updateCost);
    const prod=new URLSearchParams(window.location.search).get('product');
    if(prod){
      let d=decodeURIComponent(prod);
      for(let o of sel.options){ if(o.value.toLowerCase()==d.toLowerCase()){ o.selected=true; break; } }
    }
  }
  document.querySelectorAll('input[name="eQuantity"]').forEach(r=>{
    r.addEventListener('change',updateCost);
    r.addEventListener('click',updateCost);
  });
  updateCost();
});