<script setup>
// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useConfirmPassword from "@/Composables/Features/Auth/useConfirmPassword.js";

// defined composables
const { form, passwordInput, submit } = useConfirmPassword();
</script>

<template>
    <form @submit.prevent="submit">
        <!-- input password -->
        <div>
            <InputLabel for="password" value="Password" />
            <TextInput id="password" ref="passwordInput" v-model="form.password" type="password"
                class="mt-1 block w-full" required autocomplete="current-password" autofocus />
            <InputError class="mt-2" :message="form.errors.password" />
        </div>
        <!-- end input password -->

        <!-- input confirm password -->
        <div class="flex justify-end mt-4">
            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Confirm
            </PrimaryButton>
        </div>
        <!-- end input confirm password -->
    </form>
</template>