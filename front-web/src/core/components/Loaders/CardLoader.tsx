import ContentLoader from "react-content-loader";
import { generateList } from "core/utils/list";;

const MovieLoader = () => {
    const loaderItems = generateList(1);
    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={1}
                    width={250}
                    height={335}
                    viewBox="0 0 250 335"
                    backgroundColor="#8e7a43"
                    foregroundColor="#525252"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="250" height="335" />
                </ContentLoader>

            ))}
        </>
    );
}

export default MovieLoader;