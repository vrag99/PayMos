import styles from "./pages.module.css";
import { SignInButton } from "@clerk/clerk-react";

export default function Home() {
  return (
    <>
      <div
        className={`w-full h-screen flex flex-col gap-2 justify-center items-center ${styles.waves_bg}`}
      >
        <p className="text-xl text-muted-foreground font-semibold">
          Welcome to
        </p>
        <h1 className="text-8xl font-black uppercase text-pink-500">
          Pay<span className="text-yellow-400">Mos</span>
        </h1>
        <p className="text-xl font-semibold text-pink-900/60">The one in all fiat currency to AKT solution</p>
        <SignInButton>Sign in</SignInButton>
      </div>
    </>
  );
}
