require('dotenv').config()
const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const fs = require('fs');

// directory path
const dir = './processed/';

const {
    TOKEN,
    SERVER_URL,
    STICKER_SET_NAME,
    STICKER_SET_TITLE
} = process.env
const TELEGRAM_API = `https://api.telegram.org/bot${TOKEN}`;
const URI = `/webhook/${TOKEN}`;
const WEBHOOK_URL = SERVER_URL + URI;

const app = express()
app.use(bodyParser.json())
app.use('/images', express.static('images'))

express.static.mime.define({'image/png': ['png']});

const init = async () => {
    const res = await axios.get(`${TELEGRAM_API}/setWebhook?url=${WEBHOOK_URL}`)
    console.log(res.data)
}

// uncomment me, with the chunk of code to post stickers
// let i = 0;

app.post(URI, async (req, res) => {
    const chatId = req.body.message.chat.id;

    // prints the message
    console.log(req.body);

    // // uncomment me, to make new sticker pack.
    // // Note, it's done this way, because tg needs at least one file to make the pack.
    // const fileId = req.body.message.document.file_id;
    // await axios.post(`${TELEGRAM_API}/createNewStickerSet`, {
    //     user_id: chatId,
    //     name: STICKER_SET_NAME,
    //     title: STICKER_SET_TITLE,
    //     png_sticker: fileId, // id of the drag and dropped file
    //     emojis: '❤️'
    // });

    // // uncomment me, to get info about your pack.
    // axios.post(`${TELEGRAM_API}/getStickerSet`, {
    //     name: STICKER_SET_NAME,
    // }).then(({data}) => {
    //     console.log(data.result.stickers);
    // });

    // // uncomment me, and I will send you a single sticker from your new pack
    // const {data: {result: {stickers}}} = await axios.post(`${TELEGRAM_API}/getStickerSet`, {
    //     name: STICKER_SET_NAME,
    // });
    // await axios.post(`${TELEGRAM_API}/sendSticker`, {
    //     chat_id: chatId,
    //     sticker: stickers[0].file_id
    // });

    // // uncomment me, to add sticker. only after making the pack
    // // Note use of _timeout_, so server won't block me for TOO many responses.
    // const fileId = req.body.message.document.file_id;
    // setTimeout(function () {
    //     console.log(`Posted sticker ${fileId}`);
    //     axios.post(`${TELEGRAM_API}/addStickerToSet`, {
    //         user_id: chatId,
    //         name: STICKER_SET_NAME,
    //         png_sticker: fileId, // id of the drag and dropped file
    //         emojis: '❤️'
    //     }).then(() => {
    //         console.log(`Successfully uploaded ${fileId}`);
    //     })
    //     .catch(function (err) {
    //         console.log(err);
    //     });
    // }, i * 2000);

    return res.send();
});

app.listen(process.env.PORT || 3000, async () => {
    console.log('🚀 app running on port', process.env.PORT || 3000)
    await init()
});
