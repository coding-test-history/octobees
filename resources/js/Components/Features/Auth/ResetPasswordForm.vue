<script setup>
// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useResetPassword from '@/Composables/Features/Auth/useResetPassword.js';

// moodels
import { resetPasswordProps } from "@/Models/AuthModel.js";

// props management
const props = defineProps(resetPasswordProps);

// defined composables
const { form, submit } = useResetPassword(props);
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

        <!-- input password -->
        <div class="mt-4">
            <InputLabel for="password" value="Password" />
            <TextInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required
                autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password" />
        </div>
        <!-- end input password -->

        <!-- input password confirmation -->
        <div class="mt-4">
            <InputLabel for="password_confirmation" value="Confirm Password" />
            <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password"
                class="mt-1 block w-full" required autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password_confirmation" />
        </div>
        <!-- end input password confirmation -->

        <!-- button reset password -->
        <div class="flex items-center justify-end mt-4">
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Reset Password
            </PrimaryButton>
        </div>
        <!-- end button reset password -->
    </form>
</template>