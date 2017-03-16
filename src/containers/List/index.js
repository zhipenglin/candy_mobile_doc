import {Component} from 'react'
import Code from '../../components/Code'
import Page from '../Page'
import {List,ListItem,Toast,Button} from 'candy-mobile'
import Normal from './Normal'
import Inside from './Inside'
import ClickAble from './ClickAble'
import InOutAnimate from './InOutAnimate'
import Media from './Media'
import Menu from './Menu'
import './style.scss'

export default ()=>{
    return (
        <Page name="list">
            <Normal></Normal>
            <Inside></Inside>
            <ClickAble></ClickAble>
            <InOutAnimate></InOutAnimate>
            <Media></Media>
            <Menu></Menu>
        </Page>
    );
}