import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store"

function CarList() {
    const cars = useSelector(state => state.cars.data) 
    const dispatch = useDispatch()
    
    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id))
    }
    
    const renderedCars = cars.map(car => {
        return(
            <div className="panel" key={car.id}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button onClick={() => {handleCarDelete(car)}} className="button is-danger">Delete</button>
            </div>
        )
    })

    return <div className="car-list">
        {renderedCars}
        <hr />
    </div>
}

export default CarList