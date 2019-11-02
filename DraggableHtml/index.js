const imgBox=document.querySelector(".imgBox");
const whiteBoxes=document.getElementsByClassName("whiteBox");
imgBox.addEventListener("dragstart",(e)=>{
    console.log("drag start");
    e.target.className +=" hold"
    setTimeout(()=>{
        e.target.className="hide";
    },0);
    
})
imgBox.addEventListener("dragend",(e)=>{
    console.log("drag end");
    e.target.className="imgBox"

})
i=1;
for(whiteBox of whiteBoxes){
    whiteBox.addEventListener("dragover",(e)=>{
        console.log("dragover trigger")
        e.preventDefault();
    });
    whiteBox.addEventListener("dragenter",(e)=>{
        console.log("drag Enter")
        e.target.className +=" dashed";
    });
    whiteBox.addEventListener("dragleave",(e)=>{
        console.log("drag Leave"+i);
        e.target.className="whiteBox";
        
    })
    whiteBox.addEventListener("drop",(e)=>{
        console.log("drop");
        e.target.append(imgBox);
    })
}