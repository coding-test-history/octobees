<script setup>
// vue components
import { Link } from '@inertiajs/vue3';

// form components
import Checkbox from '@/Components/Form/Checkbox.vue';
import InputError from '@/Components/Form/InputError.vue';
import InputLabel from '@/Components/Form/InputLabel.vue';
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import TextInput from '@/Components/Form/TextInput.vue';

// composables
import useRegisterForm from '@/Composables/Features/Auth/useRegisterForm.js';

// defined composables
const { form, submit } = useRegisterForm();
</script>

<template>
    <form @submit.prevent="submit">
        <!-- back to home link -->
        <div class="flex items-center justify-end mt-4">
            <Link :href="'/'"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Back to home
            </Link>
        </div>
        <!-- end back to home link -->

        <!-- input name -->
        <div>
            <InputLabel for="name" value="Name" />
            <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autofocus
                autocomplete="name" />
            <InputError class="mt-2" :message="form.errors.name" />
        </div>
        <!-- end input name -->

        <!-- input email -->
        <div class="mt-4">
            <InputLabel for="email" value="Email" />
            <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required
                autocomplete="username" />
            <InputError class="mt-2" :message="form.errors.email" />
        </div>
        <!-- end input email -->

        <!-- input password -->
        <div class="mt-4">
            <InputLabel for="password" value="Password" />
            <TextInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required
                autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password" />
        </div>
        <!-- end input password -->

        <!-- input confirm password -->
        <div class="mt-4">
            <InputLabel for="password_confirmation" value="Confirm Password" />
            <TextInput id="password_confirmation" v-model="form.password_confirmation" type="password"
                class="mt-1 block w-full" required autocomplete="new-password" />
            <InputError class="mt-2" :message="form.errors.password_confirmation" />
        </div>
        <!-- end input confirm password -->

        <!-- confirm check -->
        <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
            <InputLabel for="terms">
                <div class="flex items-center">
                    <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                    <div class="ms-2">
                        I agree to the <a target="_blank" :href="route('terms.show')"
                            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">Terms
                            of Service</a> and <a target="_blank" :href="route('policy.show')"
                            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">Privacy
                            Policy</a>
                    </div>
                </div>
                <InputError class="mt-2" :message="form.errors.terms" />
            </InputLabel>
        </div>
        <!-- end confirm check -->

        <div class="flex items-center justify-end mt-4">
            <!-- link to login -->
            <Link :href="route('login')"
                class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800">
            Already registered?
            </Link>
            <!-- end link to login -->

            <!-- button register -->
            <PrimaryButton class="ms-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Register
            </PrimaryButton>
            <!-- end button register -->
        </div>
    </form>
</template>