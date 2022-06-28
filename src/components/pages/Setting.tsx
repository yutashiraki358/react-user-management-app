import { memo, VFC } from "react";
import Button from "@mui/material/Button";

export const Setting: VFC = memo(() => {
  return (
    <>
      <p>設定ページ</p>
      <Button variant="contained">設定完了</Button>
    </>
  );
});
