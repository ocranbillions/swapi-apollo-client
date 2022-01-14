import { useMemo } from 'react';
import { useLocation } from "react-router-dom";

// A custom hook that builds on useLocation to parse
// url query string.
const useQueryParams = ()  => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

export default useQueryParams;
