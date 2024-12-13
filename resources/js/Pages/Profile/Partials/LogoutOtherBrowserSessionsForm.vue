<script setup>
// action components
import ActionSection from '@/Components/Sections/ActionSection.vue';

// feature components
import LogoutOtherBrowserSessionsForm from '@/Components/Features/Profile/LogoutOtherBrowserSessionsForm.vue';
import OtherBrowserSessions from '@/Components/Features/Profile/OtherBrowserSessions.vue';

// models
import { generalProps } from '@/Models/ProfileModel.js';

defineProps(generalProps);
</script>

<template>
    <ActionSection>
        <!-- title -->
        <template #title>
            Browser Sessions
        </template>
        <!-- end title -->

        <!-- description -->
        <template #description>
            Manage and log out your active sessions on other browsers and devices.
        </template>
        <!-- end description -->

        <template #content>
            <!-- information text -->
            <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                If necessary, you may log out of all of your other browser sessions across all of your devices. Some of
                your recent sessions are listed below; however, this list may not be exhaustive. If you feel your
                account has been compromised, you should also update your password.
            </div>
            <!-- end information text -->

            <!-- Other Browser Sessions -->
            <OtherBrowserSessions :sessions="sessions" />
            <!-- end other browser sessions -->

            <!-- logout other browser sessions form -->
            <LogoutOtherBrowserSessionsForm />
            <!-- end logout other browser sessions form -->
        </template>
    </ActionSection>
</template>
