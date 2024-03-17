import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const usePostAnnoun = () => {
  return useMutation({
    mutationKey: ["announ-data"],
    mutationFn: (data) =>
      request.post(`${data.category}`, data).then((res) => res.data),
  });
};
