import { useSelector } from "react-redux";
import { memoizedCars } from "./CarList";

function CarValue() {
  const cars = useSelector(memoizedCars);

  const totalCost = cars.reduce((sum, car) => sum + car.cost, 0);

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
