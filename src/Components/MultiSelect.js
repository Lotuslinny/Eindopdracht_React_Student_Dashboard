import React from "react";
import { MultiSelect } from 'multiselect-react-dropdown';

const MultiSelect = (props) => {
  return (
    <MultiSelect
      options={props.options} // Options to display in the dropdown
      selectedValues={props.selectedValue} // Preselected value to persist in dropdown
      onSelect={props.onSelect} // Function will trigger on select event
      onRemove={props.onRemove} // Function will trigger on remove event
      displayValue="name" // Property name to display in the dropdown options
    />

    /* onSelect(selectedList, selectedItem) {
      //...
    }
  
    onRemove(selectedList, removedItem) {
      // ... 
    }*/
  )
}
export default MultiSelect;