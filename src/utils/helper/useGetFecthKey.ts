import { useRouter } from "next/router";

// NOTE : url pathname에 따라 key값 관리
export const useGetFetchKey = () => {
  const router = useRouter();
  const fetchKey = router.pathname.toUpperCase();
  return fetchKey;
};
