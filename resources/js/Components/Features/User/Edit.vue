<script setup>
// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';
import SuccessModal from '@/Components/Modals/SuccessModal.vue';

// forms components
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';
import InputError from '@/Components/Form/InputError.vue';

// composable
import useUser from '@/Composables/Features/User/useUser.js';

// Manage state and actions for deletion
const {
    successDialog,
    openSuccessDialog,
    openCreateNewUserModal,
    closeModalCreateNewUser,
    form,
    createUserProcess
} = useUser();
</script>

<template>
    <!-- sucess modals -->
    <DialogModal :show="openCreateNewUserModal" @close="closeModalCreateNewUser">
        <!-- title -->
        <template #title>
            Edit User
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            <div>
                <TextInput ref="nameInput" v-model="form.name" type="text" class="mt-1 block w-full"
                    placeholder="name" autocomplete="name" />

                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <div class="mt-4">
                <TextInput ref="emailInput" v-model="form.email" type="email" class="mt-1 block w-full"
                    placeholder="email"/>

                <InputError :message="form.errors.email" class="mt-2" />
            </div>

            <div class="mt-4">
                <TextInput ref="passwordInput" v-model="form.password" type="password" class="mt-1 block w-full"
                    placeholder="Password"/>

                <InputError :message="form.errors.password" class="mt-2" />
            </div>

            <div class="mt-4">
                <TextInput ref="tanggalLahirInput" v-model="form.tanggal_lahir" type="date" class="mt-1 block w-full"/>

                <InputError :message="form.errors.tanggal_lahir" class="mt-2" />
            </div>

            <div class="mt-4">
                <TextInput ref="tempatTinggalInput" v-model="form.tempat_tinggal" type="text" class="mt-1 block w-full"
                    placeholder="tempat tinggal"/>

                <InputError :message="form.errors.tempat_tinggal" class="mt-2" />
            </div>
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="closeModalCreateNewUser">
                Close
            </SecondaryButton>

            <PrimaryButton class="ms-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                @click="createUserProcess">
                Create User
            </PrimaryButton>
        </template>
        <!-- end footer -->
    </DialogModal>
    <!-- end success modal -->

    <!-- sucess modals -->
    <SuccessModal :show="openSuccessDialog" @close="openSuccessDialog = false">
        <!-- title -->
        <template #title>
            {{ successDialog.title }}
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            {{ successDialog.message }}
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="openSuccessDialog = false">
                Close
            </SecondaryButton>
        </template>
        <!-- end footer -->
    </SuccessModal>
    <!-- end success modal -->
</template>
