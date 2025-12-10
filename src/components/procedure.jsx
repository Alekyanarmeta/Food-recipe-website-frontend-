import { useLocation } from "react-router-dom";
import allList from "../alllist.json";
import Container from "./containerbox";

function Procedure() {
    const { state } = useLocation();
    const name = state.data.item;

    const list = allList.categorylist[name]; // get category list

    return (
        <div className="" >
            <marquee className="bg-success fs-3 fw-lighter fst-italic text-white">
                {name}
            </marquee>
            <div className=" ">
                <div className="d-flex flex-wrap gap-3 justify-content-center pt-4">
                    {list?.map((item, index) => (
                        <Container key={index} data={item} />
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Procedure;
