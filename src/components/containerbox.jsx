import { useNavigate } from "react-router"
function Container({data})
{
    const navigate=useNavigate()
    
    return(
        <div className="text-center ">
            <img className="u shadow rounded-5" src={data.image} onClick={()=>navigate("/Recipeprocedure",{
                state:{data}
            })} />
            <p>{data.name}</p>
        </div>
    )
}
export default Container