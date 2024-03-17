import { request } from "../../../config/request";
import { useMutation } from "@tanstack/react-query";

export const useCreateUser = () => {
  return useMutation({
    mutationKey: ["user-post"],
    mutationFn: (data) =>
      request.post("/register", data).then((res) => res.data),
  });
};
