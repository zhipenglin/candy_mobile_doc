import RemoteRoute from '../components/RemoteRoute'

export default ()=>{
    return (
        <RemoteRoute component={()=>import('../containers/Button')}></RemoteRoute>
    );
}