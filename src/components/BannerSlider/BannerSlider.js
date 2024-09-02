import { Box, ImageList, ImageListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { bannerSlidesSelector } from "../../redux/selectors/bannerSlidesSelector";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";

export default function BannerSlider() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
    });

    const bannerSlides = useSelector(bannerSlidesSelector);

    let bannerItem = document.getElementById("banner-0")?.getBoundingClientRect();
    let bannerItemWidth = bannerItem?.width;

    useEffect(() => {
        let bannerIndex = 0;
        const bannerSlider = document.getElementById("banner-slider");

        const Slider = setInterval(() => {
            bannerIndex += 1;
            if (bannerIndex < 0) {
                bannerIndex = bannerSlides.length - 1;
            }

            if (bannerIndex > bannerSlides?.length - 1) {
                bannerIndex = 0;
            }
            // console.log(bannerIndex);

            if (bannerSlider) {
                bannerSlider.style.left = -bannerIndex * bannerItemWidth + "px";
            }
        }, 5000);

        return () => {
            clearInterval(Slider);
            bannerItem = document.getElementById("banner-0")?.getBoundingClientRect();
            bannerItemWidth = bannerItem?.width;
        };
    }, [bannerSlides]);

    return (
        <Box sx={{ overflow: "hidden" }}>
            <Box
                sx={{ position: "relative", height: "fit-content", minHeight: "450px" }}
            >
                <ImageList
                    id="banner-slider"
                    sx={{
                        width: "fit-content",
                        minHeight: 450,
                        height: "fit-content",
                        margin: 0,
                        position: "relative",
                        left: "0",
                        top: "0",
                        transition: "left 1s ease",
                        overflowY: "none",
                    }}
                    cols={bannerSlides.length}
                    gap={0}
                >
                    {bannerSlides.map((item, index) => (
                        <ImageListItem
                            key={`banner-${index}`}
                            sx={{ width: windowWidth, height: "fit-content" }}
                            id={`banner-${index}`}
                        >
                            <Link
                                to={routeBuilder(ROUTE_LIST.SINGLE_PRODUCT, item.productId)}
                            >
                                <img
                                    srcSet={`${item.images.imgSrc}?auto=format&dpr=2 2x`}
                                    src={`${item.images.imgSrc}?auto=format`}
                                    alt={item.images.imgSrc}
                                    loading="lazy"
                                    width={"100%"}
                                // style={{height: "700px"}}
                                />
                            </Link>
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Box>
    );
}
