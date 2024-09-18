/** @format */

import React, { useRef, useState } from "react";
import { InputBase } from "@mui/material";
import { colors } from "../../../Constants/theme";
import { RxCross2 } from "react-icons/rx";
import { useField, ErrorMessage } from "formik";
import { PiUploadSimpleBold } from "react-icons/pi";

const UploadField = ({
  multiple = false,
  label = "",
  name,
  placeholder = "Select a file",
  required,
  ...otherProps
}) => {
  const ref = useRef(null);
  const [field, meta, handlers] = useField(name);
  const [fileName, setFileName] = useState(""); // State to store file name

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      const selectedFileNames = multiple
        ? Array.from(files)
            .map((file) => file.name)
            .join(", ")
        : files[0].name;

      setFileName(selectedFileNames); // Set the file name(s) in the state
      handlers.setValue(files); // Update the field value in Formik
      handlers.setTouched(true);
    }
  };

  const handleClearFile = (e) => {
    e.preventDefault();
    handlers.setValue(null); // Clear the file in Formik
    setFileName(""); // Clear the file name
    ref.current.value = ""; // Reset the file input
  };

  const styles = {
    inputBase: {
      borderRadius: "10px",
      border: `2px solid ${colors.primary.main}`,
      padding: "0 16px",
      backgroundColor: colors.secondary.light,
      fontSize: "1rem",
      height: "44px",
      transition: "border-color 0.2s, background-color 0.2s, box-shadow 0.2s",
      fontFamily: "roboto",
      "&:focus": {
        boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.20)`,
        borderColor: colors.primary.main,
      },
    },
    fileInput: {
      display: "none",
    },
    labelContainer: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    imageIcon: {
      width: "64px",
      height: "64px",
      marginLeft: "8px",
    },
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

      <div className='flex justify-between w-full hover:shadow-lg active:shadow-xl bg-[#F0F9FF] border-2 border-blue-950 rounded-[10px] desktop:h-[51px] max-tablet:h-[48px]'>
        <InputBase
          value={fileName || placeholder} // Display the file name or placeholder
          sx={styles.inputBase}
          inputProps={{
            readOnly: true, // Prevent typing in the field
          }}
          disabled
        />
        <div>
          <input
            type='file'
            multiple={multiple}
            ref={ref}
            style={styles.fileInput}
            id={`file-input-${name}`} // Unique ID for each input
            onChange={handleFileChange}
          />
          <label
            htmlFor={`file-input-${name}`} // Matching ID for the corresponding input
            className='flex justify-center gap-2 items-center'
            style={styles.labelContainer}
          >
            {fileName ||
              (placeholder != "Select a file" && (
                <RxCross2
                  size={25}
                  color='gray'
                  onClick={handleClearFile} // Clear the file and input
                  style={{ cursor: "pointer" }}
                />
              ))}
            <div className='bg-[#082F49] w-[51px] h-[48px] max-tablet:size-[45px] rounded-r-[8px] flex items-center justify-center'>
              <PiUploadSimpleBold
                color={`${colors.text.main}`}
                className='!h-7 !w-7'
                style={styles.imageIcon}
                onClick={() => ref?.current?.click()} // Trigger file selection
              />
            </div>
          </label>
        </div>
      </div>
      <ErrorMessage
        name={name}
        render={(msg) => (
          <div
            style={{
              fontFamily: "roboto",
              color: "red",
              fontSize: "1rem",
              paddingLeft: "5px",
            }}
          >
            {msg}
          </div>
        )}
      />
    </div>
  );
};

export default UploadField;
