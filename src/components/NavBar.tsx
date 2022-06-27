import React, { FunctionComponent } from "react"

const NavBar : FunctionComponent<{}> = () => {
    return (
            <div className="flex z-40 justify-center w-full h-24 bg-gradient-to-r from-violet-500 to-fuchsia-500">
                <p className="font-sans subpixel-antialiased text-2xl md:text-4xl text-white font-semibold p-7">Place Kaleidoscope</p>
            </div>
    )
}
export default NavBar