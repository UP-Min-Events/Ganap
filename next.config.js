// const path = require("path");
// const withPWAInit = require("next-pwa");

/** @type {import('next-pwa').PWAConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  // Solution: https://github.com/shadowwalker/next-pwa/issues/424#issuecomment-1399683017
	//   buildExcludes: ["app-build-manifest.json"],
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	swcMinify: true,
	disableSwc: false,
	workboxOptions: {
		disableDevLogs: true,
	}
});

// const generateAppDirEntry = (entry) => {
//   const packagePath = require.resolve('next-pwa');
//   const packageDirectory = path.dirname(packagePath);
//   const registerJs = path.join(packageDirectory, "register.js");

//   return entry().then((entries) => {
//     // Register SW on App directory, solution: https://github.com/shadowwalker/next-pwa/pull/427
//     if (entries["main-app"] && !entries["main-app"].includes(registerJs)) {
//       if (Array.isArray(entries["main-app"])) {
//         entries["main-app"].unshift(registerJs);
//       } else if (typeof entries["main-app"] === "string") {
//         entries["main-app"] = [registerJs, entries["main-app"]];
//       }
//     }
//     return entries;
//   });
// };

const nextConfig = {};

module.exports = withPWA(nextConfig);
