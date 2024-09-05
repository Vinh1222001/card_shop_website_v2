import { useDispatch } from "react-redux";
import { signInWithFacebook, signInWithGoogle, signOutUser } from "../redux/slices/userSlice";

export default function SignIn(){

    const dispatch = useDispatch()

    const handleSignInWithGG = ()=>{
        dispatch(signInWithGoogle())
    }

    const handleSignInWithFB = ()=>{
        dispatch(signInWithFacebook())
    }

    const handleSignOut = ()=>{
        dispatch(signOutUser())
    }

    return(
        <section>
            <div>
                <button onClick={handleSignInWithGG}>
                    Login with GG
                </button>
                <button onClick={handleSignInWithFB}>
                    Login with FB
                </button>
                <button onClick={handleSignOut}>
                    Logout
                </button>
            </div>
        </section>
    )
}