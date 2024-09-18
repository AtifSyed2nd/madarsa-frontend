/** @format */

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useField, useFormikContext } from "formik";
import styled from "styled-components";
import { colors } from "../../../Constants/theme";

const EditorWrapper = styled.div`
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
`;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: ["small", false, "large", "huge"] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    [{ color: [] }, { background: [] }], // Color and background color options
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "color", // Add color to formats
  "background", // Add background color to formats
];

const TextEditor = ({ name, required, label }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <>
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
      <EditorWrapper>
        <ReactQuill
          value={field.value}
          onChange={handleChange}
          className='custom-quill'
          onBlur={() => setFieldValue(name, field.value)}
          modules={modules}
          formats={formats}
        />
        {meta.touched && meta.error ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
      </EditorWrapper>
    </>
  );
};

export default TextEditor;
