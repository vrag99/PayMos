import {
  SignedIn,
  SignInButton,
  SignOutButton,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/ui/spinner";
import { Link } from "react-router-dom";
import styles from './pages.module.css';

export default function Home() {
  const { user, isLoaded } = useUser();
  return (
    <>
      <div
        className={`w-full h-screen flex flex-col gap-2 justify-center items-center ${styles.wave_bg}`}
      >
        <SignedOut>
          <p className="text-xl text-muted-foreground font-semibold">
            Welcome to
          </p>
          <h1 className="text-8xl font-black uppercase text-pink-500">
            Pay<span className="text-yellow-400">Mos</span>
          </h1>
          <p className="text-xl font-semibold text-pink-900/60">
            The one in all fiat currency to AKT solution
          </p>
          <SignInButton>
            <Button
              className="mt-4 bg-gradient-to-tr from-pink-500 from-20% to-yellow-500 font-semibold"
              size={"lg"}
            >
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          {isLoaded && user ? (
            <>
              <h1 className="text-6xl mb-2 font-bold text-pink-400">
                Hi <span className="text-yellow-500">{user.firstName}!</span>
              </h1>
              <p className="text-xl font-medium mb-8 text-muted-foreground">
                You can now start transacting ;)
              </p>
              <Link to="/transac">
                <Button size={"lg"}>Get Started :)</Button>
              </Link>
              <SignOutButton>
                <Button variant={"ghost"}>Sign Out</Button>
              </SignOutButton>
            </>
          ) : (
            <Spinner className="w-6 h-6" />
          )}
        </SignedIn>
      </div>
    </>
  );
}
