import React from 'react';
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Color from './Color';

test("Renders without errors with blank color passed into component", () => {
  const color = render(<Color />)
  expect(color).not.toBeNull()
});
  
test("Renders the color passed into component", () => {
  const props = {
    color: {
      id: 1,
      color: 'lilac',
      code: {
        hex: '123454',
      }
    },
    setEditColor: () => {},
    toggleEdit: () => {},
    deleteColor: () => {}
  }
  const color = render(<Color props={props} />)
  expect(color).not.toBeNull()
});

test("Executes handleDelete and toggleEdit property when the 'x' icon is clicked", () => {
});

test("Executes setEditColor and toggleEdit property when color div is clicked", () => {
    
});