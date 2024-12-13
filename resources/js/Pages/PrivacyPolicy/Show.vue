<script setup>
// vue components
import { Head } from '@inertiajs/vue3';

// cards components
import AuthenticationCardLogo from '@/Components/Cards/AuthenticationCardLogo.vue';

// models
import { props } from "@/Models/PrivacyPolicyModel.js";

// props management
defineProps(props);
</script>

<template>
    <!-- head -->
    <Head :title="title" />
    <!-- end head -->

    <!-- content -->
    <div class="font-sans text-gray-900 dark:text-gray-100 antialiased">
        <div class="pt-4 bg-gray-100 dark:bg-gray-900">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <AuthenticationCardLogo />
                </div>

                <div class="w-full sm:max-w-2xl mt-6 p-6 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg prose dark:prose-invert"
                    v-html="policy" />
            </div>
        </div>
    </div>
    <!-- end conten -->
</template>
