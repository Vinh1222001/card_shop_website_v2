import { useDispatch } from "react-redux";
import { signUpWithEmailPassword } from "../../redux/slices/userSlice";
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Stack, Typography } from "@mui/material";
import { AccountCircle, ArrowRightAlt, Email, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { isPasswordValid, isRetypePasswordValid } from "../../commonFunctions/validation";

const INPUT_NAME = {
    EMAIL: "email",
    PASSWORD: "password",
    RETYPE_PASSWORD: "retypePassword",
    FULLNAME: "fullName",
    AGREE_WITH_POLICIES: "agreeWithPolicies",
};

const FORM_ERROR_ATTRIBUTE = {
    IS_FULL_CONTENT: "isFullContent",
    IS_CONTAINED_FULLNAME: "isContainedFullname",
    IS_CONTAINED_EMAIL: "isContainedEmail",
    IS_CONTAINED_PASSWORD: "isContainedPassword",
    IS_CONTAINED_RETYPE_PASSWORD: "isContainedRetypePassword",
    IS_PASSWORD_VALID: "isPasswordValid",
    IS_RETYPE_PASSWORD_VALID: "isRetypePasswordValid",
    IS_SIGN_UP_SUCCESS: "isSignUpSuccess",
};
  

export default function SignUp({
    commonGap
}) {

    const dispatch = useDispatch()

    const [showPassword, setShowPassword] = useState(false);
    const [showRetypePassword, setShowRetypePassword] = useState(false);

    const [formError, setFormError] = useState({
        isFullContent: true,
        isContainedFullname: true,
        isContainedEmail: true,
        isContainedPassword: true,
        isContainedRetypePassword: true,
        isPasswordValid: true,
        isRetypePasswordValid: true,
        isSignUpSuccess: true
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
            Array.from(data.keys()).length === 5
        )

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_CONTAINED_FULLNAME, 
            data.has(INPUT_NAME.FULLNAME)
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
            FORM_ERROR_ATTRIBUTE.IS_CONTAINED_RETYPE_PASSWORD, 
            data.has(INPUT_NAME.RETYPE_PASSWORD)
        )

        handleSetFormError(
            FORM_ERROR_ATTRIBUTE.IS_PASSWORD_VALID, 
            isPasswordValid( data.get(INPUT_NAME.PASSWORD) )
        )
        
        handleSetFormError( 
            FORM_ERROR_ATTRIBUTE.IS_RETYPE_PASSWORD_VALID, 
            isRetypePasswordValid( data.get(INPUT_NAME.RETYPE_PASSWORD), data.get(INPUT_NAME.PASSWORD)) 
        )
    }

    // Checking if formError contained an attribiute with false value -> return fals. Otherwise, return true 
    const isFormValid = () => {
        
        return !Object.values(formError).includes(false)

    }

    const handleSignUp = (event) =>{

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        checkFormValid(data)

        if( !isFormValid() ){
            return
        }

        const name = data.get(INPUT_NAME.FULLNAME)

        const email = data.get(INPUT_NAME.EMAIL)

        const password = data.get(INPUT_NAME.PASSWORD)
        
        // console.log(typeof userName, typeof email, typeof password);
        
        dispatch(signUpWithEmailPassword({name, email, password}))
        // signUp(userName, email, password)
        
    }

    
    const handleClickShowPassword = (setStateCallback) => {
        setStateCallback((show) => !show)
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    return(
        <Stack gap={3}>
            <Typography component="h1" variant="h5" textAlign={"center"} textTransform={"uppercase"} fontWeight={"bolder"} color="primary.main">
                Đăng ký
            </Typography>
            
            <Stack component={"form"} style={{width: "100%"}} gap={commonGap} onSubmit={handleSignUp}>

                <FormControl 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    required
                    error={!formError.isContainedFullname}
                >
                    <InputLabel htmlFor="sign-up-full-name">Họ và tên</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.FULLNAME}
                        // value={""}
                        id="sign-up-full-name"
                        type="text"
                        endAdornment={
                            <InputAdornment position="end">
                                <AccountCircle/>
                            </InputAdornment>
                        }
                        label="Full name"
                        
                    />
                </FormControl>

                <FormControl 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    required
                    error={!formError.isContainedEmail}
                >
                    <InputLabel htmlFor="sign-up-email">Email</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.EMAIL}
                        id="sign-up-email"
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
                    error={!formError.isContainedPassword || !formError.isPasswordValid}
                >
                    <InputLabel htmlFor="sign-up-password">Mật khẩu</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.PASSWORD}
                        id="sign-up-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=>handleClickShowPassword(setShowPassword)}
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
                    <FormHelperText id="sign-up-password-helper-text">
                        Mật khẩu phải chứa ít nhất 8 ký tự bao gồm 
                        chữ cái in hoa, 
                        chữ cái in thường, 
                        số 
                        và không chứa ký tự đặc biệt 
                    </FormHelperText>
                    <FormHelperText id="sign-up-error-password-helper-text" error>
                        {!formError.isPasswordValid? `
                            Mật khẩu không hợp lệ
                        `:""}
                    </FormHelperText>
                </FormControl>

                <FormControl 
                    variant="outlined" 
                    size="small"
                    fullWidth
                    required
                    error={!formError.isContainedRetypePassword || !formError.isRetypePasswordValid}
                >
                    <InputLabel htmlFor="sign-up-retype-password">Nhập lại mật khẩu</InputLabel>
                    <OutlinedInput
                        name={INPUT_NAME.RETYPE_PASSWORD}
                        id="sign-up-retype-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={()=>handleClickShowPassword(setShowRetypePassword)}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    // edge="end"
                                    sx={{
                                        padding: 0
                                    }}
                                >
                                {showRetypePassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Retype Password"
                    />

                    <FormHelperText id="sign-up-error-retype-password-helper-text" error>
                        {
                            !formError.isRetypePasswordValid? `
                                Mật khẩu không khớp
                            ` : ""
                        }
                    </FormHelperText>

                </FormControl>

                <FormGroup sx={{display:"flex", flexDirection: "row", alignItems: "center"}}>

                    <FormControlLabel
                        name={INPUT_NAME.AGREE_WITH_POLICIES}
                        control={<Checkbox value={true} color="primary.main"/>}
                        label="Đồng ý với các điều khoản dịch vụ"
                        required
                        sx={{
                            padding: 0,
                            margin: 0
                        }}
                    />
                    <ArrowRightAlt/>
                    <Link href={process.env.REAC_APP_WEBSITE_POLICIES}> Điều khoản dịch vụ</Link>
                </FormGroup>

                <Button type="submit" variant="contained" fullWidth>Đăng Ký</Button>
            
            </Stack>

            {/* <Typography variant="body1" textAlign={"center"}>
                Bạn có tài khoản rồi hả? Vậy 
                <Button variant="text" onClick={()=>setIsSignIn(prev => !prev)}>
                    Đăng nhập
                </Button>
                đi
            </Typography> */}
        </Stack>
    )
}