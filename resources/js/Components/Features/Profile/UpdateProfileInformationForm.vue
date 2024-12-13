<script setup>
// vue components
import { Link } from '@inertiajs/vue3';

// form components
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composable
import useUpdateProfileInformationForm from '@/Composables/Features/Profile/useUpdateProfileInformationForm.js';

// model
import { generalProps } from '@/Models/ProfileModel.js';

// props management
const props = defineProps(generalProps);

// update profile information management
const {
    selectNewPhoto,
    updatePhotoPreview,
    sendEmailVerification,
    verificationLinkSent,
    deletePhoto,
    photoPreview,
    photoInput } = useUpdateProfileInformationForm(props);

// expose management
defineExpose({
    photoPreview,
    photoInput
});
</script>

<template>
    <!-- Profile Photo -->
    <div v-if="$page.props.jetstream.managesProfilePhotos" class="col-span-6 sm:col-span-4">
        <!-- Profile Photo File Input -->
        <input id="photo" ref="photoInput" type="file" class="hidden" @change="updatePhotoPreview">
        <InputLabel for="photo" value="Photo" />

        <!-- Current Profile Photo -->
        <div v-show="!photoPreview" class="mt-2">
            <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full size-20 object-cover">
        </div>
        <!-- end current profile photo -->

        <!-- New Profile Photo Preview -->
        <div v-show="photoPreview" class="mt-2">
            <span class="block rounded-full size-20 bg-cover bg-no-repeat bg-center"
                :style="'background-image: url(\'' + photoPreview + '\');'" />
        </div>
        <!-- end new profile photo preview -->

        <!-- select a new photo button and remove photo button -->
        <SecondaryButton class="mt-2 me-2" type="button" @click.prevent="selectNewPhoto">
            Select A New Photo
        </SecondaryButton>

        <SecondaryButton v-if="user.profile_photo_path" type="button" class="mt-2" @click.prevent="deletePhoto">
            Remove Photo
        </SecondaryButton>
        <!-- end select a new photo button and remove photo button -->

        <InputError :message="form.errors.photo" class="mt-2" />
    </div>
    <!-- end profile photo -->

    <!-- Name -->
    <div class="col-span-6 sm:col-span-4">
        <InputLabel for="name" value="Name" />
        <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autocomplete="name" />
        <InputError :message="form.errors.name" class="mt-2" />
    </div>
    <!-- end name -->

    <!-- Email -->
    <div class="col-span-6 sm:col-span-4">
        <!-- input email -->
        <InputLabel for="email" value="Email" />
        <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required
            autocomplete="username" />
        <InputError :message="form.errors.email" class="mt-2" />
        <!-- end input email -->

        <!-- message -->
        <div v-if="$page.props.jetstream.hasEmailVerification && user.email_verified_at === null">
            <p class="text-sm mt-2 dark:text-white">
                Your email address is unverified.

                <Link :href="route('verification.send')" method="post" as="button"
                    class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    @click.prevent="sendEmailVerification">
                Click here to re-send the verification email.
                </Link>
            </p>

            <div v-show="verificationLinkSent" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                A new verification link has been sent to your email address.
            </div>
        </div>
        <!-- end message -->
    </div>
    <!-- end email -->
</template>