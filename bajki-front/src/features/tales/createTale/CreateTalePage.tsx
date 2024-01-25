import { useState } from "react";
import TaleModel from "../../../models/TaleModel";
import { useDispatch, useSelector } from "react-redux";
import { TaleThunk } from "./taleThunk";
import { AppDispatch, RootState } from "../../store";

const CreateTalePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [age, setAge] = useState(0);
  const [child_name, setChildName] = useState("");
  const [topic, setTopic] = useState("dinosaurs");
  const taleContent = useSelector((state: RootState) => state.createTale.data.content)

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    const taleReq: TaleModel = { age, child_name, topic };
    dispatch(TaleThunk.createTale(taleReq));
    setAge(0);
    setChildName("");
    setTopic("");
  };
  return (
    <div>
      <h3>Wygeneruj bajkę</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Wiek</span>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            required
          />
        </label>
        <label>
          <span>Imię</span>
          <input
            type="text"
            value={child_name}
            onChange={(e) => setChildName(e.target.value)}
            required
          />
        </label>
        <label>
          <span>Temat</span>
          <select
            name="topics"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            <option value="dinosaurs">Dinozaury</option>
            <option value="space">Kosmos</option>
            <option value="pokemon">Pokemon</option>
          </select>
        </label>
        <button type="submit">Wygeneruj</button>
      </form>
      {taleContent && taleContent}
    </div>
  );
};

export default CreateTalePage;
