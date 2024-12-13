<script setup>
// section components
import ActionSection from '@/Components/Sections/ActionSection.vue';

// feature components
import DeleteUserForm from '@/Components/Features/Profile/DeleteUserForm.vue';
</script>

<template>
    <ActionSection>
        <!-- title -->
        <template #title>
            Delete Account
        </template>
        <!-- end title -->

        <!-- description -->
        <template #description>
            Permanently delete your account.
        </template>
        <!-- end description -->

        <template #content>
            <!-- information text -->
            <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
                your account, please download any data or information that you wish to retain.
            </div>
            <!-- end information text -->

            <!-- delete user form -->
            <DeleteUserForm />
            <!-- end delete user form -->
        </template>
    </ActionSection>
</template>
