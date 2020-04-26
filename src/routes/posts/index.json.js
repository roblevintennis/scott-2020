import { getAllMDIn } from "../../utilities";

export function get(_, res) {
  getAllMDIn(res, "src/content");
}
