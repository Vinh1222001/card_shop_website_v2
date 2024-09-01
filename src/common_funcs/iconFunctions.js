import { Email, FacebookSharp, Feed, MusicVideoSharp, Phone, YouTube } from "@mui/icons-material";

export const renderIcon = (name) => {
    let icon;

    switch(name){
        case "facebook":
            icon = <FacebookSharp/>;
        break;

        case "tiktok":
            icon = <MusicVideoSharp/>;
        break;

        case "youtube":
            icon = <YouTube/>
        break;

        case "phone":
            icon = <Phone/>
        break;
        
        case "email":
            icon = <Email/>
        break;

        default:
            icon = <Feed/>
        break
    }

    return icon
}