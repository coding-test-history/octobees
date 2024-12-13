<script setup>
// section components
import ActionSection from '@/Components/Sections/ActionSection.vue';

// feature components
import TwoFactorMessage from '@/Components/Features/Profile/2FA/Message.vue';
import TwoFactorQrCode from '@/Components/Features/Profile/2FA/QrCode.vue';
import TwoFactorEnabled from '@/Components/Features/Profile/2FA/Enabled.vue';

// composables
import { useTwoFactorAuthenticationForm } from '@/Composables/Features/Profile/useTwoFactorAuthenticationForm.js';

// two factor authetication form management
const {
    twoFactorEnabled,
    confirming,
    enableTwoFactorAuthentication,
    disableTwoFactorAuthentication,
    regenerateRecoveryCodes,
    showRecoveryCodes,
    confirmationForm,
    enabling,
    disabling,
    confirmTwoFactorAuthentication,
    recoveryCodes,
    qrCode,
    setupKey
} = useTwoFactorAuthenticationForm();
</script>

<template>
    <ActionSection>
        <!-- title -->
        <template #title>
            Two Factor Authentication
        </template>
        <!-- end title -->

        <!-- description -->
        <template #description>
            Add additional security to your account using two factor authentication.
        </template>
        <!-- end description -->

        <!-- content -->
        <template #content>
            <!-- two factor message -->
            <TwoFactorMessage
                :two-factor-enabled="twoFactorEnabled"
                :confirming="confirming"
            />
            <!-- end two factor message -->

            <!-- two factor code -->
            <TwoFactorQrCode
                :two-factor-enabled="twoFactorEnabled"
                :qr-code="qrCode"
                :confirmation-form="confirmationForm"
                :confirm-two-factor-authentication="confirmTwoFactorAuthentication"
                :setup-key="setupKey"
                :recovery-codes="recoveryCodes"
                :confirming="confirming"
            />
            <!-- end two factor code -->

            <!--two factor enabled -->
            <TwoFactorEnabled
                :two-factor-enabled="twoFactorEnabled"
                :enable-two-factor-authentication="enableTwoFactorAuthentication"
                :confirm-two-factor-authentication="confirmTwoFactorAuthentication"
                :regenerate-recovery-codes="regenerateRecoveryCodes"
                :show-recovery-codes="showRecoveryCodes"
                :disable-two-factor-authentication="disableTwoFactorAuthentication"
                :confirming="confirming"
                :recovery-codes="recoveryCodes"
                :disabling="disabling"
                :enabling="enabling"
                :confirmation-form="confirmationForm"
                :setup-key="setupKey"
                :qr-code="qrCode"
            />
            <!-- end two factor enabled -->
        </template>
        <!-- end content -->
    </ActionSection>
</template>
