import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

// NOTE : 커스텀 useQuery 구현부
export const useQueryFetch = <TOptions>({
  key,
  method,
  queryOption,
}: {
  key: (string | number)[];
  // NOTE : GET or POST
  method: () => void;
  option?: TOptions;
  queryOption?: UseQueryOptions;
  mapper?: (data: AxiosResponse["data"]) => void;
}) => {
  return useQuery({
    queryKey: key,
    queryFn: () => method(),
    enabled: queryOption?.enabled,
  });
};
