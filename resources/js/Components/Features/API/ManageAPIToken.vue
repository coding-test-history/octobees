<script setup>
// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// section components
import SectionBorder from '@/Components/Sections/SectionBorder.vue';
import ActionSection from '@/Components/Sections/ActionSection.vue';

// models
import { generalProps, deleteConfirmationProps, manageApiTokenProps } from '@/Models/ApiModel.js';

// props management
const prop = defineProps({ ...generalProps, ...deleteConfirmationProps, ...manageApiTokenProps });

const { manageApiTokenPermissions, confirmApiTokenDeletion } = useApiTokenManager(prop);
</script>


<template>
    <div v-if="tokens.length > 0">
        <SectionBorder />
        <div class="mt-10 sm:mt-0">
            <ActionSection>
                <template #title>
                    Manage API Tokens
                </template>
                <template #description>
                    You may delete any of your existing tokens if they are no longer needed.
                </template>
                <template #content>
                    <div class="space-y-6">
                        <div v-for="token in tokens" :key="token.id" class="flex items-center justify-between">
                            <div class="break-all dark:text-white">
                                {{ token.name }}
                            </div>
                            <div class="flex items-center ms-2">
                                <div v-if="token.last_used_ago" class="text-sm text-gray-400">
                                    Last used {{ token.last_used_ago }}
                                </div>
                                <button v-if="availablePermissions.length > 0"
                                    class="cursor-pointer ms-6 text-sm text-gray-400 underline"
                                    @click="manageApiTokenPermissions(token)">
                                    Permissions
                                </button>
                                <button class="cursor-pointer ms-6 text-sm text-red-500"
                                    @click="confirmApiTokenDeletion(token)">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </template>
            </ActionSection>
        </div>
    </div>
</template>