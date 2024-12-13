<script setup>
// vue components
import AppLayout from '@/Layouts/AppLayout.vue';

// partials
import DeleteTeamForm from '@/Pages/Teams/Partials/DeleteTeamForm.vue';
import TeamMemberManager from '@/Pages/Teams/Partials/TeamMemberManager.vue';
import UpdateTeamNameForm from '@/Pages/Teams/Partials/UpdateTeamNameForm.vue';

// section components
import SectionBorder from '@/Components/Sections/SectionBorder.vue';

// models
import { generalProps, titleProps } from "@/Models/TeamModel.js";

// props management
defineProps({...generalProps, ...titleProps});
</script>

<template>
    <AppLayout :title="title">
        <!-- title -->
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {{ title }}
            </h2>
        </template>
        <!-- end title -->

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <!-- update team form -->
                <UpdateTeamNameForm :team="team" :permissions="permissions" />
                <!-- end update team form -->

                <!-- team member manager -->
                <TeamMemberManager class="mt-10 sm:mt-0" :team="team" :available-roles="availableRoles"
                    :user-permissions="permissions" />
                <!-- end team member manager -->

                <!-- delete team form -->
                <template v-if="permissions.canDeleteTeam && !team.personal_team">
                    <SectionBorder />
                    <DeleteTeamForm class="mt-10 sm:mt-0" :team="team" />
                </template>
                <!-- end delete team form -->
            </div>
        </div>
    </AppLayout>
</template>
