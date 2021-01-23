import { Container } from '@material-ui/core';
import '../../../css/base-page/base-page.scss';

export default function BasePage({children}) {
    return (
        <Container maxWidth={"lg"} disableGutters className={"base-page-root"}>
            {children}
        </Container>
    )
}