menuListArray=["Pizza Vegetariana",'de frango',"de portuguesa","de quatro queijos", "de calabresa", "de extravaganza"
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
}
document.getElementById("displayMenu"). innerHTML = htmldata;

}


    function addItem() {
        var htmldata;
        var imgtags='<img id="img1" src="images/pizzaImg.png"/>'
       
        
        menuListArray . sort();
        htmldata=""
        for (var i=0; i<menuListArray . length; i++) {
        htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
        }
        document. getElementById("displayAddedMenu") . innerHTML = htmldata;
}

function  addTop(){
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();
}