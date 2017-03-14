import {render} from 'react-dom'
import './util/flexible'
import App from './containers/App'
import './common.scss'

let rootElement=document.getElementById('root');
render(<App></App>,rootElement);