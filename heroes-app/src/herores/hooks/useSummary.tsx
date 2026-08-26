import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../actions/get-summary.action";

export const useSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 5,
  });
};
