# Medusa-plugin-filestorage-local

Store your images on your strapi server.

## Available options (default configuration)

```js
{
    resolve: `medusa-plugin-filestorage-strapi`,
    options: {
      // The baseurl for your strapi server
      strapiUri: process.env.STRAPI_URI || "http://localhost:1337",
       

      // API KEY with upload routes permissions in strapi
      strapiApiKey: process.env.STRAPI_API_KEY || "",
    },
}
```
