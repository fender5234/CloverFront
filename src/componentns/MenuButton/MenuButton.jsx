import './MenuButton.scss';

function MenuButton({sidebarOpen}) {
    return (
        <button
            className='menu-button'
            onClick={() => {
                sidebarOpen();
            }}>
        </button>
    )
}

export default MenuButton