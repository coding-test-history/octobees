// vue components
import { ref, computed } from "vue";
import { router, useForm, usePage } from "@inertiajs/vue3";

export default function useTeamMemberManager(props) {
    // page
    const page = usePage();

    // Forms
    const addTeamMemberForm = useForm({
        email: "",
        role: null,
    });

    const updateRoleForm = useForm({
        role: null,
    });

    const leaveTeamForm = useForm({});
    const removeTeamMemberForm = useForm({});

    // State
    const currentlyManagingRole = ref(false);
    const managingRoleFor = ref(null);
    const confirmingLeavingTeam = ref(false);
    const teamMemberBeingRemoved = ref(null);

    // process add team member
    const addTeamMember = () => {
        addTeamMemberForm.post(route("team-members.store", props.team), {
            errorBag: "addTeamMember",
            preserveScroll: true,
            onSuccess: () => {
                addTeamMemberForm.reset();
                addTeamMemberForm.recentlySuccessful = true;
            },
            onError: () => {
                // Optional: Handle form error feedback
                addTeamMemberForm.recentlySuccessful = false;
            },
        });
    };

    // process cancel team invitation
    const cancelTeamInvitation = (invitation) => {
        router.delete(route("team-invitations.destroy", invitation), {
            preserveScroll: true,
        });
    };

    // manage role handler
    const manageRole = (teamMember) => {
        managingRoleFor.value = teamMember;
        updateRoleForm.role = teamMember.membership.role;
        currentlyManagingRole.value = true;
    };

    // process update role
    const updateRole = () => {
        updateRoleForm.put(
            route("team-members.update", [props.team, managingRoleFor.value]),
            {
                preserveScroll: true,
                onSuccess: () => (currentlyManagingRole.value = false),
            }
        );
    };

    // confirm leaving team
    const confirmLeavingTeam = () => {
        confirmingLeavingTeam.value = true;
    };

    // process leave team
    const leaveTeam = () => {
        leaveTeamForm.delete(
            route("team-members.destroy", [props.team, page.props.auth.user]),
            {
                onSuccess: () => {
                    confirmingLeavingTeam.value = false;
                },
            }
        );
    };

    // confirm team member removal handler
    const confirmTeamMemberRemoval = (teamMember) => {
        teamMemberBeingRemoved.value = teamMember;
    };

    // process remove team member
    const removeTeamMember = () => {
        removeTeamMemberForm.delete(
            route("team-members.destroy", [
                props.team,
                teamMemberBeingRemoved.value,
            ]),
            {
                errorBag: "removeTeamMember",
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => (teamMemberBeingRemoved.value = null),
            }
        );
    };

    // displayable role handler
    const displayableRole = (role) => {
        const roleItem = props.availableRoles.find((r) => r.key === role);
        return roleItem ? roleItem.name : "Unknown Role";
    };

    // Computed Properties
    const canAddTeamMembers = computed(() =>
        props.userPermissions ? props.userPermissions.canAddTeamMembers : false
    );

    return {
        page,
        addTeamMemberForm,
        updateRoleForm,
        leaveTeamForm,
        removeTeamMemberForm,
        currentlyManagingRole,
        managingRoleFor,
        confirmingLeavingTeam,
        teamMemberBeingRemoved,
        addTeamMember,
        cancelTeamInvitation,
        manageRole,
        updateRole,
        confirmLeavingTeam,
        leaveTeam,
        confirmTeamMemberRemoval,
        removeTeamMember,
        displayableRole,
        canAddTeamMembers,
    };
}
