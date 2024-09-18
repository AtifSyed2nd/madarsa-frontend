/** @format */

import PrimaryButton from "../PrimaryButton";
import { Dialog } from "../../Layout/dialogBox/dialog/index";

export const ImagePreviewDialog = ({ croppedImage }) => {
  return (
    <Dialog
      maxWidth='lg'
      title={"Preview Image"}
      button={
        <PrimaryButton sx={{ marginTop: "1rem" }}>View Image</PrimaryButton>
      }
    >
      {() => (
        <>
          <img
            src={croppedImage}
            alt=''
            className='max-h-[600px] w-full object-cover bg-no-repeat'
          />
        </>
      )}
    </Dialog>
  );
};
