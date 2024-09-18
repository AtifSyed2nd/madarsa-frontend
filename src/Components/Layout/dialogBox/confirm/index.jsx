import { Close } from "@carbon/icons-react";
import {
  Box,
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import { cloneElement, useState } from "react";
import { colors } from "../../../../Constants/theme";
import PrimaryButton from "../../../Inputs/PrimaryButton";
import SecondaryButton from "../../../Inputs/secondaryButton/index";

export const Confirm = ({
  button,
  title,
  children,
  isLoading,
  submitHandler,
  onClose: onCloseCall,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    button?.props?.onClick && button?.props?.onClick();
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    onCloseCall && onCloseCall();
  };

  return (
    <>
      {cloneElement(button, { onClick: onOpen })}
      <MuiDialog fullWidth maxWidth={"sm"} open={open} onClose={onClose}>
        <div className="p-0">
          <div className="relative">
            <DialogTitle
              sx={{
                background: colors.primary.main,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="dailog-heading flex items-center justify-between   w-full border-b"
            >
              <span className="uppercase">{title}</span>
              <IconButton onClick={onClose}>
                <Close size={24} fill={colors.primary.dark} />
              </IconButton>
            </DialogTitle>
            <DialogContent className="overflow-y-auto mt-3 px-4">
              {typeof children === "function"
                ? children({ onClose })
                : children}

              <Grid
                display={"flex"}
                xs={12}
                justifyContent={"center"}
                gap={2}
                flexDirection={"row"}
                item
                className="border-top mt-4 pt-3"
              >
                <SecondaryButton
                  className="px-4 text-capitalize me-4"
                  sx={{ border: `1px solid ${colors.primary.dark}` }}
                  color={`${colors.text.dark}`}
                  onClick={onClose}
                >
                  Close
                </SecondaryButton>

                {submitHandler && (
                  <PrimaryButton
                    isLoading={isLoading}
                    size="small"
                    className="ml-4 text-capitalize "
                    onClick={() => submitHandler(onClose)}
                  >
                    Confirm
                  </PrimaryButton>
                )}
              </Grid>
            </DialogContent>
          </div>
        </div>
      </MuiDialog>
    </>
  );
};
