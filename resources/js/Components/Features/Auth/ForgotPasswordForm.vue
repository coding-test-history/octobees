<script setup>
// vue components
import { Link } from '@inertiajs/vue3';

// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useForgotPassword from '@/Composables/Features/Auth/useForgotPassword.js';

// defined composables
const { form, submit } = useForgotPassword();
</script>

<template>
    <form @submit.prevent="submit">
        <!-- input email -->
        <div>
            <InputLabel for="email" value="Email" />
            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus
                autocomplete="username" />
            <InputError class="mt-2" :message="form.errors.email" />
        </div>
        <!-- end input email -->

        <!-- button email password reset -->
        <div class="flex items-center justify-end mt-4">
            <!-- back to login link -->
            <Link :href="route('login')"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Back to login
            </Link>
            <!-- end back to login link -->

            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Email Password Reset Link
            </PrimaryButton>
        </div>
        <!-- end button email password reset -->
    </form>
</template>