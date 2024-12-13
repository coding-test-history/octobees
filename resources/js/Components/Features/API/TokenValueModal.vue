<script setup>
// modal components
import DialogModal from '@/Components/Modals/DialogModal.vue';

// form components
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// models
import { generalProps, tokenValueProps } from "@/Models/ApiModel.js";

// props management
const prop = defineProps({ ...generalProps, ...tokenValueProps });

// api token manager
const { displayingToken } = useApiTokenManager(prop);
</script>


<template>
    <DialogModal :show="displayingToken">
        <!-- title -->
        <template #title>
            API Token
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            <div>
                Please copy your new API token. For your security, it won't be shown again.
            </div>

            <div v-if="$page.props.jetstream.flash.token"
                class="mt-4 bg-gray-100 dark:bg-gray-900 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all">
                {{ $page.props.jetstream.flash.token }}
            </div>
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton>
                Close
            </SecondaryButton>
        </template>
        <!-- end footer -->
    </DialogModal>
</template>