/** @format */

import React from "react";
import { useField, useFormikContext } from "formik";
import { MultiSelect } from "react-multi-select-component";
import { colors } from "../../../Constants/theme";

const MultiSelectField = ({ name, options, labelledBy, label, required }) => {
  const [field, meta] = useField(name);
  const { setFieldValue, setFieldTouched } = useFormikContext();

  // Ensure value is always an array
  const value = Array.isArray(field.value) ? field.value : [];

  const handleChange = (selectedOptions) => {
    setFieldValue(name, selectedOptions);
    setFieldTouched(name, true, true);
  };

  return (
    <div>
      {label && (
        <p
          className='text-capitalize font-medium flex items-center text-[1.12rem] max-desktop:text-[1.1rem] max-tablet:text-[1rem]'
          style={{
            padding: "4px 8px 0px 8px",
            color: colors.text.dark,
            fontWeight: 500,
            fontFamily: "roboto",
            fontStyle: "normal",
            width: "100%",
          }}
        >
          {label}
          {required ? <span className='text-red-600'>*</span> : ""}
        </p>
      )}
      <MultiSelect
        className='multi-select'
        options={options}
        value={value}
        onChange={handleChange}
        labelledBy={labelledBy}
        overrideStrings={{
          selectSomeItems: "Select some items...",
          allItemsAreSelected: "All items are selected.",
          selectAll: "Select All",
          search: "Search",
        }}
      />
      {meta.touched && meta.error ? (
        <div style={{ color: "red", marginTop: ".5rem" }}>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MultiSelectField;
