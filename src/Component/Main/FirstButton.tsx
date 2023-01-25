import { HashLink } from "react-router-hash-link";

interface FirstButtonProps {
    image : string;
    href: string;
}

export default function FirstButton({image, href}: FirstButtonProps){
    const handleClick =()=>{
        console.log("clicked")

    }
    return(
        <div style={{}}>
            <HashLink onClick={handleClick} to={href}>
                <button className={""}>{image}</button>

            </HashLink>

        </div>

    )

}