import { signInWithGoogle, signOut } from "../supabase/auth"

export default function SignIn(){

    const handleSignInWithGG = ()=>{
        signInWithGoogle();
    }

    const handleSignOut = ()=>{
        signOut();
    }

    return(
        <section>
            <div>
                <button onClick={handleSignInWithGG}>
                    Login with GG
                </button>
                <button onClick={handleSignOut}>
                    Logout
                </button>
            </div>
        </section>
    )
}