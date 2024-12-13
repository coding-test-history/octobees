<script setup>
// vue components
import { Head } from '@inertiajs/vue3';

// card components
import AuthenticationCard from '@/Components/Cards/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/Cards/AuthenticationCardLogo.vue';

// page components
import ConfirmPasswordForm from '@/Components/Features/Auth/ConfirmPasswordForm.vue';
</script>

<template>
    <!-- head -->
    <Head title="Secure Area" />
    <!-- end head -->

    <AuthenticationCard>
        <!-- logo -->
        <template #logo>
            <AuthenticationCardLogo />
        </template>
        <!-- end logo -->

        <!-- information text -->
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>
        <!-- end infomation text -->

        <!-- confirm password form -->
        <ConfirmPasswordForm />
        <!-- end confirm password -->
    </AuthenticationCard>
</template>
