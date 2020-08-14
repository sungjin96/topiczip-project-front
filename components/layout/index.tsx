import { NextComponentType } from 'next';
import NavComponent from 'components/layout/nav/Nav.component';
import BodyComponent from 'components/layout/body/Body.component';
import FooterComponent from 'components/layout/footer/Footer.component';

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
