import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();

  //   const name = "";
  const name = useSelector((rootState) => rootState.form.name);
  console.log({ name });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
  };

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
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
        </div>
      </form>
    </div>
  );
}

export default CarForm;
