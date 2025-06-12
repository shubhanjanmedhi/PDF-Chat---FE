'use client'
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";

interface Doc {
    pageContent?: string
    metadata?: {
        loc?: {
         pageNumber?: number
        }
    }
    source?: string
}

interface IMessage {
    role: 'assistant' | 'user' | 'loading'
    content?: string
    documents?: Doc[]
}

const ChatComponent: React.FC = () => {
    const [message, setMessage] = React.useState<string>('');
    const [messages, setMessages] = React.useState<IMessage[]>([]);
      const [isLoading, setIsLoading] = React.useState<boolean>(false);

    const handleSendChatMessage = async () => {
        if (!message.trim()) return;
        setMessages(prev => [...prev, { role: 'user', content: message }]);
        setIsLoading(true);
        setMessages(prev => [...prev, { role: 'loading' }]);
        try {
            const res = await fetch(`http://localhost:8000/chat?message=${message}`);
            const data = await res.json()
            setMessages(prev => [...prev.filter(msg => msg.role !== 'loading'), { 
                role: 'assistant', 
                content: data?.message,
                documents: data?.docs
            }]);
        } catch (error) {
            console.error("Error fetching message:", error);
        } finally {
            setIsLoading(false);
            setMessage('');
        }
    }

    return(
        <div className="p-4">
            <div>
                {messages.map((message, index) => <div key={index}>
                    <div className="flex items-start mb-4">
                        {
                            message.role === 'user' ? ( 
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar> 
                            ) : ( 
                                <Avatar>
                                    <AvatarImage src="" />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                            )
                        }
                        
                        <div className="ml-4">
                            {
                                message.role === 'loading' ? (
                                    <Skeleton className="h-[20px] w-[100px] rounded-full" />
                                ) : (
                                    <Alert>
                                        <AlertDescription className="text-black">
                                            {message.content}
                                            {/* {
                                                message.role === 'assistant' ? (
                                                    <div className="mt-5">
                                                        <strong>Reference:</strong><br/>
                                                        Page Number: {message.documents[0].metadata?.loc?.pageNumber}
                                                    </div>
                                                ) : ''
                                            } */}
                                        </AlertDescription>
                                    </Alert>
                                )
                            }
                        </div>
                    </div>
                </div>)}
            </div>
            <div className="fixed bottom-2.5 w-200 flex gap-3 bg-white">
               <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="type your query here" 
                />
               <Button onClick={handleSendChatMessage} disabled={!message.trim()}>Send</Button>
            </div>
        </div>
    );
};

export default ChatComponent;