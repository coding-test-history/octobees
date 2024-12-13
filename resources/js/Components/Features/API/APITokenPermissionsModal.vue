<script setup>
// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';

// form components
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import Checkbox from '@/Components/Form/Checkbox.vue';

// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// models
import { generalProps, APITokenPermissionsProps } from "@/Models/ApiModel.js";

// props management
const prop = defineProps({ ...generalProps, ...APITokenPermissionsProps });

// api token manager
const { updateApiTokenForm, updateApiToken } = useApiTokenManager(prop);
</script>

<template>
    <DialogModal :show="managingPermissionsFor != null" @close="managingPermissionsFor = null">
        <!-- title -->
        <template #title>
            API Token Permissions
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="permission in availablePermissions" :key="permission">
                    <label class="flex items-center">
                        <Checkbox v-model:checked="updateApiTokenForm.permissions" :value="permission" />
                        <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ permission }}</span>
                    </label>
                </div>
            </div>
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="managingPermissionsFor = null">
                Cancel
            </SecondaryButton>

            <PrimaryButton class="ms-3" :class="{ 'opacity-25': updateApiTokenForm.processing }"
                :disabled="updateApiTokenForm.processing" @click="updateApiToken">
                Save
            </PrimaryButton>
        </template>
        <!-- end footer -->
    </DialogModal>
</template>