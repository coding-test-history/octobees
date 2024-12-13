<script setup>
// vue components
import { Head } from '@inertiajs/vue3';

// card components
import AuthenticationCard from '@/Components/Cards/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/Cards/AuthenticationCardLogo.vue';

// feature components
import VerifyEmail from '@/Components/Features/Auth/VerifyEmail.vue';

// composables
import useVerifyEmail from '@/Composables/Features/Auth/useVerifyEmail.js'

// models
import { generalProps } from "@/Models/AuthModel.js";

// props management
const props = defineProps(generalProps);

// very email management
const { form, verificationLinkSent, submit } = useVerifyEmail(props);
</script>

<template>
    <!-- head -->
    <Head title="Email Verification" />
    <!-- end head -->

    <AuthenticationCard>
        <!-- logo -->
        <template #logo>
            <AuthenticationCardLogo />
        </template>
        <!-- end logo -->

        <!-- information  text -->
        <div class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Before continuing, could you verify your email address by clicking on the link we just emailed to you? If
            you didn't
            receive the email, we will gladly send you another.
        </div>
        <!-- end information text -->

        <!-- status sent -->
        <div v-if="verificationLinkSent" class="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
            A new verification link has been sent to the email address you provided in your profile settings.
        </div>
        <!-- end status sent -->

        <!-- form verify email -->
        <form @submit.prevent="submit">
            <VerifyEmail :verificaton-link-sent="verificationLinkSent" :form="form" />
        </form>
        <!-- end form verify email -->
    </AuthenticationCard>
</template>
