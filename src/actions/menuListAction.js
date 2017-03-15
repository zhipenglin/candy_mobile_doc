import fetchFactory from './fetchActionFactory'

const action=fetchFactory('MENU_LIST');
action.fetchData=action.fetchData.bind(null,'/menuList.json');

export default action;