export const LOADING_START='LOADING_START';
export const LOADING_END='LOADING_END';

export function loadingStart(){
    return {
        type:LOADING_START
    }
}

export function loadingEnd(){
    return {
        type:LOADING_END
    }
}