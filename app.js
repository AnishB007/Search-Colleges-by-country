let url="http://universities.hipolabs.com/search?country=";

async function getColleges(country){
    try{
    let res=await axios.get(url+country);
    return res.data;
    }
    catch(e){
        return [];
    }
}

function show(colleges){
    console.log(colleges)
    let tab=document.querySelector("table");
    let i=1;
    for(col of colleges){
        let tr=document.createElement("tr");
        tr.innerHTML=`<td>${i}</td> <td>${col.name}</td> <td>${col.web_pages}</td>`;
        tab.appendChild(tr);
        i++;
    }
}

let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let country=document.querySelector("input").value;
    let colleges=await getColleges(country);
    show(colleges);
})