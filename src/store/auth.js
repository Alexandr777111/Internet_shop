// import { defineStore } from 'pinia';

// export default useAuthStore = defineStore({
//     id: 'auth',
//     state: () => ({
//       isAuthenticated: false,
//       user: null,
//     }),
//     actions: {
//       async login(email, password) {
//         try {
//           const response = await fetch('https://5c4ca82f846fcc36.mokky.dev/auth', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({ email, password }),
//           });
  
//           if (!response.ok) {
//             throw new Error('Login failed');
//           }
  
//           else {
//           const data = await response.json();
//             this.isAuthenticated = true;
//             this.user = data.user 
//               }
//           }

//           catch (error) {
//           console.error('Login error:', error);
//           throw error;
//         }
//       },
//           },
//           async register(email, password) {
//             try {
//               const response = await fetch('https://5c4ca82f846fcc36.mokky.dev/register', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ email, password }),
//               });
      
//               if (!response.ok) {
//                 throw new Error('Registration failed');
//               }
//               else {
//               const data = await response.json();
//               this.isAuthenticated = true;
//               this.user = data.user }
//             }

//               catch (error) {
//               console.error('Registration error:', error);
//               throw error;
//             }
//           },
//         logout() {
//           this.isAuthenticated = false;
//           this.user = null;
//         }
    
// });