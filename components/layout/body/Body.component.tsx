import { NextComponentType } from 'next';

type BodyComponentPropsType = {};

const BodyComponent: NextComponentType<BodyComponentPropsType> = ({ children }) => {
    return <div>{children}</div>;
};

export default BodyComponent;
