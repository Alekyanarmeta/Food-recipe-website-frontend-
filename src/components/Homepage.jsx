import "./sample.css"
import Poster from "./poster"

import Recipes from "./recipes"
import Randomslide from "./randomslide"
function Home() {
    return (
        <div className="min-vh-100 d-flex flex-column justify-content-between text-white">
            <div>
                <img className="bg-primary w-100" src={"/img4.png"} style={{ height: "15px" }} />
                <Poster />
                <Recipes />
                <Randomslide/>
            </div>
            <footer className="bg-dark text-white text-center">© 2025 RecipeNest — Your Daily Source of Delicious Recipes.
            </footer>
        </div>
    )
}
export default Home