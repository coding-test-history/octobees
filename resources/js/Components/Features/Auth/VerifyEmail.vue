<script setup>
// vue components
import { Link } from '@inertiajs/vue3';

// form components
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';

// composable
import useVerifyEmail from '@/Composables/Features/Auth/useVerifyEmail.js'

// models
import { generalProps } from "@/Models/AuthModel.js";

// props management
defineProps(generalProps);
</script>

<template>
    <div class="mt-4 flex items-center justify-between">
        <!-- button resend verification email -->
        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            Resend Verification Email
        </PrimaryButton>
        <!-- end button resend verification email -->

        <div>
            <!-- edit profile -->
            <Link :href="route('profile.show')"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Edit Profile</Link>
            <!-- end edit profile -->

            <!-- logout -->
            <Link :href="route('logout')" method="post" as="button"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2">
            Log Out
            </Link>
            <!-- end logout -->
        </div>
    </div>
</template>