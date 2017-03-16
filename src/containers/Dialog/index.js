import Page from '../Page'
import ToastDialog from './ToastDialog'
import ConfirmDialog from './ConfirmDialog'
import ActionDialog from './ActionDialog'
import DrawerDialog from './DrawerDialog'
export default ()=>{
    return (
        <Page>
            <ToastDialog></ToastDialog>
            <ConfirmDialog></ConfirmDialog>
            <ActionDialog></ActionDialog>
            <DrawerDialog></DrawerDialog>
        </Page>
    );
}