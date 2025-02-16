export const Modal = ({ children, open, handleClose }) => {



    return <div
        onClick={() => handleClose()}
        className={`fixed top-0 left-0 z-10 w-dvw h-dvh bg-gray-600/60
        ${open ? 'block' : 'hidden'} 
        flex justify-center items-center `}>

        <div
            onClick={(e) => { e.stopPropagation() }}
            className={`w-1/2 h-1/2 z-20 bg-white text-black rounded-2xl p-10`}>{children}</div>
    </div>
}