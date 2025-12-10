import { useLocation } from "react-router"
function Recipeprocedure() {
    const { state } = useLocation()
    const data = state.data
    const list = data.ingredients
    const list1=data.procedure
    console.log(data)
    return (
        <div className="d-flex flex-column gap-3  align-items-center mt-3 container border border-4 border-grey rounded-3 p-3 shadow">
            <h1 className="text-center">{data.name}</h1>
            <img className="col-sm-8 col-md-5" src={data.image} />
            
            <h1>Ingredients</h1>
            <div>
                {
                    list.map(
                        (item) => (
                            <p>{item}</p>
                        )
                    )
                }
            </div>
            <h1>Procedure</h1>
            <div>
                {
                    list1.map(
                        (item) => (
                            <p>{item}</p>
                        )
                    )
                }
            </div>
            
        </div>
    )
}
export default Recipeprocedure