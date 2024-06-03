<template>
    <div>
    <AppHeader/>
    
    <form class="tw-flex tw-flex-col tw-w-1/5 tw-m-auto tw-my-48" method="POST">
        <p class="tw-text-center tw-mb-3"> Авторизация </p>
        <input v-model="email" class="tw-h-10 tw-outline-none" placeholder="Email" type="text" required>
        <input v-model="password" class="tw-h-10 tw-mt-3 tw-outline-none" placeholder="Password" type="Password" required>
        <button class="tw-mt-3 tw-w-30 tw-h-10 tw-border-none tw-cursor-pointer tw-bg-[#245462] tw-text-white hover:tw-bg-white hover:tw-text-[#245462] hover:tw-duration-700"> Войти </button> 
        <a class="tw-mt-3 tw-no-underline" href=""> Нажмите чтобы зарегистрироваться </a>
    </form>

    <Footer/>
    </div>
</template>

<script setup>
// import AppHeader from '../components/AppHeader.vue'
// import Footer from '../components/Footer.vue'
// import { useAuthStore } from '@/store/auth';
// import { ref } from 'vue';

// const email = ref('');
// const password = ref('');


//     const login = async () => {
//       try {
//         await useAuthStore().login(email.value, password.value);
//         // Редирект на защищенную страницу
//       } catch (error) {
//         console.error('Login failed:', error.message);
//       }
//       return { email, password, login };
//     };

    
  




</script>