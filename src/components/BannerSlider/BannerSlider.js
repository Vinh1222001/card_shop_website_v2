import { Box,Stack, ImageList, ImageListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllbannerSlidesSelector } from "../../redux/selectors/bannerSlidesSelector";
import { Link } from "react-router-dom";
import { ROUTE_LIST, routeBuilder } from "../../routes/routeBuilder";
import { useEffect, useRef, useState } from "react";

export default function BannerSlider() {

    let bannerSlides = useSelector(getAllbannerSlidesSelector);

    bannerSlides = [...bannerSlides, ...bannerSlides]

    const [index, setIndex] = useState(0)

    const timeOutRef = useRef(null)

    function resetTimeOut() {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current)
        }
    }

    useEffect(()=>{
        resetTimeOut();

        timeOutRef.current = setTimeout(()=>{
            setIndex(prevIndex => prevIndex >= bannerSlides.length - 1? 0 : prevIndex + 1)
        }, 3000)

        return ()=> resetTimeOut()
    }, [bannerSlides.length,index])

    return (
        <Box >
            <Stack
                sx={{ 
                    position: "relative",
                    maxWidth: "100%",
                    overflow: "hidden",
                    // transform: `translate3d(${-index * 100}%, 0, 0)`,
                }}
            >
                <ImageList
                    className="banner-slider"
                    cols={bannerSlides.length}
                    sx={{
                        // height: "max-content",
                        width: `${bannerSlides.length*100}%`,
                        // maxWidth: "100vw",
                        // display:"flex",
                        margin: 0,
                        transform: `translate3d(${(-index * 100)/bannerSlides.length}%, 0, 0)`,
                        transition: "1s ease",
                        "::webket-scrollbar":{
                            display: "none"
                        },
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                    }}
                    gap={0}
                >
                    {bannerSlides.map((item, index) => (
                        <ImageListItem
                            className="banner-item"
                            key={`banner-${index}`}
                            sx={{ 
                                // flex: "1 0 100%",
                                width: "100%", 
                                height: "max-content", 
                                objectFit: "cover",
                                // transform: `translate3d(${-index * 100}%, 0, 0)`,
                                // backgroundColor: "black"
                            }}
                            id={`banner-${index}`}
                        >
                            <Link
                                to={routeBuilder(ROUTE_LIST.SINGLE_PRODUCT, item.productId)}
                            >
                                <img
                                    srcSet={`${item.images.imgSrc}?auto=format&dpr=2 2x`}
                                    src={`${item.images.imgSrc}`}
                                    alt={item.images.imgSrc}
                                    loading="lazy"
                                    width={"100%"}
                                />
                            </Link>
                        </ImageListItem>
                    ))}
                </ImageList>
                
                <Box sx={{
                    position: "absolute",
                    left:0,
                    bottom: "30px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                }}>

                    <Stack 
                        className="dots-wrapper"
                        direction={"row"}
                        sx={{                            
                            minWidth: "100px",
                            width: "max-content",
                            justifyContent: "center",
                            alignItems: "end",
                            gap: 1,
                            padding: "0.5em 2em",
                            // Glassmorphim effect
                            background: "rgba(255, 255, 255, 0.05)",
                            borderRadius: "16px",
                            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(5px)",
                            webkitBackdropFilter: "blur(5px)",
                            border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                    >
                        {
                            bannerSlides.map((dot, idx)=>(

                                <Box 
                                    className="dot"
                                    key={`dot-${idx}`}
                                    width={index === idx? "30px": "15px"}
                                    sx={{
                                        height: "15px",
                                        borderRadius: 20,
                                        backgroundColor: "#fff",
                                        transition: "width ease 0.3s",
                                        cursor: "pointer"
                                    }}
                                    onClick={
                                        ()=>{
                                            setIndex(idx)
                                        }
                                    }
                                    
                                >

                                </Box>
                            ))
                        }
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
