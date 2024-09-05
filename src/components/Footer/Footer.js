import { Avatar, Box, Divider, Grid2, Link, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getContactListSelector, getServiceListSelector, getSocialMediaListSelector, getStoreInfoListSelector } from "../../redux/selectors/contactsSelector";
import { renderIcon } from "../../commonFunctions/iconFunctions";

const titileStyle = {
    variant: "h6",
    fontWeight: "bold",
}

const imgLinkThirstProvider = {
    delivery:[
        {
            link:"https://viettelpost.com.vn/wp-content/uploads/2020/03/logo-380x270.jpg",
            alt:"Viettel post"
        },
        // {
        //     link: "https://giaohangtietkiem.vn/wp-content/themes/giaohangtk/images/logo-header.png",
        //     alt: "Giao hang tiet kiem"
        // },
        // {
        //     link: "https://jtexpress.vn/themes/jtexpress/assets/images/logo.svg",
        //     alt: "jexpress"
        // },
        {
            link: "https://cdn.shopify.com/app-store/listing_images/db01b7c7ac4a4d996b2f394ada888832/banner/CIOdk9T0lu8CEAE=.png",
            alt: "ninja van"
        },
        // {
        //     link: "https://nascoexpress.com/Uploads/DigitalSystem/8f/8fa61808-8d69-4dcb-8f23-76a66998be16.png",
        //     alt: "nasco express"
        // }
    ],
    payment:[
        {
            link: "https://img.mservice.com.vn/app/img/portal_documents/mini-app_design-guideline_branding-guide-1-2.png",
            alt: "Momo"
        },
        // {
        //     link: "https://media.techcombank.com/uploads/techcombank_logo_svg_86201e50d1.svg?w=1080&q=75",
        //     alt: "techcombank"
        // },
        // {
        //     link: "https://www.mbbank.com.vn/images/logo.png",
        //     alt: "mbbank"
        // },
        {
            link: "https://lendy.vn/wp-content/uploads/2021/06/tpbank-1030x539.png",
            alt: "tpbank"
        }
    ]
}

export default function Footer({globalPaddingX}) {

    const globalPaddingY = "1em"

    const contacts = useSelector(getContactListSelector)
    const socialMedias =  useSelector(getSocialMediaListSelector)
    const services = useSelector(getServiceListSelector)
    const storeInfo =  useSelector(getStoreInfoListSelector)

    // console.log(contacts);

    const logo = {
        src: `${process.env.PUBLIC_URL}/Logo/logo_lentilab-01.png`,
        width: 100,
        height: 100,
        name: "3D Lenticular" 
    }

    return(
        
        <Stack 
            sx={{
                    backgroundColor: "primary.dark", 
                    color: "primary.contrastText", 
                    paddingBlock: globalPaddingY,
                    display: "flex",
                    gap: "1em"
                }}
        >

            <Box 
                display={"flex"} 
                justifyContent="center" 
                paddingInline={globalPaddingX}

            >
                <Box
                    display={"flex"} 
                    alignItems="center" 
                    gap={1} 
                >

                    <Avatar alt="Card Shop Logo" 
                            src={logo.src} 
                            sx={{width: logo.width, height: logo.height}}></Avatar>
                    <Typography variant="h2" fontWeight={700}>
                        {logo.name}
                    </Typography>
                </Box>
            </Box>
            <Divider sx={{backgroundColor: "primary.light"}}/>
            <Box paddingInline={globalPaddingX}>
                <Grid2 container spacing={2}>
                    <Grid2  size={4}>
                        <Stack
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Dịch vụ
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack
                                direction={"column"}
                                gap={0.5}
                            >
                                {
                                    services.map((service, index)=>(
                                        <Typography key={`service-${index}`}>
                                            {service.link}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>

                    <Grid2  size={4}>
                        <Stack
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Đơn vị vận chuyển
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack gap={1} direction={"row"}>
                                {
                                    imgLinkThirstProvider.delivery.map((imageLink,index)=>(
                                        <Box key={`delivery-${index}`} width={"6em"}>

                                            <img 
                                                src={imageLink.link} 
                                                alt={imageLink.alt} 
                                                loading="lazy"
                                                style={{
                                                    width: "100%"
                                                }}
                                            ></img>
                                        </Box>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>

                    <Grid2  size={4}>
                        <Stack
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Thanh toán
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack gap={1} direction={"row"}>
                                {
                                    imgLinkThirstProvider.payment.map((imageLink, index)=>(
                                        <Box key={`payment-${index}`} width={"6em"}>

                                            <img 
                                                src={imageLink.link} 
                                                alt={imageLink.alt} 
                                                loading="lazy"
                                                style={{
                                                    width: 100+"%"
                                                }}
                                            ></img>
                                        </Box>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>

                    <Grid2  size={4}>
                        <Stack
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Thông tin 
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack
                                direction={"column"}
                                gap={0.5}
                            >
                                {
                                    storeInfo.map((info, index)=>(
                                        <Typography key={`info-${index}`}>
                                            {info.title}: {info.link}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>

                    <Grid2  size={4}>
                        <Stack 
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Liên hệ
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack
                                direction={"column"}
                                gap={0.5}
                            >
                                {
                                    contacts.map((contact,index)=>(
                                        <Typography key={`contact-${index}`} display={"flex"} alignItems={"center"} gap={1}>
                                            {renderIcon(contact.name)}
                                            {contact.link}
                                        </Typography>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>

                    <Grid2  size={4}>
                        <Stack
                            direction={"column"}
                            gap={1}
                        >
                            <Typography variant={titileStyle.variant} fontWeight={titileStyle.fontWeight}>
                                Cộng đồng
                            </Typography>
                            <Divider sx={{backgroundColor:"primary.main"}}/>
                            <Stack 
                                direction={"column"}
                                gap={0.5}
                            >
                                {
                                    socialMedias.map((socialMedia, index)=>(
                                        <Link 
                                            key={`social-media-${index}`}
                                            href={socialMedia.link}
                                            underline="hover" 
                                            display="flex" 
                                            gap={1} 
                                            alignItems="center" 
                                            color="black"
                                            target="_blank"
                                            rel="noopener"
                                            sx={{color:"primary.contrastText", textTransform: "capitalize"}}
                                        >
                                            {renderIcon(socialMedia.name)}
                                            {socialMedia.title}
                                        </Link>
                                    ))
                                }
                            </Stack>
                        </Stack>
                    </Grid2>
                </Grid2>
                
            </Box>
        </Stack>
            
        
    )
}