import styles from "./pages.module.css";
import Spinner from "@/components/ui/spinner";
import { useState } from "react";
import { exchange } from "@/lib/exchange";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function PaymentSuccess() {
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  useEffect(() => {
    async function getUrl() {
      const url = await exchange();
      setUrl(url);
      setLoading(false);
    }
    getUrl();
  }, []);
  return (
    <div
      className={`w-full h-screen flex justify-center items-center ${styles.wave_bg}`}
    >
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-4xl font-semibold text-pink-500">
          Payment Successful
        </h1>
        {loading ? (
          <>
            <p className="text-lg text-muted-foreground">
              Now let the magic happen! 🚀
            </p>
            <Spinner className="w-6 h-6" />
          </>
        ) : (
            <>
          <p className="text-lg text-muted-foreground">
            You can now see the AKT in your wallet! 🚀
          </p>
          <p className="text-lg text-muted-foreground">Tx hash on AxelarScan: <Link className="underline" to={url}>See Here</Link></p>
          </>
        )}
      </div>
    </div>
  );
}
