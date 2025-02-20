# Netflix -gpt 
- Create app using vite
- Tailwind setup using vite
- React router
-Routing
- Sign in /signup form -- library ([formix](https://formik.org/) for recat for large forms)
- Validate the form data 
- To get teh form data( we can use useState or useRef)
- Using useRef hook we will get the reference to html element
- Show Validation using useRef and useState, regex
- AUTHENTICATION USING FIREBASE

npm install firebase
npm install -g firebase-tools
npx firebase login
npx firebase init
npx firebase init hosting - dist 
npm run build
npx firebase deploy --only hosting

https://netflix-gpt-fs.web.app/
-- Deploy using Firebase

-- Sign up functionality
-- GO to docs ==> authentication -->web -->Password Authentication --> createUserwithEMailPassword
-- Sign In ==> signInWithEmailAndPassword api

Once  user is Sign in -- we need to store the details in redux store
