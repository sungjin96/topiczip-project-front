import { NextComponentType } from 'next';

type NavComponentPropsType = {};

const NavComponent: NextComponentType<NavComponentPropsType> = () => {
    return (
        <div>
            <h1>Nav</h1>
        </div>
    );
};

export default NavComponent;
