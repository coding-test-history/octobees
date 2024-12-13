<script setup>
// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// model
import { generalProps } from '@/Models/ProfileModel.js';

// composable
import { useUpdatePasswordForm } from '@/Composables/Features/Profile/useUpdatePasswordForm.js';

// props management
defineProps(generalProps);

// update password management
const { passwordInput, currentPasswordInput } = useUpdatePasswordForm();

// expose management
defineExpose({
    passwordInput,
    currentPasswordInput,
});
</script>

<template>
    <!-- input current password -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="current_password" value="Current Password" />
        <TextInput id="current_password" ref="currentPasswordInput" v-model="form.current_password" type="password"
            class="mt-1 block w-full" autocomplete="current-password" />
        <InputError :message="form.errors.current_password" class="mt-2" />
    </div>
    <!-- end input current password -->

    <!-- input password -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="password" value="New Password" />
        <TextInput id="password" ref="passwordInput" v-model="form.password" type="password" class="mt-1 block w-full"
            autocomplete="new-password" />
        <InputError :message="form.errors.password" class="mt-2" />
    </div>
    <!-- end input password -->

    <!-- input password confirmation -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="password_confirmation" value="Confirm Password" />
        <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password"
            class="mt-1 block w-full" autocomplete="new-password" />
        <InputError :message="form.errors.password_confirmation" class="mt-2" />
    </div>
    <!-- end input password confirmation -->
</template>
