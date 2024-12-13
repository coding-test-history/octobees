<script setup>
// vue components
import { Head } from '@inertiajs/vue3';

// card components
import AuthenticationCard from '@/Components/Cards/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/Cards/AuthenticationCardLogo.vue';

// page components
import LoginForm from '@/Components/Features/Auth/LoginForm.vue';

// models
import { generalProps, loginProps } from "@/Models/AuthModel.js";

// props management
defineProps({ ...generalProps, ...loginProps });
</script>

<template>
    <!-- head -->
    <Head title="Log in" />
    <!-- end head -->

    <AuthenticationCard>
        <!-- logo -->
        <template #logo>
            <AuthenticationCardLogo />
        </template>
        <!-- end logo -->

        <!-- status -->
        <div v-if="status" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            {{ status }}
        </div>
        <!-- end status -->

        <!-- login form -->
        <LoginForm :can-reset-password="canResetPassword" />
        <!-- end login form -->
    </AuthenticationCard>
</template>
