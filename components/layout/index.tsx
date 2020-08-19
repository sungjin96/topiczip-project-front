import { NextComponentType } from 'next';
import dynamic from 'next/dynamic';
import BodyComponent from 'components/layout/body/Body.component';
import FooterComponent from 'components/layout/footer/Footer.component';

const NavComponent = dynamic(() => import('components/layout/nav/Nav.component'), { ssr: false });

type LayoutPropsType = {};

const Layout: NextComponentType<LayoutPropsType> = ({ children }) => {
    return (
        <>
            <NavComponent />
            <BodyComponent>{children}</BodyComponent>
            <FooterComponent />
        </>
    );
};

export default Layout;
