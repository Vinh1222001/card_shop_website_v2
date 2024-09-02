import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllHotNewsSelector } from "../../redux/selectors/hotNewsSelector";
import { useEffect, useState } from "react";

export default function HotNews() {
  const hotNews = useSelector(getAllHotNewsSelector);

  const timeout = 3000;

  const [hotNewsIndex, setHotNewsIndex] = useState(0);

  useEffect(() => {
    const hotNewSlider = setTimeout(() => {
      if (hotNews.length) {
        // console.log("In hotNews.length");
        if (hotNewsIndex < 0) {
          setHotNewsIndex(hotNews.length - 1);
          // console.log("In hotNewsIndex < 0 ");
        } else if (hotNewsIndex >= hotNews.length - 1) {
          setHotNewsIndex(0);
          // console.log("In hotNewsIndex > hotNews.length -1");
        } else {
          setHotNewsIndex(hotNewsIndex + 1);
          // console.log("In else");
        }
      }
    }, timeout);

    return () => clearTimeout(hotNewSlider);
  }, [hotNewsIndex, hotNews]);

  // console.log(hotNewsIndex)
  // console.log(hotNews.length)
  return (
    <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
      <Typography>{hotNews[hotNewsIndex]?.text}</Typography>
    </Box>
  );
}
