// vue component
import { useForm } from "@inertiajs/vue3";

export default function useResetPassword(props) {
    // form handler
    const form = useForm({
        token: props.token,
        email: props.email,
        password: "",
        password_confirmation: "",
    });

    // process reset password
    const submit = () => {
        form.post(route("password.update"), {
            onFinish: () => form.reset("password", "password_confirmation"),
        });
    };

    return { form, props, submit };
}
