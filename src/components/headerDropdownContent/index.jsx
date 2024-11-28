/* eslint-disable react/prop-types */
// DropdownContent.jsx
import { DropdownBlockchain } from "./DropdownBlockchain";
import { DropdownServices } from "./DropdownServices";


const DropdownContent = ({ dropdownType }) => {
  if (dropdownType === "services") {
    return <DropdownServices />;
  }
  if (dropdownType === "blockchain") {
    return <DropdownBlockchain />;
  }
  return null;
};

export default DropdownContent;
