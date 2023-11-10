<h1>Middleware NextAuth Session</h1>

<h3>Description</h3>
This middleware can be used to check permissions/session before the `App Router` has compiled the requested page.
This middleware is not an example of a NextAuth-Middleware. This is a plain middleware that creates a custom request where you can retrieve session data.

<h3>Layout</h3>
Depending on your Project's layout you want to place the `middleware.ts` file in the same directory as the parent of the root /tsx/jsx... file.<br><br>

If you don't have a `/src` folder you need to put the `middleware.ts` file inside of the root directory. (Same level as `/pages`)
If you do have a `/src` folder you need to put the `middleware.ts` file inside of it. (Same level as `/app`)

Install all necessary modules for the middleware to work:
```bash
npm i next/server
npm i next-auth
```

<h3>Copyright</h3>
<p>This project is not subject to copyright restrictions, thereby granting users the freedom to utilize it without constraints regarding time or location.</p>
