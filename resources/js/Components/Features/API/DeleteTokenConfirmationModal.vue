<script setup>
// modal components
import ConfirmationModal from '@/Components/Modals/ConfirmationModal.vue';

// form components
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import DangerButton from '@/Components/Form/DangerButton.vue';

// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// models
import { generalProps, deleteConfirmationProps } from "@/Models/ApiModel.js";

// props management
const prop = defineProps({ ...generalProps, ...deleteConfirmationProps });

// api token manager
const { deleteApiTokenForm, confirmApiTokenDeletion } = useApiTokenManager(prop);
</script>

<template>
    <ConfirmationModal :show="apiTokenBeingDeleted != null" @close="apiTokenBeingDeleted = null">
        <!-- title -->
        <template #title>
            Delete API Token
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you would like to delete this API token?
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="apiTokenBeingDeleted = null">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" :class="{ 'opacity-25': deleteApiTokenForm.processing }"
                :disabled="deleteApiTokenForm.processing" @click="deleteApiToken">
                Delete
            </DangerButton>
        </template>
        <!-- end footer -->
    </ConfirmationModal>
</template>