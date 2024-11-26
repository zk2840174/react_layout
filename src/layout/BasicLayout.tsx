import SampleMenu from "../components/menu/SampleMenu.tsx";
import {Outlet} from "react-router-dom";

function BasicLayout() {
    return (
        <div>
            <SampleMenu></SampleMenu>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
}

export default BasicLayout;