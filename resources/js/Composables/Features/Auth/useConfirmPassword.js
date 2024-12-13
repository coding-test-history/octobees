// vue components
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export default function useConfirmPassword() {
    // form handler
    const form = useForm({
        password: "",
    });

    // default
    const passwordInput = ref(null);

    // process confirm password
    const submit = () => {
        form.post(route("password.confirm"), {
            onFinish: () => {
                form.reset();

                passwordInput.value.focus();
            },
        });
    };

    return { form, passwordInput, submit };
}
