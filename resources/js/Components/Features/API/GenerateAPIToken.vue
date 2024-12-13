<script setup>
// composables
import { useApiTokenManager } from '@/Composables/Features/API/useApiTokenManager.js';

// form components
import InputLabel from '@/Components/Form/InputLabel.vue';
import TextInput from '@/Components/Form/TextInput.vue';
import InputError from '@/Components/Form/InputError.vue';
import Checkbox from '@/Components/Form/Checkbox.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';

// messge compoenents
import ActionMessage from '@/Components/Messages/ActionMessage.vue';

// form components
import FormSection from '@/Components/Sections/FormSection.vue';

// models
import { generalProps } from '@/Models/ApiModel.js';

// props management
const prop = defineProps(generalProps);

// api token manager
const { createApiTokenForm, createApiToken } = useApiTokenManager(prop);
</script>


<template>
    <FormSection @submitted="createApiToken">
        <!-- title -->
        <template #title>
            Create API Token
        </template>
        <!-- end title -->

        <!-- description -->
        <template #description>
            API tokens allow third-party services to authenticate with our application on your behalf.
        </template>
        <!-- end description -->

        <!-- form -->
        <template #form>
            <!-- input name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Name" />
                <TextInput id="name" v-model="createApiTokenForm.name" type="text" class="mt-1 block w-full"
                    autofocus />
                <InputError :message="createApiTokenForm.errors.name" class="mt-2" />
            </div>
            <!-- end input name -->

            <!-- permission -->
            <div v-if="availablePermissions.length > 0" class="col-span-6">
                <InputLabel for="permissions" value="Permissions" />
                <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="permission in availablePermissions" :key="permission">
                        <label class="flex items-center">
                            <Checkbox v-model:checked="createApiTokenForm.permissions" :value="permission" />
                            <span class="ms-2 text-sm text-gray-600 dark:text-gray-400">{{ permission }}</span>
                        </label>
                    </div>
                </div>
            </div>
            <!-- end permission -->
        </template>
        <!-- end form -->

        <!-- actions -->
        <template #actions>
            <ActionMessage :on="createApiTokenForm.recentlySuccessful" class="me-3">
                Created.
            </ActionMessage>
            <PrimaryButton :class="{ 'opacity-25': createApiTokenForm.processing }"
                :disabled="createApiTokenForm.processing">
                Create
            </PrimaryButton>
        </template>
        <!-- end actions -->
    </FormSection>
</template>