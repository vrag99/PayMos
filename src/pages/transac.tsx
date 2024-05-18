import { TransakConfig, Transak } from "@transak/transak-sdk";
import { useNavigate } from "react-router-dom";

export default function Transac() {
  const transakConfig: TransakConfig = {
    apiKey: import.meta.env.VITE_TRANSAC_API_KEY, // (Required)
    environment: Transak.ENVIRONMENTS.STAGING, // (Required)
    // .....
    // For the full list of customisation options check the link below
  };

  const navigate = useNavigate();
  const transak = new Transak(transakConfig);

  transak.init();

  // To get all the events
  Transak.on("*", (data) => {
    console.log(data);
  });

  // This will trigger when the user closed the widget
  Transak.on(Transak.EVENTS.TRANSAK_WIDGET_CLOSE, () => {
    console.log("Transak SDK closed!");
  });

  /*
   * This will trigger when the user has confirmed the order
   * This doesn't guarantee that payment has completed in all scenarios
   * If you want to close/navigate away, use the TRANSAK_ORDER_SUCCESSFUL event
   */
  Transak.on(Transak.EVENTS.TRANSAK_ORDER_CREATED, (orderData) => {
    console.log(orderData);
  });

  /*
   * This will trigger when the user marks payment is made
   * You can close/navigate away at this event
   */
  Transak.on(Transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    navigate('/payment-success');
    transak.close();
  });

  return <></>;
}
