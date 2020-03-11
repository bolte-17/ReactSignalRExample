import React, { createContext, useEffect, useContext, useState } from 'react';
import { HubConnectionBuilder, HubConnection } from '@microsoft/signalr';
import { toast } from 'react-toastify';

const SignalRContext = createContext<HubConnection | undefined>(undefined);
export const useSignalR = () => useContext(SignalRContext);
export const SignalRProvider: React.FC = ({ children }) => {
  const [connection, setConnection] = useState<HubConnection>();
  useEffect(() => {
    const conn = new HubConnectionBuilder()
      .withUrl('/hub')
      .withAutomaticReconnect()
      .build();
    conn.on('Pong', () => toast('Pong!'));
    conn.start();
    setConnection(conn);
    return () => {
      conn.stop();
    };
  }, []);

  return (
    <SignalRContext.Provider value={connection}>
      {children}
    </SignalRContext.Provider>
  );
};
