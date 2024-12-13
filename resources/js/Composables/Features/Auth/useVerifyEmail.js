// vue components
import { computed } from 'vue';
import { useForm } from "@inertiajs/vue3";

export default function useVerifyEmail(props) {
    // form handler
    const form = useForm({});

    // process verify email
    const submit = () => {
        form.post(route("verification.send"));
    };

    // verification link status handler
    const verificationLinkSent = computed(
        () => props.status === "verification-link-sent"
    );

    return { form, verificationLinkSent, submit };
}
