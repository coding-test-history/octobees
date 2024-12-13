<script setup>
import { Head } from '@inertiajs/vue3';

// helper
import { handleImageError } from "@/Helpers/Features/Welcome/handleImageError.js";

// feature components
import Header from '@/Components/Features/Welcome/Header.vue';
import Content from '@/Components/Features/Welcome/Content.vue';
import Footer from '@/Components/Features/Welcome/Footer.vue';

// models
import { generalProps, footerProps } from '@/Models/WelcomeModel.js';

// props management
defineProps({ ...generalProps, ...footerProps });
</script>

<template>
    <!-- head -->
    <Head :title="title" />
    <!-- end head -->

    <div class="bg-gray-100 dark:bg-gray-900 text-black/50 dark:text-white/50">
        <img id="background" class="absolute -left-20 top-0 max-w-[877px]"
            src="https://laravel.com/assets/img/welcome/background.svg" />
        <div
            class="relative min-h-screen flex flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
            <div class="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                <!-- header -->
                <Header :can-login="canLogin" :can-register="canRegister" />
                <!-- end header -->

                <!-- content -->
                <main class="mt-6">
                    <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
                        <Content :on-image-error="handleImageError" />
                    </div>
                </main>
                <!-- end content -->

                <!-- footer -->
                <Footer :laravel-version="laravelVersion" :php-version="phpVersion" />
                <!-- end footer -->
            </div>
        </div>
    </div>
</template>
