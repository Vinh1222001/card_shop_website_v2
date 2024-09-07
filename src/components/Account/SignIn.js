import { useDispatch } from "react-redux";
import { signInWithEmailPassword, signInWithFacebook, signInWithGoogle } from "../../redux/slices/userSlice";
import { Button, Divider, FormControl, Grid2, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, Typography } from "@mui/material";
import {GoogleIcon, FacebookIcon} from './CustomIcon';
import { Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { isPasswordValid } from "../../commonFunctions/validation";

const INPUT_NAME = {
    EMAIL: "email",
    PASSWORD: "password",
};

const FORM_ERROR_ATTRIBUTE = {
    IS_FULL_CONTENT: "isFullContent",
    IS_CONTAINED_EMAIL: "isContainedEmail",
    IS_CONTAINED_PASSWORD: "isContainedPassword",
    IS_PASSWORD_VALID: "isPasswordValid",
    IS_SIGN_IN_SUCCESS: "isSignUpSuccess",
};

export default function SignIn({
    commonGap=1
}) {

    const dispatch = useDispatch()    

    const [showPassword, setShowPassword] = useState(false);

    const [formError, setFormError] = useState({
        isFullContent: true,
        isContainedEmail: true,
        isContainedPassword: true,
        isPasswordValid: true,

    })

    // Setting formError's attributes
    const handleSetFormError = (attribute, value) =>{
        
        setFormError(prev => ({
            ...prev, 
            [attribute]: value
        }))
    }

    // Checking each input in form and set value for the corresponding attribute in formError 
    const checkFormValid = (data) =>{

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_FULL_CONTENT, 
            Array.from(data.keys()).length === 2
        )

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_CONTAINED_EMAIL, 
            data.has(INPUT_NAME.EMAIL)
        )
        

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_CONTAINED_PASSWORD, 
            data.has(INPUT_NAME.PASSWORD)
        )

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_PASSWORD_VALID, 
            isPasswordValid( data.get(INPUT_NAME.PASSWORD) )
        )

    }

    // Checking if formError contained an attribiute with false value -> return fals. Otherwise, return true 
    const isFormValid = () => {
        
        return !Object.values(formError).includes(false)

    }

    const handleSignInWithGG = ()=>{
        dispatch(signInWithGoogle())
    }

    const handleSignInWithFB = ()=>{
        dispatch(signInWithFacebook())
    }

    const handleSignIn = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        checkFormValid(data)

        if( !isFormValid() ){
            return 
        }

        const email = data.get(INPUT_NAME.EMAIL)
        const password = data.get(INPUT_NAME.PASSWORD)

        dispatch(signInWithEmailPassword({email, password}))
        
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    return(
        <Stack gap={3}>
            <Typography component="h1" variant="h5" textAlign={"center"} textTransform={"uppercase"} fontWeight={"bolder"} color="primary.main">
                Đăng nhập
            </Typography>
            
            <Stack component={"form"} style={{width: "100%"}} gap={commonGap} onSubmit={handleSignIn}>
                
                <FormControl 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    required
                >
                    <InputLabel htmlFor="sign-in-email">Email</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.EMAIL}
                        id="sign-in-email"
                        type="email"
                        endAdornment={
                            <InputAdornment position="end">
                                <Email/>
                            </InputAdornment>
                        }
                        label="Email"
                    />
                </FormControl>

                <FormControl 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    required
                >
                    <InputLabel htmlFor="sign-in-password">Mật khẩu</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.PASSWORD}
                        id="sign-in-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    // edge="end"
                                    sx={{
                                        padding: 0
                                    }}
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                    <Link href={process.env.REACT_APP_HOME_URL} textAlign={"end"}>Quên mật khẩu?</Link>
                </FormControl>


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

            {/* <Typography variant="body1" textAlign={"center"}>
                Không có tài khoản hả? Vậy 
                <Button variant="text" onClick={()=>setIsSignIn(prev => !prev)}>
                    Đăng ký
                </Button>
                đi
            </Typography> */}
        </Stack>
    )
}