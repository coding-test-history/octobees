// vue components
import { ref, onMounted } from "vue";
import axios from "axios";
import { useForm } from "@inertiajs/vue3";

export default function useUser() {
    // State untuk menyimpan data pengguna
    const users = ref([]);
    const pagination = ref({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    });

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
    const isEditUserModalOpen = ref(false); // Untuk mengontrol modal edit
    const selectedUser = ref(null); // Menyimpan data pengguna yang akan diedit

    // Fungsi untuk memuat data dari API
    const fetchUsers = async (page = 1) => {
        try {
            const response = await axios.get(`/api/users?page=${page}`);
            users.value = response.data.data.data;
            pagination.value = {
                current_page: response.data.data.current_page,
                last_page: response.data.data.last_page,
                per_page: response.data.data.per_page,
                total: response.data.data.total,
            };
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const changePage = (page) => {
        fetchUsers(page);
    };

    // Memuat data saat komponen di-mount
    onMounted(() => {
        fetchUsers();
    });

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
            openSuccessDialog.value = true;
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
        successDialog.value = successDialogValues;
    };

    // Buka modal edit user
    const openModalEditUser = (id) => {
        const user = users.value.find((user) => user.id === id);
        if (user) {
            selectedUser.value = user;
            form.name = user.name || ""; // Pastikan data aman
            form.email = user.email || "";
            form.tanggal_lahir = user.tanggal_lahir || "";
            form.tempat_tinggal = user.tempat_tinggal || "";
            isEditUserModalOpen.value = true;
        } else {
            console.error(`User with id ${id} not found.`);
        }
    };

    // Tutup modal edit user
    const closeEditUserModal = () => {
        isEditUserModalOpen.value = false;
        form.reset();
    };

    // Proses edit user
    const editUserProcess = async () => {
        try {
            const payload = {
                name: form.name,
                email: form.email,
                tanggal_lahir: form.tanggal_lahir,
                tempat_tinggal: form.tempat_tinggal,
            };
            const response = await axios.put(
                `/api/users/update/${selectedUser.value.id}`,
                payload
            );
            const updatedUser = response.data.data;

            // Perbarui data di tabel
            const index = users.value.findIndex(
                (user) => user.id === updatedUser.id
            );
            if (index !== -1) {
                users.value[index] = updatedUser;
            }

            closeEditUserModal();
            openSuccessDialog.value = true;
            successDialog.value = {
                title: "Success",
                message: "User has been updated successfully!",
            };
        } catch (error) {
            console.error("Error updating user:", error);
            if (error.response?.data?.errors) {
                form.setError(error.response.data.errors);
            }
        }
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
        isEditUserModalOpen,
        closeEditUserModal,
        editUserProcess,
        selectedUser,
        pagination,
        fetchUsers,
        changePage,
    };
}
