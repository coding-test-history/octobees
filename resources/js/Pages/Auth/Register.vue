<script setup>
// vue components
import { Head } from '@inertiajs/vue3';

// card components
import AuthenticationCard from '@/Components/Cards/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/Cards/AuthenticationCardLogo.vue';

// page components
import RegisterForm from '@/Components/Features/Auth/RegisterForm.vue';
</script>

<template>
    <!-- head -->
    <Head title="Register" />
    <!-- end head -->

    <AuthenticationCard>
        <!-- logo -->
        <template #logo>
            <AuthenticationCardLogo />
        </template>
        <!-- end logo -->

        <!-- register form -->
        <RegisterForm />
        <!-- end register form -->
    </AuthenticationCard>
</template>
