import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'


const ChatsPage = (props) =>
{
    const chatProps = useMultiChatLogic('3bb492f1-10e4-464f-ae07-f484683dcd46', props.user.username, props.user.secret);
    return <div style={{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{height: '100vh'}}/>
    </div>
}

export default ChatsPage;