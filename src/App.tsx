import {Refine} from "@pankod/refine-core";
import {
    notificationProvider,
    Layout,
    ReadyPage,
    ErrorComponent,
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import {useTranslation} from "react-i18next";
import {Header} from "components/layout";
import {CasaList, CasaCreate, CasaEdit, CasaShow} from "pages/casas";
import {Icons} from "./components/icons";
import {DestinoList} from "pages/destinos";
import {TipoList} from "pages/tipos";

function App() {
    const {t, i18n} = useTranslation();

    const i18nProvider = {
        translate: (key: string, params: object) => t(key, params),
        changeLocale: (lang: string) => i18n.changeLanguage(lang),
        getLocale: () => i18n.language,
    };

    return (
        <Refine
            notificationProvider={notificationProvider}
            Layout={Layout}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent/>}
            routerProvider={routerProvider}
            dataProvider={dataProvider("http://172.19.0.4")}
            resources={[
                /*{
                  name: "posts",
                  list: PostList,
                  create: PostCreate,
                  edit: PostEdit,
                  show: PostShow,
                },*/
                {name: "casas", icon: Icons, list: CasaList, create: CasaCreate, edit: CasaEdit, show: CasaShow},
                {name: "destinos", icon: Icons, list: DestinoList},
                {name: "tipos", icon: Icons, list: TipoList},
            ]}
            i18nProvider={i18nProvider}
            Header={Header}
        />
    );
}

export default App;
