const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".image");
const categoryName = document.querySelector(".details .title p");



window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");
            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image)=>{
                let filterImages = image.getAttribute("data-name");

                if( (filterImages == filterName) || filterName == "all"   ){
                    image.classList.remove("hide");
                    image.classList.add("show");
                }else{
                    image.classList.add("hide");
                    image.classList.remove("show");
                }

            } ); 
        }
        
    }
    //add onclick attribute to all images
    for (let index =0; index < filterImg.length; index++){
        filterImg[index].setAttribute("onclick", "preview(this)");
    }




}
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

function preview(element){
    document.querySelector("body").style.overflow = "hidden";
    let selectedPrevImg = element.querySelector("img").src;

    let selectedImgCategory = element.getAttribute("data-name");
    categoryName.textContent = selectedImgCategory;
    previewImg.src = selectedPrevImg;
    previewBox.classList.add("show");
    shadow.classList.add("show");
    closeIcon.onclick = ()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow = "scroll";
    }
}