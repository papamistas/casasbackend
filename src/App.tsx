import {AuthProvider, Refine} from "@pankod/refine-core";
import {useAuth0} from "@auth0/auth0-react";
import {
    notificationProvider,
    Layout,
    ReadyPage,
    ErrorComponent,

} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import {Header} from "components/layout";
import {CasaList, CasaCreate, CasaEdit, CasaShow} from "pages/casas";
import {Icons} from "./components/icons";
import {DestinoList} from "pages/destinos";
import {TipoList} from "pages/tipos";
import {CasageodataCreate} from "pages/casageodatas";
import {useTranslation} from "react-i18next";
import {Login} from "pages/login";
import axios from "axios";


function App() {
    const {t, i18n} = useTranslation();

    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    const {
        isLoading,
        isAuthenticated,
        user,
        logout,
        getIdTokenClaims
    } = useAuth0();


    if (isLoading) {
        return <span>loading...</span>;
    }


    const authProvider: AuthProvider = {
        login: () => {
            return Promise.resolve();
        },
        logout: () => {
            logout({returnTo: window.location.origin});
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
        getUserIdentity: async () => {
            if (user) {
                return Promise.resolve({
                    ...user,
                    avatar: user.picture
                });
            }
        }
    };
    getIdTokenClaims().then((token) => {
        if (token) {
            axios.defaults.headers.common = {
                Authorization: `Bearer ${token.__raw}`
            };
        }
    });


    return (

        <Refine
            LoginPage={Login}
            authProvider={authProvider}
            notificationProvider={notificationProvider}
            Layout={Layout}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent/>}
            routerProvider={routerProvider}
            dataProvider={dataProvider("http://172.19.0.4")}
            resources={[
                {name: "casas", icon: Icons, list: CasaList, create: CasaCreate, edit: CasaEdit, show: CasaShow},
                {name: "destinos", icon: Icons, list: DestinoList},
                {name: "tipos", icon: Icons, list: TipoList},
                /*
                                {name: "casasgeodata", icon: Icons, create: CasageodataCreate},
                */
            ]}
            i18nProvider={i18nProvider}
            Header={Header}
        />
    );
}

export default App;
