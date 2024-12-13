<script setup>
// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// models
import { createTeamProps } from "@/Models/TeamModel.js";

// props manager
defineProps(createTeamProps);
</script>

<template>
    <!-- team owner -->
    <div class="col-span-6">
        <InputLabel value="Team Owner" />

        <div class="flex items-center mt-2">
            <img class="object-cover size-12 rounded-full" :src="$page.props.auth.user.profile_photo_url"
                :alt="$page.props.auth.user.name">

            <div class="ms-4 leading-tight">
                <div class="text-gray-900 dark:text-white">{{ $page.props.auth.user.name }}</div>
                <div class="text-sm text-gray-700 dark:text-gray-300">
                    {{ $page.props.auth.user.email }}
                </div>
            </div>
        </div>
    </div>
    <!-- end team owner -->

    <!-- input team name  -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="name" value="Team Name" />
        <TextInput id="name" v-model="form.name" type="text" class="block w-full mt-1" autofocus />
        <InputError :message="form.errors.name" class="mt-2" />
    </div>
    <!-- end input team owner -->
</template>