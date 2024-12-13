<script setup>

// form components
import InputLabel from '@/Components/Form/InputLabel.vue';
import TextInput from '@/Components/Form/TextInput.vue';
import InputError from '@/Components/Form/InputError.vue';

// models
import { twoFactorProps } from '@/Models/ProfileModel.js';

const props = defineProps(twoFactorProps);
</script>

<template>
    <div v-if="twoFactorEnabled">
        <!-- qr code -->
        <div v-if="qrCode">
            <!-- confirming message -->
            <div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                <p v-if="confirming" class="font-semibold">
                    To finish enabling two factor authentication, scan the following QR code using your phone's
                    authenticator application or enter the setup key and provide the generated OTP code.
                </p>

                <p v-else>
                    Two factor authentication is now enabled. Scan the following QR code using your phone's
                    authenticator application or enter the setup key.
                </p>
            </div>
            <!-- end confirming message -->

            <!-- show qr code -->
            <div class="mt-4 p-2 inline-block bg-white" v-html="qrCode" />
            <!-- end show qr code -->

            <!-- setup key -->
            <div v-if="setupKey" class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                <p class="font-semibold">
                    Setup Key: <span v-html="setupKey"></span>
                </p>
            </div>
            <!-- end setup key -->

            <!-- input code -->
            <div v-if="confirming" class="mt-4">
                <InputLabel for="code" value="Code" />

                <TextInput id="code" v-model="confirmationForm.code" type="text" name="code" class="block mt-1 w-1/2"
                    inputmode="numeric" autofocus autocomplete="one-time-code"
                    @keyup.enter="confirmTwoFactorAuthentication" />

                <InputError :message="confirmationForm.errors.code" class="mt-2" />
            </div>
            <!-- end input code -->
        </div>
        <!-- end qr code -->

        <!-- recovery code -->
        <div v-if="recoveryCodes.length > 0 && !confirming">
            <div class="mt-4 max-w-xl text-sm text-gray-600 dark:text-gray-400">
                <p class="font-semibold">
                    Store these recovery codes in a secure password manager. They can be used to recover access to your
                    account if your two factor authentication device is lost.
                </p>
            </div>

            <div
                class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 dark:text-gray-100 rounded-lg">
                <div v-for="code in recoveryCodes" :key="code">
                    {{ code }}
                </div>
            </div>
        </div>
        <!-- end recovery code -->
    </div>
</template>
