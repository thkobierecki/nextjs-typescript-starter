import axios from "axios";
import useSWR from "swr";
import { useSession } from "next-auth/react";

async function getUser(api:string) {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const useUser = () => {
  //@ts-ignore
  const { data: session } = useSession();
  console.log(session);
  const {
    data: user,
    error,
    mutate,
  } = useSWR(session?.user?.email ? `/api/users/${session.user?.email}` : null, getUser);
console.log(user)
  return {
    user,
    loading: !session,
    error,
    mutate,
  };
};

export default useUser;
