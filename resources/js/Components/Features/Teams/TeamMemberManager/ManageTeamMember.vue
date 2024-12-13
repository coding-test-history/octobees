<script setup>
// section components
import ActionSection from '@/Components/Sections/ActionSection.vue';
import SectionBorder from '@/Components/Sections/SectionBorder.vue';

// Composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// model
import { generalProps, teamMemberManagerProps } from "@/Models/TeamModel.js";

// props management
const props = defineProps({ ...generalProps, ...teamMemberManagerProps });

// team member management
const {
    teamMemberBeingRemoved,
    currentlyManagingRole,
    manageRole,
    confirmTeamMemberRemoval,
    confirmLeavingTeam,
    displayableRole,
} = useTeamMemberManager(props);
</script>

<template>
    <div v-if="team.users.length > 0">
        <SectionBorder />

        <!-- Manage Team Members -->
        <ActionSection class="mt-10 sm:mt-0">
            <template #title>
                Team Members
            </template>

            <template #description>
                All of the people that are part of this team.
            </template>

            <!-- Team Member List -->
            <template #content>
                <div class="space-y-6">
                    <div v-for="user in team.users" :key="user.id" class="flex items-center justify-between">

                        <!-- user profile -->
                        <div class="flex items-center">
                            <img class="size-8 rounded-full object-cover" :src="user.profile_photo_url"
                                :alt="user.name">
                            <div class="ms-4 dark:text-white">
                                {{ user.name }}
                            </div>
                        </div>
                        <!-- end user profile -->

                        <div class="flex items-center">
                            <!-- Manage Team Member Role -->
                            <button v-if="userPermissions.canUpdateTeamMembers && availableRoles.length"
                                class="ms-2 text-sm text-gray-400 underline" @click="manageRole(user)">
                                {{ displayableRole(user.membership.role) }}
                            </button>

                            <div v-else-if="availableRoles.length" class="ms-2 text-sm text-gray-400">
                                {{ displayableRole(user.membership.role) }}
                            </div>
                            <!-- End Manage Team Member Role -->

                            <!-- Leave Team -->
                            <button v-if="$page.props.auth.user.id === user.id"
                                class="cursor-pointer ms-6 text-sm text-red-500" @click="confirmLeavingTeam">
                                Leave
                            </button>
                            <!-- End Leave Team -->

                            <!-- Remove Team Member -->
                            <button v-else-if="userPermissions.canRemoveTeamMembers"
                                class="cursor-pointer ms-6 text-sm text-red-500"
                                @click="confirmTeamMemberRemoval(user)">
                                Remove
                            </button>
                            <!-- End Remove Team Member -->
                        </div>
                    </div>
                </div>
            </template>
        </ActionSection>
    </div>
</template>