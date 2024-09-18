import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Index = ({
  items,
  keyOne,
  keyTwo,
  keyThree,
  boldFirstElement,
  boldLastElement,
  color,
  invert,
  textAlign1 = "left",
  textAlign2 = "center",
  textAlign3 = "right",
}) => {
  const itemsLength = items?.length;
  const phone = useMediaQuery("(max-width:751px)");

  const renderRow = (item, index, isBoldFirst, isBoldLast, align) => {
    const isFirstItem = index === 0;
    const isLastItem = index === itemsLength - 1;
    return (
      <Typography
        key={index}
        className={`font-roboto ${
          invert ? "text-[#FFFFFF]" : "text-[#000000]"
        } text-lg max-desktop:text-lg max-tablet:text-base`}
        sx={{
          fontWeight:
            (isFirstItem && isBoldFirst) || (isLastItem && isBoldLast)
              ? "bold"
              : "normal",
          textAlign: align,
          flex: 1,
        }}
      >
        {item}
      </Typography>
    );
  };

  return (
    <Box
      className={`w-[100%] ${phone ? "" : "rounded-[1.25rem]"} py-4`}
      bgcolor={color}
      style={{ boxShadow: "2px 4px 4px 2px #00000040" }}
    >
      {items?.length > 0 ? (
        items.map((item, index) => (
          <Grid container key={index} direction="row" wrap="nowrap">
            <Grid
              item
              lg={4}
              md={10}
              xs={12}
              className="px-8 py-2 max-desktop:px-8 max-tablet:px-4 flex font-roboto items-center border-r-[1px] border-[#00000040]"
            >
              {renderRow(
                item[keyOne] || "",
                index,
                boldFirstElement,
                boldLastElement,
                textAlign1
              )}
            </Grid>
            <Grid
              item
              lg={4}
              md={10}
              xs={12}
              className="flex items-center font-roboto p-2"
            >
              {renderRow(
                item[keyTwo] || "",
                index,
                boldFirstElement,
                boldLastElement,
                textAlign2
              )}
            </Grid>
            <Grid
              item
              sx={{ fontFamily: "lateef !important" }}
              lg={4}
              md={10}
              xs={12}
              className="px-8 py-2 max-desktop:px-8 !font-lateef max-tablet:px-4 flex items-center border-l-[1px] border-[#00000040]"
            >
              {renderRow(
                item[keyThree] || "",
                index,
                boldFirstElement,
                boldLastElement,
                textAlign3
              )}
            </Grid>
          </Grid>
        ))
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <Typography
            variant="h6"
            className={`font-roboto ${
              invert ? "text-[#FFFFFF]" : "text-[#000000]"
            } text-lg max-desktop:text-lg max-tablet:text-base`}
          >
            No data available
          </Typography>
          <img
            src="https://banner2.cleanpng.com/20180519/kho/avq1vlhqt.webp" // Replace with the path to your image
            alt="No data"
            className="bg-blend-color-burn"
            style={{ marginTop: "16px", maxWidth: "100%", height: "auto" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Index;
