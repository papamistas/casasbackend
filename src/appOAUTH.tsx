import { Refine } from "@pankod/refine-core";
/*
import { Refine, AuthProvider } from "@pankod/refine-core";
import { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";
import { useAuth0 } from "@auth0/auth0-react";

import "@pankod/refine-antd/dist/styles.min.css";

import { Login } from "pages/login";

import axios from "axios";

const API_URL = "https://api.fake-rest.refine.dev";

const App = () => {
    const {
        isLoading,
        isAuthenticated,
        user,
        logout,
        getIdTokenClaims,
    } = useAuth0();

    if (isLoading) {
        return <span>loading...</span>;
    }

    const authProvider: AuthProvider = {
        login: () => {
            return Promise.resolve();
        },
        logout: () => {
            logout({ returnTo: window.location.origin });
            return Promise.resolve("/");
        },
        checkError: () => Promise.resolve(),
        checkAuth: () => {
            if (isAuthenticated) {
                return Promise.resolve();
            }

            return Promise.reject();
        },
        getPermissions: () => Promise.resolve(),
        getUserIdentity: () => {
            if (user) {
                return  Promise.resolve({
                    ...user,
                    avatar: user.picture,
                });
            }

        },
    };

    getIdTokenClaims().then((token) => {
        if (token) {
            axios.defaults.headers.common = {
                Authorization: `Bearer ${token.__raw}`,
            };
        }
    });

    return (
        <Refine
            LoginPage={Login}
            routerProvider={routerProvider}
            authProvider={authProvider}
            dataProvider={dataProvider(API_URL, axios)}
            Layout={Layout}
            ReadyPage={ReadyPage}
            notificationProvider={notificationProvider}
            catchAll={<ErrorComponent />}
        />
    );
};

export default App;*/
