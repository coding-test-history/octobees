// vue components
import { ref, onMounted } from "vue";
import axios from "axios";
import { useForm } from "@inertiajs/vue3";

export default function useUser() {
    // State untuk menyimpan data pengguna
    const users = ref([]);

    // Form management
    const form = useForm({
        name: "",
        email: "",
        password: "",
        tanggal_lahir: "",
        tempat_tinggal: "",
    });

    // default
    const confirmingUserDeletion = ref(false);
    const selectedUserId = ref(null);
    const successDialog = ref(null);
    const openSuccessDialog = ref(false);
    const openCreateNewUserModal = ref(false);

    // Fungsi untuk memuat data dari API
    const fetchUsers = async () => {
        try {
            const response = await axios.get("/api/users");
            users.value = response.data.data.data;
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // Memuat data saat komponen di-mount
    onMounted(() => {
        fetchUsers();
    });

    // Fungsi untuk mengedit dan menghapus data (dummy)
    const openModalEditUser = (id) => {
        console.log(`Edit user with id: ${id}`);
    };

    const deleteUserConfirmation = (id) => {
        confirmingUserDeletion.value = true;
        selectedUserId.value = id;
    };

    // close modal delete user handler
    const closeModalDeleteUser = (successDialogValues) => {
        confirmingUserDeletion.value = false;
        openSuccessDialog.value = true;
        successDialog.value = successDialogValues;
    };

    // delete user process
    const deleteUserProcess = async () => {
        try {
            const userId = selectedUserId.value;
            const response = await axios.delete(`/api/users/delete/${userId}`);
            users.value = users.value.filter((user) => user.id !== userId);
            const successDialogValues = {
                title: "Success",
                message: response.data.message,
            };
            closeModalDeleteUser(successDialogValues);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    // create new user modal handler
    const createNewUserModal = () => {
        openCreateNewUserModal.value = true;
    };

    // process create user
    const createUserProcess = async () => {
        try {
            const payload = {
                name: form.name,
                email: form.email,
                password: form.password,
                tanggal_lahir: form.tanggal_lahir,
                tempat_tinggal: form.tempat_tinggal,
            };

            const response = await axios.post("/api/users/store", payload);
            users.value.push(response.data.data);
            form.reset();

            const successDialogValues = {
                title: "Success",
                message: response.data.message,
            };
            closeModalCreateNewUser(successDialogValues);
        } catch (error) {
            console.error("Error creating user:", error);
            if (error.response?.data?.errors) {
                form.setError(error.response.data.errors);
            }
        }
    };

    // close modal create new user handler
    const closeModalCreateNewUser = (successDialogValues) => {
        openCreateNewUserModal.value = false;
        openSuccessDialog.value = true;
        successDialog.value = successDialogValues;
    };

    return {
        users,
        fetchUsers,
        openModalEditUser,
        deleteUserConfirmation,
        closeModalDeleteUser,
        confirmingUserDeletion,
        deleteUserProcess,
        successDialog,
        openSuccessDialog,
        openCreateNewUserModal,
        createNewUserModal,
        closeModalCreateNewUser,
        form,
        createUserProcess,
    };
}
