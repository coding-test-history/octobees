<script setup>
// message components
import ActionMessage from '@/Components/Messages/ActionMessage.vue';

// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';

// form components
import InputError from '@/Components/Form/InputError.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useLogoutOtherBrowserSessionsForm from "@/Composables/Features/Profile/useLogoutOtherBrowserSessionsForm.js";

// Manage state and actions for deletion
const { confirmingLogout, confirmLogout, logoutOtherBrowserSessions, closeModal, form, passwordInput } = useLogoutOtherBrowserSessionsForm();
</script>

<template>
    <!-- confirm logout -->
    <div class="flex items-center mt-5">
        <PrimaryButton @click="confirmLogout">
            Log Out Other Browser Sessions
        </PrimaryButton>

        <ActionMessage :on="form.recentlySuccessful" class="ms-3">
            Done.
        </ActionMessage>
    </div>
    <!-- end confirm logout -->

    <!-- Log Out Other Devices Confirmation Modal -->
    <DialogModal :show="confirmingLogout" @close="closeModal">
        <template #title>
            Log Out Other Browser Sessions
        </template>

        <!-- psasword input -->
        <template #content>
            Please enter your password to confirm you would like to log out of your other browser sessions across all of
            your devices.

            <div class="mt-4">
                <TextInput ref="passwordInput" v-model="form.password" type="password" class="mt-1 block w-3/4"
                    placeholder="Password" autocomplete="current-password" @keyup.enter="logoutOtherBrowserSessions" />

                <InputError :message="form.errors.password" class="mt-2" />
            </div>
        </template>
        <!-- end password input -->

        <!-- logout button -->
        <template #footer>
            <SecondaryButton @click="closeModal">
                Cancel
            </SecondaryButton>

            <PrimaryButton class="ms-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                @click="logoutOtherBrowserSessions">
                Log Out Other Browser Sessions
            </PrimaryButton>
        </template>
        <!-- end logout button -->
    </DialogModal>
    <!-- end Log Out Other Devices Confirmation Modal -->
</template>