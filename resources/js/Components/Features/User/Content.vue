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
    openSuccessDialog,
    isEditUserModalOpen,
    closeEditUserModal,
    editUserProcess,
    selectedUser,
    form,
    pagination,
    fetchUsers,
    changePage,
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

    <!-- Pagination -->
    <div class="mt-4 flex justify-between items-center">
        <button class="px-4 py-2 bg-gray-700 text-white rounded" :disabled="pagination.current_page === 1"
            @click="changePage(pagination.current_page - 1)">
            Previous
        </button>

        <span class="text-white">
            Page {{ pagination.current_page }} of {{ pagination.last_page }}
        </span>

        <button class="px-4 py-2 bg-gray-700 text-white rounded"
            :disabled="pagination.current_page === pagination.last_page"
            @click="changePage(pagination.current_page + 1)">
            Next
        </button>
    </div>

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

    <!-- Modal Edit User -->
    <div v-if="isEditUserModalOpen && selectedUser" class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen">
            <div class="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg">
                <h2 class="text-lg font-semibold mb-4">Edit User</h2>
                <form @submit.prevent="editUserProcess">
                    <div class="mb-4">
                        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                        <input v-model="form.name" type="text" id="name"
                            class="mt-1 block w-full border rounded-md p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input v-model="form.email" type="email" id="email"
                            class="mt-1 block w-full border rounded-md p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="tanggal_lahir" class="block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                        <input v-model="form.tanggal_lahir" type="date" id="tanggal_lahir"
                            class="mt-1 block w-full border rounded-md p-2" />
                    </div>
                    <div class="mb-4">
                        <label for="tempat_tinggal" class="block text-sm font-medium text-gray-700">Tempat
                            Tinggal</label>
                        <input v-model="form.tempat_tinggal" type="text" id="tempat_tinggal"
                            class="mt-1 block w-full border rounded-md p-2" />
                    </div>
                    <div class="flex justify-end">
                        <button type="button" @click="closeEditUserModal"
                            class="px-4 py-2 bg-gray-300 rounded-md mr-2">Cancel</button>
                        <button type="submit" class="px-4 py-2 bg-blue-500 text-white rounded-md">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
