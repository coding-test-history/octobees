<script setup>
// composables
import { useUpdatePasswordForm } from '@/Composables/Features/Profile/useUpdatePasswordForm.js';

// feature components
import UpdatePasswordForm from '@/Components/Features/Profile/UpdatePasswordForm.vue';

// form components
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';

// message components
import ActionMessage from '@/Components/Messages/ActionMessage.vue';

// section components
import FormSection from '@/Components/Sections/FormSection.vue';

// update password form management
const { updatePassword, form } = useUpdatePasswordForm();
</script>

<template>
    <FormSection @submitted="updatePassword">
        <!-- Title -->
        <template #title>
            Update Password
        </template>
        <!-- End Title -->

        <!-- Description -->
        <template #description>
            Ensure your account is using a long, random password to stay secure.
        </template>
        <!-- End Description -->

        <!-- Form -->
        <template #form>
            <UpdatePasswordForm :form="form"/>
        </template>
        <!-- End Form -->

        <!-- Actions -->
        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="me-3">
                Saved.
            </ActionMessage>
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
        <!-- End Actions -->
    </FormSection>
</template>
