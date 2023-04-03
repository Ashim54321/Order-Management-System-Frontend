import React from "react";

function Catagory() {
  return (
    <div>
        <div>
            <h1>Catagories</h1>
        </div>
      <Stack direction="row" spacing={2}>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Stack>
    </div>
  );
}

export default Catagory;
