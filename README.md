# Joyas Sol | E-commerce react app
Simple ecommerce react js app with firebase [typescript].

### [Live demo](https://ecommerce-joyassol.web.app/)


## Run Locally
2. cd ecommerce-react/
3. git switch ft_frontend
4. actualizar node a la versión 18
5. sudo npm install --global yarn
6 yarn install
7. npm install -g firebase-tools
8. ejecutar el comando "firebase" para comprobar si se instaló correctamente
9. yarn add firebase@8.4.3
10. crear un archivo .env que tenga lo siguiente:
```
VITE_FIREBASE_API_KEY=***************************
VITE_FIREBASE_AUTH_DOMAIN=ecommerce-joyassol.firebaseapp.com
VITE_FIREBASE_DB_URL=https://ecommerce-joyassol.firebaseio.com/
VITE_FIREBASE_PROJECT_ID=ecommerce-joyassol
VITE_FIREBASE_STORAGE_BUCKET=ecommerce-joyassol.appspot.com
VITE_FIREBASE_MSG_SENDER_ID=1234567890123456
VITE_FIREBASE_APP_ID=*****************************
```
 11. yarn dev

---

## Build the project
```sh
$ yarn build
```

## Deploy the project:

1. yarn install
2. yarn build
3. comprobar funcionamiento con 
```firebase serve --only hosting```

4. firebase deploy --only hosting


## How to add products or perform CRUD operations for Admin
1. Navigate to your site to `/signup`
2. Create an account for yourself
3. Go to your firestore collection `users collection` and edit the account you've just created. Change the role from `USER` to `ADMIN`.
4. Reload or sigin again to see the changes. 

**Firebase Admin to be integrated soon**

## Features

* Admin CRUD operations
* Firebase authentication
* Firebase auth provider authentication
* Account creation and edit

