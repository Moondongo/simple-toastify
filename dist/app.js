import { DefaultProps } from "./interfaces/interfaces.js";
import { Toast } from "./schema/Toast.js";
const toast = (content = "Default Message", { theme, sleep, position, context } = DefaultProps) => {
    const toast = new Toast(content, theme, sleep, context, position);
    console.log(toast.Print());
};
toast();
