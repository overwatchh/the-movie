import { useEffect, useState } from "react";
import type { SyntheticEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TabsMui from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { PATH } from "@/constants";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  const handleChange = (event: SyntheticEvent, activeTab: number) => {
    setActiveTab(activeTab);
    switch (activeTab) {
      case 0:
        navigate(PATH.HOME);
        break;
      case 1:
        navigate(PATH.TOP_RATED_MOVIES);
        break;
      case 2:
        navigate(PATH.SEARCH_MOVIE);
        break;
      default:
        navigate(PATH.HOME);
    }
  };

  useEffect(() => {
    switch (location.pathname) {
      case PATH.HOME:
        setActiveTab(0);
        break;
      case PATH.TOP_RATED_MOVIES:
        setActiveTab(1);
        break;
      case PATH.SEARCH_MOVIE:
        setActiveTab(2);
        break;
      default:
        setActiveTab(0);
        break;
    }
  }, [location.pathname]);
  return (
    <TabsMui value={activeTab} onChange={handleChange} aria-label="Tabs">
      <Tab label="Now playing" {...a11yProps(0)} />
      <Tab label="Top rated" {...a11yProps(1)} />
      <Tab label="Search movie" {...a11yProps(2)} />
    </TabsMui>
  );
};

export default Tabs;
