<script setup>
// modal components
import ConfirmationModal from '@/Components/Modals/ConfirmationModal.vue';

// form components
import DangerButton from '@/Components/Form/DangerButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// Composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// model
import { generalProps } from "@/Models/TeamModel.js";

// props management
const props = defineProps(generalProps);

// team member management
const {
    teamMemberBeingRemoved,
    removeTeamMemberForm,
    removeTeamMember,
} = useTeamMemberManager(props);
</script>

<template>
    <ConfirmationModal :show="teamMemberBeingRemoved" @close="teamMemberBeingRemoved = null">
        <!-- title -->
        <template #title>
            Remove Team Member
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you would like to remove this person from the team?
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="teamMemberBeingRemoved = null">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" :class="{ 'opacity-25': removeTeamMemberForm.processing }"
                :disabled="removeTeamMemberForm.processing" @click="removeTeamMember">
                Remove
            </DangerButton>
        </template>
        <!-- end footer -->
    </ConfirmationModal>
</template>