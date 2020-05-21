import React from "react";
import {
  MdClose,
  MdEdit,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

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

export const Edit = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdEdit size={size} title={title} />
  </Button>
);
export const Remove = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdRemoveCircleOutline size={size} title={title} />
  </Button>
);
export const Add = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdAddCircleOutline size={size} title={title} />
  </Button>
);
export const Close = ({ size, title = "", ...props }) => (
  <Button {...props}>
    <MdClose size={size} title={title} />
  </Button>
);
