import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

interface Props {
  title?: string;
  items: Array<any>;
}

const ButtonFilter = ({ title, items }: Props) => {
  return (
    <>
      {title ? <h4>{title}</h4> : null}
      <ButtonGroup>
        {items.map((item, id) => (
          <Button key={id} variant="secondary">
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
};

export default ButtonFilter;
