<script setup>
// vue components
import { Link } from '@inertiajs/vue3';

// form components
import Checkbox from '@/Components/Form/Checkbox.vue';
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useLoginForm from '@/Composables/Features/Auth/useLoginForm.js';

// models
import { loginProps } from "@/Models/AuthModel.js";

// defined composables
const { form, submit } = useLoginForm();

// props management
defineProps(loginProps);
</script>

<template>
    <form @submit.prevent="submit">
        <!-- back to home link -->
        <div class="flex items-center justify-end mt-4">
            <Link :href="'/'"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Back to home
            </Link>
        </div>
        <!-- end back to home link -->

        <!-- input email -->
        <div>
            <InputLabel for="email" value="Email" />
            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus
                autocomplete="username" />
            <InputError class="mt-2" :message="form.errors.email" />
        </div>
        <!-- end input email -->

        <!-- input password -->
        <div class="mt-4">
            <InputLabel for="password" value="Password" />
            <TextInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required
                autocomplete="current-password" />
            <InputError class="mt-2" :message="form.errors.password" />
        </div>
        <!-- end input password -->

        <!-- check remember me -->
        <div class="block mt-4">
            <label class="flex items-center">
                <Checkbox v-model:checked="form.remember" name="remember" />
                <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
        </div>
        <!-- end check remember me -->

        <div class="flex items-center justify-end mt-4">
            <!-- forgot password link -->
            <Link v-if="canResetPassword" :href="route('password.request')"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Forgot your password?
            </Link>
            <!-- end forgot password link -->

            <!-- button login -->
            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Log in
            </PrimaryButton>
            <!-- end button login -->
        </div>
    </form>
</template>