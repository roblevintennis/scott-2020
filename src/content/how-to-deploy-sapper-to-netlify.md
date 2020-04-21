---
slug: "how-to-deploy-sapper-to-netlify"
title: "How To Deploy Sapper To Netlify"
tags: ["svelte", "javascript"]
---

This site is built with Sapper / Svelte and deployed by generating statically.

I just wanted to share the process that I did to deploy it there.

### Prerequisets

- Basic Sapper skills
- A Sapper project
- A positive attitude

### How to deploy Sapper to Netlify

Update the build command in your package.json to look like this. So that after statically building your site, your export folder is moved into the root as public.

package.json

```js
  "scripts": {
		...
		"build": "sapper export && mv ./__sapper__/export ./public",
		...
  },
```

Next, we just need to commit and push to Github (or whatever version control you're using).
