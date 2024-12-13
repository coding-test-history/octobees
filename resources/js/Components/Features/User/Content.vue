<script setup>
// card components
import Tables from '@/Components/Cards/Tables.vue';

// modal components
import ConfirmationModal from '@/Components/Modals/ConfirmationModal.vue';
import SuccessModal from '@/Components/Modals/SuccessModal.vue';

// forms components
import DangerButton from '@/Components/Form/DangerButton.vue';
import WarningButton from '@/Components/Form/WarningButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// composable
import useUser from '@/Composables/Features/User/useUser.js';

// Manage state and actions for deletion
const {
    users,
    openModalEditUser,
    deleteUserConfirmation,
    confirmingUserDeletion,
    closeModalDeleteUser,
    deleteUserProcess,
    successDialog,
    openSuccessDialog
} = useUser();
</script>

<template>
    <!-- listing user -->
    <Tables>
        <template #thead>
            <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">No</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tanggal
                    Lahir</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tempat
                    Lahir</th>
                <th class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action
                </th>
            </tr>
        </template>
        <template #tbody>
            <tr v-for="(user, index) in users" :key="user.id" class="border-b border-gray-100 dark:border-gray-700">
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ index + 1 }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ user.name }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ user.email }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ user.tanggal_lahir }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{{ user.tempat_tinggal }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm">
                    <WarningButton class="ms-3" @click="openModalEditUser(user.id)">
                        Edit
                    </WarningButton>
                    <DangerButton class="ms-3" @click="deleteUserConfirmation(user.id)">
                        Delete
                    </DangerButton>
                </td>
            </tr>
        </template>
    </Tables>
    <!-- end listing user -->

    <!-- delete user confirmatioin -->
    <ConfirmationModal :show="confirmingUserDeletion" @close="closeModalDeleteUser">
        <!-- title -->
        <template #title>
            Delete User
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you want to delete this user? Once this user account is deleted, all of its resources and
            data will be permanently deleted
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="closeModalDeleteUser">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" @click="deleteUserProcess()">
                Delete User
            </DangerButton>
        </template>
        <!-- end footer -->
    </ConfirmationModal>
    <!-- delete user confirmation -->
     
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
    <!-- delete user confirmation -->
</template>
