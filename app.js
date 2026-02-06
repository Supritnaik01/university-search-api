
let country=document.querySelector('#country');
let state=document.querySelector('#state');
let clgName=document.querySelector('#clgName');
let h2=document.querySelector('h2');
 let url='http://universities.hipolabs.com/search?country=';  
country.addEventListener('change',async ()=>{
        state.value='';
         let infoArr=await getInfo(url, country.value);
            display(infoArr);
          state.addEventListener('change',()=>{
             let  stateData=infoArr.filter( u =>
                         u["state-province"] &&
                         u["state-province"].toLowerCase() === state.value);
                      display(stateData);
                });
     });
async function getInfo(){
    try{
        let res= await axios.get(url+country.value)
        return res.data;
        
    // console.log(res);
    }catch(err){
        console.log(err);
    }
    
}
let list=document.querySelector('#list');
function display(infoArr){
    h2.innerText='University Search';
    list.innerText='';
    for(arr of infoArr){
       let li= document.createElement('li');
       li.innerText=arr.name;
        list.appendChild(li);
    }
}