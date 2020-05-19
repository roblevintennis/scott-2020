---
layout: blog
title: How To Deploy To Meteor Galaxy With Github Actions
date: 2020-05-18T23:38:32.793Z
---
 TLDR; you need to encrypt your settings.json file as well as your deployToken.json before pushing. Write a script to decrypt them and then use them in your `meteor deploy` command.

Ok, let's get into it.

### Step 1

Encrypt your settings.json and your token file. If you don't have a deploy token, please consult the galaxy docs. https://galaxy-guide.meteor.com/deploy-guide.html#deployment-token

To encrypt your files run `gpg --symmetric --cipher-algo AES256 settings.json` as well as the same command on your token file. My token was token.json, so I ran.
`gpg --symmetric --cipher-algo AES256 token.json`

### Step 2

Write your decrypt script and put it in the folder `./.github/scripts/`

```
#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output $HOME/secrets/settings.json settings.json.gpg

gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output $HOME/secrets/token.json token.json.gpg
```

