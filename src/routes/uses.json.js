import fs from "fs";
import path from "path";
import marked from "marked";

const getAllPosts = () => {
  const post = fs.readFileSync(path.resolve("src/uses.md"), "utf-8");
  return marked(post);
};

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  const posts = getAllPosts();
  res.end(JSON.stringify(posts));
}
