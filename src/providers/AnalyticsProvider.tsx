import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import { useScreen } from "../hooks/useScreen";

const trackingId = process.env.EXPO_PUBLIC_TRACKING_ID;

export const AnalyticsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isWeb } = useScreen();

  useEffect(() => {
    if (isWeb && trackingId) {
      ReactGA.initialize(trackingId);
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, [isWeb]);

  return <>{children}</>;
};
