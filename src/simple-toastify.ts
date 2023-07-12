import { DefaultProps, Props } from "./interfaces/interfaces.js";
import { Toast } from "./schema/Toast.js";

export const toast = (
  content: String = "Default Message",
  { theme, sleep, position, context }: Props = DefaultProps
) => {
  const toast = new Toast(content, theme, sleep, context, position);
  console.log(toast.Print());
};
