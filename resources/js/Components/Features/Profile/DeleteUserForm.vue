<script setup>
// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';

// form components
import DangerButton from '@/Components/Form/DangerButton.vue';
import InputError from '@/Components/Form/InputError.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useDeleteUserForm from "@/Composables/Features/Profile/useDeleteUserForm.js";

// Manage state and actions for deletion
const { confirmingUserDeletion, confirmUserDeletion, deleteUser, closeModal, passwordInput, form } = useDeleteUserForm();
</script>

<template>
    <!-- danger button -->
    <div class="mt-5">
        <DangerButton @click="confirmUserDeletion">
            Delete Account
        </DangerButton>
    </div>
    <!-- end danger button -->

    <DialogModal :show="confirmingUserDeletion" @close="closeModal">
        <!-- title -->
        <template #title>
            Delete Account
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you want to delete your account? Once your account is deleted, all of its resources and
            data will be permanently deleted. Please enter your password to confirm you would like to
            permanently delete your account.

            <div class="mt-4">
                <TextInput ref="passwordInput" v-model="form.password" type="password" class="mt-1 block w-3/4"
                    placeholder="Password" autocomplete="current-password" @keyup.enter="deleteUser" />

                <InputError :message="form.errors.password" class="mt-2" />
            </div>
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="closeModal">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                @click="deleteUser">
                Delete Account
            </DangerButton>
        </template>
        <!-- end footer -->
    </DialogModal>
</template>