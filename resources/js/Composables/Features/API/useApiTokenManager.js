// vue components
import { ref } from "vue";
import { useForm } from "@inertiajs/vue3";

export function useApiTokenManager(props) {
    // form create api token handler
    const createApiTokenForm = useForm({
        name: "",
        permissions: props.defaultPermissions,
    });

    // form update api token handler
    const updateApiTokenForm = useForm({
        permissions: [],
    });

    // default
    const deleteApiTokenForm = useForm({});
    const displayingToken = ref(false);
    const managingPermissionsFor = ref(null);
    const apiTokenBeingDeleted = ref(null);

    // process create api token
    const createApiToken = () => {
        createApiTokenForm.post(route("api-tokens.store"), {
            preserveScroll: true,
            onSuccess: () => {
                displayingToken.value = true;
                createApiTokenForm.reset();
            },
        });
    };

    // open modal manage api token permission
    const manageApiTokenPermissions = (token) => {
        updateApiTokenForm.permissions = token.abilities;
        managingPermissionsFor.value = token;
    };

    // process update api token
    const updateApiToken = () => {
        updateApiTokenForm.put(
            route("api-tokens.update", managingPermissionsFor.value),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => (managingPermissionsFor.value = null),
            }
        );
    };

    // open modal confirm api token deletion
    const confirmApiTokenDeletion = (token) => {
        apiTokenBeingDeleted.value = token;
    };

    // process delete api token
    const deleteApiToken = () => {
        deleteApiTokenForm.delete(
            route("api-tokens.destroy", apiTokenBeingDeleted.value),
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => (apiTokenBeingDeleted.value = null),
            }
        );
    };

    return {
        createApiTokenForm,
        updateApiTokenForm,
        deleteApiTokenForm,
        displayingToken,
        managingPermissionsFor,
        apiTokenBeingDeleted,
        createApiToken,
        manageApiTokenPermissions,
        updateApiToken,
        confirmApiTokenDeletion,
        deleteApiToken,
    };
}
