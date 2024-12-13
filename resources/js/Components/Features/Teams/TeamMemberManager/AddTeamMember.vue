<script setup>
// message components
import ActionMessage from '@/Components/Messages/ActionMessage.vue';

// section components
import FormSection from '@/Components/Sections/FormSection.vue';
import SectionBorder from '@/Components/Sections/SectionBorder.vue';

// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composable
import useTeamMemberManager from '@/Composables/Features/Teams/useTeamMemberManager.js';

// model
import { generalProps, teamMemberManagerProps } from "@/Models/TeamModel.js";

// props management
const props = defineProps({ ...generalProps, ...teamMemberManagerProps });

// team member management
const {
    addTeamMemberForm,
    addTeamMember,
    canAddTeamMembers
} = useTeamMemberManager(props);
</script>

<template>
    <div v-if="userPermissions.canAddTeamMembers">
        <SectionBorder />
        <FormSection @submitted="addTeamMember">
            <!-- title -->
            <template #title>
                Add Team Member
            </template>
            <!-- end title -->

            <!-- description -->
            <template #description>
                Add a new team member to your team, allowing them to collaborate with you.
            </template>
            <!-- end decription -->

            <!-- form -->
            <template #form>
                <div class="col-span-6">
                    <div class="max-w-xl text-sm text-gray-600 dark:text-gray-400">
                        Please provide the email address of the person you would like to add to this team.
                    </div>
                </div>

                <!-- Member Email -->
                <div class="col-span-6 sm:col-span-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput id="email" v-model="addTeamMemberForm.email" type="email" class="mt-1 block w-full" />
                    <InputError :message="addTeamMemberForm.errors.email" class="mt-2" />
                </div>

                <!-- Role -->
                <div v-if="availableRoles.length > 0" class="col-span-6 lg:col-span-4">
                    <InputLabel for="roles" value="Role" />
                    <InputError :message="addTeamMemberForm.errors.role" class="mt-2" />

                    <div
                        class="relative z-0 mt-1 border border-gray-200 dark:border-gray-700 rounded-lg cursor-pointer">
                        <button v-for="(role, i) in availableRoles" :key="role.key" type="button"
                            class="relative px-4 py-3 inline-flex w-full rounded-lg focus:z-10 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-600"
                            :class="{ 'border-t border-gray-200 dark:border-gray-700 focus:border-none rounded-t-none': i > 0, 'rounded-b-none': i != Object.keys(availableRoles).length - 1 }"
                            @click="addTeamMemberForm.role = role.key">
                            <div
                                :class="{ 'opacity-50': addTeamMemberForm.role && addTeamMemberForm.role != role.key }">
                                <!-- Role Name -->
                                <div class="flex items-center">
                                    <div class="text-sm text-gray-600 dark:text-gray-400"
                                        :class="{ 'font-semibold': addTeamMemberForm.role == role.key }">
                                        {{ role.name }}
                                    </div>

                                    <svg v-if="addTeamMemberForm.role == role.key" class="ms-2 size-5 text-green-400"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>

                                <!-- Role Description -->
                                <div class="mt-2 text-xs text-gray-600 dark:text-gray-400 text-start">
                                    {{ role.description }}
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </template>
            <!-- end form -->

            <!-- actions -->
            <template #actions>
                <ActionMessage :on="addTeamMemberForm.recentlySuccessful" class="me-3">
                    Added.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': addTeamMemberForm.processing }"
                    :disabled="addTeamMemberForm.processing">
                    Add
                </PrimaryButton>
            </template>
            <!-- end actions -->
        </FormSection>
    </div>
</template>