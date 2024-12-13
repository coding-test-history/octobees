<script setup>
// Form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// Models
import { generalProps, createTeamProps } from "@/Models/TeamModel.js";

// Props
defineProps({ ...generalProps, ...createTeamProps });
</script>

<template>
    <!-- Team Owner Information -->
    <div class="col-span-6">
        <InputLabel value="Team Owner" />

        <div class="flex items-center mt-2">
            <img class="size-12 rounded-full object-cover" :src="team.owner.profile_photo_url" :alt="team.owner.name">

            <div class="ms-4 leading-tight">
                <div class="text-gray-900 dark:text-white">{{ team.owner.name }}</div>
                <div class="text-gray-700 dark:text-gray-300 text-sm">
                    {{ team.owner.email }}
                </div>
            </div>
        </div>
    </div>
    <!-- end team owner information -->

    <!-- Team Name -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="name" value="Team Name" />

        <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full"
            :disabled="!permissions.canUpdateTeam" />

        <InputError :message="form.errors.name" class="mt-2" />
    </div>
    <!-- end team name -->
</template>
