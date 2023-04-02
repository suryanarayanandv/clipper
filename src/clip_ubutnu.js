const { execFile } = require("child_process");

let clipInfo = {
  PREV_CLIP: "",
  CURRENT_CLIP: "",
  CLIP_NEW: false,
};

const content = async () => {
  await execFile("xclip", ["-out", "clipboard"], (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    }
    clipInfo.CURRENT_CLIP = stdout;
    if (clipInfo.PREV_CLIP === clipInfo.CURRENT_CLIP) {
      clipInfo.CLIP_NEW = false;
      // pass
    } else {
      clipInfo.PREV_CLIP = clipInfo.CURRENT_CLIP;
      clipInfo.CLIP_NEW = true;
    }
  });
  return clipInfo;
};

module.exports.clipInfo = content;
