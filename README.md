# Medusa-plugin-filestorage-local

Store your images on your strapi server.

## Available options (default configuration)

```js
{
    resolve: `medusa-plugin-filestorage-strapi`,
    options: {
      // The baseurl for your strapi server
      strapiUri: process.env.STRAPI_URI,
       

      // API KEY WITH upload route access in strapi
      strapiApiKey: STRAPI_API_KEY,
    },
}
```
