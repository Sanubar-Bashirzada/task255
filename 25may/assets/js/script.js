const loadBtn=document.getElementById("loadBtn");
const featcards=document.getElementById("featcards");
// let page=1;
// loadBtn.addEventListener("click",function(){
//     fetch( `http://localhost:3000/comments_page=${page}&_limit=3`)

//     page++;
//  })
    
   


fetch("https://restcountries.com/v3.1/all")
.then((resp)=> resp.json())
.then((data)=>{
    for (let i = 0; i < 3; i++) {
        let card11=document.createElement("div");
        //  let img =  document.createElement('img');
        // img.src="https://flagcdn.com/w320/ch.png";
        let featDivs=document.createElement("p");
        let house=document.createElement("p");
        let donec=document.createElement("p");
        let bedroom1=document.createElement("p");
        let bedroom2=document.createElement("p");
        let bedroom3=document.createElement("p");
        let patio1=document.createElement("p");
        let patio2=document.createElement("p");
        let hottup1=document.createElement("p");
        let hottup2=document.createElement("p");
        let hottup3=document.createElement("p");
        let hardWood1=document.createElement("p");
        let hardWood2=document.createElement("p");

        let iconFlx=document.createElement("div");
        let patio=document.createElement("div");
        let hottup=document.createElement("div");
        let hardWood=document.createElement("div");
        let cardwrite=document.createElement('div')

       


        card11.style.cssText=`
        width: 300px;
        height: 650px;
        background-position: top;
        background-repeat: no-repeat;
     background-size: contain;
     display: flex;
     flex-direction: column;
     border: 1px solid black;
     position: relative;
     background-color: #edeff4;
        `;

      
        featDivs.classList.add(`featDiv1`);
        house.classList.add(`house`);
        donec.classList.add(`donec`);
        hottup1.classList.add(`hotDiv`);
        hottup2.classList.add(`swimDiv`);
        hottup3.classList.add(`hotDiv`);
        hardWood1.classList.add(`hotDiv`);
        hardWood2.classList.add(`swimDiv`);
        iconFlx.classList.add(`bedrooms`);
        patio.classList.add(`patio`);
        hottup.classList.add(`hottup`);
        hardWood.classList.add(`hardWood`);
     



        console.log(data[0])
        featDivs.innerText=data[i].capital;
        house.innerText=data[i].capital;
        donec.innerText=data[i].capital;
        bedroom1.innerText=data[i].capital;
        bedroom2.innerText=data[i].name.common;
        bedroom3.innerText=data[i].capital;
        patio1.innerText=data[i].name.common;
        patio2.innerText=data[i].capital;
        hottup1.innerText=data[i].name.common;
        hottup2.innerText=data[i].capital;
        hottup3.innerText=data[i].name.common;
        hardWood1.innerText=data[i].capital;
        hardWood2.innerText=data[i].capital;
        
        
        card11.appendChild(featDivs);
        card11.appendChild(house);
        card11.appendChild(donec);
        iconFlx.appendChild(bedroom1);
        iconFlx.appendChild(bedroom2);
        iconFlx.appendChild(bedroom3);
        card11.appendChild(iconFlx);
        patio.appendChild(patio1);
        patio.appendChild(patio2);
        card11.appendChild(patio);
        hottup.appendChild(hottup1);
        hottup.appendChild(hottup2);
        hottup.appendChild(hottup3);
        card11.appendChild(hottup);
        hardWood.appendChild(hardWood1);
        hardWood.appendChild(hardWood2);
        card11.appendChild(hardWood);
        cardwrite.appendChild(iconFlx);
        cardwrite.appendChild(patio);
        cardwrite.appendChild(hottup);
        cardwrite.appendChild(hardWood);
        card11.appendChild(cardwrite);
        cardwrite.appendChild(house);
        cardwrite.appendChild(donec);

       
     
        featcards.appendChild(card11);



        

       
        
    }
} )