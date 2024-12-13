<script setup>
// Section components
import ActionSection from '@/Components/Sections/ActionSection.vue';

// Feature components
import DeleteTeamForm from "@/Components/Features/Teams/DeleteTeamForm.vue";

// Models
import { generalProps } from "@/Models/TeamModel.js";

// Props management
const props = defineProps(generalProps);
</script>

<template>
    <ActionSection>
        <!-- Title -->
        <template #title>
            Delete Team
        </template>
        <!-- End Title -->

        <!-- Description -->
        <template #description>
            Permanently delete this team.
        </template>
        <!-- End Description -->

        <!-- Content -->
        <template #content>
            <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this
                team, please download any data or information regarding this team that you wish to retain.
            </div>

            <DeleteTeamForm :team="props.team" />
        </template>
        <!-- End Content -->
    </ActionSection>
</template>
