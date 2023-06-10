import { MockUserAgent } from "@/persist/client_models";
import { useEffect } from "react";

export const useUserAgent = () => {
  return { userAgent: MockUserAgent };
};
