import debounce from "lodash.debounce";
import styles from "./index.module.css";
import { Input } from "@chakra-ui/react";
import { useCallback } from "react";

interface Props {
  onSearch: (searched: string) => void;
}

export default function Search({ onSearch }: Props) {
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch && onSearch(event.target.value);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 300), []);

  return (
    <div className={styles.search}>
      <Input
        className={styles.input}
        placeholder="Search"
        onChange={debouncedChangeHandler}
      />
    </div>
  );
}
