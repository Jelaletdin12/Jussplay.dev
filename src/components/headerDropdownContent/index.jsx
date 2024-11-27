/* eslint-disable react/prop-types */
// DropdownContent.jsx
import { DropdownBlockchain } from "./DropdownBlockchain";
import { DropdownServices } from "./DropdownServices";
import { DropdownSolutions } from "./DropdownSolutions";

const DropdownContent = ({ dropdownType }) => {
  if (dropdownType === "services") {
    return <DropdownServices />;
  }
  if (dropdownType === "blockchain") {
    return <DropdownBlockchain />;
  }
  if (dropdownType === "solutions") {
    return <DropdownSolutions />;
  }
  return null;
};

export default DropdownContent;
