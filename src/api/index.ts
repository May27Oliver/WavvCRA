import pCloudSdk, { oauth, Client } from "pcloud-sdk-js";

export const callPcloud = async () => {
  const client = await pCloudSdk.createClient(
    "lyff7Z0YcKc7ZFlz1YTj9QYkEBVH7LvENmyS9klSX"
  );
  return client;
};

// var access_token = false;
// var locationid = "";
// var client = false;

// function children(metadata: any) {
//   return Promise.resolve(metadata.contents);
// }

// function files(metadata: any) {
//   return children(metadata).then(filter((f) => !f.isfolder));
// }

// function filter(f: any) {
//   return (iterable: any) => {
//     var ret = [];

//     for (var n in iterable) {
//       if (f(iterable[n])) {
//         ret.push(iterable[n]);
//       }
//     }

//     return ret;
//   };
// }

// function length(array: any[]) {
//   return Promise.resolve(array.length);
// }

// function map(f: any[]) {
//   return (array: any[]) => {
//     return Promise.resolve(array.map(f));
//   };
// }

// function size(metadata: any) {
//   return metadata.size;
// }

// function name(metadata: any) {
//   return metadata.name;
// }

// function el(id: any) {
//   return document.getElementById(id);
// }

// function flat(iterable: any) {
//   var ret = 0;
//   for (var n in iterable) {
//     ret += iterable[n];

//     console.log(iterable[n]);
//   }
//   return Promise.resolve(ret);
// }
// function folderSize(folderid) {
//   return client.listfolder(0).then(files).then(map(size)).then(flat);
// }

// function folderItems(folderid) {
//   return client.listfolder(0).then(children).then(map(name));
// }

// function receiveTokenCb(token: string, id: number) {
//   console.log(token, id);
//   const access_token = token;
//   const locationid = id || 1;
//   const client = pCloudSdk.createClient(token);

//   folderSize(0).then((a) => {
//     console.log("Size: ", a);
//   });

//   folderItems(0).then((a) => {
//     console.log("Items: ", a);
//   });
// }

// export const getToken = async () => {
//   const token = await oauth.initOauthToken({
//     client_id: "jSQ1fYVGsfH",
//     redirect_uri: "https://www.google.com.tw/?hl=zh_TW",
//     response_type: "code",
//     receiveToken: (access_token) => {
//       console.log("access_token", access_token);
//     },
//   });
//   pCloudSdk.oauth.popup();
// };

/*
https://api.pcloud.com/oauth2_token?client_id=jSQ1fYVGsfH&client_secret=cmE4jhqpfwpY39fGO3eWCzuuw6L7&code=lyff7ZowCgc7ZERxOQXnsaL71rRaAClSEVHuFOcF7
*/
