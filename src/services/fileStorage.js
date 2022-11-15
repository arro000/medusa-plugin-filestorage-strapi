import { FileService } from "medusa-interfaces";
import dns from "node:dns";
import fs from "fs";

dns.setDefaultResultOrder("ipv4first");

class FileStorageService extends FileService {
  constructor({}, options) {
    super();
    this.config = {
      strapiUri: "http://localhost:1337",
      strapiApiKey: "",
      ...options,
    };
  }

  upload(file) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      //fetch upload
      const filename = file.originalname;

      let data = new Blob([fs.readFileSync(file.path)], {
        type: file.mimetype,
      });
      formData.append(`files`, data, filename);
      fetch(this.config.strapiUri + "/api/upload", {
        method: "post",
        headers: {
          Authorization: "bearer " + this.config.strapiApiKey,
          //  "Content-type": "multipart/form-data",
        },
        body: formData,
      })
        .then(async (response) => {
          let res = await response.json();

          resolve({
            url: this.config.strapiUri + res[0].url,
          });
          //fs.unlinkSync(file.path);
        })
        .catch((err) => {
          reject(err);
          //fs.unlinkSync(file.path);
        });
    });
  }

  delete(fileUrl) {
    // The Promise resolve value is ignored
    // throw fileUrl;
    // console.log(fileUrl);
    return Promise.resolve("deleted");
  }
}

export default FileStorageService;
