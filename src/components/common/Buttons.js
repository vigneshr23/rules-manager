import React from "react";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { MdClose, MdEdit, MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

// export const Add = ({ onClick, size = "inherit", ...props }) => {
//   return (
//     <div className="btn" onClick={onClick}>
//       <IoIosAddCircleOutline size={size} />
//     </div>
//   );
// };

// export const Remove = ({ onClick, size = "inherit", ...props }) => {
//   return (
//     <div className="btn" onClick={onClick}>
//       <IoIosRemoveCircleOutline size={size} />
//     </div>
//   );
// };

// export const Edit = ({ onClick, size = "inherit", ...props }) => {
//   return (
//     <div className="btn" onClick={onClick}>
//       <TiEdit size={size} />
//     </div>
//   );
// };

const Button = ({ onClick, ...props }) => {
  return (
    <div className="btn" onClick={onClick}>
      {props.children}
    </div>
  );
};

export const Edit = ({ size, ...props }) => (
  <Button {...props}>
    <MdEdit size={size} />
  </Button>
);
export const Remove = ({ size, ...props }) => (
  <Button {...props}>
    <MdRemoveCircleOutline size={size} />
  </Button>
);
export const Add = ({ size, ...props }) => (
  <Button {...props}>
    <MdAddCircleOutline size={size} />
  </Button>
);
export const Close = ({ size, ...props }) => (
  <Button {...props}>
    <MdClose size={size} />
  </Button>
);
