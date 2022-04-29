import {AntdLayout, Button, Image} from "@pankod/refine-antd";
import {useAuth0} from "@auth0/auth0-react";

export const Login: React.FC = () => {
    const {loginWithRedirect} = useAuth0();

    return (
        <AntdLayout
            style={{
                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
                backgroundSize: "cover"
            }}
        >
            <div style={{height: "100vh", display: "flex"}}>
                <div style={{maxWidth: "200px", margin: "auto"}}>
                    <div style={{marginBottom: "28px"}}>
                        <Image width={100} src="/images/Ranpant-logos.jpg?w=164&h=164&fit=crop&auto=format"
                               alt="Ranpant"/>


                    </div>
                    <Button
                        type="primary"
                        size="large"
                        block
                        onClick={() => loginWithRedirect()}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        </AntdLayout>
    );
};
