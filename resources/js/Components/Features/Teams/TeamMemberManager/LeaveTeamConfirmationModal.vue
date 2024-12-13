<script setup>
// modal components
import ConfirmationModal from '@/Components/Modals/ConfirmationModal.vue';

// form components
import DangerButton from '@/Components/Form/DangerButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// model
import { generalProps } from "@/Models/TeamModel.js";

// props management
const props = defineProps(generalProps);

// team member manager
const {
    confirmingLeavingTeam,
    leaveTeamForm,
    leaveTeam,
    confirmLeavingTeam
} = useTeamMemberManager(props);
</script>

<template>
    <ConfirmationModal :show="confirmingLeavingTeam" @close="confirmingLeavingTeam = false">
        <!-- title -->
        <template #title>
            Leave Team
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you would like to leave this team?
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="confirmingLeavingTeam = false">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" :class="{ 'opacity-25': leaveTeamForm.processing }"
                :disabled="leaveTeamForm.processing" @click="leaveTeam">
                Leave
            </DangerButton>
        </template>
        <!-- end footer -->
    </ConfirmationModal>
</template>