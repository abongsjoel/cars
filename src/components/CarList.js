import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import { createSelector } from "@reduxjs/toolkit";

export const memoizedCars = createSelector(
  [
    (rootState) => rootState.cars.data,
    (rootState) => rootState.cars.searchTerm,
  ],
  (data, searchTerm) =>
    data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

function CarList() {
  const dispatch = useDispatch();
  //   const cars = useSelector(({ cars: { data, searchTerm } }) =>
  //     data.filter((car) =>
  //       car.name.toLowerCase().includes(searchTerm.toLowerCase())
  //     )
  //   );
  const cars = useSelector(memoizedCars);
  const name = useSelector((rootState) => rootState.form.name);

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    console.log({ bold });
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          onClick={() => handleCarDelete(car)}
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {renderedCars} <hr />
    </div>
  );
}

export default CarList;
