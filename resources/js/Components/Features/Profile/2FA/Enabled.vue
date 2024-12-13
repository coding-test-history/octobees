<script setup>
// form components
import ConfirmsPassword from '@/Components/Form/ConfirmsPassword.vue'
import PrimaryButton from '@/Components/Form/PrimaryButton.vue';
import DangerButton from '@/Components/Form/DangerButton.vue';
import SecondaryButton from '@/Components/Form/SecondaryButton.vue';

// models
import { twoFactorProps } from '@/Models/ProfileModel.js';

const props = defineProps(twoFactorProps);
</script>

<template>
    <div class="mt-5">
        <!-- enable button -->
        <div v-if="!twoFactorEnabled">
            <ConfirmsPassword @confirmed="enableTwoFactorAuthentication">
                <PrimaryButton type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">
                    Enable
                </PrimaryButton>
            </ConfirmsPassword>
        </div>
        <!-- end enable button -->

        <div v-else>
            <!-- confirm button -->
            <ConfirmsPassword @confirmed="confirmTwoFactorAuthentication">
                <PrimaryButton v-if="confirming" type="button" class="me-3" :class="{ 'opacity-25': enabling }"
                    :disabled="enabling">
                    Confirm
                </PrimaryButton>
            </ConfirmsPassword>
            <!-- end confirm button -->

            <!-- recovery codes -->
            <ConfirmsPassword @confirmed="regenerateRecoveryCodes">
                <SecondaryButton v-if="recoveryCodes.length > 0 && !confirming" class="me-3">
                    Regenerate Recovery Codes
                </SecondaryButton>
            </ConfirmsPassword>
            <!-- end recovery codes -->

            <!-- show recovery codes -->
            <ConfirmsPassword @confirmed="showRecoveryCodes">
                <SecondaryButton v-if="recoveryCodes.length === 0 && !confirming" class="me-3">
                    Show Recovery Codes
                </SecondaryButton>
            </ConfirmsPassword>
            <!-- end show recovery codes -->

            <!-- cancel -->
            <ConfirmsPassword @confirmed="disableTwoFactorAuthentication">
                <SecondaryButton v-if="confirming" :class="{ 'opacity-25': disabling }" :disabled="disabling">
                    Cancel
                </SecondaryButton>
            </ConfirmsPassword>
            <!-- end cancel -->

            <!-- disable -->
            <ConfirmsPassword @confirmed="disableTwoFactorAuthentication">
                <DangerButton v-if="!confirming" :class="{ 'opacity-25': disabling }" :disabled="disabling">
                    Disable
                </DangerButton>
            </ConfirmsPassword>
            <!-- end disable -->
        </div>
    </div>
</template>