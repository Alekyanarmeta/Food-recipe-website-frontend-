function Randomslide() {
    return (

        <div className="d-flex justify-content-center align-items-center w-100" style={{ minHeight: "40vh" }}>
        <div id="recipeSlider" class="carousel slide w-75 d-flex align-items-center bg-light" data-bs-ride="carousel" style={{minHeight:"40vh"}}>
            <div class="carousel-inner  d-flex justify-content-center " style={{paddingRight:"15%"}}>

                <div class="carousel-item active ">
                    <img src="/img1.png" class="w-25" alt="slide1"/>
                    
                </div>

                <div class="carousel-item">
                    <img src="/img2.png" class=" w-25" alt="slide2"/>
                </div>

                <div class="carousel-item">
                    <img src="/img3.png" class=" w-25" alt="slide3"/>
                </div>

            </div>

            
            <button class="carousel-control-prev" type="button" data-bs-target="#recipeSlider" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#recipeSlider" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
        </div>


    )
}
export default Randomslide