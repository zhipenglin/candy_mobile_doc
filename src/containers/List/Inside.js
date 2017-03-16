import Code from '../../components/Code'
import {List,ListItem} from 'candy-mobile'

export default function(){
    return (
        <div>
            <div className="ct-page__title">内嵌列表：</div>
            <Code>{`
<List inside title="内嵌列表">
    <ListItem>列表1</ListItem>
    <ListItem>列表2</ListItem>
    <ListItem>列表3</ListItem>
    <ListItem>列表4</ListItem>
</List>
            `}</Code>
            <List inside title="内嵌列表">
                <ListItem>列表1</ListItem>
                <ListItem>列表2</ListItem>
                <ListItem>列表3</ListItem>
                <ListItem>列表4</ListItem>
            </List>
        </div>
    );
}