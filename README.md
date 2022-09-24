Hi, this is a tiny guide on how to use the code. Feel free, to open PRs and issues to this repo.

First do to get all the packages.
```
npm i
```

If you have any jpg files, that need to be resized and converted to PNGs, drop them to
```
.
|--images
```
and run command, which will make your files ready to be uploaded to tg.
```
npm run convert
```
You can modify the code for image processsing. Note: it's not lowering the image quality, so if you end up with files bigger than 512kb after the conversion, either fix it manually or modify image.js to handle that too.

Now you need to [make a bot](https://core.telegram.org/bots#3-how-do-i-create-a-bot). After you get the token, add it to the `.env`  file in this directory.

Install [ngrok](https://ngrok.com/download), if you don't have one.

After installing, make sure to save authtoken to config file by running
```
ngrok authtoken YOUR_TOKEN_HERE
```

Once, that is done, run the ngrok server by calling

```
ngrok http 3000
```

which will give you Forwarding https link, get that and add to the `.env` in this directory.

Don't forget to add `STICKER_SET_NAME` and `STICKER_SET_TITLE` in the `.env` file.

Run the local server, with
```
npm run dev
```

After completing all this steps, we are ready to actually add the stickers. Note, you have to concurently uncomment some parts of the code to make this work and server will update itself automatically.

Step 1. Uncomment part for making new sticker pack and send one picture to the bot (uncompressed format). Congratulations, you've made your first sticker pack.

Step 2. Comment part for making new sticers, and uncomment part which will send you one sticker. Bot will send you the newly created sticker pack and you can add it to your library.

Step 3. Comment part so bot won't send you stickers, and uncomment part for adding remaining stickers. Now all you have to do, just drag and drop aaaaaall of your sticker pngs to the bot and send. It may take from 20 mins up to an hour (based on how many stickers you are adding), but everything will be added eventually. Note: even after one hour your stickers may not show up, just restart the tg app, it's may be caching.

CONGRATULATIONS YOU FINISHED THIS ADVENTURE!!!

p. s. if you have any questions
 * (link for setting up the tg bot)[https://youtu.be/IlsygSzikOQ]
 * (link for setting up the ngrok)[https://youtu.be/-kXrLMnh90s]
 * (link to tg api for stickers)[https://core.telegram.org/bots/api#stickers]

if you still have question, email me.
