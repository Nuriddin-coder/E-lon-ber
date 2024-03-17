import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetAllData = () => {
  return useQuery({
    queryKey: ["all-data"],
    queryFn: () => request.get("/all").then((res) => res.data),
  });
};
