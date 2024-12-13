<script setup>
// models
import { twoFactorProps } from '@/Models/ProfileModel.js';

const props = defineProps(twoFactorProps);
</script>

<template>
    <!-- two factor enabled -->
    <h3 v-if="twoFactorEnabled && !confirming" class="text-lg font-medium text-gray-900 dark:text-gray-100">
        You have enabled two factor authentication.
    </h3>
    <!-- end two factor disabled -->

    <!-- two factor finish enabled -->
    <h3 v-else-if="twoFactorEnabled && confirming" class="text-lg font-medium text-gray-900 dark:text-gray-100">
        Finish enabling two factor authentication.
    </h3>
    <!-- end two factor finish enabled -->

    <!-- two factor not enabled -->
    <h3 v-else class="text-lg font-medium text-gray-900 dark:text-gray-100">
        You have not enabled two factor authentication.
    </h3>
    <!-- end two factor not enabled -->

    <!-- default -->
    <div class="mt-3 max-w-xl text-sm text-gray-600 dark:text-gray-400">
        <p>
            When two factor authentication is enabled, you will be prompted for a secure, random token during
            authentication. You may retrieve this token from your phone's Google Authenticator application.
        </p>
    </div>
    <!-- end default -->
</template>