// general props
export const generalProps = {
    team: Object,
    availableRoles: Array,
    permissions: Object,
};

// title props
export const titleProps = {
    title: {
        type: String,
        default: "Team Settings",
    },
 }

// create team props
export const createTeamProps = {
    form: Object,
    createTeam: Function,
};

// team member manager props
export const teamMemberManagerProps = {
    userPermissions: Object,
};
