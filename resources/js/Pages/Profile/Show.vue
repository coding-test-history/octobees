<script setup>
// layouts
import AppLayout from '@/Layouts/AppLayout.vue';

// partials
import DeleteUserForm from '@/Pages/Profile/Partials/DeleteUserForm.vue';
import LogoutOtherBrowserSessionsForm from '@/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue';
import TwoFactorAuthenticationForm from '@/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';

// section components
import SectionBorder from '@/Components/Sections/SectionBorder.vue';

// card components
import Breadcrumb from '@/Components/Cards/Breadcrumb.vue';

// models
import { generalProps } from '@/Models/ProfileModel.js';

// props management
defineProps(generalProps);
</script>

<template>
    <AppLayout :title="title">
        <!-- header -->
        <template #header>
            <Breadcrumb :title="title" />
        </template>
        <!-- end header -->

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <!-- update profile information form -->
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <UpdateProfileInformationForm :user="$page.props.auth.user" />
                    <SectionBorder />
                </div>
                <!-- end update profile information form -->

                <!-- update password form -->
                <div v-if="$page.props.jetstream.canUpdatePassword">
                    <UpdatePasswordForm class="mt-10 sm:mt-0" />
                    <SectionBorder />
                </div>
                <!-- end update password form -->

                <!-- two factor authentication form -->
                <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
                    <TwoFactorAuthenticationForm :requires-confirmation="confirmsTwoFactorAuthentication"
                        class="mt-10 sm:mt-0" />
                    <SectionBorder />
                </div>
                <!-- end two factor authentication form -->

                <!-- browser session -->
                <LogoutOtherBrowserSessionsForm :sessions="sessions" class="mt-10 sm:mt-0" />
                <!-- end browser session -->

                <!-- delete user form -->
                <template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
                    <SectionBorder />
                    <DeleteUserForm class="mt-10 sm:mt-0" />
                </template>
                <!-- end delete user form -->
            </div>
        </div>
    </AppLayout>
</template>
