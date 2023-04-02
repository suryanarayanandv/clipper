/**
 * Function providing latest copied text
 * create IPC channel
 */
setInterval(() => {
    message = clip.updateClip();
    if (message != 'OLD') {
        console.log(message);
    }
}, 1000)