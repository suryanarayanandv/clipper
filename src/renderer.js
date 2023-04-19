/**
 * Function providing latest copied text
 * create IPC channel
 */
setInterval(async () => {
    message = await clip.updateClip();
    if (message != 'OLD') {
        console.log(message);
    }
}, 2000)