export const NAV_SWITCH='NAV_SWITCH'

export function navSwitch(show=true){
    return {
        type:NAV_SWITCH,show
    }
}