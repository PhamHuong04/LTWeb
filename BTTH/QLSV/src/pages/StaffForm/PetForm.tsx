import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./PetForm.css";
import { IPet } from "../../lib/interface";
import { addPet, editPet, getPet, getPetList } from "../../service/api";
import { Checkbox } from "@mui/material";
const initalState: IPet = {
  name: "",
  species: "",
  age: 0,
  neutered: false,
  id: 0,
};

export const StaffForm = () => {
  const [state, setState] = useState(initalState);
  const { name, species, age, neutered } = state;
  const [checked, setChecked] = React.useState<boolean>(neutered);

  const { id } = useParams();
  const getOnePet = async (id: number) => {
    const response = await getPet(id);
    setState(response);
  };

  useEffect(() => {
    if (id) {
      const idInt = parseInt(id);
      getOnePet(idInt);
    }
  }, [id]);
  let navigate = useNavigate();

  const updatePet = async (data: IPet, id: any) => {
    const response = await editPet(id, data);
    if (response) {
      toast.success("Update successfully!");
      return navigate("/");
    }
  };

  const add = async (data: IPet) => {
    const response = await addPet(data);
    if (response) {
      toast.success("Add success!");
      return navigate("/");
    } else {
      toast.warn("Ten nay da ton tai");
    }
  };
  const handleSubit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!name || !species || !neutered || !age)
      toast.error("Vui long dien vao!");
    else {
      if (!id) {
        add(state);
      } else {
        updatePet(state, id);
        getPetList();
      }
    }
  };

  const handleInput = (e: { target: { name: any; value: any } }) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  
  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          marginTop: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubit}
        id="form"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          onChange={handleInput}
          value={name}
        />

        <label htmlFor="species">Species</label>
        <input
          type="text"
          id="species"
          name="species"
          placeholder="Species"
          value={species}
          onChange={handleInput}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          id="age"
          name="age"
          placeholder="Age"
          onChange={handleInput}
          value={age}
        />

        <label htmlFor="neutered">Neutered</label>
        <Checkbox
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
            setState({ ...state, neutered: !checked });
          }}
        />

        <input type="submit" value={id ? "Save" : "Add"} />
      </form>
    </div>
  );
};
