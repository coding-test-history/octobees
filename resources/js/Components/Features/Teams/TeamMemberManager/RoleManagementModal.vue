<script setup>
// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';

// form components
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// Composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// model
import { generalProps } from "@/Models/TeamModel.js";

// props management
const props = defineProps(generalProps);

// team member management
const {
    currentlyManagingRole,
    managingRoleFor,
    updateRoleForm,
    updateRole,
} = useTeamMemberManager(props);
</script>

<template>
    <DialogModal :show="currentlyManagingRole" @close="currentlyManagingRole = false">
        <!-- title -->
        <template #title>
            Manage Role
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            <div v-if="managingRoleFor">
                <div class="relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">
                    <button v-for="(role, i) in availableRoles" :key="role.key" type="button"
                        class="relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                        :class="{ 'border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none': i > 0, 'rounded-b-none': i !== Object.keys(availableRoles).length - 1 }"
                        @click="updateRoleForm.role = role.key">
                        <div :class="{ 'opacity-50': updateRoleForm.role && updateRoleForm.role !== role.key }">
                            <!-- Role Name -->
                            <div class="flex items-center">
                                <div class="text-sm text-gray-600 dark:text-gray-400"
                                    :class="{ 'font-semibold': updateRoleForm.role === role.key }">
                                    {{ role.name }}
                                </div>

                                <svg v-if="updateRoleForm.role == role.key" class="ms-2 size-5 text-green-400"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <!-- End Role Name -->

                            <!-- Role Description -->
                            <div class="mt-2 text-xs text-gray-600 dark:text-gray-400">
                                {{ role.description }}
                            </div>
                            <!-- End Role Description -->
                        </div>
                    </button>
                </div>
            </div>
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="currentlyManagingRole = false">
                Cancel
            </SecondaryButton>

            <PrimaryButton class="ms-3" :class="{ 'opacity-25': updateRoleForm.processing }"
                :disabled="updateRoleForm.processing" @click="updateRole">
                Save
            </PrimaryButton>
        </template>
        <!-- end footer -->
    </DialogModal>
</template>