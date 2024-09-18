import { Close } from "@carbon/icons-react";
import {
  Dialog as MuiDialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { colors } from "../../../../Constants/theme";

export const Dialog = ({
  button,
  title,
  children,
  buttonOnClick,
  maxWidth = "md",
  onClose: onCloseCall,
}) => {
  const [container, setContainer] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    button?.props?.onClick && button?.props?.onClick();
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    onCloseCall && onCloseCall();
  };
  useEffect(() => {
    setContainer(document.getElementById("main"));
  }, []);

  return (
    <>
      {/* Ensure button prop is a valid React element */}
      {button && (
        <button.type
          {...button.props} // Spread all props to maintain functionality
          onClick={() => {
            onOpen();
            buttonOnClick && buttonOnClick();
          }}
        />
      )}

      <MuiDialog
        fullWidth
        maxWidth={maxWidth}
        open={open}
        onClose={onClose}
        container={container}
      >
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
            <DialogContent
              className="overflow-y-auto  mt-5 ps-0 pe-0"
              sx={{ padding: "0px 10px 20px 10px !important" }}
            >
              {typeof children === "function"
                ? children({ onClose })
                : children}
            </DialogContent>
          </div>
        </div>
      </MuiDialog>
    </>
  );
};
