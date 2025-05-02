// Sequence of This Project******************************************
- Create a Vite + React application  
- Remove unnecessary code and create a hello World app  
- Install Tailwind CSS  
- Install Daisy UI  
- Add NavBar component to App.jsx  
- Create a NavBar.jsx separate Component file  
- Install react router dom  
- Create BrowserRouter > Routes > Route=/ Body > RouteChildren  
- Create an Outlet in your Body Component  
- Create a footer  
- Create a Login Page  
- Install axios  
- CORS - install cors in backend ➡️ add middleware to with configurations: origin, credentials:  true  
- Whenever you're making API call so pass axios ➡️ { withCredentials: true }  
- install react-redux @reduxjs/toolkit - https://redux-toolkit.js.org/tutorials/quick-start  
- configureStore ➡️ Provider ➡️ createSlice ➡️ add reducer to store  
- Add redux devtools in chrome  
- Login and see if your data is coming properly in the store  
- NavBar should update as soon as user logs in  
- Refactor our code to add constants file + create a components folder  
- You should not be access other routes without login  
- If token is not present, redirect user to Login page  
- Logout feature
- Get the feed and add the feed in the store
- build the user card on feed
- edit profile feature
- show toast message on save of profile
- New page - see all my connections
- New page - see all my connections request
- Add 3 shimmer for feed , connections and connections requests 
-feature - Accept/Reject connection request
-send/ignore the user card form the feed
-signup new user 
------------------------
---->>Deploy our application using AWS
--> There multiple steps to deploy our app to aws server !(on my notion notes backend Node with Name :- Launching a AWS Instance and Deploying )
------------------------
💳 Razorpay Payment Gateway Integration Steps:-
✅ Basic Setup
    - Sign up on Razorpay & complete KYC.
    - Create a UI for the premium/payment page.
    - Backend: Create an API to create an order.

🔐 Configuration
    - Add your key_id and key_secret in .env file.
    - Initialize Razorpay in your utils or wherever you handle services.

📦 Order Handling
    - Use Razorpay SDK to create order on Razorpay.
    - Create Schema and Model for orders (MongoDB suggested).
    - Save the created order in your payments collection.
    - Make your API dynamic (use proper request body, etc.).

🌐 Webhooks and Validation
    - Setup Razorpay Webhook on your live API to listen for payment events like success, failure, etc.

🔗 References :- 
📘 GitHub: Razorpay Node SDK Docs
📘 Server Integration Guide: Integration with Node.js

🔧 Webhook Validation: Webhook Validate Test
📘 Webhook Payload Docs: Payment Events

----------------------------------






















# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
