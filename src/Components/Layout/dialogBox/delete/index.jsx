/** @format */

import { RowDelete } from "@carbon/icons-react";
import { useDelete } from "../../../../Hooks/useDelete";
import { useQueryClient } from "react-query";
import Typography from "@mui/material/Typography";
import { Confirm } from "../confirm";
import SecondaryButton from "../../../Inputs/secondaryButton/index";
import { useAlert } from "../../Alerts/Index";

export const DeleteBox = ({
  data,
  title,
  children,
  url,
  refetchUrl,
  onSuccess,
  onClick,
  onClose,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useDelete({
    url,
    name: title || "",
    refetch: () =>
      queryClient.refetchQueries({
        queryKey: [refetchUrl ? refetchUrl : url],
        stale: true,
        exact: false,
        predicate: (query) => !query?.options?.params?.download,
      }),
  });
  const addAlert = useAlert();
  const handleDelete = () => {
    mutate(data, {
      onSuccess: () => {
        onSuccess && onSuccess();
        addAlert(
          `Delete ${title} successfully`,
          "success",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
        // onClose();
      },
      onError: (error) => {
        addAlert(
          `${error}error`,
          "error",
          {
            vertical: "top",
            horizontal: "center",
          },
          3000
        );
      },
    });
  };

  return (
    <Confirm
      isLoading={isLoading}
      onClose={onClose}
      button={
        <SecondaryButton
          variant='text'
          sx={{ border: "none" }}
          startIcon={
            <RowDelete className='me-1 mb-1 max-tablet:size-4 size-5' />
          }
          color={"red"}
          className='capitalize'
          onClick={onClick}
        >
          <Typography
            className='capitalize ml-3 xl:text-sm 2xl:text-semi-base'
            sx={{
              lineHeight: "18px",
              fontFamily: "roboto",
              fontWeight: "400",
              fontSize: {
                xs: "0.8rem",
                md: "1.2rem",
              },
              display: { xs: "none", sm: "block" },
            }}
          >
            Remove
          </Typography>
        </SecondaryButton>
      }
      submitHandler={handleDelete}
      title={`Delete ${title}` || "Delete"}
    >
      <p className='m-0'>
        {children || "Are you sure you want to delete these rows?"}
      </p>
    </Confirm>
  );
};
