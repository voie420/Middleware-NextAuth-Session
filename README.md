Depending on your Project's layout you want to place the 'middleware.ts' file in the same directory as the parent of the root /tsx/jsx... file.

If you don't have a `/src` folder you need to put the `middleware.ts` file inside of the root directory. (Same level as `/pages`)
If you do have a `/src` folder you need to put the `middleware.ts` file inside of it. (Same level as `/app`)

Install all necessary modules for the middleware to work:
```bash
npm i next/server
npm i next-auth
```
'http' module is built in therefore it doesn't need to be installed
