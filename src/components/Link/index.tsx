import "./styled.js"
import { Link as LinkRoute } from "react-router-dom"
import { LinkArea } from "./styled.js";



interface LinkProps {
    texto: string;
    redirect: string;
}

export default function Link(props: LinkProps) {
    return (
        <LinkArea>
            <LinkRoute className="links-menu" to={props.redirect}>
                {props.texto}
            </LinkRoute>
        </LinkArea>
    );
}