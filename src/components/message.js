import React from 'react';
import { getMessages, saveMessage, updateMessages } from '../services/messageS';

import Loader from './loading'
import NotRecords from './notrecords'
import FormSubmit from './formsubmit';
import Messages from './messages'

class Message extends React.Component {
    constructor () {
        super()
        this.state = ({
            messages: [],
            isloading: true
        })
        this.addPost = this.addPost.bind(this);
    }

    async componentDidMount() {
        const responseJson = await getMessages();
        this.setState(
            { 
                messages: responseJson,
                isloading: false
            }
        )
    }

    async addPost(message) {
        const responseJson = await saveMessage(message);
        if ( responseJson.msgsave._id !== null ) {
            this.newPost(message);
        }
    }

    async updatePost(id, content) {
        const response = await updateMessages (id, content);
        console.log(response);
    }
    
    newPost (message) {
        this.setState({
            messages: [message, ...this.state.messages],
            isloading: false
        })
    }

    render () {
        const {messages, isloading} = this.state

        if (isloading) {
            return <Loader />
        }

        if (!isloading && !messages.length) {
            return <NotRecords/>
        }
        
        return (
            <>
                <FormSubmit addPost={this.addPost}/>
                <section>
                    {
                        messages.map( (message, idm) => <Messages 
                            content = {message.content}
                            type = {message.type}
                            key={idm}
                        />)
                    }
                </section> 
            </>
        )
    }
}

export default Message