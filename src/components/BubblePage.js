import React, { useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import { editColorService, deleteColorService } from '../services/colorServices';
import { fetchColorService, editColorService, deleteColorService }from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    fetchColorService(setColors, setError);
  }, [])

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => editColorService(editColor, colors, setColors, setError)

  const deleteColor = (colorToDelete) => deleteColorService(colorToDelete, colors, setColors, setError)

  if(error) return null;

  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
      <Bubbles colors={colors}/>
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
