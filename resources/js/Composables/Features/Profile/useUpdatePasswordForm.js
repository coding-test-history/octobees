import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export function useUpdatePasswordForm() {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);

    const form = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = () => {
        form.put(route("user-password.update"), {
            errorBag: "updatePassword",
            preserveScroll: true,
            onSuccess: () => form.reset(),
            onError: () => {
                if (form.errors.password) {
                    form.reset("password", "password_confirmation");
                    passwordInput.value?.focus();
                }

                if (form.errors.current_password) {
                    form.reset("current_password");
                    currentPasswordInput.value?.focus();
                }
            },
        });
    };

    return {
        form,
        updatePassword,
        passwordInput,
        currentPasswordInput,
    };
}
