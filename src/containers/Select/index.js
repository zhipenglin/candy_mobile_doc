import Page from '../Page'
import Multiple from './Multiple'
import Single from './Single'
import DateSelect from './DateSelect'
import TimeSelect from './TimeSelect'
import DateTimeSelect from './DateTimeSelect'
export default ()=>{
    return (
        <Page>
            <Single></Single>
            <Multiple></Multiple>
            <DateSelect></DateSelect>
            <TimeSelect></TimeSelect>
            <DateTimeSelect></DateTimeSelect>
        </Page>
    );
}