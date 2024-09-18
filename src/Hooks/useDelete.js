import { useMutation } from "react-query";
import { toast } from "react-toastify";
import serverAPI from "../config/serverAPI";
import errorHandle from "../utils/errorHandle";

export function useDelete({ url, name, refetch }) {
  const deleteItems = (ids) => {
    return serverAPI.delete(url, {
      data: { ids }, // Send the array of IDs in the request body
    });
  };

  return useMutation(deleteItems, {
    onSuccess: () => {
      toast.success(`${name} Deleted Successfully`);
      refetch && refetch();
    },
    onError: (error) => {
      errorHandle(error);
    },
  });
}
