import React, { createContext as RNCreateContext, ReactNode, useReducer, Dispatch } from 'react';


type Action<T> = (dispatch: Dispatch<T>) => (...args: any[]) => void;

interface Actions {
  [key: string]: Action<any>;
}

interface ProviderProps {
  children: ReactNode;
}

interface ContextProps {
  state: any; 
}

interface createContextResult {
  Context: React.Context<ContextProps>;
  Provider: React.FC<ProviderProps>;
}

const createContext = <T extends Actions>(
  reducer: (state: any, action: { type: string; payload: any }) => any,
  actions: T,
  defaultValue: any 
): createContextResult => {
  const Context = RNCreateContext<ContextProps>({ state: defaultValue });
  const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions: Record<string, (...args: any[]) => void> = {};

    for (const key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return <Context.Provider value={{ state }}>{children}</Context.Provider>;
  };

  return { Context, Provider };
};

export default createContext;
