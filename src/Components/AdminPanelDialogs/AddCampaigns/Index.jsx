/** @format */

import React, { useContext, useState } from "react";
import PrimaryButton from "../../Inputs/PrimaryButton";
import InputField from "../../Inputs/InputField";
import { Form, Formik } from "formik";
import { Dialog } from "../../Layout/dialogBox/dialog";
import { Categories } from "@carbon/icons-react";
import SelectField from "../../Inputs/SelectField/Index";
import { useCreateOrUpdate } from "../../../Hooks/useCreateOrUpdate";
import { colors } from "../../../Constants/theme";
import SecondaryButton from "../../Inputs/secondaryButton";
import * as yup from "yup";
import { CampaignSharp } from "@mui/icons-material";
import { Box, Grid, useMediaQuery } from "@mui/material";
import DropZone from "../../Inputs/ImageCropper/CropDrop";
import { ImageCropper } from "../../Inputs/ImageCropper/ImageCropper";
import { ImagePreviewDialog } from "../../Inputs/ImageCropper/ImagePreview";
import TextEditor from "../../Inputs/TextEditor/Index";
import { useGetAll } from "../../../Hooks/useGetAll";
import AuthContext from "../../../context/authContext/AuthContext";
import moment from "moment/moment";
import { useAlert } from "../../Layout/Alerts/Index";
import MultiSelectField from "../../Inputs/MultipleSelectField/index";

function AdminPanelDialog({ onSuccess }) {
  const phone = useMediaQuery("(max-width:751px)");

  const [openCrop, setOpenCrop] = useState(false);
  const [srcImg, setSrcImg] = useState("");
  const { user } = useContext(AuthContext);
  const user_id = user.user_id;

  const onChange = (e) => {
    let files;

    if (e) {
      files = e;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setSrcImg(reader.result);
    };
    reader.readAsDataURL(files[0]);

    setOpenCrop(true);
  };

  const { data: CampaignCategory } = useGetAll({
    key: `campaign/categories/nt/`,
    select: (data) => data?.data?.row,
    onSuccess: (data) => {
      console.log(data, "<----------category");
    },
  });

  const { mutate } = useCreateOrUpdate({
    url: "/campaign/nt/",
    method: "post",
  });
  const addAlert = useAlert();

  return (
    <div>
      <Dialog
        title={"Add Campaign"}
        onClose={() => {
          setSrcImg("");
        }}
        button={
          <PrimaryButton
            sx={{
              height: "45px",
              fontSize: "1rem",
              borderRadius: "8px",
              fontWeight: 500,
              color: colors.text.main,
            }}
          >
            Add Campaign
            <CampaignSharp size={20} className='ms-1 text-white' />
          </PrimaryButton>
        }
      >
        {({ onClose }) => (
          <Formik
            initialValues={{
              campaign_name: "",
              target_amount: "",
              categories: "",
              tags: [],
              target_date: "",
              image: null,
              campaign_status: "",
              campaign_description: "",
            }}
            validationSchema={yup.object().shape({
              campaign_name: yup.string().required("Campaign name is required"),
              target_amount: yup.number().required("Target amount is required"),
              categories: yup.object().required("Category is required"),
              campaign_status: yup.object().required("Status is required"),
              campaign_description: yup
                .string()
                .required("Campaign description is required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              // Image size validation
              if (values.image && values.image.size > 1024 * 1024) {
                addAlert(
                  "Image size exceeds 1mb. Please upload a smaller image.",
                  "error",
                  {
                    vertical: "top",
                    horizontal: "center",
                  },
                  3000
                );
                setSubmitting(false);
                return;
              }

              const formData = new FormData();
              formData.append("campaign_name", values.campaign_name);
              formData.append("categories", values.categories.value);
              formData.append("target_amount", values.target_amount);
              formData.append("image", values.image);
              formData.append("user_id", user_id);
              formData.append("target_date", values.target_date);
              formData.append("campaign_status", values.campaign_status.value);
              formData.append(
                "campaign_description",
                values.campaign_description
              );

              if (values.tags.length > 0) {
                for (let i = 0; i < values.tags.length; i++)
                  formData.append("tags", values.tags[i].value);
              }

              mutate(formData, {
                onSuccess: (response) => {
                  onSuccess();
                  onClose();
                  addAlert(
                    "Add campaign successfully!",
                    "success",
                    {
                      vertical: "top",
                      horizontal: "center",
                    },
                    3000
                  );
                },
                onError: (error) => {
                  const errorMessages = error.response?.data
                    ? Object.values(error.response.data).flat().join("\n")
                    : "An unexpected error occurred.";
                  addAlert(
                    errorMessages,
                    "error",
                    {
                      vertical: "top",
                      horizontal: "center",
                    },
                    3000
                  );
                },
              });
            }}
          >
            {({ setFieldValue }) => (
              <Form>
                <Grid container spacing={{ xs: 2 }}>
                  <Grid item xs={12}>
                    <Box className=' w-[60%] max-desktop:w-[70%] max-tablet:w-[95%] m-auto   flex flex-col items-center'>
                      <DropZone
                        name='image'
                        onChange={(e) => {
                          setFieldValue("image", e[0]);
                          onChange(e);
                        }}
                        initialPreview={srcImg}
                      />

                      {openCrop && (
                        <>
                          <ImageCropper
                            srcImg={srcImg}
                            setOpenCrop={setOpenCrop}
                            setsrcImg={setSrcImg}
                          />
                        </>
                      )}

                      {srcImg && <ImagePreviewDialog croppedImage={srcImg} />}
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      required={true}
                      name='campaign_name'
                      label='Campaign title:'
                      placeholder='Enter campaign title'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      required={true}
                      name='target_amount'
                      label='Amount to be raised:
'
                      type='number'
                      placeholder='Enter Amount'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputField
                      required={true}
                      name='target_date'
                      label='Accept Donations until (Select end date):
'
                      inputProps={{ min: moment().format("YYYY-MM-DD") }}
                      type='date'
                      placeholder='Enter Date'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectField
                      required
                      name='categories'
                      options={CampaignCategory?.map((item, index) => ({
                        label: item.category_title,
                        value: item.category_id,
                      }))}
                      label='Categories:'
                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                          height: phone ? "45px" : "",
                        },
                      }}
                      placeholder="Select Category's"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <MultiSelectField
                      name='tags'
                      options={[
                        { label: "Zakat ", value: "Zakat" },
                        { label: "Fitra", value: "Fitra" },
                        {
                          label: "Interest Offloading ",
                          value: "Interest Offloading",
                        },
                        {
                          label: "Hadiya ",
                          value: "Hadiya",
                        },
                      ]}
                      label='Tags:'
                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                          height: phone ? "45px" : "",
                        },
                      }}
                      placeholder='Select Tags'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <SelectField
                      required
                      name='campaign_status'
                      options={[
                        { label: "pending", value: "pending" },
                        { label: "active", value: "active" },
                      ]}
                      label='Status:'
                      sx={{
                        "& .MuiInputBase-root.MuiOutlinedInput-root ": {
                          height: phone ? "45px" : "",
                        },
                      }}
                      placeholder='Select user role'
                    />
                  </Grid>
                  <Grid item xs={12} mt={2}>
                    <TextEditor
                      name='campaign_description'
                      label={"Campaign Description:"}
                      required={true}
                    />
                  </Grid>

                  <Grid
                    item
                    mt={2}
                    gap={4}
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <SecondaryButton
                      onClick={onClose}
                      className='w-[69px] h-[32px] border border-[#082F49]'
                      sx={{
                        height: "44px",
                        width: "100px",
                        border: `1px solid ${colors.primary.dark}`,
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                    >
                      Cancel
                    </SecondaryButton>
                    <PrimaryButton
                      sx={{
                        height: "44px",
                        width: "100px",
                        borderRadius: "5px",
                        fontSize: "1rem",
                        fontWeight: 500,
                      }}
                      type='submit'
                    >
                      Save
                    </PrimaryButton>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        )}
      </Dialog>
    </div>
  );
}

export default AdminPanelDialog;
