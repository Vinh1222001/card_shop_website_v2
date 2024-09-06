import { useDispatch } from "react-redux";
import { signInWithFacebook, signInWithGoogle } from "../redux/slices/userSlice";
import { Button, Divider, Grid2, Stack, TextField, Typography } from "@mui/material";
import BaseComponent from "../components/BaseComponent/BaseComponent";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SignIn(){

    const dispatch = useDispatch()

    const handleSignInWithGG = ()=>{
        dispatch(signInWithGoogle())
    }

    const handleSignInWithFB = ()=>{
        dispatch(signInWithFacebook())
    }

    const handleSignIn = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
    }

    return(

        <BaseComponent>
            <Grid2 container direction={"row"}>
                <Grid2 size={6}>

                </Grid2>
                <Grid2 container size={6} padding={1} direction={"column"} rowSpacing={2}>
                    <Typography component="h1" variant="h5" textAlign={"center"} textTransform={"uppercase"} fontWeight={"bolder"} color="primary.main">
                        Đăng nhập
                    </Typography>
                    <Stack component={"form"} style={{width: "100%"}} gap={1} onSubmit={handleSignIn}>
                        <TextField 
                            label="Email" 
                            type="email" 
                            size="small"
                            id="email"
                            name="email"
                            autoComplete="email"
                            fullWidth 
                            autoFocus
                            required
                        />
                        <TextField 
                            label="Password" 
                            type="password" 
                            fullWidth 
                            required
                            size="small"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button type="submit" variant="contained" fullWidth>Đăng nhập</Button>
                    </Stack>

                    <Divider>
                        hoặc đăng nhập bằng
                    </Divider>
                    <Grid2 container direction={"row"} columnSpacing={1}>
                        <Grid2 size={6}>

                            <Button
                                variant="outlined"
                                startIcon={<GoogleIcon/>}
                                fullWidth
                                onClick={handleSignInWithGG}
                            >
                                Google
                            </Button>
                        </Grid2>

                        <Grid2 size={6}>

                            <Button
                                variant="outlined"
                                startIcon={<FacebookIcon/>}
                                fullWidth
                                onClick={handleSignInWithFB}
                            >
                                Facebook
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Typography variant="body1" textAlign={"center"}>
                        Không có tài khoản hả? Vậy 
                        <Button variant="text">
                            Đăng ký
                        </Button>
                        đi
                    </Typography>
                </Grid2>
            </Grid2>
        </BaseComponent>
        
    )
}