let marks = [
  {
    "id": 2165744,
   "currDown": 13000,
    "currUpload": 2500,
    "maxDown": 25000,
    "maxUpload": 3000},
  {
    "id": 2144744,
    "currDown": 12000,
    "currUpload": 2500,
    "maxDown": 25000,
    "maxUpload":3000},

  {
    "id":2181744,
      "currDown": 14000,
      "currUpload": 2500,
      "maxDown": 27000,
      "maxUpload":3000},

  {
    "id": 2103720,
      "currDown":18000,
      "currUpload":2500,
      "maxDown": 33000,
      "maxUpload":5000},

  {
    "id": 2036766,
      "currDown": 10000,
      "currUpload": 3500,
      "maxDown": 35000,
      "maxUpload":5000},

  {
    "id": 2113743,
      "currDown": 30000,
      "currUpload": 5000,
      "maxDown": 45000,
      "maxUpload":5500},

  {
    "id": 2111156,
      "currDown": 9000,
      "currUpload": 1500,
      "maxDown": 45000,
      "maxUpload":3000},

  {
    "id": 2155343,
      "currDown": 30400,
      "currUpload": 5200,
      "maxDown": 120000,
      "maxUpload":10000},

  {
    "id": 2006003,
      "currDown": 10000,
      "currUpload": 2500,
      "maxDown": 25000,
      "maxUpload": 3000},

  {
    "id": 2137765,
      "currDown": 12000,
      "currUpload": 1040,
      "maxDown": 100000,
      "maxUpload":5000},
];
let searchValue = document.getElementById("search");
let content = document.getElementById("demo");
let btnShow = document.getElementById("btnShow");
let errorElem = document.getElementById("error");
let errorVal=document.getElementById("notExist");


document.getElementById("btnShow").addEventListener("click", function () {
  this.style.backgroundColor = "red";
  let searchValue = document.getElementById("search");

  if (searchValue.value === "") {
    errorElem.innerText = "Внесете ознака!!!";
    errorElem.style.color = "red";
  }
  else{
    for(let i=0;i<marks.length;i++){
          if(searchValue.value==marks[i].id) {
            console.log("postoi");
            errorVal.style.display='none';

            content.innerHTML = `
<div class='values'>
<div id='maxCust'>
	<p id='maxDown'>	Customer MAX Dn:${marks[i].maxDown}</p>
	<p id=maxUp>	Customer MAX Up:${marks[i].maxUpload}</p>
		
</div>
<div id='currCust'>
		<p id='currDown'>	Customer Current Dn:${marks[i].currDown}</p>
		<p id=currUp>	Customer Current Up:${marks[i].currUpload}</p>
</div>
	</div>

`;
          }
          else if
            (searchValue.value!=marks[i].id){
            errorVal.innerText=("Корисникот со таа ознака не постои во базата,внесете постоечка ознака за корисник!!!");
            errorElem.style.display='none';
            errorVal.style.color='red';
            errorVal.style.fontWeight='bold';


          }


    }



  }
});
