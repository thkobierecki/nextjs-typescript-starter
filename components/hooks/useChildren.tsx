import axios from "axios";
import useSWR from "swr";

const useChild = (id: number) => {
  async function getUser(api: string) {
    try {
      const response = await axios.get(api);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  console.log(id)
  const {
    data: child,
    error,
    mutate,
  } = useSWR(id ? `/api/child/${id}` : null, getUser);
  console.log(child);
  return {
    child,
    error,
    mutate,
  };
};

export default useChild;
