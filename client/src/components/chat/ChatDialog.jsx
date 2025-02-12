import { useContext } from 'react';
import { Dialog, styled, Box, Toolbar } from '@mui/material';

import { UserContext } from '../../context/UserProvider';

// //components
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import ChatBox from './chat/ChatBox';

const Component = styled(Box)`
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};

const ChatDialog = () => {

    const { person } = useContext(UserContext);
    
    return (
        <Dialog 
            open={true} 
            backdrop={{style: {backgroundColor: 'unset'}}}
            PaperProps={{ sx: dialogStyle }}
            maxWidth={'md'}
            hideBackdrop={true}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {
                        Object.keys(person).length  ? <ChatBox/> : <EmptyChat />
                    }
                    {/* <EmptyChat/> */}
                    
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;