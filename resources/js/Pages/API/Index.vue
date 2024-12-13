<script setup>
// layouts
import AppLayout from '@/Layouts/AppLayout.vue';

// partials
import ApiTokenManager from '@/Pages/API/Partials/ApiTokenManager.vue';

// models
import { titleProps, generalProps } from '@/Models/ApiModel.js';

// props management
defineProps({ ...titleProps, ...generalProps });
</script>

<template>
    <AppLayout :title="title">
        <!-- header -->
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ title }}
            </h2>
        </template>
        <!-- end header -->

        <!-- api token manager -->
        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <ApiTokenManager :tokens="tokens" :available-permissions="availablePermissions"
                    :default-permissions="defaultPermissions" />
            </div>
        </div>
        <!-- end api token manager -->
    </AppLayout>
</template>
