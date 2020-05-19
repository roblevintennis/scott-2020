---
layout: blog
title: How To Deploy To Meteor Galaxy With Github Actions
date: 2020-05-18T23:38:32.793Z
---

TLDR; you need to encrypt your settings.json file as well as your deployToken.json before pushing. Write a script to decrypt them and then use them in your `meteor deploy` command.

Ok, let's get into it.

### Step 1 - Encrypt files

Encrypt your settings.json and your token file. If you don't have a deploy token, please consult the galaxy docs. https://galaxy-guide.meteor.com/deploy-guide.html#deployment-token

To encrypt your files run `gpg --symmetric --cipher-algo AES256 settings.json` as well as the same command on your token file. My token was token.json, so I ran.
`gpg --symmetric --cipher-algo AES256 token.json`

### Step 2 - Create decrypt script

Write your decrypt script and put it in the folder `./.github/scripts/`

Mine is named `decrypt.sh`

```bash
#!/bin/sh

# Decrypt the file
mkdir $HOME/secrets
# --batch to prevent interactive command --yes to assume "yes" for questions
gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output $HOME/secrets/settings.json settings.json.g#pg

gpg --quiet --batch --yes --decrypt --passphrase="$PASS" \
--output $HOME/secrets/token.json token.json.gpg
```

### Step 3 - Make sure script is executable

`chmod +x decrypt.sh`

After this is done, commit all your filed to git

### Step 4 - Complete your github action

Here is mine. I won't go through the basics of setting up a gh action, but here it is.

```yml
name: Deploy
on:
  push:
    branches: [master]
  pull_request:
    branches: [master]
jobs:
  setup_meteor:
    runs-on: ubuntu-16.04
    steps:
      - uses: actions/checkout@v2
      - name: Decrypt large secret
        run: ./.github/scripts/decrypt.sh
        env:
          PASS: ${{ secrets.PASS }}
      - name: Checkout
        uses: actions/checkout@v1
      - name: Setup Meteor
        uses: meteorengineer/setup-meteor@v1
        with:
          meteor-release: "1.10.1"
      - run: yarn install
      - name: Meteor Deploy
        run: METEOR_SESSION_FILE=$HOME/secrets/token.json meteor deploy www.yourwebsite.com --settings $HOME/secrets/settings.json
```

### Step 5 - Add your secret to Github

https://help.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets

Ours in this example is named `PASS` so please make sure your code reflects the name of your secret. ie if you named yours something different, swap the word PASS everywhere you see it here.

### Step 6 - PUSH

Push that repo up and watch as it deploys. If you hit any issues check the error logs in Github actions. I found them to be totally helpful in troubleshooting when something went wrong.
