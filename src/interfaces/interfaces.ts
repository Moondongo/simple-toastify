import { Context, Position } from "../types/types";

interface Props {
  theme: String;
  sleep: number;
  position: Position;
  context: Context;
}

const DefaultProps: Props = {
  theme: "default",
  sleep: 6,
  position: "bottom-center",
  context: "default",
};

export { Props, DefaultProps };
