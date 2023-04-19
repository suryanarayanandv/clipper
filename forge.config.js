module.exports = {
  packagerConfig: {
    icon: "./assets/images/icon",
    name: "Clipper",
    all: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        author: "suryanarayanandv",
        description: "Simple clip board",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin", "linux"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        options: {
          maintainer: "suryanarayanandv",
          homepage: "https://github.com/suryanarayanandv/clipper",
        },
      },
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'suryanarayanandv',
          name: 'clipper'
        },
        prerelease: true
      }
    }
  ],
};
