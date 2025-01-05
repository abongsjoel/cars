import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((rootState) => {
    return {
      name: rootState.form.name,
      cost: rootState.form.cost,
    };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  const handleCostChange = (e) => {
    dispatch(changeCost(parseInt(e.target.value) || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
    dispatch(changeName(""));
    dispatch(changeCost(0));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
