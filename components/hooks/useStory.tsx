import axios from "axios";
import useSWR from "swr";

async function getUser(api: string) {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const useStory = (id: number) => {
  const {
    data: story,
    error,
    mutate,
  } = useSWR(id ? `/api/stories/${id}` : null, getUser);
  console.log(story);
  return {
    story,
    error,
    mutate,
  };
};

export default useStory;
