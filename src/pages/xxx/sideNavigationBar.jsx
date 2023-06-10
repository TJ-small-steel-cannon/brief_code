import "./sideNavigationBar.moudle.css"
function SideNavigationBar({ sidebarStyle }) {
    return (
        <div id="leftChild" style={sidebarStyle}>
            <div id="title">
                <span>布局排版</span>
            </div>
            <div id="componentBox"></div>
        </div>
    );
}
export default SideNavigationBar;