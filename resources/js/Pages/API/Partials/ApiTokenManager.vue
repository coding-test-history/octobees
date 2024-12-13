<script setup>
// feature components
import GenerateAPIToken from '@/Components/Features/API/GenerateAPIToken.vue';
import ManageAPIToken from '@/Components/Features/API/ManageAPIToken.vue';
import TokenValueModal from '@/Components/Features/API/TokenValueModal.vue';
import APITokenPermissionsModal from '@/Components/Features/API/APITokenPermissionsModal.vue';
import DeleteTokenConfirmationModal from '@/Components/Features/API/DeleteTokenConfirmationModal.vue';

// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// models
import { generalProps, APITokenPermissionsProps, deleteConfirmationProps, manageApiTokenProps, tokenValueProps } from '@/Models/ApiModel.js';

// props management
defineProps({
    ...generalProps,
    ...APITokenPermissionsProps,
    ...deleteConfirmationProps,
    ...manageApiTokenProps,
    ...tokenValueProps
});
</script>

<template>
    <div>
        <!-- generate api token section -->
        <GenerateAPIToken :available-permissions="availablePermissions" :default-permissions="defaultPermissions" />
        <!-- end generate api token section -->

        <!-- manage api token section -->
        <ManageAPIToken :tokens="tokens" :available-permissions="availablePermissions"
            :manage-api-token-permissions="manageApiTokenPermissions"
            :confirm-api-token-deletion="confirmApiTokenDeletion" />
        <!-- end manage api token section -->

        <!-- token value modal -->
        <TokenValueModal :displaying-token="displayingToken" />
        <!-- end token value modal -->

        <!-- api token permission modal -->
        <APITokenPermissionsModal v-model="managingPermissionsFor" :available-permissions="availablePermissions" />
        <!-- end api token permission modal -->

        <!-- delete token confirmation modal -->
        <DeleteTokenConfirmationModal />
        <!-- end delete token confirmation modal -->
    </div>
</template>
