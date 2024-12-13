// vue components
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export default function useLogoutOtherBrowserSessionsForm() {
    // Form management
    const form = useForm({
        password: "",
    });

    // default
    const passwordInput = ref(null);
    const confirmingLogout = ref(false);

    // confirm logout handler
    const confirmLogout = () => {
        confirmingLogout.value = true;

        setTimeout(() => passwordInput.value.focus(), 250);
    };

    // process logout from other browser sessions
    const logoutOtherBrowserSessions = () => {
        form.delete(route("other-browser-sessions.destroy"), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.value.focus(),
            onFinish: () => form.reset(),
        });
    };

    // close modal handler
    const closeModal = () => {
        confirmingLogout.value = false;

        form.reset();
    };
    
    return {
        confirmingLogout,
        confirmLogout,
        logoutOtherBrowserSessions,
        closeModal,
        form,
        passwordInput,
    };
}
