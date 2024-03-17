import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useLoginUser = () => {
  return useMutation({
    mutationKey: ["login-user"],
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};
