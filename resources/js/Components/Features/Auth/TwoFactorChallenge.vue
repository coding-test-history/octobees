<script setup>
// vue components
import { ref } from 'vue';

// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// models
import { generalProps, twoFactorAuthenticationProps } from "@/Models/AuthModel.js";

// props management
defineProps({ ...generalProps, ...twoFactorAuthenticationProps });
</script>

<template>
    <!-- input code -->
    <div v-if="!recovery">
        <InputLabel for="code" value="Code" />
        <TextInput id="code" ref="codeInput" v-model="form.code" type="text" inputmode="numeric"
            class="mt-1 block w-full" autofocus autocomplete="one-time-code" />
        <InputError class="mt-2" :message="form.errors.code" />
    </div>
    <!-- end input code -->

    <!-- input recovery code -->
    <div v-else>
        <InputLabel for="recovery_code" value="Recovery Code" />
        <TextInput id="recovery_code" ref="recoveryCodeInput" v-model="form.recovery_code" type="text"
            class="mt-1 block w-full" autofocus autocomplete="one-time-code" />
        <InputError class="mt-2" :message="form.errors.recovery_code" />
    </div>
    <!-- end input recovery code -->

    <!-- action button -->
    <div class="flex items-center justify-end mt-4">
        <!-- switch button -->
        <button type="button"
            class="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 underline cursor-pointer"
            @click.prevent="toggleRecovery">
            <template v-if="!recovery"> Use a recovery code </template>
            <template v-else> Use an authentication code </template>
        </button>
        <!-- end switch button -->

        <!-- login button -->
        <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
            Log in
        </PrimaryButton>
        <!-- end login button -->
    </div>
    <!-- end action button -->
</template>