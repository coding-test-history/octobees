<script setup>
// Message components
import ActionMessage from '@/Components/Messages/ActionMessage.vue';

// Section components
import FormSection from '@/Components/Sections/FormSection.vue';

// Form components
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';

// Feature components
import UpdateTeamNameForm from "@/Components/Features/Teams/UpdateTeamNameForm.vue";

// Models
import { generalProps } from "@/Models/TeamModel.js";

// Props management
const props = defineProps(generalProps);

// Import composable
import useUpdateTeamNameForm from "@/Composables/Features/Teams/useUpdateTeamNameForm.js";

// Form management
const { form, updateTeamName } = useUpdateTeamNameForm(props.team);
</script>

<template>
    <FormSection @submitted="updateTeamName">
        <!-- title -->
        <template #title>
            Team Name
        </template>
        <!-- end title -->

        <!-- description -->
        <template #description>
            The team's name and owner information.
        </template>
        <!-- end description -->

        <!-- form -->
        <template #form>
            <UpdateTeamNameForm :form="form" :team="props.team" :permissions="props.permissions" />
        </template>
        <!-- end form -->

        <!-- actions -->
        <template v-if="props.permissions.canUpdateTeam" #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
        <!-- end actions -->
    </FormSection>
</template>
