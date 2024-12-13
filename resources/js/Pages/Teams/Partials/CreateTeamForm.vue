<script setup>
// section components
import FormSection from '@/Components/Sections/FormSection.vue';

// form components
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';

// feature components
import CreateTeamForm from "@/Components/Features/Teams/CreateTeamForm.vue";

// composables
import useCreateTeamForm from "@/Composables/Features/Teams/useCreateTeamForm.js";

// Create team form manager
const { form, createTeam } = useCreateTeamForm();
</script>

<template>
    <FormSection @submitted="createTeam">
        <!-- Title -->
        <template #title>
            Team Details
        </template>
        <!-- End Title -->

        <!-- Description -->
        <template #description>
            Create a new team to collaborate with others on projects.
        </template>
        <!-- End Description -->

        <!-- Form -->
        <template #form>
            <CreateTeamForm :form="form" />
        </template>
        <!-- End Form -->

        <!-- Action -->
        <template #actions>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Create
            </PrimaryButton>
        </template>
        <!-- End Action -->
    </FormSection>
</template>
