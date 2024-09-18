import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { chipColors, colors } from "../../../Constants/theme";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const tablet = useMediaQuery("(max-width:1365px)");

  return (
    <div
      role="tabpanel"
      variant="scrollable"
      scrollButtons={true}
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: tablet ? 2.5 : 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const tablet = useMediaQuery("(max-width:1365px)");
  const phone = useMediaQuery("(max-width:751px)");

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabs = [
    {
      label: "WHY US",
      headind: "Empowering Minds, Enriching Souls",
      content: (
        <div className="space-y-4 max-desktop:space-y-2">
          <p className="max-desktop:leading-[18px]">
            At our Madrasa, we blend traditional Islamic teachings with modern
            education to cultivate well-rounded individuals.
          </p>
          <p className="max-desktop:leading-[18px]">
            {" "}
            Our experienced educators, supportive community, and holistic
            approach ensure that students not only excel academically but also
            grow spiritually and morally.
          </p>
          <p className="max-desktop:leading-[18px]">
            Choose us for a nurturing environment where every child is valued
            and guided to achieve their full potential.
          </p>
        </div>
      ),
    },
    {
      label: "Our Vision",
      headind: "Inspiring Future Generations",
      content: (
        <div className="space-y-4 max-desktop:space-y-2">
          <p className="max-desktop:leading-[18px]">
            Our vision is to create a vibrant learning community where Islamic
            values and contemporary knowledge coexist harmoniously.
          </p>

          <p className="max-desktop:leading-[18px]">
            We aim to produce individuals who are not only academically
            proficient but also ethically sound, contributing positively to
            society.
          </p>

          <p className="max-desktop:leading-[18px]">
            By fostering an environment of continuous learning and personal
            growth, we aspire to be a beacon of excellence in Islamic and
            secular education.
          </p>
        </div>
      ),
    },
    {
      label: "Our Mission",
      headind: "Committed to Excellence",

      content: (
        <div className="space-y-4 max-desktop:space-y-2">
          <p className="max-desktop:leading-[18px]">
            At our Madrasa, we blend traditional Islamic teachings with modern
            education to cultivate well-rounded individuals.{" "}
          </p>
          <p className="max-desktop:leading-[18px]">
            Our experienced educators, supportive community, and holistic
            approach ensure that students not only excel academically but also
            grow spiritually and morally.{" "}
          </p>
          <p className="max-desktop:leading-[18px]">
            Choose us for a nurturing environment where every child is valued
            and guided to achieve their full potential.
          </p>
        </div>
      ),
    },
    {
      label: "Aims & Objectives",
      headind: "Guidance Towards Success",

      content: (
        <>
          <p className="max-desktop:leading-[18px]">
            Our primary aim is to offer a balanced education that caters to the
            intellectual, spiritual & emotional needs of our students. Our
            objectives include:
          </p>
          <ol className="max-desktop:leading-[22px] max-desktop:pt-2">
            <li>• Delivering high-quality Islamic and secular education.</li>
            <li>
              • Encouraging a deep understanding and practice of Islamic values.
            </li>
            <li>• Promoting academic excellence and lifelong learning.</li>
            <li>• Fostering a sense of community and social responsibility.</li>
            <li>
              • Preparing students to face future challenges with confidence.
            </li>
          </ol>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: chipColors.backgroundColor.free,
        display: "flex",
        flexDirection: phone ? "column" : "row",
        boxShadow: "2px 2px 6px #00000033", // Adjusted shadow for right and bottom
        height: tablet ? (phone ? "full" : "full") : "384px",
        borderRadius: "20px",
        "& .MuiTabs-root": {
          background: colors.primary.light,
          width: phone ? "100%" : tablet ? "250px" : "400px",
          borderRadius: phone ? "20px 20px 0 0" : "20px 0 0 20px",
          "& .MuiTabs-hideScrollbar .MuiTabs-scroller": {
            display: "flex !important",
            flexDirection: "column !important",
            justifyContent: "center !important",
          },
          "& .MuiTabs-scroller .MuiTabs-flexContainer ": {
            gap: tablet ? "0px" : "18px !important",
            width: "100%",
            margin: "18px 0",
          },
        },
      }}
    >
      <Tabs
        orientation={"vertical"}
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{
          style: {
            backgroundColor: chipColors.backgroundColor.free, // Change this to your desired color
            width: "0px", // Adjust width as needed
          },
        }}
        sx={{
          borderRight: phone ? 0 : 0,
          borderBottom: phone ? 0 : 0,
          borderColor: chipColors.backgroundColor.free,
          "& .MuiTabs-scroller": {
            display: "flex !important",
            flexDirection: "column !important",
            justifyContent: "center !important",
            alignItems: phone ? "center" : "end !important",
          },
          "& .MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root": {
            alignItems: phone ? "center" : "end !important",
            color: colors.secondary.light,
            width: "100%",
            fontSize: tablet ? "1rem !important" : "1.75rem",
            fontWeight: tablet ? 600 : 800,
            fontFamily: "roboto",
            height: phone ? "auto" : tablet ? "" : "70px",
            padding: phone ? "12px 0" : tablet ? "0 10px" : "0",
          },

          "& .MuiTabs-scroller .MuiTabs-flexContainer .MuiButtonBase-root:focus":
            {
              alignItems: phone ? "center" : "end !important",
              color: colors.text.dark,
              background: "#F0FDFA33",
              fontSize: tablet ? "1rem !important" : "1.75rem",
              fontWeight: tablet ? 600 : 800,
              fontFamily: "roboto",
              height: phone ? "auto" : tablet ? "" : "70px",
              padding: tablet ? "" : "12px 42px",
              maxWidth: "100%",
            },
          "& .MuiTabs-scroller .MuiTabs-flexContainer ": {
            alignItems: phone ? "center" : "",
          },
        }}
      >
        {tabs.map((tab, index) => (
          <Tab label={tab.label} key={index} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel value={value} index={index} key={index}>
          <div className="w">
            <h1
              className="text-[1.75rem] max-desktop:text-[1.25rem] font-semibold font-roboto pb-4 max-desktop:pb-2"
              style={{ color: colors.text.dark }}
            >
              {tab.headind}
            </h1>
            <div
              className="text-[1.12rem] max-desktop:text-[0.875rem] font-normal  font-roboto"
              style={{ color: colors.text.dark }}
            >
              {tab.content}
            </div>
          </div>
        </TabPanel>
      ))}
    </Box>
  );
}
