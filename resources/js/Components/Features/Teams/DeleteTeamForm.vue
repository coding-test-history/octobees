<script setup>
// Modal components
import ConfirmationModal from '@/Components/Modals/ConfirmationModal.vue';

// Form components
import DangerButton from '@/Components/Form/DangerButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// Composable
import useDeleteTeamForm from "@/Composables/Features/Teams/useDeleteTeamForm.js";

// Models
import { generalProps } from "@/Models/TeamModel.js";

// Props management
const props = defineProps(generalProps);

// Form management (from composable)
const { form, confirmingTeamDeletion, confirmTeamDeletion, deleteTeam } = useDeleteTeamForm(props.team);
</script>

<template>
    <!-- delete button -->
    <div class="mt-5">
        <DangerButton @click="confirmTeamDeletion">
            Delete Team
        </DangerButton>
    </div>
    <!-- end delete button -->

    <!-- Delete Team Confirmation Modal -->
    <ConfirmationModal :show="confirmingTeamDeletion" @close="confirmingTeamDeletion = false">
        <!-- title -->
        <template #title>
            Delete Team
        </template>
        <!-- end title -->

        <!-- content -->
        <template #content>
            Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be
            permanently deleted.
        </template>
        <!-- end content -->

        <!-- footer -->
        <template #footer>
            <SecondaryButton @click="confirmingTeamDeletion = false">
                Cancel
            </SecondaryButton>

            <DangerButton class="ms-3" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                @click="deleteTeam">
                Delete Team
            </DangerButton>
        </template>
        <!-- end footer -->
    </ConfirmationModal>
</template>
