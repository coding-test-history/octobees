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
const { cancelTeamInvitation } = useTeamMemberManager(props);
</script>

<template>
    <div v-if="team.team_invitations.length > 0 && userPermissions.canAddTeamMembers">
        <SectionBorder />
        <!-- Team Member Invitations -->
        <ActionSection class="mt-10 sm:mt-0">
            <!-- title -->
            <template #title>
                Pending Team Invitations
            </template>
            <!-- end title -->

            <!-- description -->
            <template #description>
                These people have been invited to your team and have been sent an invitation email. They may join
                the team by accepting the email invitation.
            </template>
            <!-- end discription -->

            <!-- Pending Team Member Invitation List -->
            <template #content>
                <div class="space-y-6">
                    <div v-for="invitation in team.team_invitations" :key="invitation.id"
                        class="flex items-center justify-between">
                        <div class="text-gray-600 dark:text-gray-400">
                            {{ invitation.email }}
                        </div>

                        <div class="flex items-center">
                            <!-- Cancel Team Invitation -->
                            <button v-if="userPermissions.canRemoveTeamMembers"
                                class="cursor-pointer ms-6 text-sm text-red-500 focus:outline-none"
                                @click="cancelTeamInvitation(invitation)">
                                Cancel
                            </button>
                            <!-- End Cancel Team Invitation -->
                        </div>
                    </div>
                </div>
            </template>
            <!-- End Pending Team Member Invitation List -->
        </ActionSection>
        <!-- End Team Member Invitations -->
    </div>
</template>