<script setup>
// features components
import AddTeamMember from "@/Components/Features/Teams/TeamMemberManager/AddTeamMember.vue";
import LeaveTeamConfirmationModal from "@/Components/Features/Teams/TeamMemberManager/LeaveTeamConfirmationModal.vue";
import ManageTeamMember from "@/Components/Features/Teams/TeamMemberManager/ManageTeamMember.vue";
import RemoveTeamMemberConfirmationModal from "@/Components/Features/Teams/TeamMemberManager/RemoveTeamMemberConfirmationModal.vue";
import RoleManagementModal from "@/Components/Features/Teams/TeamMemberManager/RoleManagementModal.vue";
import TeamMemberInvitation from "@/Components/Features/Teams/TeamMemberManager/TeamMemberInvitation.vue";

// model
import { generalProps, titleProps, teamMemberManagerProps } from "@/Models/TeamModel.js";

// composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// props management
const props = defineProps({ ...generalProps, ...titleProps, ...teamMemberManagerProps });

// Composable setup
const {
    page,
    addTeamMemberForm,
    updateRoleForm,
    leaveTeamForm,
    removeTeamMemberForm,
    currentlyManagingRole,
    managingRoleFor,
    confirmingLeavingTeam,
    teamMemberBeingRemoved,
    addTeamMember,
    cancelTeamInvitation,
    manageRole,
    updateRole,
    confirmLeavingTeam,
    leaveTeam,
    confirmTeamMemberRemoval,
    removeTeamMember,
    displayableRole,
} = useTeamMemberManager(props);
</script>

<template>
    <div>
        <!-- add team member manager -->
        <AddTeamMember
            :addTeamMemberForm="addTeamMemberForm"
            :addTeamMember="addTeamMember"
            :availableRoles="availableRoles"
            :userPermissions="userPermissions"
            :team="props.team"
            :permissions="props.permissions"
        />
        <!-- end add team member manager -->

        <!-- team member invitation -->
        <TeamMemberInvitation
            :team="team"
            :userPermissions="userPermissions"
            :cancelTeamInvitation="cancelTeamInvitation"
        />
        <!-- end team member invitation -->

        <!-- team member manager -->
        <ManageTeamMember 
            :team="team"
            :userPermissions="userPermissions"
            :availableRoles="availableRoles"
            :manageRole="manageRole"
            :confirmLeavingTeam="confirmLeavingTeam"
            :confirmTeamMemberRemoval="confirmTeamMemberRemoval"
            :displayableRole="displayableRole"
        />
        <!-- end team member manager -->

        <!-- Role Management Modal -->
        <RoleManagementModal
            :currentlyManagingRole="currentlyManagingRole"
            :managingRoleFor="managingRoleFor"
            :updateRoleForm="updateRoleForm"
            :updateRole="updateRole"
            :team="props.team"
            :availableRoles="availableRoles"
        />
        <!-- end role management modal -->

        <!-- Leave Team Confirmation Modal -->
        <LeaveTeamConfirmationModal
            :confirmingLeavingTeam="confirmingLeavingTeam"
            :leaveTeamForm="leaveTeamForm"
            :leaveTeam="leaveTeam"
         />
        <!-- end leave team configuration modal -->

        <!-- Remove Team Member Confirmation Modal -->
        <RemoveTeamMemberConfirmationModal
            :teamMemberBeingRemoved="teamMemberBeingRemoved"
            :removeTeamMemberForm="removeTeamMemberForm"
            :removeTeamMember="removeTeamMember"
            :team="props.team"
         />
        <!-- end Remove Team Member Confirmation Modal -->
         
    </div>
</template>
